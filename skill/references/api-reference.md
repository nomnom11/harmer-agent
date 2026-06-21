# API & SDK Reference

## Authentication

```javascript
const { HarmerClient } = require('harmer-agent');

const client = new HarmerClient({
  apiKey: process.env.HARMER_API_KEY,
  // optional: baseURL: 'https://api.harmeragent.com'
});
```

## REST API

### Create Agent

```
POST /api/agents
Content-Type: application/json

{
  "name": "MyAgent",
  "description": "Does things",
  "model": "gpt-4",
  "memory": { "type": "persistent", "maxSize": 10000 }
}
```

### List Agents

```
GET /api/agents
```

### Get Agent

```
GET /api/agents/:agentId
```

### Update Agent

```
PUT /api/agents/:agentId
```

### Delete Agent

```
DELETE /api/agents/:agentId
```

### Execute Agent

```
POST /api/agents/:agentId/execute
Content-Type: application/json

{
  "input": "Research the latest AI agent frameworks",
  "tools": ["search", "analyze"]
}
```

### Get Status

```
GET /api/agents/:agentId/status
```

### Get History

```
GET /api/agents/:agentId/history?page=1&limit=20
```

### Get Analytics

```
GET /api/agents/:agentId/analytics
```

### Get Logs

```
GET /api/agents/:agentId/logs?level=error&limit=100
```

### Workspace Analytics

```
GET /api/analytics/workspace
```

## SDK Methods

```javascript
// Create
const agent = await client.agents.create({ name, description, model });

// List
const agents = await client.agents.list();

// Get
const agent = await client.agents.get(agentId);

// Update
await client.agents.update(agentId, { ...updates });

// Delete
await client.agents.delete(agentId);

// Execute
const run = await client.agents.execute(agentId, { input, tools });

// Status
const status = await client.agents.status(agentId);

// History
const history = await client.agents.history(agentId, { page, limit });

// Analytics
const analytics = await client.agents.analytics(agentId);

// Logs
const logs = await client.agents.logs(agentId, { level, limit });
```

## Error Handling

```javascript
try {
  await client.agents.execute(agentId, { input });
} catch (err) {
  if (err.status === 429) {
    // Rate limited — check Retry-After header
  } else if (err.status === 401) {
    // Invalid API key
  } else {
    // Other errors
  }
}
```

## Rate Limiting

- Check `Retry-After` header on 429 responses
- Implement exponential backoff for retries
- Monitor API call counts via analytics endpoint
