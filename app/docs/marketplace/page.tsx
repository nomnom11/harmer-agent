import Link from 'next/link'

export const metadata = {
  title: 'Marketplace - Harmer Agent Documentation',
  description: 'Discover, browse, and share autonomous agents in the Harmer Agent marketplace.',
}

export default function Marketplace() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
        <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
        <span>/</span>
        <span className="text-white">Marketplace</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
      <p className="text-xl text-zinc-400 mb-12">Discover pre-built agents, templates, and integrations from the community.</p>

      <section id="browse" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Browse Agents</h2>
        <p className="text-zinc-300 mb-4">Explore thousands of community-built agents and templates.</p>
        <ul className="space-y-3 text-zinc-300 ml-4">
          <li><strong>Research Agents:</strong> Web search and data analysis tools</li>
          <li><strong>Trading Agents:</strong> Market analysis and automated trading</li>
          <li><strong>Content Agents:</strong> Writing, editing, and social media management</li>
          <li><strong>Developer Agents:</strong> Code generation, testing, and debugging</li>
          <li><strong>Business Agents:</strong> CRM, analytics, and automation tools</li>
        </ul>
      </section>

      <section id="submit" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Submit Your Agent</h2>
        <p className="text-zinc-300 mb-4">Share your agents with the community and earn rewards.</p>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-4">
          <div>
            <h4 className="font-bold mb-2">Preparation Checklist</h4>
            <ul className="text-sm text-zinc-300 space-y-1">
              <li>✓ Write comprehensive documentation</li>
              <li>✓ Add example usage and templates</li>
              <li>✓ Include error handling</li>
              <li>✓ Test thoroughly with edge cases</li>
              <li>✓ Add unit tests and examples</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Ratings & Reviews</h2>
        <p className="text-zinc-300 mb-4">Community feedback helps improve agents and build trust.</p>
        <div className="space-y-3">
          <div className="border border-zinc-800 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold">Research Agent</h4>
              <span className="text-yellow-400">★★★★★ 4.8/5</span>
            </div>
            <p className="text-sm text-zinc-400">Published by @researcher • 1.2K downloads</p>
          </div>
          <div className="border border-zinc-800 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold">Trading Bot</h4>
              <span className="text-yellow-400">★★★★☆ 4.5/5</span>
            </div>
            <p className="text-sm text-zinc-400">Published by @trader • 892 downloads</p>
          </div>
        </div>
      </section>
    </main>
  )
}
