'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { TacticalCard } from './TacticalCard';
import { Terminal } from 'lucide-react';
import { experienceData } from '@/data/experience';
import { projectsData } from '@/data/projects';

// ── Command definitions ──────────────────────────────────────────────
const COMMANDS: Record<string, { description: string; output: () => string[] }> = {
  help: {
    description: 'List available commands',
    output: () => [
      '',
      '  Available commands:',
      '',
      '  whoami        — Display user identity',
      '  skills        — List technical skills',
      '  ls projects   — Show project directory',
      '  cat resume    — Display work experience',
      '  uptime        — System uptime',
      '  contact       — Contact information',
      '  neofetch      — System info summary',
      '  clear         — Clear terminal',
      '  help          — Show this help message',
      '',
    ],
  },
  whoami: {
    description: 'Display user identity',
    output: () => [
      '',
      '  ┌─────────────────────────────────────┐',
      '  │  SHISHIR SHETTY                     │',
      '  │  Cloud Engineer | DevOps            │',
      '  │  Niveus Solutions (NTT DATA)        │',
      '  │                                     │',
      '  │  Specializing in Kubernetes, AWS,   │',
      '  │  GCP, Terraform & GitOps CI/CD      │',
      '  │  pipelines.                         │',
      '  └─────────────────────────────────────┘',
      '',
    ],
  },
  skills: {
    description: 'List technical skills',
    output: () => [
      '',
      '  ╭── Cloud & Infra ──────────────────╮',
      '  │ AWS • GCP • Kubernetes • Docker   │',
      '  │ Terraform • Ansible • Helm        │',
      '  ╰───────────────────────────────────╯',
      '  ╭── CI/CD & GitOps ─────────────────╮',
      '  │ GitHub Actions • Jenkins • ArgoCD │',
      '  │ GitLab CI • GitOps Workflows      │',
      '  ╰───────────────────────────────────╯',
      '  ╭── Dev & Data ─────────────────────╮',
      '  │ Next.js • React • Node.js • Go    │',
      '  │ PostgreSQL • MongoDB • Redis      │',
      '  ╰───────────────────────────────────╯',
      '',
    ],
  },
  'ls projects': {
    description: 'Show project directory',
    output: () => {
      const lines = ['', '  drwxr-xr-x  projects/'];
      projectsData.forEach((p, _i) => {
        const tag = p.featured ? '\x1b[32m★\x1b[0m' : ' ';
        lines.push(`  ${tag} ${p.title}`);
        lines.push(`    └─ ${p.technologies.slice(0, 4).join(' • ')}`);
      });
      lines.push('');
      return lines;
    },
  },
  'cat resume': {
    description: 'Display work experience',
    output: () => {
      const lines = ['', '  ═══ CAREER LOG ═══', ''];
      experienceData.forEach((exp) => {
        lines.push(`  ▸ ${exp.title} @ ${exp.company}`);
        lines.push(`    ${exp.period} · ${exp.location}`);
        lines.push(`    ${exp.description[0]}`);
        lines.push('');
      });
      return lines;
    },
  },
  uptime: {
    description: 'System uptime',
    output: () => {
      const start = new Date('2023-01-01');
      const now = new Date();
      const years = now.getFullYear() - start.getFullYear();
      const months = now.getMonth() - start.getMonth();
      return [
        '',
        `  up ${years} years, ${months >= 0 ? months : months + 12} months`,
        `  load average: passion, curiosity, caffeine`,
        `  processes: kubernetes, terraform, ci/cd`,
        '',
      ];
    },
  },
  contact: {
    description: 'Contact information',
    output: () => [
      '',
      '  ┌─────────────────────────────────────┐',
      '  │  ✉  shishirshetty77@gmail.com       │',
      '  │  🔗 github.com/shishirshetty77      │',
      '  │  💼 linkedin.com/in/shishir-shetty   │',
      '  │  📍 Karnataka, India                 │',
      '  └─────────────────────────────────────┘',
      '',
    ],
  },
  neofetch: {
    description: 'System info summary',
    output: () => [
      '',
      '        ██╗  ██╗██╗        shishir@cloud',
      '        ██║  ██║██║        ─────────────',
      '        ███████║██║        OS: CloudOS v3.0',
      '        ╚════██║██║        Host: Niveus Solutions',
      '             ██║██║        Kernel: Kubernetes',
      '             ╚═╝╚═╝        Shell: /bin/devops',
      '                           DE: Industrial Obsidian',
      '                           Terminal: Portfolio v3',
      '                           CPU: Highly Caffeinated',
      '                           Memory: Kubernetes Clusters',
      '',
    ],
  },
};

// ── Boot sequence lines ──────────────────────────────────────────────
const BOOT_LINES = [
  { text: '> INITIALIZING SECURE SHELL...', color: 'text-[#737373]' },
  { text: '> LOADING KERNEL MODULES ████████████ OK', color: 'text-[#00ff41]' },
  { text: '> ESTABLISHING CONNECTION...', color: 'text-[#737373]' },
  { text: '> IDENTITY VERIFIED: SHISHIR SHETTY', color: 'text-amber-400' },
  { text: '> ROLE: CLOUD ENGINEER | DEVOPS', color: 'text-cyan-400' },
  { text: '> STATUS: ACTIVE | DEPLOYED', color: 'text-[#00ff41]' },
  { text: '', color: '' },
  { text: '  Type "help" to see available commands.', color: 'text-[#525252]' },
  { text: '', color: '' },
];

// ── Line component with syntax-style coloring ────────────────────────
function TerminalLine({ text, isCommand }: { text: string; isCommand?: boolean }) {
  if (isCommand) {
    return (
      <div className="flex gap-0">
        <span className="text-[#00ff41]">shishir@cloud</span>
        <span className="text-[#525252]">:</span>
        <span className="text-cyan-400">~</span>
        <span className="text-[#525252]">$ </span>
        <span className="text-[#d4d4d4]">{text}</span>
      </div>
    );
  }

  // Color keywords in output lines
  const content = text;
  
  // Highlight box-drawing characters
  if (/[┌┐└┘│─╭╯╰╮═▸★╗╔╝╚║╬╣╠]/.test(content)) {
    return <div className="text-[#525252]">{content}</div>;
  }
  
  // Highlight headers
  if (content.includes('═══')) {
    return <div className="text-amber-400 font-bold">{content}</div>;
  }

  // Highlight labels (key: value patterns)
  if (content.includes(': ')) {
    const idx = content.indexOf(': ');
    return (
      <div>
        <span className="text-cyan-400">{content.slice(0, idx + 1)}</span>
        <span className="text-[#d4d4d4]">{content.slice(idx + 1)}</span>
      </div>
    );
  }

  // Experience entries with ▸
  if (content.includes('▸')) {
    return <div className="text-amber-400">{content}</div>;
  }

  // Tech stacks with •
  if (content.includes('•')) {
    return <div className="text-[#00ff41]">{content}</div>;
  }

  return <div className="text-[#a3a3a3]">{content}</div>;
}

// ── Main component ───────────────────────────────────────────────────
export function TerminalBioWidget() {
  const [bootLines, setBootLines] = useState<typeof BOOT_LINES>([]);
  const [booted, setBooted] = useState(false);
  const [history, setHistory] = useState<{ type: 'cmd' | 'output'; lines: string[] }[]>([]);
  const [input, setInput] = useState('');
  const [cursorBlink, setCursorBlink] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Boot sequence
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i >= BOOT_LINES.length) {
        clearInterval(interval);
        setBooted(true);
        return;
      }
      const currentLine = BOOT_LINES[i];
      setBootLines(prev => [...prev, currentLine]);
      i++;
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setCursorBlink(prev => !prev), 530);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [bootLines, history]);

  // Focus input when booted
  useEffect(() => {
    if (booted && inputRef.current) {
      inputRef.current.focus();
    }
  }, [booted]);

  const executeCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    
    if (trimmed === 'clear') {
      setBootLines([]);
      setHistory([]);
      return;
    }

    const command = COMMANDS[trimmed];
    
    if (command) {
      setHistory(prev => [
        ...prev,
        { type: 'cmd', lines: [cmd] },
        { type: 'output', lines: command.output() },
      ]);
    } else if (trimmed === '') {
      setHistory(prev => [...prev, { type: 'cmd', lines: [''] }]);
    } else {
      setHistory(prev => [
        ...prev,
        { type: 'cmd', lines: [cmd] },
        { type: 'output', lines: [
          '',
          `  zsh: command not found: ${trimmed}`,
          `  Try "help" for available commands.`,
          '',
        ]},
      ]);
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput('');
    }
  };

  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <TacticalCard className="bg-[#0a0a0a] flex flex-col font-mono overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 mb-3 border-b border-[#262626] pb-2 text-[#737373] text-sm font-bold tracking-widest shrink-0">
        <Terminal className="w-4 h-4" />
        <span>SYS.TERMINAL</span>
        <div className="ml-auto flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
        </div>
      </div>

      {/* Terminal output area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto text-sm md:text-base leading-relaxed space-y-0 scrollbar-thin pr-2 cursor-text"
        onClick={focusInput}
      >
        {/* Boot sequence */}
        {bootLines.map((line, i) => (
          <div key={`boot-${i}`} className={line.color}>
            {line.text}
          </div>
        ))}

        {/* Command history */}
        {history.map((entry, i) => (
          <div key={`hist-${i}`}>
            {entry.type === 'cmd' ? (
              <TerminalLine text={entry.lines[0]} isCommand />
            ) : (
              entry.lines.map((line, j) => (
                <TerminalLine key={j} text={line} />
              ))
            )}
          </div>
        ))}

        {/* Active input line */}
        {booted && (
          <div className="flex items-center gap-0 mt-1">
            <span className="text-[#00ff41]">shishir@cloud</span>
            <span className="text-[#525252]">:</span>
            <span className="text-cyan-400">~</span>
            <span className="text-[#525252]">$ </span>
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent text-[#d4d4d4] outline-none caret-transparent font-mono text-sm md:text-base"
                autoComplete="off"
                spellCheck="false"
                autoCapitalize="off"
              />
              {/* Custom blinking cursor */}
              <span
                className={`absolute top-0 h-full w-[7px] bg-[#00ff41] transition-opacity duration-100 ${cursorBlink ? 'opacity-80' : 'opacity-0'}`}
                style={{ left: `${input.length * 0.6}em` }}
              ></span>
            </div>
          </div>
        )}
      </div>
    </TacticalCard>
  );
}
