'use client'

import Link from 'next/link'
import { ArrowLeft, Brain, Zap, Shield, Globe, Code, Workflow, BarChart3, Lock, Gauge, Cpu, Network } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Models',
      description: 'Powered by cutting-edge language models with multi-modal capabilities for complex reasoning and problem-solving.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Execution',
      description: 'Optimized for speed with sub-second response times and parallel processing capabilities.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'End-to-end encryption, role-based access control, and comprehensive audit logs for compliance.'
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Deployed across multiple regions with 99.99% uptime SLA and automatic failover.'
    },
    {
      icon: Code,
      title: 'Developer Friendly',
      description: 'Comprehensive APIs, SDKs, and documentation for seamless integration with your existing systems.'
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Build complex multi-step workflows with conditional logic and error handling.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time monitoring, detailed performance metrics, and actionable insights.'
    },
    {
      icon: Lock,
      title: 'Data Privacy',
      description: 'GDPR, CCPA, and SOC 2 compliant with complete data ownership and control.'
    },
    {
      icon: Gauge,
      title: 'Fine-tuning Ready',
      description: 'Customize models with your own data for domain-specific applications.'
    },
    {
      icon: Cpu,
      title: 'Scalable Architecture',
      description: 'Automatically scales to handle millions of requests per day.'
    },
    {
      icon: Network,
      title: 'API Integration',
      description: 'Connect to thousands of external services with built-in integrations.'
    }
  ]

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <div className="pt-24 pb-12 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          
          <h1 className="text-5xl font-bold mb-4">Powerful Features</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Everything you need to build, deploy, and scale intelligent autonomous agents.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-6 hover:border-zinc-600 transition-all hover:bg-zinc-900">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <Icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-700/50 rounded-xl p-8 text-center backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-3">Ready to get started?</h2>
          <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
            Start building with Harmer Agent today and experience the power of autonomous intelligence.
          </p>
          <Link href="/build-agent" className="inline-block px-8 py-3.5 bg-green-500 hover:bg-green-600 text-zinc-950 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-green-500/30">
            Build Your Agent
          </Link>
        </div>
      </div>
    </main>
  )
}
