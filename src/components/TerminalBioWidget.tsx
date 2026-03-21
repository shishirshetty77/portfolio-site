'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { TacticalCard } from './TacticalCard';
import { Terminal, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { experienceData } from '@/data/experience';
import { projectsData } from '@/data/projects';

// ── Utility: random pick ─────────────────────────────────────────────
function pick<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]; }

// ── 15 Commands ──────────────────────────────────────────────────────
const COMMANDS: Record<string, { description: string; output: () => string[] }> = {
  help: {
    description: 'List available commands',
    output: () => [
      '',
      '  ┌────────────────────────────────────────────┐',
      '  │         AVAILABLE COMMANDS (15)             │',
      '  ├────────────────────────────────────────────┤',
      '  │  whoami       — Who is this person?         │',
      '  │  skills       — Technical skill tree        │',
      '  │  ls projects  — Browse project directory    │',
      '  │  cat resume   — Work experience log         │',
      '  │  uptime       — How long have I been at it  │',
      '  │  contact      — Get in touch                │',
      '  │  neofetch     — System overview              │',
      '  │  motto        — Life philosophy             │',
      '  │  stack        — Current tech stack           │',
      '  │  coffee       — Brew some coffee ☕          │',
      '  │  stats        — Quick numbers               │',
      '  │  goals        — What I\'m working toward     │',
      '  │  music        — What I listen to             │',
      '  │  hobbies      — Beyond the keyboard         │',
      '  │  fortune      — A random fortune cookie     │',
      '  │  clear        — Clear terminal              │',
      '  └────────────────────────────────────────────┘',
      '',
    ],
  },
  whoami: {
    description: 'Display user identity',
    output: () => [
      '',
      '  ╔══════════════════════════════════════╗',
      '  ║   SHISHIR SHETTY                     ║',
      '  ║   Cloud Engineer & DevOps Specialist ║',
      '  ╠══════════════════════════════════════╣',
      '  ║   I architect scalable cloud infra   ║',
      '  ║   and automate everything that moves ║',
      '  ║   — from Kubernetes clusters to      ║',
      '  ║   CI/CD pipelines that ship at 3am.  ║',
      '  ║                                      ║',
      '  ║   Based in: Bangalore, India 🇮🇳      ║',
      '  ╚══════════════════════════════════════╝',
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
      '  ╭── Monitoring ─────────────────────╮',
      '  │ Prometheus • Grafana • ELK Stack  │',
      '  │ CloudWatch • Datadog              │',
      '  ╰───────────────────────────────────╯',
      '',
    ],
  },
  'ls projects': {
    description: 'Show project directory',
    output: () => {
      const lines = ['', '  drwxr-xr-x  ~/projects/'];
      projectsData.forEach((p) => {
        const tag = p.featured ? '★' : ' ';
        lines.push(`  ${tag} ${p.title}`);
        lines.push(`    └─ ${p.technologies.slice(0, 4).join(' • ')}`);
      });
      lines.push('');
      lines.push('  ★ = featured project');
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
      const diffMs = now.getTime() - start.getTime();
      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const years = now.getFullYear() - start.getFullYear();
      const months = ((now.getMonth() - start.getMonth()) + 12) % 12;
      return [
        '',
        `  ⏱  up ${years}y ${months}m (${days} days total)`,
        `  📊 load average: passion, curiosity, caffeine`,
        `  🔄 active processes: kubernetes, terraform, ci/cd`,
        `  💾 commits this week: probably too many`,
        `  🧠 stack overflow visits: we don't talk about that`,
        '',
      ];
    },
  },
  contact: {
    description: 'Contact information',
    output: () => [
      '',
      '  ┌─────────────────────────────────────────┐',
      '  │  ✉  shishirshetty77@gmail.com           │',
      '  │  🔗 github.com/shishirshetty77          │',
      '  │  💼 linkedin.com/in/shishir-shetty       │',
      '  │  📍 Bangalore, India                     │',
      '  │                                          │',
      '  │  Open to: Full-time roles, consulting,   │',
      '  │  and interesting side projects ✨         │',
      '  └─────────────────────────────────────────┘',
      '',
    ],
  },
  neofetch: {
    description: 'System info summary',
    output: () => [
      '',
      '        ██╗  ██╗██╗        shishir@cloud',
      '        ██║  ██║██║        ─────────────────',
      '        ███████║██║        OS: CloudOS v3.0',
      '        ╚════██║██║        Kernel: Kubernetes',
      '             ██║██║        Shell: /bin/devops',
      '             ╚═╝╚═╝        DE: Industrial Obsidian',
      '                           Terminal: Portfolio v3',
      '                           CPU: Highly Caffeinated',
      '                           GPU: React Rendering Engine',
      '                           Memory: Full of K8s YAMLs',
      '                           Disk: Terraform state files',
      '',
    ],
  },
  motto: {
    description: 'Life philosophy',
    output: () => {
      const mottos = [
        '"Automate the boring, architect the impossible."',
        '"Infrastructure should be cattle, not pets."',
        '"If it\'s not in Git, it didn\'t happen."',
        '"Ship it, monitor it, sleep peacefully."',
        '"YAML is my love language."',
      ];
      return [
        '',
        `  💭 ${pick(mottos)}`,
        '',
        '  — Shishir, probably at 2am debugging a pod',
        '',
      ];
    },
  },
  stack: {
    description: 'Current tech stack',
    output: () => [
      '',
      '  🏗  CURRENT DAILY DRIVERS:',
      '',
      '  ☁️  Infra    → GCP + Kubernetes + Terraform',
      '  🔄 CI/CD    → GitHub Actions + ArgoCD',
      '  📦 Configs  → Helm + Kustomize',
      '  👀 Monitor  → Prometheus + Grafana',
      '  🛠  Code     → Go + TypeScript + Python',
      '  🎨 Frontend → Next.js + React + Tailwind',
      '  📝 Editor   → VS Code (obvi)',
      '',
    ],
  },
  coffee: {
    description: 'Brew some coffee',
    output: () => {
      const stages = [
        '  ☕ Grinding beans...',
        '  ☕ Heating water to 96°C...',
        '  ☕ Brewing pour-over...',
        '  ☕ ████████████████████ 100%',
        '',
        '  Your coffee is ready! ☕✨',
        '  Caffeine level: ████████░░ 80%',
        `  Fun fact: This is coffee #${Math.floor(Math.random() * 900) + 100} this year`,
        '',
      ];
      return ['', ...stages];
    },
  },
  stats: {
    description: 'Quick numbers',
    output: () => [
      '',
      '  📊 STATS.SYS',
      '  ─────────────────────────────',
      `  Projects shipped      →  ${projectsData.length}+`,
      `  Career positions      →  ${experienceData.length}`,
      '  Containers deployed   →  lost count honestly',
      '  Terraform modules     →  a growing collection',
      '  Pipelines built       →  enough to fill a river',
      '  Coffee consumed       →  ∞',
      '  Bugs squashed         →  also ∞',
      '',
    ],
  },
  goals: {
    description: 'Future goals',
    output: () => [
      '',
      '  🎯 GOALS_2026.md',
      '  ─────────────────────────────',
      '  [x] Master multi-cloud architectures',
      '  [x] Get hands dirty with service mesh',
      '  [/] Contribute to CNCF projects',
      '  [ ] Build a dev tool that people love',
      '  [ ] Give a conference talk',
      '  [ ] Write a blog series on cloud patterns',
      '  [ ] Touch grass semi-regularly',
      '',
    ],
  },
  music: {
    description: 'Music taste',
    output: () => {
      const genres = [
        '  🎵 Lo-fi beats while deploying',
        '  🎸 Rock when the tests pass',
        '  🎧 EDM during hackathons',
        '  🎹 Classical when reading docs',
        '  🎤 Bollywood when cooking',
      ];
      return [
        '',
        '  NOW_PLAYING: Whatever keeps the code flowing',
        '',
        ...genres,
        '',
        '  Pro tip: Check the MEDIA.PLAY tab! →',
        '',
      ];
    },
  },
  hobbies: {
    description: 'Beyond coding',
    output: () => [
      '',
      '  🌿 LIFE BEYOND THE TERMINAL:',
      '  ─────────────────────────',
      '  🏔  Trekking — Mountains > Meetings',
      '  📚 Reading — Tech blogs + Sci-fi novels',
      '  📸 Photography — Landscapes & street',
      '  🎮 Gaming — When servers are behaving',
      '  🍳 Cooking — South Indian food enthusiast',
      '  ✈️  Traveling — Always planning the next trip',
      '',
    ],
  },
  fortune: {
    description: 'Random fortune cookie',
    output: () => {
      const fortunes = [
        'Your next kubectl apply will work on first try.',
        'A merge conflict will teach you patience today.',
        'The documentation you seek is actually up to date.',
        'Your terraform plan will have 0 changes to destroy.',
        'A rubber duck will solve your hardest bug.',
        'The cloud bill next month will be surprisingly reasonable.',
        'Your Docker image will be under 50MB.',
        'You will find a missing semicolon before lunch.',
        'An unexpected 200 OK brings great joy.',
        'The CI pipeline will be green all week.',
      ];
      return [
        '',
        '  🥠 ═══════════════════════════════════',
        '',
        `  ${pick(fortunes)}`,
        '',
        '  🥠 ═══════════════════════════════════',
        '',
      ];
    },
  },
};

// ── Boot sequence ────────────────────────────────────────────────────
const BOOT_LINES = [
  { text: '> LOADING KERNEL MODULES ████████████ OK', color: 'text-[#00ff41]' },
  { text: '> SESSION READY — 15 commands loaded', color: 'text-[#00ff41]' },
  { text: '', color: '' },
  { text: '  Type "help" for all commands — or just start exploring.', color: 'text-[#525252]' },
  { text: '', color: '' },
];

// ── Line component ───────────────────────────────────────────────────
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

  const content = text;

  if (/[┌┐└┘│─╭╯╰╮═▸★╗╔╝╚║╬╣╠╠╣┤├┼╤╧╨╥╞╡╪╫]/.test(content) && !content.includes('═══')) {
    return <div className="text-[#404040]">{content}</div>;
  }
  if (content.includes('═══')) {
    return <div className="text-amber-400 font-bold">{content}</div>;
  }
  if (content.includes(': ') && !content.startsWith('  🥠') && !content.startsWith('  💭')) {
    const idx = content.indexOf(': ');
    return (
      <div>
        <span className="text-cyan-400">{content.slice(0, idx + 1)}</span>
        <span className="text-[#d4d4d4]">{content.slice(idx + 1)}</span>
      </div>
    );
  }
  if (content.includes('→')) {
    const idx = content.indexOf('→');
    return (
      <div>
        <span className="text-[#a3a3a3]">{content.slice(0, idx)}</span>
        <span className="text-[#525252]">→</span>
        <span className="text-[#00ff41]">{content.slice(idx + 1)}</span>
      </div>
    );
  }
  if (content.includes('▸')) return <div className="text-amber-400">{content}</div>;
  if (content.includes('•')) return <div className="text-[#00ff41]">{content}</div>;
  if (content.includes('████')) return <div className="text-[#00ff41]">{content}</div>;
  if (content.trimStart().startsWith('[x]')) return <div className="text-[#00ff41]">{content}</div>;
  if (content.trimStart().startsWith('[/]')) return <div className="text-amber-400">{content}</div>;
  if (content.trimStart().startsWith('[ ]')) return <div className="text-[#525252]">{content}</div>;
  if (/[☕🎵🎸🎧🎹🎤🏔📚📸🎮🍳✈️🌿🎯💭🥠⏱📊🔄💾🧠🏗☁️📦👀🛠🎨📝🇮🇳✨💼🔗✉📍]/.test(content)) return <div className="text-[#d4d4d4]">{content}</div>;

  return <div className="text-[#a3a3a3]">{content}</div>;
}

// ── Hero Identity Block ──────────────────────────────────────────────
function HeroIdentity() {
  return (
    <div className="mb-3 pb-3 border-b border-[#1c1c1c]">
      <div className="flex items-start justify-between mb-1.5">
        <div>
          <h1 className="text-2xl md:text-3xl font-heading tracking-tight gradient-text leading-tight">
            SHISHIR SHETTY
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse shadow-[0_0_6px_rgba(0,255,65,0.5)]"></span>
            <span className="text-sm font-mono text-[#00ff41] tracking-wider">CLOUD ENGINEER</span>
            <span className="text-[#525252] text-sm font-mono">·</span>
            <span className="text-sm font-mono text-cyan-400 tracking-wider">DEVOPS</span>
          </div>
        </div>
      </div>

      <p className="text-[#737373] text-sm leading-relaxed mb-2 max-w-lg font-sans">
        Architecting scalable cloud infrastructure, automating everything, and shipping production-grade systems with Kubernetes, Terraform & GitOps.
      </p>

      <div className="flex items-center gap-3 flex-wrap">
        <a
          href="https://github.com/shishirshetty77"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-mono text-[#525252] hover:text-[#00ff41] transition-colors group"
        >
          <Github className="w-3.5 h-3.5 group-hover:drop-shadow-[0_0_4px_rgba(0,255,65,0.5)]" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/shishir-shetty-715028230"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-mono text-[#525252] hover:text-cyan-400 transition-colors group"
        >
          <Linkedin className="w-3.5 h-3.5 group-hover:drop-shadow-[0_0_4px_rgba(34,211,238,0.5)]" />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
        <a
          href="mailto:shishirshetty77@gmail.com"
          className="flex items-center gap-1.5 text-xs font-mono text-[#525252] hover:text-amber-400 transition-colors group"
        >
          <Mail className="w-3.5 h-3.5 group-hover:drop-shadow-[0_0_4px_rgba(251,191,36,0.5)]" />
          <span className="hidden sm:inline">Email</span>
        </a>
        <span className="flex items-center gap-1.5 text-xs font-mono text-[#3a3a3a]">
          <MapPin className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Bangalore, IN</span>
        </span>
      </div>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────
export function TerminalBioWidget() {
  const [bootLines, setBootLines] = useState<typeof BOOT_LINES>([]);
  const [booted, setBooted] = useState(false);
  const [history, setHistory] = useState<{ type: 'cmd' | 'output'; lines: string[] }[]>([]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
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
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [bootLines, history]);

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
      // Easter egg: partial matches as suggestions
      const suggestions = Object.keys(COMMANDS).filter(k => k.startsWith(trimmed));
      const hint = suggestions.length > 0
        ? `  Did you mean: ${suggestions.slice(0, 3).join(', ')}?`
        : '  Try "help" for all 15 commands.';
      setHistory(prev => [
        ...prev,
        { type: 'cmd', lines: [cmd] },
        { type: 'output', lines: [
          '',
          `  zsh: command not found: ${trimmed}`,
          hint,
          '',
        ]},
      ]);
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.key === 'Enter') {
      const cmd = input.trim();
      if (cmd) {
        setCmdHistory(prev => [cmd, ...prev]);
        setHistoryIndex(-1);
      }
      executeCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const newIndex = Math.min(historyIndex + 1, cmdHistory.length - 1);
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const partial = input.trim().toLowerCase();
      if (partial) {
        const match = Object.keys(COMMANDS).find(k => k.startsWith(partial));
        if (match) setInput(match);
      }
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

      <HeroIdentity />

      {/* Terminal area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto text-xs md:text-sm leading-relaxed space-y-0 scrollbar-thin pr-2 cursor-text"
        onClick={focusInput}
      >
        {bootLines.map((line, i) => (
          <div key={`boot-${i}`} className={line.color}>
            {line.text}
          </div>
        ))}

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

        {booted && (
          <div className="flex items-center gap-0 mt-1">
            <span className="text-[#00ff41]">shishir@cloud</span>
            <span className="text-[#525252]">:</span>
            <span className="text-cyan-400">~</span>
            <span className="text-[#525252]">$ </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-[#d4d4d4] outline-none caret-[#00ff41] font-mono text-xs md:text-sm"
              autoComplete="off"
              spellCheck="false"
              autoCapitalize="off"
            />
          </div>
        )}
      </div>
    </TacticalCard>
  );
}
