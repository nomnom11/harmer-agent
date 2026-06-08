'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Zap, ArrowRight, Play, Copy, Share2, Star, Users, Clock, Target } from 'lucide-react'

export default function Workflows() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Workflows' },
    { id: 'data', label: 'Data Processing' },
    { id: 'automation', label: 'Automation' },
    { id: 'analysis', label: 'Analysis' },
    { id: 'integration', label: 'Integration' }
  ]

  const workflows = [
    {
      id: 1,
      title: 'Market Data Pipeline',
      description: 'Collect, process, and analyze market data from multiple sources in real-time.',
      category: 'data',
      complexity: 'Advanced',
      agents: 4,
      runtime: '~2min',
      rating: 4.8,
      reviews: 142,
      tags: ['Real-time', 'Market Data', 'Analysis']
    },
    {
      id: 2,
      title: 'Email Automation Suite',
      description: 'Automatically categorize, respond to, and manage email workflows with AI assistance.',
      category: 'automation',
      complexity: 'Intermediate',
      agents: 3,
      runtime: '~1min',
      rating: 4.6,
      reviews: 98,
      tags: ['Email', 'Automation', 'AI']
    },
    {
      id: 3,
      title: 'Social Media Monitor',
      description: 'Monitor mentions, sentiment analysis, and auto-respond across social platforms.',
      category: 'analysis',
      complexity: 'Intermediate',
      agents: 3,
      runtime: '~3min',
      rating: 4.7,
      reviews: 127,
      tags: ['Social Media', 'Sentiment', 'Monitoring']
    },
    {
      id: 4,
      title: 'API Integration Orchestrator',
      description: 'Seamlessly integrate and orchestrate multiple API endpoints with error handling.',
      category: 'integration',
      complexity: 'Advanced',
      agents: 5,
      runtime: '~4min',
      rating: 4.9,
      reviews: 156,
      tags: ['API', 'Integration', 'Orchestration']
    },
    {
      id: 5,
      title: 'Content Generation Pipeline',
      description: 'Generate, optimize, and publish content across multiple channels automatically.',
      category: 'automation',
      complexity: 'Intermediate',
      agents: 4,
      runtime: '~2min',
      rating: 4.5,
      reviews: 84,
      tags: ['Content', 'Generation', 'Publishing']
    },
    {
      id: 6,
      title: 'Competitive Analysis Engine',
      description: 'Analyze competitor activities, pricing, and market positioning in real-time.',
      category: 'analysis',
      complexity: 'Advanced',
      agents: 4,
      runtime: '~5min',
      rating: 4.8,
      reviews: 119,
      tags: ['Competitor', 'Analysis', 'Market']
    },
    {
      id: 7,
      title: 'Invoice Processing System',
      description: 'Automatically extract, validate, and process invoice data with OCR and AI.',
      category: 'data',
      complexity: 'Intermediate',
      agents: 3,
      runtime: '~1min',
      rating: 4.7,
      reviews: 103,
      tags: ['Invoice', 'OCR', 'Processing']
    },
    {
      id: 8,
      title: 'Customer Support Workflow',
      description: 'Intelligent ticket routing, resolution suggestions, and customer follow-up automation.',
      category: 'automation',
      complexity: 'Intermediate',
      agents: 3,
      runtime: '~2min',
      rating: 4.6,
      reviews: 91,
      tags: ['Support', 'Tickets', 'Customer']
    }
  ]

  const filteredWorkflows = selectedCategory === 'all' 
    ? workflows 
    : workflows.filter(w => w.category === selectedCategory)

  return (
    <main className="min-h-screen bg-zinc-950 text-white pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Workflow Templates</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">Pre-built multi-agent workflows to automate complex tasks. Build, customize, and deploy in minutes.</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          <div className="border border-zinc-800 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400 mb-1">{workflows.length}+</div>
            <div className="text-sm text-zinc-400">Ready-to-use Workflows</div>
          </div>
          <div className="border border-zinc-800 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-400 mb-1">2.3K+</div>
            <div className="text-sm text-zinc-400">Active Users</div>
          </div>
          <div className="border border-zinc-800 rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-400 mb-1">1,250+</div>
            <div className="text-sm text-zinc-400">Workflow Executions/Day</div>
          </div>
          <div className="border border-zinc-800 rounded-lg p-4">
            <div className="text-2xl font-bold text-orange-400 mb-1">4.7★</div>
            <div className="text-sm text-zinc-400">Average Rating</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-lg font-bold mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-green-500 text-zinc-950'
                    : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Workflows Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {filteredWorkflows.map(workflow => (
            <div key={workflow.id} className="border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold max-w-xs">{workflow.title}</h3>
                <span className={`text-xs px-2 py-1 rounded font-semibold ${
                  workflow.complexity === 'Advanced'
                    ? 'bg-red-900 text-red-200'
                    : 'bg-blue-900 text-blue-200'
                }`}>
                  {workflow.complexity}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-400 mb-4">{workflow.description}</p>

              {/* Metadata */}
              <div className="grid grid-cols-3 gap-3 mb-4 text-xs text-zinc-400">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{workflow.agents} Agents</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{workflow.runtime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{workflow.rating}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {workflow.tags.map(tag => (
                  <span key={tag} className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Review Count */}
              <p className="text-xs text-zinc-500 mb-4">{workflow.reviews} reviews</p>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 bg-green-500 hover:bg-green-600 text-zinc-950 font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
                  <Play className="w-4 h-4" />
                  Use Workflow
                </button>
                <button className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
                <button className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Create Workflow CTA */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 rounded-lg p-12 text-center">
          <h2 className="text-2xl font-bold mb-3">Build Your Own Workflow</h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">Combine multiple agents to create custom workflows tailored to your needs. Start from scratch or modify existing templates.</p>
          <Link href="/build-agent" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-zinc-950 px-6 py-3 rounded-lg font-semibold transition-colors">
            <Zap className="w-5 h-5" />
            Create Workflow
          </Link>
        </div>
      </div>
    </main>
  )
}
