'use client';

import { motion, useTransform, MotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

interface KubernetesClusterProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

interface Pod {
  id: number;
  angle: number;
  distance: number;
  status: 'running' | 'spawning' | 'terminating';
}

interface WorkerNode {
  id: number;
  angle: number; // Position around the master (in degrees)
  pods: Pod[];
  label: string;
}

export function KubernetesCluster({ mouseX, mouseY }: KubernetesClusterProps) {
  const [workers, setWorkers] = useState<WorkerNode[]>([
    { id: 1, angle: -30, pods: [], label: 'worker-1' },
    { id: 2, angle: 90, pods: [], label: 'worker-2' },
    { id: 3, angle: 210, pods: [], label: 'worker-3' },
  ]);

  const [dataPackets, setDataPackets] = useState<{ id: number; targetWorker: number; progress: number }[]>([]);

  // Parallax effect
  const xMotion = useTransform(mouseX, [0, 1], [-10, 10]);
  const yMotion = useTransform(mouseY, [0, 1], [-10, 10]);

  // Initialize pods on mount
  useEffect(() => {
    setWorkers(prev => prev.map(worker => ({
      ...worker,
      pods: generateInitialPods(3 + Math.floor(Math.random() * 2))
    })));
  }, []);

  // Pod scaling simulation - pods spawn and terminate periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setWorkers(prev => {
        const workerIndex = Math.floor(Math.random() * prev.length);
        const worker = prev[workerIndex];
        const action = Math.random();

        // 40% chance to add pod, 30% to remove, 30% to heal
        if (action < 0.4 && worker.pods.length < 6) {
          // Scale up - add a pod
          const newPod: Pod = {
            id: Date.now(),
            angle: Math.random() * 360,
            distance: 15 + Math.random() * 20,
            status: 'spawning'
          };
          
          return prev.map((w, i) => 
            i === workerIndex 
              ? { ...w, pods: [...w.pods, newPod] }
              : w
          );
        } else if (action < 0.7 && worker.pods.length > 2) {
          // Scale down - remove a pod
          const podIndex = Math.floor(Math.random() * worker.pods.length);
          return prev.map((w, i) => 
            i === workerIndex 
              ? { 
                  ...w, 
                  pods: w.pods.map((p, pi) => 
                    pi === podIndex ? { ...p, status: 'terminating' as const } : p
                  )
                }
              : w
          );
        } else if (worker.pods.some(p => p.status === 'terminating')) {
          // Self-heal - respawn terminated pod
          return prev.map((w, i) => 
            i === workerIndex 
              ? { 
                  ...w, 
                  pods: w.pods.filter(p => p.status !== 'terminating').concat({
                    id: Date.now(),
                    angle: Math.random() * 360,
                    distance: 15 + Math.random() * 20,
                    status: 'spawning' as const
                  })
                }
              : w
          );
        }
        
        return prev;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Update spawning pods to running
  useEffect(() => {
    const timeout = setTimeout(() => {
      setWorkers(prev => prev.map(w => ({
        ...w,
        pods: w.pods.map(p => p.status === 'spawning' ? { ...p, status: 'running' as const } : p)
      })));
    }, 500);
    return () => clearTimeout(timeout);
  }, [workers]);

  // Data packet animation
  useEffect(() => {
    const interval = setInterval(() => {
      const targetWorker = Math.floor(Math.random() * 3);
      setDataPackets(prev => [...prev, { id: Date.now(), targetWorker, progress: 0 }]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animate data packets
  useEffect(() => {
    const interval = setInterval(() => {
      setDataPackets(prev => 
        prev
          .map(p => ({ ...p, progress: p.progress + 0.05 }))
          .filter(p => p.progress <= 1)
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const workerDistance = 130; // Distance from center to worker nodes

  return (
    <motion.div 
      style={{ x: xMotion, y: yMotion }}
      className="relative w-[380px] h-[380px] flex items-center justify-center"
    >
      {/* Outer ring decoration */}
      <div className="absolute w-[340px] h-[340px] rounded-full border border-dashed border-blue-500/20 dark:border-blue-400/15" />
      <div className="absolute w-[280px] h-[280px] rounded-full border border-blue-500/10 dark:border-blue-400/10" />
      
      {/* Connection lines from master to workers */}
      <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0.25" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {workers.map((worker) => {
          const angle = (worker.angle * Math.PI) / 180;
          const x2 = 190 + Math.cos(angle) * workerDistance;
          const y2 = 190 + Math.sin(angle) * workerDistance;
          
          return (
            <g key={`line-${worker.id}`}>
              {/* Base line */}
              <motion.line
                x1="190"
                y1="190"
                x2={x2}
                y2={y2}
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                strokeDasharray="6 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: worker.id * 0.15, ease: "easeOut" }}
              />
              
              {/* Animated pulse along the line */}
              <motion.circle
                r="2.5"
                fill="rgb(139, 92, 246)"
                filter="url(#softGlow)"
                animate={{
                  cx: [190, x2],
                  cy: [190, y2],
                  opacity: [0.8, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: worker.id * 0.4,
                  ease: "easeInOut"
                }}
              />
            </g>
          );
        })}

        {/* Data packets traveling to workers */}
        {dataPackets.map((packet) => {
          const worker = workers[packet.targetWorker];
          const angle = (worker.angle * Math.PI) / 180;
          const endX = 190 + Math.cos(angle) * workerDistance;
          const endY = 190 + Math.sin(angle) * workerDistance;
          const currentX = 190 + (endX - 190) * packet.progress;
          const currentY = 190 + (endY - 190) * packet.progress;
          
          return (
            <motion.circle
              key={packet.id}
              cx={currentX}
              cy={currentY}
              r="4"
              fill="rgb(52, 211, 153)"
              filter="url(#softGlow)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1 - packet.progress * 0.7, scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          );
        })}
      </svg>

      {/* Master Node (Control Plane) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute z-30"
        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <div className="relative">
          {/* Outer glow ring */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 w-18 h-18 -m-1.5 rounded-full bg-gradient-to-r from-blue-500/25 to-violet-500/25 blur-xl"
          />
          
          {/* Main node */}
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-xl shadow-blue-500/30 flex items-center justify-center border border-white/30">
            {/* Kubernetes wheel icon */}
            <svg viewBox="0 0 32 32" className="w-8 h-8 text-white" fill="currentColor">
              <path d="M16 2.5l-1.5 0.9v2.1l-1.8-1.1-1.1 1.8 1.8 1.1-2.1 0.2-0.2 2.1 2.1-0.2-0.9 1.9 1.9 0.9 0.9-1.9 0.9 1.9 1.9-0.9-0.9-1.9 2.1 0.2-0.2-2.1-2.1-0.2 1.8-1.1-1.1-1.8-1.8 1.1v-2.1l-1.5-0.9zM16 11c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zM16 19c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
              <circle cx="16" cy="16" r="2"/>
            </svg>
          </div>
          
          {/* Label */}
          <motion.div 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <span className="text-[9px] font-mono font-semibold text-blue-500 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
              control-plane
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Worker Nodes */}
      {workers.map((worker, index) => {
        const angle = (worker.angle * Math.PI) / 180;
        const x = Math.cos(angle) * workerDistance;
        const y = Math.sin(angle) * workerDistance;

        return (
          <motion.div
            key={worker.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-20"
            style={{ 
              left: `calc(50% + ${x}px)`, 
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <WorkerNodeComponent worker={worker} />
          </motion.div>
        );
      })}

      {/* Pod count indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-full shadow-lg"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
        </span>
        <span className="text-[10px] font-mono font-medium text-gray-600 dark:text-gray-300">
          {workers.reduce((acc, w) => acc + w.pods.filter(p => p.status !== 'terminating').length, 0)} pods
        </span>
      </motion.div>
    </motion.div>
  );
}

function WorkerNodeComponent({ worker }: { worker: WorkerNode }) {
  return (
    <div className="relative group">
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Node container */}
      <div className="relative w-16 h-16 rounded-xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200/80 dark:border-gray-700/80 shadow-lg flex flex-col items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-xl">
        {/* Inner gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900" />
        
        {/* Node icon */}
        <div className="relative z-10 w-5 h-5 rounded-md bg-gradient-to-br from-gray-400 to-gray-500 dark:from-gray-500 dark:to-gray-600 flex items-center justify-center mb-1">
          <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="currentColor">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        </div>
        
        {/* Pods visualization */}
        <div className="relative z-10 flex flex-wrap gap-0.5 justify-center max-w-[48px]">
          {worker.pods.map((pod) => (
            <motion.div
              key={pod.id}
              initial={pod.status === 'spawning' ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
              animate={
                pod.status === 'terminating' 
                  ? { scale: 0, opacity: 0 } 
                  : { scale: 1, opacity: 1 }
              }
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`w-1.5 h-1.5 rounded-full ${
                pod.status === 'running' 
                  ? 'bg-emerald-500 shadow-sm shadow-emerald-500/50' 
                  : pod.status === 'spawning'
                  ? 'bg-blue-500 shadow-sm shadow-blue-500/50'
                  : 'bg-red-400 shadow-sm shadow-red-400/50'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Label */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap"
      >
        <span className="text-[8px] font-mono text-gray-400 dark:text-gray-500">
          {worker.label}
        </span>
      </motion.div>
    </div>
  );
}

function generateInitialPods(count: number): Pod[] {
  return Array.from({ length: count }, (_, i) => ({
    id: Date.now() + i,
    angle: Math.random() * 360,
    distance: 15 + Math.random() * 20,
    status: 'running' as const
  }));
}
