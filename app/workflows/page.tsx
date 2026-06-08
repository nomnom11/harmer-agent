'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Zap, Play, Copy, Share2, Star, Users, Clock, TrendingUp, CheckCircle2, Gauge } from 'lucide-react'

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
      description: 'Real-time collection, processing, and analysis of market data from multiple sources with automated insights generation.',
      category: 'data',
      complexity: 'Advanced',
      agents: 4,
      runtime: '~2min',
      rating: 4.8,
      reviews: 142,
      tags: ['Real-time', 'Market Data', 'Analysis'],
      efficiency: '94%',
      successRate: '99.8%'
    },
    {
      id: 2,
      title: 'Email Automation Suite',
      description: 'Intelligent email categorization, automated responses, and workflow management with AI-powered sentiment analysis.',
      category: 'automation',
      complexity: 'Intermediate',
      agents: 3,
      runtime: '~1min',
      rating: 4.6,
      reviews: 98,
      tags: ['Email', 'Automation', 'AI'],
      efficiency: '87%',
      successRate: '98.5%'
    },
    {
      id: 3,
      title: 'Social Media Monitor',
      description: 'Monitor brand mentions, sentiment analysis, and automated responses across all major social platforms.',
      category: 'analysis',
      complexity: 'Intermediate',
      agents: 3,
      runtime: '~3min',
      rating: 4.7,
      reviews: 127,
      tags: ['Social Media', 'Sentiment', 'Monitoring'],
      efficiency: '91%',
      successRate: '99.2%'
    },
    {
      id: 4,
      title: 'API Integration Orchestrator',
      description: 'Seamlessly orchestrate multiple API endpoints with intelligent error handling and rate limiting.',
      category: 'integration',
      complexity: 'Advanced',
      agents: 5,
      runtime: '~4min',
      rating: 4.9,
      reviews: 156,
      tags: ['API', 'Integration', 'Orchestration'],
      efficiency: '96%',
      successRate: '99.9%'
    },
    {
      id: 5,
      title: 'Content Generation Pipeline',
      description: 'Generate, optimize, and publish high-quality content across multiple channels with SEO enhancement.',
      category: 'automation',
      complexity: 'Intermediate',
      agents: 4,
      runtime: '~2min',
      rating: 4.5,
      reviews: 84,
      tags: ['Content', 'Generation', 'Publishing'],
      efficiency: '89%',
      successRate: '98.1%'
    },
    {
      id: 6,
      title: 'Competitive Analysis Engine',
      description: 'Advanced competitor tracking with pricing analysis, market positioning, and strategic intelligence.',
      category: 'analysis',
      complexity: 'Advanced',
      agents: 4,
      runtime: '~5min',
      rating: 4.8,
      reviews: 119,
      tags: ['Competitor', 'Analysis', 'Market'],
      efficiency: '92%',
      successRate: '99.3%'
    },
    {
      id: 7,
      title: 'Invoice Processing System',
      description: 'OCR-powered invoice extraction, validation, and processing with automatic data enrichment.',
      category: 'data',
      complexity: 'Intermediate',
      agents: 3,
      runtime: '~1min',
      rating: 4.7,
      reviews: 103,
      tags: ['Invoice', 'OCR', 'Processing'],
      efficiency: '93%',
      successRate: '99.6%'
    },
    {
      id: 8,
      title: 'Customer Support Workflow',
      description: 'Intelligent ticket routing, AI-powered resolution suggestions, and automated customer follow-ups.',
      category: 'automation',
      complexity: 'Intermediate',
      agents: 3,
      runtime: '~2min',
      rating: 4.6,
      reviews: 91,
      tags: ['Support', 'Tickets', 'Customer'],
      efficiency: '88%',
      successRate: '98.7%'
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

        {/* Stats - Enhanced */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          <div className="border border-zinc-700 bg-zinc-900/50 rounded-lg p-6 hover:border-zinc-600 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-4xl font-bold text-green-400">{workflows.length}+</span>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-sm text-zinc-400 font-medium">Ready-to-use Workflows</div>
          </div>
          <div className="border border-zinc-700 bg-zinc-900/50 rounded-lg p-6 hover:border-zinc-600 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-4xl font-bold text-blue-400">2.3K</span>
              <Users className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-sm text-zinc-400 font-medium">Active Users</div>
          </div>
          <div className="border border-zinc-700 bg-zinc-900/50 rounded-lg p-6 hover:border-zinc-600 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-4xl font-bold text-purple-400">1.2K</span>
              <Gauge className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-sm text-zinc-400 font-medium">Executions/Day</div>
          </div>
          <div className="border border-zinc-700 bg-zinc-900/50 rounded-lg p-6 hover:border-zinc-600 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-4xl font-bold text-orange-400">4.7</span>
              <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
            </div>
            <div className="text-sm text-zinc-400 font-medium">Average Rating</div>
          </div>
        </div>

        {/* Category Filter - Enhanced */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Filter Workflows</h2>
            <span className="text-sm text-zinc-500">{filteredWorkflows.length} workflows</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-lg font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-green-500 text-zinc-950 shadow-lg shadow-green-500/30'
                    : 'border border-zinc-700 bg-zinc-900 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Workflows Grid - Enhanced */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          {filteredWorkflows.map(workflow => (
            <div key={workflow.id} className="group border border-zinc-700 bg-zinc-900/30 rounded-xl p-6 hover:border-zinc-600 hover:bg-zinc-900/50 transition-all duration-300 flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">{workflow.title}</h3>
                </div>
                <div className="flex gap-2">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-semibold whitespace-nowrap ${
                    workflow.complexity === 'Advanced'
                      ? 'bg-red-900/40 text-red-300 border border-red-700/50'
                      : 'bg-blue-900/40 text-blue-300 border border-blue-700/50'
                  }`}>
                    {workflow.complexity}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-400 mb-5 line-clamp-2">{workflow.description}</p>

              {/* Workflow Metrics - New */}
              <div className="grid grid-cols-2 gap-3 mb-5 pb-5 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400/70" />
                  <div>
                    <div className="text-xs text-zinc-500">Success Rate</div>
                    <div className="text-sm font-semibold text-green-400">{workflow.successRate}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-orange-400/70" />
                  <div>
                    <div className="text-xs text-zinc-500">Efficiency</div>
                    <div className="text-sm font-semibold text-orange-400">{workflow.efficiency}</div>
                  </div>
                </div>
              </div>

              {/* Metadata */}
              <div className="grid grid-cols-3 gap-3 mb-5 text-xs">
                <div className="flex flex-col gap-1 p-2.5 bg-zinc-800/40 rounded-lg border border-zinc-700/50">
                  <span className="text-zinc-500">Agents</span>
                  <span className="font-semibold text-white">{workflow.agents}</span>
                </div>
                <div className="flex flex-col gap-1 p-2.5 bg-zinc-800/40 rounded-lg border border-zinc-700/50">
                  <span className="text-zinc-500">Runtime</span>
                  <span className="font-semibold text-white">{workflow.runtime}</span>
                </div>
                <div className="flex flex-col gap-1 p-2.5 bg-zinc-800/40 rounded-lg border border-zinc-700/50">
                  <span className="text-zinc-500">Rating</span>
                  <span className="font-semibold text-yellow-400">{workflow.rating}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {workflow.tags.map(tag => (
                  <span key={tag} className="text-xs bg-zinc-800/60 text-zinc-300 px-2.5 py-1 rounded-full border border-zinc-700/50 font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Review Count */}
              <p className="text-xs text-zinc-500 mb-5 font-medium">{workflow.reviews} verified reviews</p>

              {/* Actions */}
              <div className="flex gap-3 mt-auto">
                <button className="flex-1 bg-green-500 hover:bg-green-600 text-zinc-950 font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-green-500/20">
                  <Play className="w-4 h-4" />
                  Use Workflow
                </button>
                <button className="p-2.5 bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 rounded-lg transition-all border border-zinc-700/50 hover:border-zinc-600/50">
                  <Copy className="w-4 h-4" />
                </button>
                <button className="p-2.5 bg-zinc-800/50 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 rounded-lg transition-all border border-zinc-700/50 hover:border-zinc-600/50">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Create Workflow CTA - Enhanced */}
        <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-700/50 rounded-xl p-12 text-center backdrop-blur-sm">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/30">
              <Zap className="w-6 h-6 text-green-400" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-3">Create Custom Workflows</h2>
          <p className="text-zinc-300 mb-8 max-w-xl mx-auto leading-relaxed">Combine multiple agents to build sophisticated workflows tailored to your unique business requirements. Start from pre-built templates or create entirely custom workflows.</p>
          <Link href="/build-agent" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-zinc-950 px-8 py-3.5 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-green-500/30">
            <Zap className="w-5 h-5" />
            Get Started
          </Link>
        </div>
      </div>
    </main>
  )
}
