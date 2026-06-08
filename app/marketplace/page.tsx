'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Star, Download, TrendingUp, Users, Zap, Code, Brain, Globe, Workflow } from 'lucide-react'

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', label: 'All Agents', icon: Zap },
    { id: 'research', label: 'Research', icon: Brain },
    { id: 'trading', label: 'Trading', icon: TrendingUp },
    { id: 'content', label: 'Content', icon: Globe },
    { id: 'developer', label: 'Developer', icon: Code },
    { id: 'workflow', label: 'Workflows', icon: Workflow }
  ]

  const agents = [
    {
      id: 1,
      name: 'Advanced Research Agent',
      category: 'research',
      description: 'Comprehensive web research and data analysis with real-time insights',
      author: '@researcher_pro',
      rating: 4.8,
      downloads: 2340,
      stars: 512,
      badge: 'Trending'
    },
    {
      id: 2,
      name: 'Crypto Trading Bot',
      category: 'trading',
      description: 'Automated cryptocurrency trading with advanced market analysis',
      author: '@trader_elite',
      rating: 4.6,
      downloads: 1840,
      stars: 428,
      badge: 'Featured'
    },
    {
      id: 3,
      name: 'Content Writer Pro',
      category: 'content',
      description: 'AI-powered content creation, editing, and social media optimization',
      author: '@writer_ai',
      rating: 4.7,
      downloads: 1920,
      stars: 456,
      badge: null
    },
    {
      id: 4,
      name: 'Code Analyzer',
      category: 'developer',
      description: 'Intelligent code review, bug detection, and refactoring suggestions',
      author: '@dev_tools',
      rating: 4.9,
      downloads: 2100,
      stars: 580,
      badge: 'Featured'
    },
    {
      id: 5,
      name: 'Multi-Agent Workflow',
      category: 'workflow',
      description: 'Orchestrate multiple agents for complex, multi-step operations',
      author: '@workflow_master',
      rating: 4.5,
      downloads: 1200,
      stars: 320,
      badge: null
    },
    {
      id: 6,
      name: 'Data Pipeline Agent',
      category: 'research',
      description: 'ETL automation with data validation, transformation, and analysis',
      author: '@data_engineer',
      rating: 4.7,
      downloads: 980,
      stars: 245,
      badge: 'New'
    }
  ]

  const filteredAgents = agents.filter(agent => {
    const matchCategory = selectedCategory === 'all' || agent.category === selectedCategory
    const matchSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       agent.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <div className="pt-24 pb-12 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8">
            <span>← Back to Home</span>
          </Link>
          
          <h1 className="text-5xl font-bold mb-4">Agent Marketplace</h1>
          <p className="text-xl text-zinc-400 mb-8">Discover, share, and collaborate with thousands of autonomous agents built by the community.</p>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search agents, workflows, or tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                    selectedCategory === cat.id
                      ? 'bg-white text-zinc-950'
                      : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{cat.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="text-2xl font-bold mb-1">4,280+</div>
            <div className="text-sm text-zinc-400">Agents Available</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="text-2xl font-bold mb-1">12.5K+</div>
            <div className="text-sm text-zinc-400">Active Users</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="text-2xl font-bold mb-1">58.2M</div>
            <div className="text-sm text-zinc-400">Total Downloads</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="text-2xl font-bold mb-1">98%</div>
            <div className="text-sm text-zinc-400">Satisfaction Rate</div>
          </div>
        </div>

        {/* Agents Grid */}
        <div>
          <h2 className="text-lg font-semibold mb-6">
            {filteredAgents.length} {filteredAgents.length === 1 ? 'Agent' : 'Agents'} Found
          </h2>
          
          {filteredAgents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAgents.map((agent) => (
                <div
                  key={agent.id}
                  className="group bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-white transition-all hover:shadow-lg hover:shadow-white/10"
                >
                  {/* Badge */}
                  {agent.badge && (
                    <div className="mb-3">
                      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        agent.badge === 'Trending' ? 'bg-red-900/30 text-red-300 border border-red-800' :
                        agent.badge === 'Featured' ? 'bg-yellow-900/30 text-yellow-300 border border-yellow-800' :
                        'bg-green-900/30 text-green-300 border border-green-800'
                      }`}>
                        {agent.badge}
                      </span>
                    </div>
                  )}
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">{agent.name}</h3>
                  
                  {/* Description */}
                  <p className="text-sm text-zinc-400 mb-4">{agent.description}</p>
                  
                  {/* Author */}
                  <p className="text-xs text-zinc-500 mb-4">By {agent.author}</p>
                  
                  {/* Rating and Stats */}
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-zinc-800">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-semibold">{agent.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-zinc-400">
                      <Download className="w-4 h-4" />
                      <span className="text-sm">{agent.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1 text-zinc-400">
                      <Star className="w-4 h-4" />
                      <span className="text-sm">{agent.stars}</span>
                    </div>
                  </div>
                  
                  {/* Button */}
                  <button className="w-full px-4 py-2 bg-white text-zinc-950 font-semibold rounded-lg hover:bg-zinc-100 transition-colors">
                    View Agent
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-zinc-400 text-lg mb-2">No agents found matching your search</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="text-white hover:text-zinc-300 transition-colors"
              >
                Clear filters →
              </button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to Share Your Agent?</h3>
          <p className="text-zinc-300 mb-6">Publish your agents to the marketplace and reach thousands of developers.</p>
          <button className="px-8 py-3 bg-white text-zinc-950 font-semibold rounded-lg hover:bg-zinc-100 transition-colors">
            Submit Your Agent
          </button>
        </div>
      </div>
    </main>
  )
}
