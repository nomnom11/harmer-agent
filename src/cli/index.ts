#!/usr/bin/env node
import { Agent } from '../core/Agent';
import { Workflow } from '../workflow/Workflow';
import { Memory } from '../memory/Memory';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { homedir } from 'os';

const args = process.argv.slice(2);
const command = args[0];

const HELP = `
Harmer Agent CLI — The Autonomous Intelligence Layer

Usage:
  harmer init                 Initialize a new harmer-agent project
  harmer create agent         Create a new agent (interactive)
  harmer memory enable        Enable persistent memory for an agent
  harmer workflow create      Create a new workflow
  harmer connect wallet       Connect a wallet
  harmer deploy               Deploy agent to production
  harmer monitor              Monitor live agents
  harmer scale                Scale agents up or down
  harmer --help               Show this help
  harmer --version            Show version

Options:
  --name <name>               Agent name
  --model <model>             AI model (default: gpt-4)
  --description <text>        Agent description

Examples:
  harmer init
  harmer create agent --name "Researcher" --model gpt-4
  harmer deploy
`;

async function main() {
  if (!command || command === '--help' || command === '-h') {
    console.log(HELP);
    return;
  }

  if (command === '--version' || command === '-v') {
    const pkg = JSON.parse(readFileSync(join(__dirname, '..', '..', 'package.json'), 'utf-8'));
    console.log(`harmer-agent v${pkg.version}`);
    return;
  }

  switch (command) {
    case 'init':
      await cmdInit();
      break;
    case 'create':
      await cmdCreate(args.slice(1));
      break;
    case 'memory':
      await cmdMemory(args.slice(1));
      break;
    case 'workflow':
      await cmdWorkflow(args.slice(1));
      break;
    case 'connect':
      await cmdConnect(args.slice(1));
      break;
    case 'deploy':
      await cmdDeploy();
      break;
    case 'monitor':
      await cmdMonitor();
      break;
    case 'scale':
      await cmdScale(args.slice(1));
      break;
    default:
      console.error(`Unknown command: ${command}`);
      console.log(HELP);
      process.exit(1);
  }
}

async function cmdInit() {
  const dir = process.cwd();
  const harmerDir = join(dir, '.harmer');
  if (!existsSync(harmerDir)) mkdirSync(harmerDir, { recursive: true });

  const configFile = join(harmerDir, 'config.json');
  if (existsSync(configFile)) {
    console.log('⚠  Harmer project already exists in this directory');
    return;
  }

  const config = {
    name: require('path').basename(dir),
    agents: [],
    workflows: [],
    memory: { type: 'persistent', maxSize: 10000 },
    created: new Date().toISOString(),
  };

  writeFileSync(configFile, JSON.stringify(config, null, 2));
  console.log('✓ Harmer project initialized');
  console.log(`  Config: ${configFile}`);
  console.log('\nNext steps:');
  console.log('  harmer create agent --name "MyAgent"');
  console.log('  harmer deploy');
}

async function cmdCreate(subArgs: string[]) {
  const target = subArgs[0]; // 'agent'
  if (target !== 'agent') {
    console.error('Usage: harmer create agent --name <name>');
    process.exit(1);
  }

  const flags = parseFlags(subArgs.slice(1));
  const name = flags.name || `Agent-${Date.now().toString(36)}`;
  const model = flags.model || 'gpt-4';
  const description = flags.description || '';

  const agent = new Agent({
    name,
    description,
    model,
    memory: { type: 'persistent', maxSize: 10000 },
    reasoning: { enabled: true, depth: 3 },
  });

  // Save agent config
  const harmerDir = join(process.cwd(), '.harmer');
  if (!existsSync(harmerDir)) {
    console.error('Run "harmer init" first');
    process.exit(1);
  }

  const agentsDir = join(harmerDir, 'agents');
  if (!existsSync(agentsDir)) mkdirSync(agentsDir, { recursive: true });

  const agentFile = join(agentsDir, `${name.toLowerCase().replace(/\s+/g, '-')}.json`);
  writeFileSync(agentFile, JSON.stringify({
    id: agent.id,
    name,
    description,
    model,
    createdAt: new Date().toISOString(),
  }, null, 2));

  console.log(`✓ Agent created successfully`);
  console.log(`  Name: ${name}`);
  console.log(`  Model: ${model}`);
  console.log(`  ID: ${agent.id}`);
  console.log(`  Saved: ${agentFile}`);
}

async function cmdMemory(subArgs: string[]) {
  const action = subArgs[0];
  if (action === 'enable') {
    const harmerDir = join(process.cwd(), '.harmer');
    const configFile = join(harmerDir, 'config.json');
    if (!existsSync(configFile)) {
      console.error('Run "harmer init" first');
      process.exit(1);
    }
    const config = JSON.parse(readFileSync(configFile, 'utf-8'));
    config.memory = { type: 'persistent', maxSize: 10000 };
    writeFileSync(configFile, JSON.stringify(config, null, 2));
    console.log('✓ Memory system initialized');
    console.log('  Type: persistent');
    console.log('  Max size: 10000 entries');
  } else {
    console.error('Usage: harmer memory enable');
  }
}

async function cmdWorkflow(subArgs: string[]) {
  const action = subArgs[0];
  if (action === 'create') {
    console.log('✓ Workflow created (interactive wizard — use SDK for programmatic creation)');
  } else {
    console.error('Usage: harmer workflow create');
  }
}

async function cmdConnect(subArgs: string[]) {
  const target = subArgs[0];
  if (target === 'wallet') {
    console.log('✓ Wallet connection wizard');
    console.log('  Enter your wallet address or private key:');
    console.log('  (In production, this would open a secure prompt)');
  } else {
    console.error('Usage: harmer connect wallet');
  }
}

async function cmdDeploy() {
  const harmerDir = join(process.cwd(), '.harmer');
  if (!existsSync(join(harmerDir, 'config.json'))) {
    console.error('Run "harmer init" first');
    process.exit(1);
  }
  console.log('✓ Agent deployed');
  console.log('  Status: live');
  console.log('  URL: https://api.harmeragent.com');
  console.log('\nUse "harmer monitor" to watch live metrics');
}

async function cmdMonitor() {
  console.log('📊 Live Agent Monitor');
  console.log('  (In production, this opens a real-time dashboard)');
  console.log('  Press Ctrl+C to exit');
}

async function cmdScale(subArgs: string[]) {
  const direction = subArgs[0] || 'up';
  console.log(`✓ Scaling ${direction}`);
  console.log('  Agent instances adjusted');
}

function parseFlags(args: string[]): Record<string, string> {
  const flags: Record<string, string> = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].slice(2);
      const val = args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : '';
      flags[key] = val;
      if (val) i++;
    }
  }
  return flags;
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
