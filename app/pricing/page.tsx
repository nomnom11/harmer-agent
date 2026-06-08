'use client'

import Link from 'next/link'
import { ArrowLeft, Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for getting started with autonomous agents',
      features: [
        'Up to 10,000 API calls/month',
        '1 Agent',
        'Basic monitoring',
        'Email support',
        'Standard rate limits',
        'Community access'
      ],
      cta: 'Get Started',
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'For growing teams and production workloads',
      features: [
        'Up to 1,000,000 API calls/month',
        '25 Agents',
        'Advanced analytics',
        'Priority support',
        'Custom rate limits',
        'Webhook integrations',
        'Team management',
        'API versioning'
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large-scale deployments and custom needs',
      features: [
        'Unlimited API calls',
        'Unlimited Agents',
        'Real-time monitoring',
        '24/7 Phone support',
        'Custom rate limits',
        'Dedicated account manager',
        'Advanced security',
        'SLA guarantee (99.99%)',
        'Custom integrations',
        'On-premise deployment'
      ],
      cta: 'Contact Sales',
      highlighted: false
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
          
          <h1 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Choose the plan that fits your needs. Scale as you grow.
          </p>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-lg transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-green-500/10 to-transparent border-2 border-green-500 shadow-lg shadow-green-500/20'
                  : 'bg-zinc-900/50 border border-zinc-700 hover:border-zinc-600'
              }`}
            >
              {plan.highlighted && (
                <div className="px-6 py-2 bg-green-500 text-zinc-950 text-sm font-semibold text-center rounded-t-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-zinc-400 text-sm ml-2">{plan.period}</span>
                </div>
                
                <button className={`w-full px-6 py-3 rounded-lg font-semibold mb-8 transition-all ${
                  plan.highlighted
                    ? 'bg-green-500 hover:bg-green-600 text-zinc-950 shadow-lg shadow-green-500/20'
                    : 'border border-zinc-700 text-white hover:border-zinc-600'
                }`}>
                  {plan.cta}
                </button>
                
                <div className="space-y-4">
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Can I switch plans anytime?</h3>
              <p className="text-zinc-400 text-sm">Yes! You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.</p>
            </div>
            
            <div className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Do you offer a free trial?</h3>
              <p className="text-zinc-400 text-sm">Yes, all Professional and Enterprise plans come with a 14-day free trial. No credit card required.</p>
            </div>
            
            <div className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-6">
              <h3 className="font-semibold mb-3">What about overage charges?</h3>
              <p className="text-zinc-400 text-sm">We'll notify you when approaching your limits. You can increase limits anytime, and only pay for what you use beyond your plan.</p>
            </div>
            
            <div className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Is there a discount for annual billing?</h3>
              <p className="text-zinc-400 text-sm">Yes! Pay annually and get 20% off. Contact sales for Enterprise annual pricing.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
