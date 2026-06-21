import { EventEmitter } from 'eventemitter3';
import { WorkflowConfig, WorkflowStep, ExecutionResult } from '../core/types';
import { Agent } from '../core/Agent';

/**
 * Workflow — chain agents and tasks into automated sequences.
 *
 * Supports sequential steps, parallel execution,
 * conditions/branching, and multi-agent orchestration.
 */
export class Workflow extends EventEmitter {
  public readonly name: string;
  public steps: WorkflowStep[];
  private agents: Map<string, Agent> = new Map();

  constructor(config: WorkflowConfig) {
    super();
    this.name = config.name;
    this.steps = config.steps;
  }

  /**
   * Register an agent that can be referenced by name in steps.
   */
  registerAgent(agent: Agent): void {
    this.agents.set(agent.name, agent);
  }

  /**
   * Run the workflow with the given input context.
   */
  async run(input: Record<string, any>): Promise<ExecutionResult[]> {
    const results: ExecutionResult[] = [];
    let context = { ...input };

    this.emit('workflow:start', { name: this.name });

    for (let i = 0; i < this.steps.length; i++) {
      const step = this.steps[i];
      this.emit('workflow:step', { index: i, step });

      // Condition step
      if (step.condition) {
        const branch = this.evaluateCondition(step.condition, context) ? step.true : step.false;
        if (branch) {
          const result = await this.executeStep(branch, context);
          if (result) {
            results.push(result);
            context = { ...context, previous: { output: result.output } };
          }
        }
        continue;
      }

      // Parallel step
      if (step.parallel) {
        const parallelResults = await Promise.all(
          step.parallel.map((s) => this.executeStep(s, context))
        );
        for (const r of parallelResults) {
          if (r) {
            results.push(r);
          }
        }
        context = { ...context, previous: { output: parallelResults.map((r) => r?.output).join('\n---\n') } };
        continue;
      }

      // Regular step
      const result = await this.executeStep(step, context);
      if (result) {
        results.push(result);
        context = { ...context, previous: { output: result.output } };
      }
    }

    this.emit('workflow:complete', { name: this.name, results: results.length });
    return results;
  }

  private async executeStep(step: WorkflowStep, context: Record<string, any>): Promise<ExecutionResult | null> {
    if (!step.agent) return null;

    const agent = this.agents.get(step.agent);
    if (!agent) {
      this.emit('workflow:error', { agent: step.agent, error: 'Agent not found' });
      return null;
    }

    const input = this.interpolate(step.input || '', context);
    const result = await agent.execute({
      input,
      tools: step.action ? [step.action] : undefined,
      context,
    });

    return result;
  }

  private evaluateCondition(condition: string, context: Record<string, any>): boolean {
    try {
      const interpolated = this.interpolate(condition, context);
      // Safe-ish evaluation — only supports basic comparisons
      const match = interpolated.match(/^(.+?)\s*===\s*(.+)$/);
      if (match) {
        return match[1].trim() === match[2].trim().replace(/^["']|["']$/g, '');
      }
      const match2 = interpolated.match(/^(.+?)\s*>\s*(.+)$/);
      if (match2) {
        return parseFloat(match2[1]) > parseFloat(match2[2]);
      }
      return Boolean(interpolated);
    } catch {
      return false;
    }
  }

  private interpolate(template: string, context: Record<string, any>): string {
    return template.replace(/\$\{([^}]+)\}/g, (_, expr) => {
      const parts = expr.trim().split('.');
      let value: any = context;
      for (const p of parts) {
        value = value?.[p];
        if (value === undefined) break;
      }
      return value !== undefined ? String(value) : '';
    });
  }
}
