'use client'

import { useEffect, useRef } from 'react'

interface TerminalLine {
  type: 'command' | 'output' | 'success' | 'error'
  text: string
}

interface TerminalProps {
  lines: TerminalLine[]
  isLoading?: boolean
}

export function Terminal({ lines, isLoading = false }: TerminalProps) {
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  const getLineColor = (type: TerminalLine['type']) => {
    switch (type) {
      case 'command':
        return 'text-green-400'
      case 'success':
        return 'text-green-400'
      case 'error':
        return 'text-red-400'
      case 'output':
        return 'text-zinc-300'
      default:
        return 'text-zinc-300'
    }
  }

  const getLinePrefix = (type: TerminalLine['type']) => {
    switch (type) {
      case 'command':
        return '$ '
      case 'success':
        return '✓ '
      case 'error':
        return '✗ '
      default:
        return ''
    }
  }

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 h-full flex flex-col font-mono text-sm">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-zinc-800">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-zinc-400 text-xs ml-2">harmer-terminal</span>
      </div>

      {/* Terminal Content */}
      <div className="flex-1 overflow-y-auto space-y-1">
        {lines.length === 0 && (
          <div className="text-zinc-500">
            <div>Harmer Agent Terminal</div>
            <div>Ready to create your agent...</div>
          </div>
        )}

        {lines.map((line, index) => (
          <div key={index} className={`${getLineColor(line.type)} whitespace-pre-wrap break-words`}>
            {getLinePrefix(line.type)}{line.text}
          </div>
        ))}

        {isLoading && (
          <div className="text-green-400 animate-pulse">
            $ Creating agent...
          </div>
        )}

        <div ref={endRef} />
      </div>
    </div>
  )
}
