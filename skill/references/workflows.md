# Workflows & Multi-Agent Orchestration

## Workflow Fundamentals

Workflows chain agents and tasks into automated sequences.

### Creating a Workflow

```bash
harmer workflow create
```

### Programmatic Workflow

```javascript
const { Workflow } = require('harmer-agent');

const workflow = new Workflow({
  name: 'Research Pipeline',
  steps: [
    { agent: 'researcher', action: 'search', input: '${topic}' },
    { agent: 'analyst', action: 'analyze', input: '${previous.output}' },
    { agent: 'writer', action: 'summarize', input: '${previous.output}' }
  ]
});

workflow.run({ topic: 'AI agents 2026' });
```

## Multi-Agent Coordination

### Patterns

- **Sequential**: Agent A → Agent B → Agent C
- **Parallel**: Multiple agents run concurrently, results merged
- **Hierarchical**: A coordinator agent delegates to worker agents
- **Event-driven**: Agents react to events from other agents

### Example: Coordinator Pattern

```javascript
const coordinator = new Agent({
  name: 'Coordinator',
  model: 'gpt-4',
  tools: ['delegate', 'aggregate'],
  reasoning: { enabled: true, depth: 5 }
});

const workers = [
  new Agent({ name: 'Worker-1', model: 'gpt-3.5-turbo', tools: ['search'] }),
  new Agent({ name: 'Worker-2', model: 'gpt-3.5-turbo', tools: ['analyze'] })
];

coordinator.on('delegate', (task) => {
  const worker = workers.find(w => w.tools.includes(task.requiredTool));
  worker.execute(task);
});
```

## Conditions and Branching

```javascript
const workflow = new Workflow({
  name: 'Conditional Flow',
  steps: [
    { agent: 'classifier', action: 'classify' },
    {
      condition: '${output.category} === "urgent"',
      true: { agent: 'responder', action: 'respond' },
      false: { agent: 'logger', action: 'log' }
    }
  ]
});
```

## Event Triggers

```javascript
agent.on('task_completed', (result) => {
  console.log('Task done:', result);
});

agent.on('error', (err) => {
  console.error('Agent error:', err);
});

agent.onMetric('error_rate_above_10', () => {
  sendAlert('Error rate too high');
});
```

## Deployment

```bash
harmer deploy          # Deploy to production
harmer monitor         # Live monitoring dashboard
harmer scale           # Scale agents up/down
```

### CI/CD Integration

1. Configure environment variables in CI secrets
2. Set up monitoring and alerts
3. Enable auto-scaling if needed
4. Monitor: success rate, response time, error rate, cost per task
