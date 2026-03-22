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
      className="relative w-[380px] h-[380px] flex items-center justify-center p-4 bg-background border-2 border-border-color"
    >
      {/* Brutalist structural background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Outer sharp geometric decorations instead of circles */}
      <div className="absolute w-[300px] h-[300px] border-2 border-dashed border-tertiary/40 rotate-[15deg]" />
      <div className="absolute w-[240px] h-[240px] border-2 border-primary/20 -rotate-[15deg]" />
      
      {/* Connection lines from master to workers */}
      <svg className="absolute inset-0 w-full h-full z-0" style={{ overflow: 'visible' }}>
        {workers.map((worker) => {
          const angle = (worker.angle * Math.PI) / 180;
          const x2 = 190 + Math.cos(angle) * workerDistance;
          const y2 = 190 + Math.sin(angle) * workerDistance;
          
          return (
            <g key={`line-${worker.id}`}>
              {/* Base line - strict dotted brutalist format */}
              <motion.line
                x1="190"
                y1="190"
                x2={x2}
                y2={y2}
                stroke="#FAFAF9"
                strokeWidth="2"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: worker.id * 0.15, ease: "easeOut" }}
              />
              
              {/* Animated pulse block along the line */}
              <motion.rect
                width="8"
                height="8"
                fill="#FF4500"
                animate={{
                  x: [186, x2 - 4],
                  y: [186, y2 - 4],
                  opacity: [1, 0.2],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: worker.id * 0.4,
                  ease: "linear"
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
            <motion.rect
              key={packet.id}
              x={currentX - 6}
              y={currentY - 6}
              width="12"
              height="12"
              fill="#A3E635"
              stroke="#000"
              strokeWidth="2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.1 }}
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
        <div className="relative group hover:-translate-y-1 transition-transform">
          {/* Main brutalist node */}
          <div className="relative w-16 h-16 bg-primary border-4 border-white shadow-[8px_8px_0px_#000] flex items-center justify-center">
            {/* Kubernetes wheel icon */}
            <svg viewBox="0 0 32 32" className="w-10 h-10 text-black" fill="currentColor">
              <path d="M16 2.5l-1.5 0.9v2.1l-1.8-1.1-1.1 1.8 1.8 1.1-2.1 0.2-0.2 2.1 2.1-0.2-0.9 1.9 1.9 0.9 0.9-1.9 0.9 1.9 1.9-0.9-0.9-1.9 2.1 0.2-0.2-2.1-2.1-0.2 1.8-1.1-1.1-1.8-1.8 1.1v-2.1l-1.5-0.9zM16 11c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zM16 19c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
              <rect x="15" y="15" width="2" height="2" fill="white" />
            </svg>
          </div>
          
          {/* Label */}
          <motion.div 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <span className="text-[10px] uppercase font-mono font-bold text-black bg-primary px-3 py-1 border-2 border-white shadow-[2px_2px_0_#000]">
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
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 bg-black border-2 border-white shadow-[4px_4px_0_#FFF]"
      >
        <div className="w-3 h-3 bg-tertiary border-2 border-white animate-pulse" />
        <span className="text-xs font-mono font-black text-white uppercase tracking-widest">
          {workers.reduce((acc, w) => acc + w.pods.filter(p => p.status !== 'terminating').length, 0)} PODS
        </span>
      </motion.div>
    </motion.div>
  );
}

function WorkerNodeComponent({ worker }: { worker: WorkerNode }) {
  return (
    <div className="relative group hover:-translate-y-1 transition-transform">
      {/* Node container - brutalist style */}
      <div className="relative w-16 h-16 bg-secondary border-2 border-white shadow-[4px_4px_0_#000] flex flex-col items-center justify-center overflow-hidden">
        
        {/* Node icon */}
        <div className="relative z-10 w-6 h-6 border-2 border-black flex items-center justify-center mb-1 bg-white">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-black" fill="currentColor">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
          </svg>
        </div>
        
        {/* Pods visualization - strict grid logic */}
        <div className="relative z-10 flex flex-wrap gap-1 justify-center max-w-[48px] px-1">
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
              className={`w-2 h-2 border border-black ${
                pod.status === 'running' 
                  ? 'bg-tertiary' 
                  : pod.status === 'spawning'
                  ? 'bg-white'
                  : 'bg-primary'
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
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
      >
        <span className="text-[9px] font-mono font-bold text-black bg-secondary border border-white px-2 py-0.5 uppercase shadow-[2px_2px_0_#FFF]">
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
