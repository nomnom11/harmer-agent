import { AgentConfig, ExecutionInput, ExecutionResult } from '../core/types';

/**
 * HarmerClient — REST API client for the Harmer Agent platform.
 *
 * Use this for server-side agent management, execution,
 * analytics, and logs via the Harmer Agent API.
 */
export class HarmerClient {
  private apiKey: string;
  private baseURL: string;

  constructor(opts: { apiKey: string; baseURL?: string }) {
    this.apiKey = opts.apiKey;
    this.baseURL = opts.baseURL || 'https://api.harmeragent.com';
  }

  get agents() {
    return {
      create: (config: AgentConfig) => this.request('POST', '/api/agents', config),
      list: () => this.request('GET', '/api/agents'),
      get: (id: string) => this.request('GET', `/api/agents/${id}`),
      update: (id: string, updates: Partial<AgentConfig>) => this.request('PUT', `/api/agents/${id}`, updates),
      delete: (id: string) => this.request('DELETE', `/api/agents/${id}`),
      execute: (id: string, input: ExecutionInput) => this.request('POST', `/api/agents/${id}/execute`, input),
      status: (id: string) => this.request('GET', `/api/agents/${id}/status`),
      history: (id: string, params?: { page?: number; limit?: number }) =>
        this.request('GET', `/api/agents/${id}/history${toQuery(params)}`),
      analytics: (id: string) => this.request('GET', `/api/agents/${id}/analytics`),
      logs: (id: string, params?: { level?: string; limit?: number }) =>
        this.request('GET', `/api/agents/${id}/logs${toQuery(params)}`),
    };
  }

  get analytics() {
    return {
      workspace: () => this.request('GET', '/api/analytics/workspace'),
    };
  }

  private async request(method: string, path: string, body?: any): Promise<any> {
    const url = `${this.baseURL}${path}`;
    const headers: Record<string, string> = {
      'X-API-Key': this.apiKey,
      'Content-Type': 'application/json',
    };

    const res = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (res.status === 429) {
      const retryAfter = res.headers.get('Retry-After');
      throw new HarmerError(429, `Rate limited. Retry after ${retryAfter || '60'}s.`);
    }

    if (res.status === 401) {
      throw new HarmerError(401, 'Invalid API key');
    }

    if (!res.ok) {
      const text = await res.text().catch(() => 'Unknown error');
      throw new HarmerError(res.status, text);
    }

    return res.json().catch(() => ({}));
  }
}

export class HarmerError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.name = 'HarmerError';
    this.status = status;
  }
}

function toQuery(params?: Record<string, any>): string {
  if (!params || Object.keys(params).length === 0) return '';
  const qs = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined) qs.set(k, String(v));
  }
  return '?' + qs.toString();
}
