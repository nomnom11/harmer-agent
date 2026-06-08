import Link from 'next/link'

export const metadata = {
  title: 'API Reference - Harmer Agent Documentation',
  description: 'Complete API reference for Harmer Agent SDK and REST endpoints.',
}

export default function APIReference() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
        <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
        <span>/</span>
        <span className="text-white">API Reference</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4">API Reference</h1>
      <p className="text-xl text-zinc-400 mb-12">Complete reference for the Harmer Agent API and SDK.</p>

      <section id="auth" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Authentication</h2>
        <p className="text-zinc-300 mb-4">All API requests require an API key:</p>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-4 overflow-x-auto">
          <pre className="text-sm font-mono text-green-400">{`const HarmerClient = require('harmer-agent');
const client = new HarmerClient({
  apiKey: process.env.HARMER_API_KEY
});`}</pre>
        </div>
      </section>

      <section id="endpoints" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">API Endpoints</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-2">Create Agent</h3>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <pre className="text-sm font-mono text-green-400">POST /api/agents</pre>
            </div>
            <p className="text-zinc-300 mt-2">Create a new autonomous agent.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Get Agent</h3>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <pre className="text-sm font-mono text-green-400">GET /api/agents/:agentId</pre>
            </div>
            <p className="text-zinc-300 mt-2">Retrieve details about a specific agent.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Execute Agent</h3>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <pre className="text-sm font-mono text-green-400">POST /api/agents/:agentId/execute</pre>
            </div>
            <p className="text-zinc-300 mt-2">Run an agent with specific inputs.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">List Agents</h3>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <pre className="text-sm font-mono text-green-400">GET /api/agents</pre>
            </div>
            <p className="text-zinc-300 mt-2">List all agents in your workspace.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Error Handling</h2>
        <p className="text-zinc-300 mb-4">Common HTTP status codes:</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-800">
              <th className="text-left py-2 px-2">Status</th>
              <th className="text-left py-2 px-2">Meaning</th>
            </tr>
          </thead>
          <tbody className="text-zinc-300">
            <tr className="border-b border-zinc-800">
              <td className="py-2 px-2">200</td>
              <td className="py-2 px-2">Success</td>
            </tr>
            <tr className="border-b border-zinc-800">
              <td className="py-2 px-2">400</td>
              <td className="py-2 px-2">Bad request</td>
            </tr>
            <tr className="border-b border-zinc-800">
              <td className="py-2 px-2">401</td>
              <td className="py-2 px-2">Unauthorized</td>
            </tr>
            <tr>
              <td className="py-2 px-2">500</td>
              <td className="py-2 px-2">Server error</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  )
}
