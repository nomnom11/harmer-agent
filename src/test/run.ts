// Basic smoke tests for harmer-agent

import { Agent } from '../core/Agent';
import { Memory } from '../memory/Memory';
import { ReasoningEngine } from '../reasoning/ReasoningEngine';
import { Workflow } from '../workflow/Workflow';

async function run() {
  let passed = 0;
  let failed = 0;

  function assert(cond: boolean, msg: string) {
    if (cond) {
      console.log(`  ✓ ${msg}`);
      passed++;
    } else {
      console.error(`  ✗ ${msg}`);
      failed++;
    }
  }

  console.log('\n🧪 harmer-agent test suite\n');

  // Test 1: Agent creation
  console.log('Test: Agent creation');
  const agent = new Agent({
    name: 'TestAgent',
    description: 'A test agent',
    model: 'gpt-4',
    memory: { type: 'ephemeral' },
    reasoning: { enabled: true, depth: 3 },
  });
  assert(agent.name === 'TestAgent', 'Agent name set correctly');
  assert(agent.status === 'idle', 'Agent starts idle');
  assert(agent.tools.size >= 4, 'Built-in tools registered');

  // Test 2: Agent start/stop
  console.log('\nTest: Agent lifecycle');
  await agent.start();
  assert(agent.status === 'idle', 'Agent is idle after start');
  await agent.stop();
  assert(agent.status === 'stopped', 'Agent is stopped after stop');

  // Test 3: Agent execute
  console.log('\nTest: Agent execute');
  await agent.start();
  const result = await agent.execute({ input: 'hello world' });
  assert(result.success === true, 'Execution succeeds');
  assert(result.output.length > 0, 'Output is non-empty');
  assert(result.duration >= 0, 'Duration is recorded');

  // Test 4: Memory
  console.log('\nTest: Memory');
  const mem = new Memory({ type: 'ephemeral', maxSize: 100 });
  await mem.init();
  const memId = await mem.store({ input: 'test input', output: 'test output', timestamp: new Date() });
  assert(memId.length > 0, 'Memory entry gets an ID');
  assert(mem.size() === 1, 'Memory size is 1');
  const recalled = await mem.recall('test');
  assert(recalled.length === 1, 'Recall finds the entry');
  mem.clear();
  assert(mem.size() === 0, 'Clear works');

  // Test 5: Reasoning
  console.log('\nTest: ReasoningEngine');
  const reasoning = new ReasoningEngine({ enabled: true, depth: 5 });
  const steps = await reasoning.think('What is 2+2?');
  assert(steps.length > 0, 'Reasoning produces steps');
  assert(steps.length <= 6, 'Steps respect depth limit');

  const disabledReasoning = new ReasoningEngine({ enabled: false, depth: 3 });
  const noSteps = await disabledReasoning.think('test');
  assert(noSteps.length === 0, 'Disabled reasoning returns no steps');

  // Test 6: Workflow
  console.log('\nTest: Workflow');
  const wf = new Workflow({
    name: 'Test Pipeline',
    steps: [
      { agent: 'TestAgent', action: 'search', input: '${topic}' },
    ],
  });
  wf.registerAgent(agent);
  const wfResults = await wf.run({ topic: 'AI agents 2026' });
  assert(wfResults.length === 1, 'Workflow executes 1 step');
  assert(wfResults[0].success === true, 'Workflow step succeeds');

  // Test 7: Agent analytics
  console.log('\nTest: Agent analytics');
  const analytics = agent.getAnalytics();
  assert(analytics.tasks_completed >= 1, 'Analytics shows completed tasks');
  assert(analytics.success_rate > 0, 'Success rate is positive');

  // Test 8: Event system
  console.log('\nTest: Event system');
  let eventFired = false;
  agent.on('execute:start', () => { eventFired = true; });
  await agent.execute({ input: 'trigger event' });
  assert(eventFired, 'execute:start event fires');

  // Test 9: Custom tools
  console.log('\nTest: Custom tools');
  agent.registerTool({
    name: 'echo',
    execute: async (x: any) => ({ echo: x }),
  });
  assert(agent.tools.has('echo'), 'Custom tool registered');

  // Test 10: Metrics
  console.log('\nTest: Metrics');
  let metricValue = 0;
  agent.onMetric('test_metric', (v: number) => { metricValue = v; });
  // Manually trigger by executing
  await agent.execute({ input: 'metric test' });
  assert(agent.getMetric('tasks_completed') !== undefined, 'Metric is tracked');

  // Summary
  console.log(`\n📊 Results: ${passed} passed, ${failed} failed\n`);
  if (failed > 0) {
    process.exit(1);
  }
}

run().catch((err) => {
  console.error('Test runner error:', err);
  process.exit(1);
});
