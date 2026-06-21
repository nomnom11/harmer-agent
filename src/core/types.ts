// Core type definitions for Harmer Agent

export type ModelType = 'gpt-4' | 'gpt-4o' | 'gpt-3.5-turbo' | 'claude-3-opus' | 'claude-3-sonnet' | 'claude-3-haiku' | string;

export interface MemoryConfig {
  type: 'persistent' | 'ephemeral';
  maxSize?: number;
  ttl?: number; // time to live in seconds
}

export interface ReasoningConfig {
  enabled: boolean;
  depth: number; // max reasoning steps
}

export interface Tool {
  name: string;
  description?: string;
  execute: (input: any) => Promise<any>;
}

export interface Permission {
  type: string;
  scope?: string;
}

export interface Webhook {
  event: string;
  url: string;
}

export interface AgentConfig {
  name: string;
  description?: string;
  model?: ModelType;
  temperature?: number;
  maxTokens?: number;
  memory?: MemoryConfig;
  reasoning?: ReasoningConfig;
  tools?: string[];
  permissions?: Permission[];
  webhooks?: Webhook[];
  apiKey?: string;
  baseURL?: string;
}

export interface ExecutionInput {
  input: string;
  tools?: string[];
  context?: Record<string, any>;
}

export interface ExecutionResult {
  agentId: string;
  output: string;
  success: boolean;
  error?: string;
  duration: number;
  tokensUsed: number;
  timestamp: Date;
}

export type AgentStatus = 'idle' | 'running' | 'stopped' | 'error';

export interface MetricCallback {
  (value: number): void;
}

export interface WorkflowStep {
  agent?: string;
  action?: string;
  input?: string;
  condition?: string;
  true?: WorkflowStep;
  false?: WorkflowStep;
  parallel?: WorkflowStep[];
}

export interface WorkflowConfig {
  name: string;
  steps: WorkflowStep[];
}

export interface LogLevel {
  level: 'info' | 'warn' | 'error' | 'debug';
  message: string;
  timestamp: Date;
  agentId?: string;
}
