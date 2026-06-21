---
name: harmer-agent
description: Build, deploy, and scale autonomous AI agents using the harmer-agent npm package and CLI. Use when the user wants to create autonomous agents with memory, reasoning, workflows, multi-agent collaboration, or use the Harmer Agent REST API. Covers agent creation, configuration, memory systems, reasoning engines, workflows, deployment, monitoring, and the harmer CLI commands.
---

# Harmer Agent

Autonomous agent framework for building, deploying, and scaling AI agents with memory, reasoning, workflows, and multi-agent collaboration.

## Installation

```bash
npm install harmer-agent
```

CLI (global):

```bash
npm install -g harmer-agent
```

## Quick Start

```javascript
const { Agent } = require('harmer-agent');

const myAgent = new Agent({
  name: 'MyAgent',
  description: 'My first autonomous agent',
  model: 'gpt-4',
  memory: {
    type: 'persistent',
    maxSize: 10000
  }
});

myAgent.start();
```

Run with:

```bash
node agent.js
```

## CLI Commands

| Command | Purpose |
|---|---|
| `harmer init` | Initialize new project |
| `harmer create agent` | Create new agent |
| `harmer memory enable` | Enable agent memory |
| `harmer workflow create` | Create workflow |
| `harmer connect wallet` | Connect wallet |
| `harmer deploy` | Deploy to production |
| `harmer monitor` | Monitor live agents |
| `harmer scale` | Scale agents |

## Agent Configuration

```javascript
{
  name: 'string',              // Agent name
  description: 'string',       // What agent does
  model: 'gpt-4 | gpt-3.5-turbo',
  temperature: 0.0 - 1.0,      // Response randomness
  maxTokens: number,           // Max response length
  memory: {
    type: 'persistent | ephemeral',
    maxSize: number,
    ttl: number                // Time to live in seconds
  },
  reasoning: {
    enabled: boolean,
    depth: number              // Max reasoning steps
  },
  tools: array,                // Available capabilities
  permissions: array,          // What agent can access
  webhooks: array              // Event listeners
}
```

## REST API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/agents` | Create agent |
| GET | `/api/agents` | List agents |
| GET | `/api/agents/:agentId` | Get agent details |
| PUT | `/api/agents/:agentId` | Update agent |
| DELETE | `/api/agents/:agentId` | Delete agent |
| POST | `/api/agents/:agentId/execute` | Run agent |
| GET | `/api/agents/:agentId/status` | Get execution status |
| GET | `/api/agents/:agentId/history` | Get execution history |
| GET | `/api/agents/:agentId/analytics` | Get performance metrics |
| GET | `/api/agents/:agentId/logs` | Get activity logs |
| GET | `/api/analytics/workspace` | Get workspace stats |

## Monitoring & Metrics

Track these metrics for agent health:

- **Success Rate**: Percentage of successful executions
- **Response Time**: Average time to complete tasks
- **Tasks Completed**: Total executed tasks
- **Cost per Task**: Average API and compute cost
- **Error Rate**: Percentage of failed executions
- **Memory Usage**: Agent memory consumption
- **API Calls**: Number of external API calls

Example alert handler:

```javascript
agent.onMetric('success_rate_below_95', () => {
  sendAlert('Agent success rate dropped');
});
```

## Security Best Practices

- Rotate API keys regularly; use environment variables; never commit keys
- Grant minimum required permissions; audit agent activities; set resource limits
- Enable encryption at rest; use secure channels; comply with data regulations
- Enable logging; set up alerts; run regular security audits

## Advanced Topics

For workflow creation, multi-agent orchestration, branching, and event triggers, see [references/workflows.md](references/workflows.md).

For full API/SDK reference, see [references/api-reference.md](references/api-reference.md).

## Source

- GitHub: https://github.com/nomnom11/harmer-agent
- npm: `harmer-agent`
- CLI: `harmer` (global install)
