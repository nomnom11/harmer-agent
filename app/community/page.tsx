'use client'

import Link from 'next/link'
import { ArrowLeft, Heart, Users, Send, MessageCircle, Globe, Code, Zap } from 'lucide-react'

export default function Community() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Community</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">Connect with developers, share insights, and collaborate on building the future of autonomous agents.</p>
        </div>

        {/* Twitter/X Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 border border-blue-700 rounded-xl p-8 mb-16">
          <div className="flex items-center gap-4 mb-4">
            <Send className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Follow us on X (Twitter)</h2>
          </div>
          <p className="text-blue-100 mb-6 max-w-2xl">Stay updated with the latest announcements, agent releases, and community highlights. Join thousands of developers following Harmer Agent.</p>
          <a href="https://x.com/harmerAgent" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
            <Send className="w-5 h-5" />
            Follow @harmerAgent
          </a>
        </div>

        {/* Community Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Discord */}
          <div className="border border-zinc-800 rounded-lg p-8 hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-bold">Discord Server</h3>
            </div>
            <p className="text-zinc-400 mb-6">Join our active Discord community to discuss agent development, share tips, and get real-time support from fellow developers.</p>
            <a href="#" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium">
              Join Discord <Zap className="w-4 h-4" />
            </a>
          </div>

          {/* Forum */}
          <div className="border border-zinc-800 rounded-lg p-8 hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-bold">Community Forum</h3>
            </div>
            <p className="text-zinc-400 mb-6">Browse discussions, ask questions, and share knowledge about building, deploying, and scaling autonomous agents with Harmer.</p>
            <a href="#" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium">
              Visit Forum <Zap className="w-4 h-4" />
            </a>
          </div>

          {/* GitHub */}
          <div className="border border-zinc-800 rounded-lg p-8 hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-orange-400" />
              <h3 className="text-xl font-bold">GitHub Community</h3>
            </div>
            <p className="text-zinc-400 mb-6">Contribute to open-source projects, report issues, and collaborate on agent frameworks. Check out our public repositories.</p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium">
              Visit GitHub <Zap className="w-4 h-4" />
            </a>
          </div>

          {/* Events */}
          <div className="border border-zinc-800 rounded-lg p-8 hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-red-400" />
              <h3 className="text-xl font-bold">Events & Webinars</h3>
            </div>
            <p className="text-zinc-400 mb-6">Join monthly webinars, workshops, and community meetups to learn from experts and connect with other developers.</p>
            <a href="#" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium">
              View Events <Zap className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Community Stats */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-12 mb-16">
          <h2 className="text-2xl font-bold mb-8">Community By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">12.5K+</div>
              <div className="text-zinc-400">Active Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">850+</div>
              <div className="text-zinc-400">Daily Conversations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">2.3K+</div>
              <div className="text-zinc-400">Shared Agents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">98%</div>
              <div className="text-zinc-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Community Guidelines</h2>
          <ul className="space-y-3 text-zinc-300">
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Be respectful and constructive in all interactions</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Share knowledge and help others learn and grow</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Avoid spam, self-promotion, and low-quality content</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Report inappropriate behavior to moderators immediately</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span>Respect intellectual property and credit original creators</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
