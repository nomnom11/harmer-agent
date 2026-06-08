import Link from 'next/link'

export const metadata = {
  title: 'API Reference - Harmer Agent Documentation',
  description: 'Complete API reference for Harmer Agent SDK and REST endpoints.',
}

export default function APIReference() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
        <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
        <span>/</span>
        <span className="text-white">API Reference</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4">API Reference</h1>
      <p className="text-xl text-zinc-400 mb-12">
        Complete reference for the Harmer Agent API and SDK.
      </p>

      <section id="auth" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Authentication</h2>
        <p className="text-zinc-300 mb-4">All API requests require an API key:</p>
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-4 overflow-x-auto">
          <pre className="text-sm font-mono text-green-400">{`const { HarmerClient } = require('harmer-agent');

const client = new HarmerClient({
  apiKey: process.env.HARMER_API_KEY
});`}
