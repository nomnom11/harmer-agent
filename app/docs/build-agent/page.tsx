import Link from 'next/link'

export const metadata = {
  title: 'Build Agent - Harmer Agent Documentation',
  description: 'Complete guide to creating and configuring autonomous agents with Harmer Agent.',
}

export default function BuildAgent() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
        <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
        <span>/</span>
        <span className="text-white">Build Agent</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4">Building Autonomous Agents</h1>
      <p className="text-xl text-zinc-400 mb-12">
        Learn how to build, configure, and deploy powerful autonomous agents with memory, reasoning, and multi-tool capabilities.
      </p>

      <section id="basics" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Agent Basics</h2>
        <p className="text-zinc-300 mb-4">
          An autonomous agent is an AI-powered system that can perceive its environment, reason about actions, and execute tasks independently.
        </p>
        <p className="text-zinc-300 mb-4">Key components:</p>
        <ul className="space-y-2 text-zinc-300 ml-4">
          <li><strong>Brain:</strong> The AI model that powers reasoning</li>
          <li><strong>Memory:</strong> Persistent context and learning storage</li>
          <li><strong>Tools:</strong> Capabilities to interact with external systems</li>
          <li><strong>Reasoning:</strong> Chain-of-thought problem solving</li>
          <li><strong>Autonomy:</strong> Self-directed task execution</li>
        </ul>
      </section>

      <section id="config" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Agent Configuration</h2>
        <p className="text-zinc-300 mb-4">Configure your agent with the following options:</p>
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-4 overflow-x-auto">
          <pre className="text-sm font-mono text-green-400">{`const config = {
  name: 'ResearchAgent',
  description: 'Agent for research tasks',
  model: 'gpt-4', // or gpt-3.5-turbo
  temperature: 0.7, // 0-1 (lower = more deterministic)
  maxTokens: 2000,
  memory: {
    type: 'persistent', // or 'ephemeral'
    maxSize: 50000,
    ttl: 86400 // 24 hours
  },
  reasoning: {
    enabled: true,
    depth: 5 // max reasoning steps
  }
};

const agent = new Agent(config);`}
