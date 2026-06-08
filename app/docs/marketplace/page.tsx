import Link from 'next/link'

export const metadata = {
  title: 'Marketplace - Harmer Agent Documentation',
  description: 'Discover, browse, and share autonomous agents in the Harmer Agent marketplace.',
}

export default function Marketplace() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
        <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
        <span>/</span>
        <span className="text-white">Marketplace</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4">Agent Marketplace</h1>
      <p className="text-xl text-zinc-400 mb-12">
        Discover pre-built agents, share your creations, and collaborate with the community.
      </p>

      <section id="browse" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Browsing Agents</h2>
        <p className="text-zinc-300 mb-4">
          The Harmer Agent marketplace features hundreds of pre-built agents ready to use or customize.
        </p>
        <p className="text-zinc-300 mb-4">Categories include:</p>
        <ul className="space-y-2 text-zinc-300 ml-4">
          <li><strong>Research:</strong> Data gathering and analysis agents</li>
          <li><strong>Trading:</strong> Financial market analysis agents</li>
          <li><strong>Social Media:</strong> Content management agents</li>
          <li><strong>Development:</strong> Code and documentation agents</li>
          <li><strong>Marketing:</strong> Campaign and content agents</li>
          <li><strong>NFT/Web3:</strong> Blockchain interaction agents</li>
        </ul>
      </section>

      <section id="submit" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Submitting Your Agent</h2>
        <p className="text-zinc-300 mb-4">Share your agent with the community:</p>
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-4 overflow-x-auto">
          <pre className="text-sm font-mono text-green-400">{`// 1. Prepare your agent
const myAgent = new Agent(config);

// 2. Add metadata
myAgent.metadata = {
  name: 'My Custom Agent',
  description: 'What this agent does',
  category: 'Research',
  version: '1.0.0',
  author: 'Your Name',
  tags: ['research', 'analysis', 'data']
};

// 3. Export and publish
await agent.publish({
  visibility: 'public', // or 'private'
  price: 0 // or set a price
});`}
