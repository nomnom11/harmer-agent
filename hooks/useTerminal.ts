import { useState, useCallback } from 'react'

export interface TerminalLine {
  type: 'command' | 'output' | 'success' | 'error'
  text: string
}

export function useTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const addLine = useCallback((type: TerminalLine['type'], text: string) => {
    setLines(prev => [...prev, { type, text }])
  }, [])

  const clear = useCallback(() => {
    setLines([])
  }, [])

  const createAgent = useCallback(async (agentConfig: {
    name: string
    description: string
    type: string
    capabilities: string[]
    model: string
    temperature: number
  }) => {
    setIsLoading(true)
    clear()

    // Simulate terminal commands
    addLine('command', `harmer create-agent --name "${agentConfig.name}"`)
    
    await new Promise(r => setTimeout(r, 500))
    addLine('output', `Initializing agent: ${agentConfig.name}`)

    await new Promise(r => setTimeout(r, 600))
    addLine('output', `Type: ${agentConfig.type}`)

    await new Promise(r => setTimeout(r, 400))
    addLine('output', `Description: ${agentConfig.description}`)

    await new Promise(r => setTimeout(r, 400))
    addLine('command', `harmer agent:configure`)

    await new Promise(r => setTimeout(r, 500))
    addLine('output', `Model: ${agentConfig.model}`)

    await new Promise(r => setTimeout(r, 400))
    addLine('output', `Temperature: ${agentConfig.temperature}`)

    await new Promise(r => setTimeout(r, 400))
    addLine('output', `Capabilities:`)
    
    for (const cap of agentConfig.capabilities) {
      await new Promise(r => setTimeout(r, 300))
      addLine('output', `  - ${cap}`)
    }

    await new Promise(r => setTimeout(r, 600))
    addLine('command', `harmer agent:deploy`)

    await new Promise(r => setTimeout(r, 800))
    addLine('output', `Deploying agent to workspace...`)

    await new Promise(r => setTimeout(r, 1000))
    addLine('success', `Agent "${agentConfig.name}" created successfully!`)

    await new Promise(r => setTimeout(r, 400))
    addLine('output', `Agent ID: agent_${Math.random().toString(36).substring(7)}`)

    await new Promise(r => setTimeout(r, 300))
    addLine('output', `Status: Active`)

    await new Promise(r => setTimeout(r, 300))
    addLine('output', `Ready to receive tasks`)

    setIsLoading(false)
  }, [addLine, clear])

  return { lines, isLoading, addLine, clear, createAgent }
}
