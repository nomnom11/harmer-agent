import Link from 'next/link'

export const metadata = {
  title: 'Workflows - Harmer Agent Documentation',
  description: 'Create complex automation workflows with multi-agent orchestration.',
}

export default function Workflows() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
        <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
        <span>/</span>
        <span className="text-white">Workflows</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4">Workflows</h1>
      <p className="text-xl text-zinc-400 mb-12">Create complex automation workflows with multi-agent orchestration and coordination.</p>

      <section id="basics" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Workflow Basics</h2>
        <p className="text-zinc-300 mb-4">Workflows enable you to coordinate multiple agents working together on complex tasks.</p>
        <ul className="space-y-2 text-zinc-300 ml-4">
          <li><strong>Sequential:</strong> Agents execute one after another</li>
          <li><strong>Parallel:</strong> Multiple agents execute simultaneously</li>
          <li><strong>Conditional:</strong> Execution based on previous results</li>
          <li><strong>Iterative:</strong> Agents repeat until goal is achieved</li>
        </ul>
      </section>

      <section id="creating" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Creating Workflows</h2>
        <p className="text-zinc-300 mb-4">Define workflow structure with agents and tasks:</p>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-4 overflow-x-auto">
          <pre className="text-sm font-mono text-green-400">{`const workflow = new Workflow({
  name: 'ResearchAndWrite',
  agents: [
    { name: 'researcher', type: 'research' },
    { name: 'writer', type: 'content' }
  ],
  steps: [
    { agent: 'researcher', task: 'research topic' },
    { agent: 'writer', task: 'write article' }
  ]
});

await workflow.execute();`}</pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Workflow Monitoring</h2>
        <p className="text-zinc-300 mb-4">Monitor workflow execution in real-time:</p>
        <div className="space-y-3">
          <div className="border border-zinc-800 rounded-lg p-4">
            <h4 className="font-bold mb-2">Execution Status</h4>
            <p className="text-sm text-zinc-400">View current step, agent activity, and progress</p>
          </div>
          <div className="border border-zinc-800 rounded-lg p-4">
            <h4 className="font-bold mb-2">Performance Metrics</h4>
            <p className="text-sm text-zinc-400">Track execution time, cost, and efficiency</p>
          </div>
          <div className="border border-zinc-800 rounded-lg p-4">
            <h4 className="font-bold mb-2">Error Handling</h4>
            <p className="text-sm text-zinc-400">Automatic retry and fallback strategies</p>
          </div>
        </div>
      </section>
    </main>
  )
}
