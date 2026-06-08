import Link from 'next/link'

export const metadata = {
  title: 'Getting Started - Harmer Agent Documentation',
  description: 'Get up and running with Harmer Agent in minutes. Learn the basics and create your first autonomous agent.',
}

export default function GettingStarted() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
        <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
        <span>/</span>
        <span className="text-white">Getting Started</span>
      </nav>

      {/* Main Content */}
      <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">Getting Started with Harmer Agent</h1>
        <p className="text-xl text-zinc-400 mb-8">
          Learn how to set up your development environment and create your first autonomous agent in just a few minutes.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 mt-8">Prerequisites</h2>
          <ul className="space-y-3 text-zinc-300">
            <li>Node.js 16 or higher</li>
            <li>npm, yarn, or pnpm package manager</li>
            <li>A code editor (VS Code recommended)</li>
            <li>Basic understanding of JavaScript/TypeScript</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 mt-8">Installation</h2>
          <p className="text-zinc-300 mb-4">Install Harmer Agent using npm:</p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-4 overflow-x-auto">
            <code className="text-sm font-mono text-green-400">$ npm install harmer-agent</code>
          </div>
          <p className="text-zinc-300">Or using yarn:</p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-4 overflow-x-auto">
            <code className="text-sm font-mono text-green-400">$ yarn add harmer-agent</code>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 mt-8">Your First Agent</h2>
          <p className="text-zinc-300 mb-4">Create a new file <code className="bg-zinc-900 px-2 py-1 rounded">agent.js</code>:</p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-4 overflow-x-auto">
            <pre className="text-sm font-mono text-green-400">{`const { Agent } = require('harmer-agent');

const myAgent = new Agent({
  name: 'MyFirstAgent',
  description: 'My first autonomous agent',
  model: 'gpt-4',
  memory: {
    type: 'persistent',
    maxSize: 10000
  }
});

// Add capabilities
myAgent.addCapability('web_search', {
  description: 'Search the web for information',
  params: ['query']
});

// Run agent
myAgent.start();`}
