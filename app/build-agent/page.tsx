'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Terminal } from '@/components/Terminal'
import { useTerminal } from '@/hooks/useTerminal'
import { Zap, Plus, X, ArrowLeft } from 'lucide-react'

export default function BuildAgentPage() {
  const { lines, isLoading, createAgent } = useTerminal()
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    type: 'general',
    capabilities: [] as string[],
    model: 'gpt-4',
    temperature: 0.7,
    maxTokens: 2048,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const allCapabilities = [
    'Web Browsing',
    'File Processing',
    'Email Management',
    'Data Analysis',
    'API Integration',
    'Code Execution',
    'Memory Management',
    'Multi-Agent Coordination',
  ]

  const agentTypes = [
    { value: 'general', label: 'General Purpose' },
    { value: 'research', label: 'Research Agent' },
    { value: 'automation', label: 'Automation Agent' },
    { value: 'trading', label: 'Trading Agent' },
    { value: 'developer', label: 'Developer Agent' },
  ]

  const validate = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Agent name is required'
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required'
    }
    if (formData.capabilities.length === 0) {
      newErrors.capabilities = 'Select at least one capability'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validate()) return

    await createAgent({
      name: formData.name,
      description: formData.description,
      type: formData.type,
      capabilities: formData.capabilities,
      model: formData.model,
      temperature: formData.temperature,
    })
  }

  const toggleCapability = (cap: string) => {
    setFormData(prev => ({
      ...prev,
      capabilities: prev.capabilities.includes(cap)
        ? prev.capabilities.filter(c => c !== cap)
        : [...prev.capabilities, cap]
    }))
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-8 h-8 text-green-400" />
            <h1 className="text-4xl font-bold">Build Your Agent</h1>
          </div>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Create a powerful autonomous agent with custom capabilities, configure its behavior, and deploy it instantly.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Agent Name */}
              <div>
                <label className="block text-sm font-semibold mb-2">Agent Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, name: e.target.value }))
                    if (errors.name) setErrors(prev => ({ ...prev, name: '' }))
                  }}
                  placeholder="e.g., Research Bot, Trading Agent"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-green-400 transition-colors"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold mb-2">Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, description: e.target.value }))
                    if (errors.description) setErrors(prev => ({ ...prev, description: '' }))
                  }}
                  placeholder="Describe what your agent does..."
                  rows={3}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-green-400 transition-colors resize-none"
                />
                {errors.description && <p className="text-red-400 text-sm mt-1">{errors.description}</p>}
              </div>

              {/* Agent Type */}
              <div>
                <label className="block text-sm font-semibold mb-2">Agent Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-400 transition-colors"
                >
                  {agentTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              {/* Capabilities */}
              <div>
                <label className="block text-sm font-semibold mb-3">Capabilities *</label>
                <div className="grid grid-cols-2 gap-3">
                  {allCapabilities.map(cap => (
                    <button
                      key={cap}
                      type="button"
                      onClick={() => toggleCapability(cap)}
                      className={`px-4 py-2 rounded-lg border transition-colors text-sm font-medium ${
                        formData.capabilities.includes(cap)
                          ? 'bg-green-400 border-green-400 text-zinc-950'
                          : 'bg-transparent border-zinc-700 text-zinc-300 hover:border-zinc-600'
                      }`}
                    >
                      {formData.capabilities.includes(cap) ? (
                        <span className="flex items-center justify-center">✓ {cap}</span>
                      ) : (
                        cap
                      )}
                    </button>
                  ))}
                </div>
                {errors.capabilities && <p className="text-red-400 text-sm mt-2">{errors.capabilities}</p>}
              </div>

              {/* Advanced Options */}
              <div className="border-t border-zinc-800 pt-6">
                <h3 className="font-semibold mb-4">Advanced Options</h3>
                
                <div className="space-y-4">
                  {/* Model Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Model</label>
                    <select
                      value={formData.model}
                      onChange={(e) => setFormData(prev => ({ ...prev, model: e.target.value }))}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-green-400"
                    >
                      <option value="gpt-4">GPT-4</option>
                      <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                      <option value="claude-3">Claude 3</option>
                      <option value="mixtral">Mixtral</option>
                    </select>
                  </div>

                  {/* Temperature */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium">Temperature</label>
                      <span className="text-green-400 text-sm">{formData.temperature.toFixed(1)}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={formData.temperature}
                      onChange={(e) => setFormData(prev => ({ ...prev, temperature: parseFloat(e.target.value) }))}
                      className="w-full"
                    />
                    <p className="text-xs text-zinc-400 mt-1">Lower = more deterministic, Higher = more creative</p>
                  </div>

                  {/* Max Tokens */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Max Tokens</label>
                    <input
                      type="number"
                      value={formData.maxTokens}
                      onChange={(e) => setFormData(prev => ({ ...prev, maxTokens: parseInt(e.target.value) }))}
                      min="256"
                      max="8192"
                      step="256"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-green-400"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-400 text-zinc-950 font-bold py-3 rounded-lg hover:bg-green-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                {isLoading ? 'Creating Agent...' : 'Create Agent'}
              </button>
            </form>
          </div>

          {/* Terminal Section */}
          <div className="lg:h-full min-h-96">
            <Terminal lines={lines} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </main>
  )
}
