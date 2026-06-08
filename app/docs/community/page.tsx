import Link from 'next/link'
import { MessageSquare, Users, HelpCircle, BookOpen } from 'lucide-react'

export const metadata = {
  title: 'Community - Harmer Agent Documentation',
  description: 'Join the Harmer Agent community, get support, and collaborate with other developers.',
}

export default function Community() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
        <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
        <span>/</span>
        <span className="text-white">Community</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4">Community & Support</h1>
      <p className="text-xl text-zinc-400 mb-12">
        Connect with developers, share ideas, and get support from the Harmer Agent community.
      </p>

      <section id="forums" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Community Forums</h2>
        <p className="text-zinc-300 mb-6">
          Join our active community of developers building autonomous agents.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <MessageSquare className="w-6 h-6 mb-2 text-blue-400" />
            <h3 className="font-bold mb-2">Discussion Board</h3>
            <p className="text-sm text-zinc-400 mb-4">Share ideas and discuss best practices</p>
            <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">Visit Board →</a>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <Users className="w-6 h-6 mb-2 text-green-400" />
            <h3 className="font-bold mb-2">User Groups</h3>
            <p className="text-sm text-zinc-400 mb-4">Connect with users in your region</p>
            <a href="#" className="text-green-400 hover:text-green-300 text-sm">Find Groups →</a>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <BookOpen className="w-6 h-6 mb-2 text-purple-400" />
            <h3 className="font-bold mb-2">Code Examples</h3>
            <p className="text-sm text-zinc-400 mb-4">Learn from community-shared code</p>
            <a href="#" className="text-purple-400 hover:text-purple-300 text-sm">Browse Examples →</a>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <HelpCircle className="w-6 h-6 mb-2 text-orange-400" />
            <h3 className="font-bold mb-2">Contests & Challenges</h3>
            <p className="text-sm text-zinc-400 mb-4">Participate and win prizes</p>
            <a href="#" className="text-orange-400 hover:text-orange-300 text-sm">See Challenges →</a>
          </div>
        </div>
      </section>

      <section id="support" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Getting Support</h2>
        <p className="text-zinc-300 mb-6">Multiple ways to get help:</p>
        
        <div className="space-y-4">
          <div className="border border-zinc-800 rounded-lg p-4">
            <h3 className="font-bold mb-2">Email Support</h3>
            <p className="text-zinc-400 text-sm">Email us at support@harmeragent.com for assistance</p>
          </div>

          <div className="border border-zinc-800 rounded-lg p-4">
            <h3 className="font-bold mb-2">Live Chat</h3>
            <p className="text-zinc-400 text-sm">Chat with support specialists (available 24/7 for premium users)</p>
          </div>

          <div className="border border-zinc-800 rounded-lg p-4">
            <h3 className="font-bold mb-2">GitHub Issues</h3>
            <p className="text-zinc-400 text-sm">Report bugs and request features on our GitHub repository</p>
          </div>

          <div className="border border-zinc-800 rounded-lg p-4">
            <h3 className="font-bold mb-2">Office Hours</h3>
            <p className="text-zinc-400 text-sm">Join weekly developer office hours for Q&A with the team</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Contribute</h2>
        <p className="text-zinc-300 mb-4">
          Harmer Agent is built by and for the community. We welcome contributions!
        </p>
        <ul className="space-y-2 text-zinc-300 ml-4">
          <li><strong>Code:</strong> Submit pull requests to improve the platform</li>
          <li><strong>Agents:</strong> Share your agents with the marketplace</li>
          <li><strong>Documentation:</strong> Help improve our docs and guides</li>
          <li><strong>Feedback:</strong> Share ideas and suggestions</li>
        </ul>
      </section>

      <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Get Involved Today</h2>
        <p className="text-zinc-300 mb-6">
          Whether you&apos;re just getting started or an experienced developer, there&apos;s a place for you in the Harmer Agent community.
        </p>
        <button className="px-6 py-3 bg-white text-zinc-950 font-semibold rounded-lg hover:bg-zinc-100 transition-colors">
          Join Community
        </button>
      </section>
    </main>
  )
}
