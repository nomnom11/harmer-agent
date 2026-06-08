'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Activity, TrendingUp, Users, Zap, Clock, CheckCircle2, AlertCircle, BarChart3, LineChart, PieChart } from 'lucide-react'

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('7d')

  const stats = [
    {
      label: 'Active Agents',
      value: '24',
      change: '+12%',
      icon: Activity,
      color: 'green'
    },
    {
      label: 'Total Executions',
      value: '12.5K',
      change: '+8.5%',
      icon: Zap,
      color: 'blue'
    },
    {
      label: 'Success Rate',
      value: '99.2%',
      change: '+0.3%',
      icon: CheckCircle2,
      color: 'emerald'
    },
    {
      label: 'Avg Response Time',
      value: '245ms',
      change: '-12%',
      icon: Clock,
      color: 'purple'
    }
  ]

  const agentsList = [
    {
      name: 'Market Analyzer',
      status: 'active',
      executions: 856,
      uptime: '99.9%',
      lastRun: '2 min ago'
    },
    {
      name: 'Email Router',
      status: 'active',
      executions: 2341,
      uptime: '99.8%',
      lastRun: '5 sec ago'
    },
    {
      name: 'Content Generator',
      status: 'active',
      executions: 1203,
      uptime: '99.5%',
      lastRun: '1 min ago'
    },
    {
      name: 'Support Handler',
      status: 'inactive',
      executions: 423,
      uptime: '98.2%',
      lastRun: '3 hours ago'
    }
  ]

  const executionMetrics = [
    { name: 'Data Processing', value: 3420, percentage: 28 },
    { name: 'Automation', value: 2890, percentage: 23 },
    { name: 'Analysis', value: 2450, percentage: 20 },
    { name: 'Integration', value: 1890, percentage: 15 },
    { name: 'Other', value: 1350, percentage: 14 }
  ]

  return (
    <main className="min-h-screen bg-zinc-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Header with Time Range */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Agent Dashboard</h1>
            <p className="text-zinc-400">Monitor and manage your autonomous agents in real-time</p>
          </div>
          <div className="flex gap-2">
            {['24h', '7d', '30d', '90d'].map(range => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  timeRange === range
                    ? 'bg-green-500 text-zinc-950'
                    : 'border border-zinc-700 text-zinc-400 hover:border-zinc-600'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            const colorMap = {
              green: 'text-green-400 bg-green-900/20 border-green-700/50',
              blue: 'text-blue-400 bg-blue-900/20 border-blue-700/50',
              emerald: 'text-emerald-400 bg-emerald-900/20 border-emerald-700/50',
              purple: 'text-purple-400 bg-purple-900/20 border-purple-700/50'
            }
            return (
              <div key={idx} className="border border-zinc-700 bg-zinc-900/30 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-3 rounded-lg ${colorMap[stat.color]}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-green-400">{stat.change}</span>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Execution Breakdown */}
          <div className="lg:col-span-2 border border-zinc-700 bg-zinc-900/30 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-green-400" />
              Execution Breakdown
            </h2>
            <div className="space-y-4">
              {executionMetrics.map((metric, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{metric.name}</span>
                    <span className="text-sm text-zinc-400">{metric.value.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                      style={{ width: `${metric.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="border border-zinc-700 bg-zinc-900/30 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-400" />
              System Health
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-zinc-400">CPU Usage</span>
                  <span className="font-semibold text-green-400">42%</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-zinc-400">Memory</span>
                  <span className="font-semibold text-blue-400">58%</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '58%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-zinc-400">Network</span>
                  <span className="font-semibold text-purple-400">23%</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '23%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agents Table */}
        <div className="border border-zinc-700 bg-zinc-900/30 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-400" />
            Active Agents
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="text-left py-3 px-4 font-semibold text-zinc-400">Agent Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-zinc-400">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-zinc-400">Executions</th>
                  <th className="text-left py-3 px-4 font-semibold text-zinc-400">Uptime</th>
                  <th className="text-left py-3 px-4 font-semibold text-zinc-400">Last Run</th>
                </tr>
              </thead>
              <tbody>
                {agentsList.map((agent, idx) => (
                  <tr key={idx} className="border-b border-zinc-800 hover:bg-zinc-800/30 transition-colors">
                    <td className="py-3 px-4 font-medium">{agent.name}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${agent.status === 'active' ? 'bg-green-400' : 'bg-zinc-500'}`}></div>
                        <span className="capitalize text-xs">{agent.status}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">{agent.executions.toLocaleString()}</td>
                    <td className="py-3 px-4">{agent.uptime}</td>
                    <td className="py-3 px-4 text-zinc-400">{agent.lastRun}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}
