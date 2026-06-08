'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Star, Download, TrendingUp, Users, Zap, Code, Brain, Globe, Workflow, Heart, Share2, X, ArrowLeft, Clock, Award, CheckCircle2 } from 'lucide-react'

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedAgent, setSelectedAgent] = useState<typeof agents[0] | null>(null)
  const [favorites, setFavorites] = useState<number[]>([])
  const [isSubmitOpen, setIsSubmitOpen] = useState(false)
  const [submitStep, setSubmitStep] = useState(1)
  const [formData, setFormData] = useState({
    agentName: '',
    description: '',
    category: '',
    version: '1.0.0',
    author: '',
    features: '',
    repositoryUrl: '',
    documentation: ''
  })
  const [submitSuccess, setSubmitSuccess] = useState(false)

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
      fullDescription: 'This powerful research agent can search the web, analyze content, extract key information, and generate comprehensive reports. Perfect for market research, competitive analysis, and data gathering.',
      author: '@researcher_pro',
      rating: 4.8,
      downloads: 2340,
      stars: 512,
      badge: 'Trending',
      version: '2.1.0',
      updated: '2 days ago',
      features: ['Web Search', 'Data Analysis', 'Report Generation', 'Real-time Updates'],
      compatibility: 'All Platforms'
    },
    {
      id: 2,
      name: 'Crypto Trading Bot',
      category: 'trading',
      description: 'Automated cryptocurrency trading with advanced market analysis',
      fullDescription: 'Advanced trading bot with real-time market analysis, risk management, and automated trade execution. Supports multiple exchanges and trading pairs with customizable strategies.',
      author: '@trader_elite',
      rating: 4.6,
      downloads: 1840,
      stars: 428,
      badge: 'Featured',
      version: '1.5.2',
      updated: '5 days ago',
      features: ['Multi-Exchange', 'Risk Management', 'Auto Trading', 'Portfolio Tracking'],
      compatibility: 'Web3 Networks'
    },
    {
      id: 3,
      name: 'Content Writer Pro',
      category: 'content',
      description: 'AI-powered content creation, editing, and social media optimization',
      fullDescription: 'Professional content creation suite with AI writing, editing, SEO optimization, and social media formatting. Generate high-quality content for blogs, social media, and marketing.',
      author: '@writer_ai',
      rating: 4.7,
      downloads: 1920,
      stars: 456,
      badge: null,
      version: '3.0.1',
      updated: '1 week ago',
      features: ['Content Generation', 'SEO Optimization', 'Social Formatting', 'Plagiarism Check'],
      compatibility: 'All Platforms'
    },
    {
      id: 4,
      name: 'Code Analyzer',
      category: 'developer',
      description: 'Intelligent code review, bug detection, and refactoring suggestions',
      fullDescription: 'Comprehensive code analysis tool with bug detection, refactoring suggestions, security scanning, and performance optimization recommendations for multiple programming languages.',
      author: '@dev_tools',
      rating: 4.9,
      downloads: 2100,
      stars: 580,
      badge: 'Featured',
      version: '2.3.0',
      updated: '3 days ago',
      features: ['Bug Detection', 'Refactoring', 'Security Scan', 'Performance Analysis'],
      compatibility: 'Developers'
    },
    {
      id: 5,
      name: 'Multi-Agent Workflow',
      category: 'workflow',
      description: 'Orchestrate multiple agents for complex, multi-step operations',
      fullDescription: 'Powerful orchestration framework for running multiple agents in parallel, managing dependencies, and automating complex business processes with built-in error handling.',
      author: '@workflow_master',
      rating: 4.5,
      downloads: 1200,
      stars: 320,
      badge: null,
      version: '1.2.0',
      updated: '1 week ago',
      features: ['Agent Orchestration', 'Parallel Execution', 'Error Handling', 'Monitoring'],
      compatibility: 'Enterprise'
    },
    {
      id: 6,
      name: 'Data Pipeline Agent',
      category: 'research',
      description: 'ETL automation with data validation, transformation, and analysis',
      fullDescription: 'Complete ETL automation solution with data validation, transformation, cleansing, and advanced analytics. Supports multiple data sources and formats.',
      author: '@data_engineer',
      rating: 4.7,
      downloads: 980,
      stars: 245,
      badge: 'New',
      version: '1.0.0',
      updated: '2 days ago',
      features: ['ETL Pipeline', 'Data Validation', 'Transformation', 'Analytics'],
      compatibility: 'Data Teams'
    }
  ]

  const toggleFavorite = (agentId: number) => {
    setFavorites(prev => 
      prev.includes(agentId) 
        ? prev.filter(id => id !== agentId)
        : [...prev, agentId]
    )
  }

  const handleSubmitAgent = () => {
    if (submitStep === 1) {
      if (!formData.agentName || !formData.description || !formData.category) {
        alert('Please fill in all required fields')
        return
      }
      setSubmitStep(2)
    } else if (submitStep === 2) {
      if (!formData.author || !formData.repositoryUrl) {
        alert('Please fill in all required fields')
        return
      }
      setSubmitStep(3)
    } else if (submitStep === 3) {
      setSubmitSuccess(true)
      setTimeout(() => {
        setIsSubmitOpen(false)
        setSubmitStep(1)
        setSubmitSuccess(false)
        setFormData({
          agentName: '',
          description: '',
          category: '',
          version: '1.0.0',
          author: '',
          features: '',
          repositoryUrl: '',
          documentation: ''
        })
      }, 2000)
    }
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const closeSubmitModal = () => {
    setIsSubmitOpen(false)
    setSubmitStep(1)
    setFormData({
      agentName: '',
      description: '',
      category: '',
      version: '1.0.0',
      author: '',
      features: '',
      repositoryUrl: '',
      documentation: ''
    })
  }

  const filteredAgents = agents.filter(agent => {
    const matchCategory = selectedCategory === 'all' || agent.category === selectedCategory
    const matchSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       agent.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Agent Detail Modal */}
      {selectedAgent && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl max-h-[80vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-700 sticky top-0 bg-zinc-900">
              <h2 className="text-2xl font-bold">Agent Details</h2>
              <button
                onClick={() => setSelectedAgent(null)}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-3xl font-bold">{selectedAgent.name}</h3>
                    {selectedAgent.badge && (
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        selectedAgent.badge === 'Trending' ? 'bg-red-900/30 text-red-300 border border-red-800' :
                        selectedAgent.badge === 'Featured' ? 'bg-yellow-900/30 text-yellow-300 border border-yellow-800' :
                        'bg-green-900/30 text-green-300 border border-green-800'
                      }`}>
                        {selectedAgent.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-400">By {selectedAgent.author}</p>
                </div>
                <button
                  onClick={() => toggleFavorite(selectedAgent.id)}
                  className={`p-3 rounded-lg transition-all ${
                    favorites.includes(selectedAgent.id)
                      ? 'bg-red-900/30 text-red-400'
                      : 'bg-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${favorites.includes(selectedAgent.id) ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Description */}
              <p className="text-zinc-300 mb-6 leading-relaxed">{selectedAgent.fullDescription}</p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="bg-zinc-800/50 rounded-lg p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm text-zinc-400">Rating</span>
                  </div>
                  <div className="text-lg font-bold">{selectedAgent.rating}</div>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <Download className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-zinc-400">Downloads</span>
                  </div>
                  <div className="text-lg font-bold">{selectedAgent.downloads.toLocaleString()}</div>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <Award className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-zinc-400">Stars</span>
                  </div>
                  <div className="text-lg font-bold">{selectedAgent.stars}</div>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-zinc-400">Updated</span>
                  </div>
                  <div className="text-sm font-bold">{selectedAgent.updated}</div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedAgent.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                      <Zap className="w-4 h-4 text-green-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Version and Compatibility */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-zinc-800/30 rounded-lg mb-6">
                <div>
                  <div className="text-xs text-zinc-400 mb-1">Version</div>
                  <div className="font-semibold">{selectedAgent.version}</div>
                </div>
                <div>
                  <div className="text-xs text-zinc-400 mb-1">Compatibility</div>
                  <div className="font-semibold">{selectedAgent.compatibility}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-white text-zinc-950 font-semibold py-3 rounded-lg hover:bg-zinc-100 transition-colors">
                  Download Agent
                </button>
                <button className="px-4 py-3 border border-zinc-700 rounded-lg hover:border-zinc-600 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Submit Agent Modal */}
      {isSubmitOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl max-h-[80vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-700 sticky top-0 bg-zinc-900">
              <h2 className="text-2xl font-bold">Submit Your Agent</h2>
              <button
                onClick={closeSubmitModal}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Success State */}
            {submitSuccess && (
              <div className="p-12 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-green-900/30 border border-green-700/50 rounded-full">
                    <CheckCircle2 className="w-12 h-12 text-green-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Agent Submitted Successfully!</h3>
                <p className="text-zinc-300 mb-6">Your agent has been submitted for review. You'll receive a notification once it's approved and published to the marketplace.</p>
                <p className="text-sm text-zinc-500">Redirecting in 2 seconds...</p>
              </div>
            )}

            {!submitSuccess && (
              <>
                {/* Progress Indicator */}
                <div className="p-6 border-b border-zinc-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold">Step {submitStep} of 3</span>
                    <span className="text-sm text-zinc-400">{Math.round((submitStep / 3) * 100)}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(submitStep / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Form Content */}
                <div className="p-6">
                  {/* Step 1: Basic Info */}
                  {submitStep === 1 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Agent Name *</label>
                        <input
                          type="text"
                          name="agentName"
                          value={formData.agentName}
                          onChange={handleFormChange}
                          placeholder="e.g., Advanced Research Agent"
                          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-green-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Description *</label>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleFormChange}
                          placeholder="Describe what your agent does..."
                          rows={4}
                          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-green-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Category *</label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleFormChange}
                          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                        >
                          <option value="">Select a category</option>
                          <option value="research">Research</option>
                          <option value="trading">Trading</option>
                          <option value="content">Content</option>
                          <option value="developer">Developer</option>
                          <option value="workflow">Workflows</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Details */}
                  {submitStep === 2 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold mb-4">Agent Details</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Author *</label>
                          <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleFormChange}
                            placeholder="e.g., @your_username"
                            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-green-500 transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Version</label>
                          <input
                            type="text"
                            name="version"
                            value={formData.version}
                            onChange={handleFormChange}
                            placeholder="1.0.0"
                            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-green-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Key Features (comma-separated)</label>
                        <input
                          type="text"
                          name="features"
                          value={formData.features}
                          onChange={handleFormChange}
                          placeholder="e.g., Web Search, Data Analysis, Report Generation"
                          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-green-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Repository URL *</label>
                        <input
                          type="text"
                          name="repositoryUrl"
                          value={formData.repositoryUrl}
                          onChange={handleFormChange}
                          placeholder="https://github.com/username/agent-name"
                          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-green-500 transition-colors"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Review */}
                  {submitStep === 3 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Review Your Submission</h3>
                      
                      <div className="space-y-3 bg-zinc-800/50 rounded-lg p-4">
                        <div>
                          <span className="text-sm text-zinc-400">Agent Name</span>
                          <p className="font-semibold">{formData.agentName}</p>
                        </div>
                        <div className="pt-3 border-t border-zinc-700">
                          <span className="text-sm text-zinc-400">Author</span>
                          <p className="font-semibold">{formData.author}</p>
                        </div>
                        <div className="pt-3 border-t border-zinc-700">
                          <span className="text-sm text-zinc-400">Category</span>
                          <p className="font-semibold capitalize">{formData.category}</p>
                        </div>
                        <div className="pt-3 border-t border-zinc-700">
                          <span className="text-sm text-zinc-400">Version</span>
                          <p className="font-semibold">{formData.version}</p>
                        </div>
                        <div className="pt-3 border-t border-zinc-700">
                          <span className="text-sm text-zinc-400">Description</span>
                          <p className="text-sm text-zinc-300">{formData.description}</p>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                        <p className="text-sm text-zinc-300">
                          ✓ Your agent will be reviewed by our team before being published to the marketplace
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal Actions */}
                <div className="flex gap-3 p-6 border-t border-zinc-700 bg-zinc-800/50">
                  {submitStep > 1 && (
                    <button
                      onClick={() => setSubmitStep(submitStep - 1)}
                      className="px-6 py-2.5 border border-zinc-700 rounded-lg hover:border-zinc-600 transition-colors font-medium"
                    >
                      Back
                    </button>
                  )}
                  <button
                    onClick={closeSubmitModal}
                    className="px-6 py-2.5 text-zinc-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmitAgent}
                    className="flex-1 px-6 py-2.5 bg-green-500 hover:bg-green-600 text-zinc-950 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-green-500/20"
                  >
                    {submitStep === 3 ? 'Submit Agent' : 'Continue'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="pt-24 pb-12 border-b border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          
          <h1 className="text-5xl font-bold mb-4">Agent Marketplace</h1>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl">Discover, share, and collaborate with thousands of autonomous agents built by the community.</p>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search agents, workflows, or tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-green-500 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-lg transition-all flex items-center gap-2 font-medium ${
                    selectedCategory === cat.id
                      ? 'bg-green-500 text-zinc-950 shadow-lg shadow-green-500/30'
                      : 'bg-zinc-900 border border-zinc-700 text-zinc-400 hover:border-zinc-600 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{cat.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-6 hover:border-zinc-600 transition-colors">
            <div className="text-3xl font-bold mb-1 text-green-400">4,280+</div>
            <div className="text-sm text-zinc-400 font-medium">Agents Available</div>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-6 hover:border-zinc-600 transition-colors">
            <div className="text-3xl font-bold mb-1 text-blue-400">12.5K+</div>
            <div className="text-sm text-zinc-400 font-medium">Active Users</div>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-6 hover:border-zinc-600 transition-colors">
            <div className="text-3xl font-bold mb-1 text-purple-400">58.2M</div>
            <div className="text-sm text-zinc-400 font-medium">Total Downloads</div>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-6 hover:border-zinc-600 transition-colors">
            <div className="text-3xl font-bold mb-1 text-orange-400">98%</div>
            <div className="text-sm text-zinc-400 font-medium">Satisfaction Rate</div>
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
                  className="group bg-zinc-900/50 border border-zinc-700 rounded-lg p-6 hover:border-zinc-600 hover:bg-zinc-900 transition-all hover:shadow-lg hover:shadow-white/10 flex flex-col"
                >
                  {/* Badge */}
                  {agent.badge && (
                    <div className="mb-3">
                      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        agent.badge === 'Trending' ? 'bg-red-900/40 text-red-300 border border-red-700/50' :
                        agent.badge === 'Featured' ? 'bg-yellow-900/40 text-yellow-300 border border-yellow-800/50' :
                        'bg-green-900/40 text-green-300 border border-green-700/50'
                      }`}>
                        {agent.badge}
                      </span>
                    </div>
                  )}
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 group-hover:text-green-400 transition-colors">{agent.name}</h3>
                  
                  {/* Description */}
                  <p className="text-sm text-zinc-400 mb-4 flex-grow">{agent.description}</p>
                  
                  {/* Author */}
                  <p className="text-xs text-zinc-500 mb-4">By {agent.author}</p>
                  
                  {/* Rating and Stats */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-zinc-800 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-semibold">{agent.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-zinc-400">
                      <Download className="w-4 h-4" />
                      <span>{agent.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1 text-zinc-400">
                      <Award className="w-4 h-4" />
                      <span>{agent.stars}</span>
                    </div>
                  </div>
                  
                  {/* Button */}
                  <button 
                    onClick={() => setSelectedAgent(agent)}
                    className="w-full px-4 py-2.5 bg-green-500 hover:bg-green-600 text-zinc-950 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-green-500/20"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-zinc-400 text-lg mb-4">No agents found matching your search</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="text-green-400 hover:text-green-300 transition-colors font-medium"
              >
                Clear filters →
              </button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-700/50 rounded-xl p-8 text-center backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-3">Ready to Share Your Agent?</h3>
          <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">Publish your agents to the marketplace and reach thousands of developers worldwide.</p>
          <button 
            onClick={() => setIsSubmitOpen(true)}
            className="px-8 py-3.5 bg-green-500 hover:bg-green-600 text-zinc-950 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-green-500/30"
          >
            Submit Your Agent
          </button>
        </div>
      </div>
    </main>
  )
}
