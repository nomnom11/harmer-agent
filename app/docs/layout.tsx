'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronRight } from 'lucide-react'

const docSections = [
  { title: 'Getting Started', href: '/docs', subsections: [] },
  { 
    title: 'Build Agent', 
    href: '/docs/build-agent',
    subsections: [
      { title: 'Agent Basics', href: '/docs/build-agent#basics' },
      { title: 'Configuration', href: '/docs/build-agent#config' },
      { title: 'Examples', href: '/docs/build-agent#examples' }
    ]
  },
  { 
    title: 'Marketplace', 
    href: '/docs/marketplace',
    subsections: [
      { title: 'Browse Agents', href: '/docs/marketplace#browse' },
      { title: 'Submit Agent', href: '/docs/marketplace#submit' }
    ]
  },
  { 
    title: 'Workflows', 
    href: '/docs/workflows',
    subsections: [
      { title: 'Workflow Basics', href: '/docs/workflows#basics' },
      { title: 'Creating Workflows', href: '/docs/workflows#creating' }
    ]
  },
  { 
    title: 'Dashboard', 
    href: '/docs/dashboard',
    subsections: [
      { title: 'Overview', href: '/docs/dashboard#overview' },
      { title: 'Analytics', href: '/docs/dashboard#analytics' }
    ]
  },
  { 
    title: 'API Reference', 
    href: '/docs/api-reference',
    subsections: [
      { title: 'Authentication', href: '/docs/api-reference#auth' },
      { title: 'Endpoints', href: '/docs/api-reference#endpoints' }
    ]
  },
  { 
    title: 'Community', 
    href: '/docs/community',
    subsections: [
      { title: 'Forums', href: '/docs/community#forums' },
      { title: 'Support', href: '/docs/community#support' }
    ]
  }
]

export default function DocsLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-mono font-bold text-sm">
            <div className="w-6 h-6 bg-gradient-to-br from-white to-zinc-400 rounded flex items-center justify-center text-zinc-950 text-xs font-bold">
              H
            </div>
            HARMER DOCS
          </Link>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 hover:bg-zinc-900 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className={`${
          sidebarOpen ? 'fixed' : 'hidden'
        } md:sticky md:block top-16 md:top-16 left-0 w-64 h-[calc(100vh-4rem)] md:h-auto overflow-y-auto border-r border-zinc-900 bg-zinc-950 z-30`}>
          <nav className="p-6 space-y-1">
            {docSections.map((section) => (
              <div key={section.href}>
                <Link
                  href={section.href}
                  onClick={() => setSidebarOpen(false)}
                  className="block px-4 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
                >
                  {section.title}
                </Link>
                {section.subsections.length > 0 && (
                  <div className="ml-4 mt-1 space-y-1">
                    {section.subsections.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setSidebarOpen(false)}
                        className="block px-4 py-1.5 rounded text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                      >
                        {sub.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-h-[calc(100vh-4rem)]">
          {children}
        </div>
      </div>
    </div>
  )
}
