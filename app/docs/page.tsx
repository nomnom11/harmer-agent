import Link from 'next/link'
import { Zap, Brain, Users, Globe, Workflow, BookOpen, MessageSquare } from 'lucide-react'

export const metadata = {
  title: 'Documentation - Harmer Agent',
  description: 'Complete guide to building, deploying, and scaling autonomous agents with Harmer Agent.',
}

const sections = [
  {
    icon: BookOpen,
    title: 'Getting Started',
    description: 'Learn the fundamentals and get up and running with Harmer Agent in minutes.',
    href: '/docs/getting-started'
  },
  {
    icon: Brain,
    title: 'Build Agent',
    description: 'Master agent creation with configuration, memory, and reasoning capabilities.',
    href: '/docs/build-agent'
  },
  {
    icon: Globe,
    title: 'Marketplace',
    description: 'Discover pre-built agents and share your own creations with the community.',
    href: '/docs/marketplace'
  },
  {
    icon: Workflow,
    title: 'Workflows',
    description: 'Create complex automation workflows with multi-step orchestration.',
    href: '/docs/workflows'
  },
  {
    icon: Users,
    title: 'Dashboard',
    description: 'Monitor, manage, and scale your agents from a unified control panel.',
    href: '/docs/dashboard'
  },
  {
    icon: Zap,
    title: 'API Reference',
    description: 'Complete API documentation for programmatic agent interaction.',
    href: '/docs/api-reference'
  }
]

export default function DocsHome() {

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Harmer Agent Documentation</h1>
        <p className="text-lg text-zinc-400 mb-6">
          Complete guide to building autonomous agents with memory, reasoning, workflows, and multi-agent collaboration.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/docs/getting-started"
            className="inline-block px-6 py-3 bg-white text-zinc-950 font-semibold rounded-lg hover:bg-zinc-100 transition-colors"
          >
            Start Here
          </Link>
          <Link 
            href="/docs/api-reference"
            className="inline-block px-6 py-3 border border-zinc-700 text-white font-semibold rounded-lg hover:bg-zinc-900 transition-colors"
          >
            API Reference
          </Link>
        </div>
      </div>

      {/* Documentation Sections Grid */}
      <div className="grid sm:grid-cols-2 gap-6 mb-16">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <Link 
              key={section.href}
              href={section.href}
              className="group p-6 border border-zinc-800 rounded-xl hover:border-zinc-700 hover:bg-zinc-900 transition-all"
            >
              <Icon className="w-8 h-8 text-white mb-4 group-hover:text-blue-400 transition-colors" />
              <h3 className="text-lg font-bold mb-2 group-hover:text-white">{section.title}</h3>
              <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">{section.description}</p>
            </Link>
          )
        })}
      </div>

      {/* Quick Links */}
      <div className="grid sm:grid-cols-3 gap-6 mb-16">
        <div className="p-6 border border-zinc-800 rounded-xl">
          <h4 className="font-bold mb-3">Quick Start Templates</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li><a href="#" className="hover:text-white transition-colors">• Agent Template</a></li>
            <li><a href="#" className="hover:text-white transition-colors">• Workflow Template</a></li>
            <li><a href="#" className="hover:text-white transition-colors">• Multi-Agent Template</a></li>
          </ul>
        </div>

        <div className="p-6 border border-zinc-800 rounded-xl">
          <h4 className="font-bold mb-3">Common Tasks</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li><a href="#" className="hover:text-white transition-colors">• Create Your First Agent</a></li>
            <li><a href="#" className="hover:text-white transition-colors">• Deploy to Production</a></li>
            <li><a href="#" className="hover:text-white transition-colors">• Monitor Performance</a></li>
          </ul>
        </div>

        <div className="p-6 border border-zinc-800 rounded-xl">
          <h4 className="font-bold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li><a href="#" className="hover:text-white transition-colors">• GitHub Repository</a></li>
            <li><a href="#" className="hover:text-white transition-colors">• Community Forum</a></li>
            <li><a href="#" className="hover:text-white transition-colors">• Support Center</a></li>
          </ul>
        </div>
      </div>

      {/* FAQ Preview */}
      <div className="border border-zinc-800 rounded-xl p-8 bg-zinc-900/50">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-white hover:text-blue-400">
              What is Harmer Agent?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-zinc-400">Harmer Agent is a next-generation AI agent platform enabling autonomous agents with memory, reasoning, workflows, and multi-agent collaboration capabilities.</p>
          </details>
          
          <details className="group cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-white hover:text-blue-400">
              How do I get started?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-zinc-400">Start with our Getting Started guide to set up your first agent. It takes just a few minutes to create and deploy your first autonomous agent.</p>
          </details>

          <details className="group cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-white hover:text-blue-400">
              Is there a free tier?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-3 text-zinc-400">Yes! Harmer Agent offers a generous free tier perfect for getting started. Upgrade as your needs scale.</p>
          </details>
        </div>
      </div>
    </main>
  )
}
