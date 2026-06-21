import { MemoryConfig } from '../core/types';

interface MemoryEntry {
  id: string;
  input: string;
  output: string;
  timestamp: Date;
  ttl?: number;
}

/**
 * Memory — persistent or ephemeral context storage for agents.
 *
 * - persistent: survives across sessions (file-based by default)
 * - ephemeral: in-memory only, cleared on restart
 */
export class Memory {
  private entries: MemoryEntry[] = [];
  private config: MemoryConfig;
  private initialized = false;

  constructor(config: MemoryConfig) {
    this.config = {
      maxSize: 10000,
      ...config,
    };
  }

  async init(): Promise<void> {
    this.initialized = true;
    if (this.config.type === 'persistent') {
      // In a real implementation, this would load from disk/DB
      // For now we keep it in-memory but flag it as persistent-capable
    }
  }

  /**
   * Store a memory entry.
   */
  async store(entry: Omit<MemoryEntry, 'id'>): Promise<string> {
    const id = generateId('mem');
    const fullEntry: MemoryEntry = {
      ...entry,
      id,
      ttl: this.config.ttl,
    };
    this.entries.push(fullEntry);

    // Enforce max size — prune oldest
    if (this.entries.length > this.config.maxSize!) {
      this.entries.shift();
    }

    return id;
  }

  /**
   * Recall memories relevant to a query (simple keyword match).
   */
  async recall(query: string): Promise<MemoryEntry[]> {
    const now = Date.now();
    const words = query.toLowerCase().split(/\s+/);

    return this.entries
      .filter((e) => {
        // Check TTL
        if (e.ttl && (now - e.timestamp.getTime()) / 1000 > e.ttl) return false;
        // Simple keyword matching
        const text = (e.input + ' ' + e.output).toLowerCase();
        return words.some((w) => text.includes(w));
      })
      .slice(-10); // last 10 relevant memories
  }

  /**
   * Get all entries.
   */
  all(): MemoryEntry[] {
    return [...this.entries];
  }

  /**
   * Clear all memories.
   */
  clear(): void {
    this.entries = [];
  }

  /**
   * Flush memory to persistent storage.
   */
  async flush(): Promise<void> {
    if (this.config.type === 'persistent') {
      // Would write to disk/DB in a full implementation
    }
  }

  /**
   * Current memory size (number of entries).
   */
  size(): number {
    return this.entries.length;
  }
}

function generateId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 10)}`;
}
