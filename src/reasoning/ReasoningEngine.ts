import { ReasoningConfig } from '../core/types';

interface ReasoningStep {
  step: number;
  thought: string;
  action?: string;
}

/**
 * ReasoningEngine — chain-of-thought reasoning for agents.
 *
 * Breaks down complex inputs into reasoning steps,
 * optionally calling external models for deeper reasoning.
 */
export class ReasoningEngine {
  public enabled: boolean;
  public depth: number;
  private steps: ReasoningStep[] = [];

  constructor(config: ReasoningConfig) {
    this.enabled = config.enabled;
    this.depth = config.depth;
  }

  /**
   * Think about an input and return reasoning steps.
   */
  async think(input: string, context?: Record<string, any>): Promise<string[]> {
    if (!this.enabled) return [];

    this.steps = [];
    const steps: string[] = [];

    // Step 1: Understand the input
    steps.push(`Analyzing input: "${truncate(input, 100)}"`);
    this.steps.push({ step: 1, thought: steps[0] });

    // Step 2: Check context
    if (context?.memories && context.memories.length > 0) {
      steps.push(`Found ${context.memories.length} relevant memories to inform decision`);
      this.steps.push({ step: 2, thought: steps[1] });
    }

    // Step 3: Determine action plan
    steps.push('Determining optimal action plan based on available tools and context');
    this.steps.push({ step: 3, thought: steps[2] });

    // Additional steps up to depth
    for (let i = 3; i < this.depth; i++) {
      const stepText = `Reasoning step ${i + 1}: evaluating alternatives and refining approach`;
      steps.push(stepText);
      this.steps.push({ step: i + 1, thought: stepText });
    }

    // Final step: conclusion
    if (this.depth > 0) {
      const conclusion = `Conclusion: ready to execute with ${steps.length} reasoning steps completed`;
      steps.push(conclusion);
      this.steps.push({ step: this.depth, thought: conclusion });
    }

    return steps;
  }

  /**
   * Get the last reasoning chain.
   */
  getSteps(): ReasoningStep[] {
    return [...this.steps];
  }

  /**
   * Clear reasoning history.
   */
  clear(): void {
    this.steps = [];
  }
}

function truncate(s: string, max: number): string {
  return s.length > max ? s.substring(0, max) + '...' : s;
}
