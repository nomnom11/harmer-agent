'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Zap, Brain, Users, Globe, Workflow, Terminal as TerminalIcon, TrendingUp, Code, Send, MessageSquare } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLaunchAgent = () => {
    console.log('[v0] Launch Agent clicked')
  }

  const handleOpenTerminal = () => {
    console.log('[v0] Open Terminal clicked')
    alert('Terminal - Coming soon! Opening terminal interface...')
  }

  const handleNavClick = (section) => {
    console.log(`[v0] Navigation clicked: ${section}`)
    setIsMenuOpen(false)
    alert(`${section} section - Coming soon!`)
  }

  const handleConnectWallet = () => {
    console.log('[v0] Connect Wallet clicked')
    alert('Connect Wallet - Coming soon!')
  }

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Agent Builder',
      description: 'Create agents using natural language prompts. Configure personality, goals, memory, tools, and permissions.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Persistent Memory',
      description: 'Agents remember conversations, tasks, workflows, and user preferences across sessions.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Multi-Agent Coordination',
      description: 'Deploy multiple agents that collaborate on complex objectives and workflows.',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Browser Automation',
      description: 'Navigate websites, fill forms, gather information, and execute tasks automatically.',
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: 'Workflow Engine',
      description: 'Build automated pipelines with drag-and-drop blocks for complex sequences.',
    },
    {
      icon: <TerminalIcon className="w-6 h-6" />,
      title: 'Terminal Deployment',
      description: 'Launch agents directly from a command console with instant deployment.',
    },
  ]

  const agents = [
    { name: 'Research Agent', icon: '🔍' },
    { name: 'Trading Agent', icon: '📈' },
    { name: 'Social Media Agent', icon: '📱' },
    { name: 'Developer Agent', icon: '💻' },
    { name: 'Marketing Agent', icon: '📢' },
    { name: 'NFT Agent', icon: '🎨' },
  ]

  const stats = [
    { label: 'Active Agents', value: '2,847' },
    { label: 'Tasks Completed', value: '1.2M+' },
    { label: 'Memory Nodes', value: '5.8B' },
    { label: 'Running Workflows', value: '12.3K' },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-50">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800/50' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/harmer-logo.png"
                  alt="Harmer Agent"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-mono text-sm font-bold tracking-tighter">HARMER AGENT</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => handleNavClick('Home')} className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer">Home</button>
              <Link href="/build-agent" className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer">Build Agent</Link>
              <button onClick={() => handleNavClick('Marketplace')} className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer">Marketplace</button>
              <button onClick={() => handleNavClick('Workflows')} className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer">Workflows</button>
              <button onClick={() => handleNavClick('Dashboard')} className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer">Dashboard</button>
              <Link href="/docs" className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer">Docs</Link>
              <button onClick={() => handleNavClick('Community')} className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer">Community</button>
              <button onClick={handleConnectWallet} className="px-4 py-2 border border-zinc-700 rounded-lg text-sm font-medium hover:bg-zinc-900 transition-colors cursor-pointer">
                Connect Wallet
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <button onClick={() => handleNavClick('Home')} className="block w-full text-left px-4 py-2 text-sm text-zinc-400 hover:text-white">Home</button>
              <Link href="/build-agent" className="block w-full text-left px-4 py-2 text-sm text-zinc-400 hover:text-white">Build Agent</Link>
              <button onClick={() => handleNavClick('Marketplace')} className="block w-full text-left px-4 py-2 text-sm text-zinc-400 hover:text-white">Marketplace</button>
              <button onClick={() => handleNavClick('Workflows')} className="block w-full text-left px-4 py-2 text-sm text-zinc-400 hover:text-white">Workflows</button>
              <button onClick={() => handleNavClick('Dashboard')} className="block w-full text-left px-4 py-2 text-sm text-zinc-400 hover:text-white">Dashboard</button>
              <Link href="/docs" className="block w-full text-left px-4 py-2 text-sm text-zinc-400 hover:text-white">Docs</Link>
              <button onClick={() => handleNavClick('Community')} className="block w-full text-left px-4 py-2 text-sm text-zinc-400 hover:text-white">Community</button>
              <button onClick={handleConnectWallet} className="w-full px-4 py-2 border border-zinc-700 rounded-lg text-sm font-medium hover:bg-zinc-900">
                Connect Wallet
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_25%,rgba(68,68,68,.2)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.2)_75%,rgba(68,68,68,.2))] bg-[length:40px_40px] opacity-30" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-zinc-700 rounded-full text-sm text-zinc-300">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                The Autonomous Intelligence Layer
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
                Build Autonomous Agents That Never Stop Learning
              </h1>

              <p className="text-lg text-zinc-400 leading-relaxed">
                Deploy intelligent AI agents with memory, reasoning, automation, and multi-agent collaboration.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/build-agent"
                  className="px-6 py-3 bg-white text-zinc-950 font-semibold rounded-lg hover:bg-zinc-100 transition-colors cursor-pointer inline-block">
                  Launch Agent
                </Link>
                <button 
                  onClick={handleOpenTerminal}
                  className="px-6 py-3 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-900 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                  <TerminalIcon className="w-4 h-4" />
                  Open Terminal
                </button>
              </div>
            </div>

            {/* Right Content - Logo Image */}
            <div className="relative h-full min-h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-2xl blur-2xl" />
              <div className="relative">
                <Image
                  src="/harmer-logo.png"
                  alt="Harmer Agent AI"
                  width={350}
                  height={450}
                  className="drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-zinc-400 text-lg">Everything you need to build and deploy autonomous agents</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-6 border border-zinc-800 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700"
              >
                <div className="mb-4 inline-flex p-3 bg-zinc-800 rounded-lg group-hover:bg-zinc-700 transition-colors text-white">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="border border-zinc-800 rounded-xl bg-zinc-950 p-8 font-mono text-sm overflow-x-auto">
            <div className="text-green-500 mb-4">$ harmer</div>
            <div className="space-y-2 text-zinc-300">
              <div><span className="text-zinc-500">&gt;</span> harmer create researcher-agent</div>
              <div className="text-green-500">✓ Agent created successfully</div>
              <div><span className="text-zinc-500">&gt;</span> harmer memory enable</div>
              <div className="text-green-500">✓ Memory system initialized</div>
              <div><span className="text-zinc-500">&gt;</span> harmer deploy</div>
              <div className="text-green-500">✓ Agent deployed</div>
              <div><span className="text-zinc-500">&gt;</span> agent online</div>
              <div className="text-green-500">✓ Agent is now active and learning</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Platform Statistics</h2>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 border border-zinc-800 rounded-xl bg-zinc-900/50 backdrop-blur-sm text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zinc-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Live Feed */}
          <div className="border border-zinc-800 rounded-xl bg-zinc-900/50 p-8">
            <h3 className="font-semibold text-lg mb-6">Live Agent Feed</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 border border-zinc-800 rounded-lg bg-zinc-950/50">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-1 animate-pulse" />
                  <div className="flex-1">
                    <div className="font-medium text-sm mb-1">Research Agent-{idx}</div>
                    <div className="text-zinc-400 text-xs">Processing: Market analysis report • Memory: {45 + idx * 10}% • Status: Active</div>
                  </div>
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Agent Marketplace</h2>
          <p className="text-zinc-400 text-center mb-12">Choose from pre-built agents or create your own</p>

          <div className="grid md:grid-cols-3 gap-6">
            {agents.map((agent, idx) => (
              <div
                key={idx}
                className="group p-6 border border-zinc-800 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 backdrop-blur-sm transition-all duration-300 cursor-pointer hover:border-zinc-600"
              >
                <div className="text-4xl mb-4">{agent.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{agent.name}</h3>
                <p className="text-zinc-400 text-sm mb-4">Deploy instantly and start automating</p>
                <button className="w-full px-4 py-2 border border-zinc-700 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors">
                  Deploy
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Visualization Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Workflow Engine</h2>

          <div className="border border-zinc-800 rounded-xl bg-zinc-900/50 p-12 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {['Prompt', 'Reasoning', 'Memory', 'Action', 'Result'].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4 w-full md:w-auto">
                  <div className="flex-1 md:flex-none px-6 py-3 bg-zinc-800 rounded-lg text-center font-medium text-white whitespace-nowrap">
                    {step}
                  </div>
                  {idx < 4 && (
                    <div className="hidden md:block w-8 h-0.5 bg-gradient-to-r from-zinc-700 to-zinc-600" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 bg-zinc-950 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-white to-zinc-400 rounded-lg flex items-center justify-center font-bold text-zinc-950">
                  H
                </div>
                <span className="font-mono font-bold">HARMER</span>
              </div>
              <p className="text-zinc-400 text-sm">The Autonomous Intelligence Layer</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-white transition-colors">Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-zinc-400 text-sm">© 2024 Harmer Agent. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  <Code className="w-5 h-5" />
                </a>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  <Send className="w-5 h-5" />
                </a>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
