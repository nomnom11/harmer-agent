import Link from 'next/link'

export const metadata = {
  title: 'Build Agent - Harmer Agent Documentation',
  description: 'Complete guide to creating and configuring autonomous agents.',
}

export default function BuildAgent() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
        <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
        <span>/</span>
        <span className="text-white">Build Agent</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4">Building Autonomous Agents</h1>
      <p className="text-xl text-zinc-400 mb-12">Learn how to build, configure, and deploy powerful autonomous agents.</p>

      <section id="basics" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Agent Basics</h2>
        <p className="text-zinc-300 mb-4">An autonomous agent is an AI-powered system that can perceive, reason, and execute tasks independently.</p>
        <ul className="space-y-2 text-zinc-300 ml-4">
          <li><strong>Brain:</strong> The AI model that powers reasoning</li>
          <li><strong>Memory:</strong> Persistent context and learning storage</li>
          <li><strong>Tools:</strong> Capabilities to interact with external systems</li>
          <li><strong>Reasoning:</strong> Chain-of-thought problem solving</li>
        </ul>
      </section>

      <section id="config" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Agent Configuration</h2>
        <p className="text-zinc-300 mb-4">Configure your agent with these options:</p>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-4 overflow-x-auto">
          <pre className="text-sm font-mono text-green-400">{`const config = {
  name: 'ResearchAgent',
  model: 'gpt-4',
  temperature: 0.7,
  memory: {
    type: 'persistent',
    maxSize: 50000
  },
  reasoning: {
    enabled: true,
    depth: 5
  }
};

const agent = new Agent(config);`}</pre>
        </div>
      </section>

      <section id="examples" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Examples</h2>
        <p className="text-zinc-300 mb-4">View example implementations and use cases.</p>
        <div className="space-y-3 text-zinc-300">
          <div className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-900 transition-colors">
            <h4 className="font-bold">Web Research Agent</h4>
            <p className="text-sm text-zinc-400">Agent for gathering and analyzing web information</p>
          </div>
          <div className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-900 transition-colors">
            <h4 className="font-bold">Data Analysis Agent</h4>
            <p className="text-sm text-zinc-400">Process and extract insights from datasets</p>
          </div>
          <div className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-900 transition-colors">
            <h4 className="font-bold">Coding Assistant Agent</h4>
            <p className="text-sm text-zinc-400">AI-powered code generation and debugging</p>
          </div>
        </div>
      </section>
    </main>
  )
}
