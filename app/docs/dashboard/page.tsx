import Link from 'next/link'

export const metadata = {
  title: 'Dashboard - Harmer Agent Documentation',
  description: 'Manage and monitor your autonomous agents from the Harmer Dashboard.',
}

export default function Dashboard() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
        <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
        <span>/</span>
        <span className="text-white">Dashboard</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4">Dashboard Overview</h1>
      <p className="text-xl text-zinc-400 mb-12">Monitor, manage, and scale your agents from a unified control center.</p>

      <section id="overview" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Dashboard Overview</h2>
        <p className="text-zinc-300 mb-4">The Harmer Dashboard provides:</p>
        <ul className="space-y-2 text-zinc-300 ml-4">
          <li><strong>Agent Management:</strong> Create, edit, and deploy agents</li>
          <li><strong>Real-time Monitoring:</strong> Watch agents in action</li>
          <li><strong>Performance Metrics:</strong> Track success rates and efficiency</li>
          <li><strong>Activity Logs:</strong> Detailed execution history</li>
          <li><strong>Resource Usage:</strong> Monitor compute and API costs</li>
          <li><strong>Team Collaboration:</strong> Share agents and workflows</li>
        </ul>
      </section>

      <section id="analytics" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Analytics & Insights</h2>
        <p className="text-zinc-300 mb-4">Track key metrics:</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <h4 className="font-bold mb-2">Success Rate</h4>
            <p className="text-sm text-zinc-400">Percentage of successful agent executions</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <h4 className="font-bold mb-2">Avg Response Time</h4>
            <p className="text-sm text-zinc-400">Average time to complete tasks</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <h4 className="font-bold mb-2">Tasks Completed</h4>
            <p className="text-sm text-zinc-400">Total number of executed tasks</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <h4 className="font-bold mb-2">Cost per Task</h4>
            <p className="text-sm text-zinc-400">Average API and compute cost</p>
          </div>
        </div>

        <p className="text-zinc-300 mb-4">Access analytics via the API:</p>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-4 overflow-x-auto">
          <pre className="text-sm font-mono text-green-400">{`const analytics = await agent.getAnalytics({
  timeRange: 'last_30_days',
  metrics: ['success_rate', 'response_time']
});

console.log(analytics);`}</pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Agent Controls</h2>
        <p className="text-zinc-300 mb-4">Manage your agents with these controls:</p>
        <ul className="space-y-2 text-zinc-300 ml-4">
          <li><strong>Start/Stop:</strong> Control agent execution</li>
          <li><strong>Configure:</strong> Update agent settings</li>
          <li><strong>Scale:</strong> Adjust resource allocation</li>
          <li><strong>Export:</strong> Download agent data and logs</li>
          <li><strong>Delete:</strong> Remove agents and associated data</li>
        </ul>
      </section>
    </main>
  )
}
