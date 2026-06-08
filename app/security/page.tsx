'use client'

import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Eye, Zap, FileCheck, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function Security() {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data in transit and at rest is encrypted using industry-standard AES-256 encryption.'
    },
    {
      icon: Shield,
      title: 'Enterprise Authentication',
      description: 'Multi-factor authentication, SSO integration, and granular role-based access control.'
    },
    {
      icon: Eye,
      title: 'Audit Logging',
      description: 'Complete audit trails of all system activities for compliance and accountability.'
    },
    {
      icon: Zap,
      title: 'DDoS Protection',
      description: 'Advanced DDoS mitigation and rate limiting to protect against attacks.'
    },
    {
      icon: FileCheck,
      title: 'Data Privacy',
      description: 'GDPR, CCPA, HIPAA, and SOC 2 Type II compliant with regular security audits.'
    },
    {
      icon: AlertCircle,
      title: 'Threat Detection',
      description: '24/7 monitoring with real-time threat detection and incident response.'
    }
  ]

  const certifications = [
    { name: 'SOC 2 Type II', verified: true },
    { name: 'GDPR Compliant', verified: true },
    { name: 'HIPAA Compliant', verified: true },
    { name: 'ISO 27001', verified: true },
    { name: 'CCPA Compliant', verified: true },
    { name: 'PCI DSS', verified: true }
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
          
          <h1 className="text-5xl font-bold mb-4">Security & Compliance</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Enterprise-grade security to protect your data and ensure compliance with regulations.
          </p>
        </div>
      </div>

      {/* Security Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12">Security Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-6 hover:border-zinc-600 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <Icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Certifications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-800">
        <h2 className="text-3xl font-bold mb-12">Certifications & Compliance</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div key={idx} className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-6 flex items-center gap-3 hover:border-zinc-600 transition-all">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="font-medium">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Data Protection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-800">
        <h2 className="text-3xl font-bold mb-12">Data Protection Practices</h2>
        
        <div className="space-y-6">
          <div className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              Encryption
            </h3>
            <p className="text-zinc-400 text-sm">All data is encrypted using AES-256 encryption. API communications use TLS 1.2+.</p>
          </div>
          
          <div className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-green-400" />
              Access Control
            </h3>
            <p className="text-zinc-400 text-sm">Role-based access control (RBAC) with principle of least privilege enforcement.</p>
          </div>
          
          <div className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5 text-green-400" />
              Monitoring
            </h3>
            <p className="text-zinc-400 text-sm">24/7 security monitoring with real-time alerts and incident response team.</p>
          </div>
          
          <div className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-green-400" />
              Compliance
            </h3>
            <p className="text-zinc-400 text-sm">Regular security audits, penetration testing, and compliance assessments.</p>
          </div>
        </div>
      </div>

      {/* Report Vulnerability */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-800">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700/50 rounded-xl p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-3">Report a Security Vulnerability</h2>
          <p className="text-zinc-300 mb-6">
            If you discover a security vulnerability, please email security@harmer.ai with details. We appreciate responsible disclosure.
          </p>
          <a href="mailto:security@harmer.ai" className="inline-block px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all">
            Report Vulnerability
          </a>
        </div>
      </div>
    </main>
  )
}
