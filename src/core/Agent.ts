import { EventEmitter } from 'eventemitter3';
import { AgentConfig, AgentStatus, ExecutionInput, ExecutionResult, MetricCallback, Tool } from './types';
import { Memory } from '../memory/Memory';
import { ReasoningEngine } from '../reasoning/ReasoningEngine';

/**
 * Agent — the core autonomous agent class.
 *
 * Agents can perceive input, reason about actions, use tools,
 * persist memory across sessions, and operate autonomously.
 */
export class Agent extends EventEmitter {
  public readonly id: string;
  public readonly name: string;
  public readonly description: string;
  public config: AgentConfig;
  public status: AgentStatus = 'idle';
  public tools: Map<string, Tool> = new Map();
  public memory: Memory;
  public reasoning: ReasoningEngine;
  private metrics: Map<string, number> = new Map();
  private metricCallbacks: Map<string, MetricCallback> = new Map();
  private executionCount = 0;
  private errorCount = 0;

  constructor(config: AgentConfig) {
    super();
    this.id = generateId('agent');
    this.name = config.name;
    this.description = config.description || '';
    this.config = {
      model: 'gpt-4',
      temperature: 0.7,
      maxTokens: 4096,
      ...config,
    };

    this.memory = new Memory(config.memory || { type: 'ephemeral' });
    this.reasoning = new ReasoningEngine(config.reasoning || { enabled: false, depth: 3 });

    // Register built-in tools
    this.registerBuiltinTools();
  }

  /**
   * Start the agent. Initializes memory and sets status to idle.
   */
  async start(): Promise<void> {
    await this.memory.init();
    this.status = 'idle';
    this.emit('started', { agentId: this.id, name: this.name });
    this.log('info', `Agent "${this.name}" started`);
  }

  /**
   * Stop the agent gracefully.
   */
  async stop(): Promise<void> {
    this.status = 'stopped';
    await this.memory.flush();
    this.emit('stopped', { agentId: this.id });
    this.log('info', `Agent "${this.name}" stopped`);
  }

  /**
   * Execute a task with the given input.
   */
  async execute(execInput: ExecutionInput): Promise<ExecutionResult> {
    const startTime = Date.now();
    this.status = 'running';
    this.emit('execute:start', { agentId: this.id, input: execInput.input });

    try {
      // Retrieve relevant memories
      const memories = await this.memory.recall(execInput.input);
      const context = { ...execInput.context, memories };

      // Run reasoning if enabled
      let reasoningSteps: string[] = [];
      if (this.reasoning.enabled) {
        reasoningSteps = await this.reasoning.think(execInput.input, context);
      }

      // Execute tools if specified
      let toolOutput: any = {};
      if (execInput.tools) {
        for (const toolName of execInput.tools) {
          const tool = this.tools.get(toolName);
          if (tool) {
            toolOutput[toolName] = await tool.execute(execInput.input);
          }
        }
      }

      // Build output
      const output = this.buildOutput(execInput.input, reasoningSteps, toolOutput, memories);

      // Store in memory
      await this.memory.store({
        input: execInput.input,
        output,
        timestamp: new Date(),
      });

      const duration = Date.now() - startTime;
      const result: ExecutionResult = {
        agentId: this.id,
        output,
        success: true,
        duration,
        tokensUsed: estimateTokens(output),
        timestamp: new Date(),
      };

      this.executionCount++;
      this.updateMetric('tasks_completed', this.executionCount);
      this.updateMetric('success_rate', (this.executionCount - this.errorCount) / this.executionCount * 100);

      this.status = 'idle';
      this.emit('execute:complete', result);
      this.emit('task_completed', result);
      this.log('info', `Task completed in ${duration}ms`);

      return result;
    } catch (err: any) {
      this.errorCount++;
      this.status = 'error';
      const duration = Date.now() - startTime;
      const result: ExecutionResult = {
        agentId: this.id,
        output: '',
        success: false,
        error: err.message || String(err),
        duration,
        tokensUsed: 0,
        timestamp: new Date(),
      };

      this.updateMetric('error_rate', this.errorCount / this.executionCount * 100);
      this.emit('error', err);
      this.status = 'idle';

      return result;
    }
  }

  /**
   * Register a custom tool.
   */
  registerTool(tool: Tool): void {
    this.tools.set(tool.name, tool);
    this.emit('tool:registered', { name: tool.name });
  }

  /**
   * Register a metric callback. Fires when the metric updates.
   */
  onMetric(metricName: string, callback: MetricCallback): void {
    this.metricCallbacks.set(metricName, callback);
  }

  /**
   * Get current metric value.
   */
  getMetric(name: string): number | undefined {
    return this.metrics.get(name);
  }

  /**
   * Get agent analytics summary.
   */
  getAnalytics(): Record<string, number> {
    return {
      tasks_completed: this.executionCount,
      errors: this.errorCount,
      success_rate: this.executionCount > 0
        ? (this.executionCount - this.errorCount) / this.executionCount * 100
        : 100,
      memory_usage: this.memory.size(),
      ...Object.fromEntries(this.metrics),
    };
  }

  // --- Private helpers ---

  private buildOutput(input: string, steps: string[], toolOutput: any, memories: any[]): string {
    const parts: string[] = [];
    parts.push(`[Agent: ${this.name}]`);
    parts.push(`Input: ${input}`);

    if (memories.length > 0) {
      parts.push(`Recalled ${memories.length} memories`);
    }

    if (steps.length > 0) {
      parts.push(`Reasoning:`);
      steps.forEach((s, i) => parts.push(`  ${i + 1}. ${s}`));
    }

    if (Object.keys(toolOutput).length > 0) {
      parts.push(`Tool results: ${JSON.stringify(toolOutput)}`);
    }

    parts.push(`Response: Processed "${input}" using ${this.config.model}`);
    return parts.join('\n');
  }

  private updateMetric(name: string, value: number): void {
    this.metrics.set(name, value);
    const cb = this.metricCallbacks.get(name);
    if (cb) cb(value);
  }

  private registerBuiltinTools(): void {
    this.tools.set('search', {
      name: 'search',
      description: 'Search the web or knowledge base',
      execute: async (query: string) => ({ query, results: [] }),
    });
    this.tools.set('analyze', {
      name: 'analyze',
      description: 'Analyze data and produce insights',
      execute: async (data: any) => ({ analysis: 'Analysis complete', data }),
    });
    this.tools.set('delegate', {
      name: 'delegate',
      description: 'Delegate a task to another agent',
      execute: async (task: any) => ({ delegated: true, task }),
    });
    this.tools.set('aggregate', {
      name: 'aggregate',
      description: 'Aggregate results from multiple agents',
      execute: async (results: any[]) => ({ aggregated: results }),
    });
  }

  private log(level: string, message: string): void {
    this.emit('log', { level, message, timestamp: new Date(), agentId: this.id });
  }
}

// --- Utility ---

function generateId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 10)}-${Date.now().toString(36)}`;
}

function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}
