import Link from 'next/link'

export const metadata = {
  title: 'Workflows - Harmer Agent Documentation',
  description: 'Create complex automation workflows with multi-agent orchestration.',
}

export default function Workflows() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
        <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
        <span>/</span>
        <span className="text-white">Workflows</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4">Workflows & Orchestration</h1>
      <p className="text-xl text-zinc-400 mb-12">
        Create complex automation sequences with multiple agents working together.
      </p>

      <section id="basics" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Workflow Basics</h2>
        <p className="text-zinc-300 mb-4">
          Workflows allow you to orchestrate multiple agents and tasks in a coordinated sequence.
        </p>
        <p className="text-zinc-300 mb-4">Workflow components:</p>
        <ul className="space-y-2 text-zinc-300 ml-4">
          <li><strong>Steps:</strong> Individual tasks or agent calls</li>
          <li><strong>Transitions:</strong> Logic for moving between steps</li>
          <li><strong>Conditions:</strong> Branching logic and decision gates</li>
          <li><strong>Triggers:</strong> Events that start workflows</li>
          <li><strong>Outputs:</strong> Results and artifacts</li>
        </ul>
      </section>

      <section id="creating" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 mt-8">Creating Workflows</h2>
        <p className="text-zinc-300 mb-4">Define a workflow:</p>
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-4 overflow-x-auto">
          <pre className="text-sm font-mono text-green-400">{`const { Workflow } = require('harmer-agent');

const workflow = new Workflow({
  name: 'ResearchAndAnalyze',
  description: 'Research a topic and analyze findings'
});

// Step 1: Research
workflow.addStep({
  name: 'research',
  agent: researchAgent,
  input: 'topic',
  timeout: 30000
});

// Step 2: Analyze
workflow.addStep({
  name: 'analyze',
  agent: analysisAgent,
  input: 'research.output',
  trigger: 'research.completed'
});

// Step 3: Report
workflow.addStep({
  name: 'report',
  agent: reportAgent,
  input: 'analyze.output',
  trigger: 'analyze.completed'
});

// Run workflow
await workflow.execute({ topic: 'AI Safety' });`}
