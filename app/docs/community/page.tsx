import Link from 'next/link'
import { MessageSquare, Users, HelpCircle, BookOpen } from 'lucide-react'

export const metadata = {
  title: 'Community - Harmer Agent Documentation',
  description: 'Join the Harmer Agent community, get support, and collaborate with other developers.',
}

export default function Community() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
        <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
        <span>/</span>
        <span className="text-white">Community</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4">Community</h1>
      <p className="text-xl text-zinc-400 mb-12">Join thousands of developers building with Harmer Agent. Share knowledge, get help, and collaborate.</p>

      <section id="forums" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Forums & Discussion</h2>
        <div className="space-y-4">
          <div className="border border-zinc-800 rounded-lg p-6 hover:bg-zinc-900 transition-colors">
            <div className="flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">General Discussion</h4>
                <p className="text-sm text-zinc-400">Ask questions, share ideas, and discuss features</p>
                <p className="text-xs text-zinc-500 mt-2">2,340 topics • 12,580 posts</p>
              </div>
            </div>
          </div>

          <div className="border border-zinc-800 rounded-lg p-6 hover:bg-zinc-900 transition-colors">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Showcase</h4>
                <p className="text-sm text-zinc-400">Share your agents, workflows, and projects</p>
                <p className="text-xs text-zinc-500 mt-2">1,240 projects • 4,890 likes</p>
              </div>
            </div>
          </div>

          <div className="border border-zinc-800 rounded-lg p-6 hover:bg-zinc-900 transition-colors">
            <div className="flex items-start gap-3">
              <HelpCircle className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Help & Support</h4>
                <p className="text-sm text-zinc-400">Get answers to common questions and issues</p>
                <p className="text-xs text-zinc-500 mt-2">Avg. response time: 2 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="support" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Support Channels</h2>
        <div className="space-y-4">
          <div className="border border-zinc-800 rounded-lg p-4">
            <h4 className="font-bold mb-2">Discord Server</h4>
            <p className="text-sm text-zinc-400">Real-time chat with the community and team</p>
            <a href="#" className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block">Join Discord →</a>
          </div>

          <div className="border border-zinc-800 rounded-lg p-4">
            <h4 className="font-bold mb-2">GitHub Discussions</h4>
            <p className="text-sm text-zinc-400">Discuss features, report bugs, and contribute</p>
            <a href="#" className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block">Open on GitHub →</a>
          </div>

          <div className="border border-zinc-800 rounded-lg p-4">
            <h4 className="font-bold mb-2">Email Support</h4>
            <p className="text-sm text-zinc-400">Priority support for enterprise users</p>
            <a href="mailto:support@harmeragent.com" className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block">support@harmeragent.com</a>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Contributing</h2>
        <p className="text-zinc-300 mb-4">We welcome contributions from the community!</p>
        <ul className="space-y-2 text-zinc-300 ml-4">
          <li><strong>Code:</strong> Submit pull requests to improve Harmer Agent</li>
          <li><strong>Documentation:</strong> Help improve guides and API docs</li>
          <li><strong>Agents:</strong> Publish agents to the marketplace</li>
          <li><strong>Feedback:</strong> Share ideas and feature requests</li>
          <li><strong>Bug Reports:</strong> Help us identify and fix issues</li>
        </ul>
      </section>
    </main>
  )
}
