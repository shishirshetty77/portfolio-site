'use client';

import { motion, useTransform, MotionValue } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

interface DevOpsPipelineProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

interface DataPacket {
  id: number;
  stage: 'code-to-cicd' | 'cicd-to-k8s' | 'k8s-to-server';
  progress: number;
}

export function DevOpsPipeline({ mouseX, mouseY }: DevOpsPipelineProps) {
  const [packets, setPackets] = useState<DataPacket[]>([]);
  const [pipelineStage, setPipelineStage] = useState<'idle' | 'build' | 'test' | 'deploy'>('idle');

  // Parallax effect
  const xMotion = useTransform(mouseX, [0, 1], [-12, 12]);
  const yMotion = useTransform(mouseY, [0, 1], [-12, 12]);

  // Main animation loop - creates continuous flow
  useEffect(() => {
    const createPacket = () => {
      const newPacket: DataPacket = {
        id: Date.now() + Math.random(),
        stage: 'code-to-cicd',
        progress: 0,
      };
      setPackets(prev => [...prev, newPacket]);
      setPipelineStage('build');
    };

    const interval = setInterval(createPacket, 3500);
    setTimeout(createPacket, 300);

    return () => clearInterval(interval);
  }, []);

  // Animate packets through the pipeline
  useEffect(() => {
    const interval = setInterval(() => {
      setPackets(prev => {
        return prev.map(packet => {
          const newProgress = packet.progress + 0.018;
          
          if (newProgress >= 1) {
            if (packet.stage === 'code-to-cicd') {
              setPipelineStage('test');
              return { ...packet, stage: 'cicd-to-k8s' as const, progress: 0 };
            } else if (packet.stage === 'cicd-to-k8s') {
              setPipelineStage('deploy');
              return { ...packet, stage: 'k8s-to-server' as const, progress: 0 };
            } else {
              setPipelineStage('idle');
              return null;
            }
          }
          
          return { ...packet, progress: newProgress };
        }).filter(Boolean) as DataPacket[];
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Layout positions - spread out more for larger components
  const positions = {
    code: { x: 70, y: 195 },
    cicd: { x: 210, y: 195 },
    k8s: { x: 350, y: 195 },
    server: { x: 490, y: 195 },
  };

  // Smooth bezier path calculations
  const getPacketPosition = useCallback((packet: DataPacket) => {
    const { stage, progress } = packet;
    const t = progress;
    
    let start, end, controlY;
    
    switch (stage) {
      case 'code-to-cicd':
        start = positions.code;
        end = positions.cicd;
        controlY = -35;
        break;
      case 'cicd-to-k8s':
        start = positions.cicd;
        end = positions.k8s;
        controlY = -40;
        break;
      case 'k8s-to-server':
        start = positions.k8s;
        end = positions.server;
        controlY = -35;
        break;
      default:
        return positions.code;
    }
    
    // Quadratic bezier curve
    const midX = (start.x + end.x) / 2;
    const midY = start.y + controlY;
    
    const x = (1 - t) * (1 - t) * start.x + 2 * (1 - t) * t * midX + t * t * end.x;
    const y = (1 - t) * (1 - t) * start.y + 2 * (1 - t) * t * midY + t * t * end.y;
    
    return { x, y };
  }, []);

  const getPacketColor = (stage: string) => {
    switch (stage) {
      case 'code-to-cicd': return { main: '#34d399', glow: 'rgba(52, 211, 153, 0.5)' };
      case 'cicd-to-k8s': return { main: '#3b82f6', glow: 'rgba(59, 130, 246, 0.5)' };
      case 'k8s-to-server': return { main: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.5)' };
      default: return { main: '#34d399', glow: 'rgba(52, 211, 153, 0.5)' };
    }
  };

  return (
    <motion.div
      style={{ x: xMotion, y: yMotion }}
      className="relative w-[560px] h-[400px] flex items-center justify-center"
    >
      {/* SVG for paths and animations */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 560 400">
        <defs>
          {/* Enhanced gradients */}
          <linearGradient id="pathGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="pathGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="pathGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
          </linearGradient>
          
          {/* Glow filters */}
          <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="packetGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="lineGlow" x="-50%" y="-200%" width="200%" height="500%">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Connection paths - smooth curves */}
        {/* Code to CI/CD */}
        <motion.path
          d={`M ${positions.code.x + 32} ${positions.code.y} Q ${(positions.code.x + positions.cicd.x) / 2} ${positions.code.y - 40} ${positions.cicd.x - 38} ${positions.cicd.y}`}
          fill="none"
          stroke="url(#pathGrad1)"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#lineGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        />
        
        {/* CI/CD to K8s */}
        <motion.path
          d={`M ${positions.cicd.x + 38} ${positions.cicd.y} Q ${(positions.cicd.x + positions.k8s.x) / 2} ${positions.cicd.y - 45} ${positions.k8s.x - 40} ${positions.k8s.y}`}
          fill="none"
          stroke="url(#pathGrad2)"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#lineGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        />
        
        {/* K8s to Server */}
        <motion.path
          d={`M ${positions.k8s.x + 40} ${positions.k8s.y} Q ${(positions.k8s.x + positions.server.x) / 2} ${positions.k8s.y - 40} ${positions.server.x - 38} ${positions.server.y}`}
          fill="none"
          stroke="url(#pathGrad3)"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#lineGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
        />

        {/* Animated data packets */}
        {packets.map((packet) => {
          const pos = getPacketPosition(packet);
          const colors = getPacketColor(packet.stage);
          
          return (
            <g key={packet.id}>
              {/* Outer glow */}
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r="16"
                fill={colors.glow}
                filter="url(#packetGlow)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0.8, 1.2, 0.8], opacity: 0.4 }}
                transition={{ scale: { duration: 1, repeat: Infinity }, opacity: { duration: 0.3 } }}
              />
              {/* Inner core */}
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r="7"
                fill={colors.main}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, ease: "backOut" }}
              />
              {/* Bright center */}
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r="3"
                fill="white"
                opacity={0.8}
              />
            </g>
          );
        })}

        {/* Ambient flow particles */}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={`flow-${i}`}
            r="2.5"
            fill="#8b5cf6"
            opacity={0.35}
            animate={{
              cx: [
                positions.code.x + 32,
                (positions.code.x + positions.cicd.x) / 2,
                positions.cicd.x,
                (positions.cicd.x + positions.k8s.x) / 2,
                positions.k8s.x,
                (positions.k8s.x + positions.server.x) / 2,
                positions.server.x - 38,
              ],
              cy: [
                positions.code.y,
                positions.code.y - 40,
                positions.cicd.y,
                positions.cicd.y - 45,
                positions.k8s.y,
                positions.k8s.y - 40,
                positions.server.y,
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear",
            }}
          />
        ))}
      </svg>

      {/* Code/Git Node */}
      <motion.div
        className="absolute"
        style={{ left: positions.code.x - 32, top: positions.code.y - 32 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative group cursor-default">
          {/* Animated glow ring */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-3 bg-emerald-500/30 rounded-2xl blur-xl"
          />
          {/* Main node */}
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 shadow-2xl shadow-emerald-500/40 flex items-center justify-center border border-white/30 group-hover:scale-105 transition-transform duration-300">
            {/* GitHub icon */}
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white drop-shadow-lg" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </div>
          {/* Label */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="text-[10px] font-mono font-bold tracking-wide text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-500/25 backdrop-blur-sm">
              CODE
            </span>
          </div>
        </div>
      </motion.div>

      {/* CI/CD Pipeline Node */}
      <motion.div
        className="absolute"
        style={{ left: positions.cicd.x - 38, top: positions.cicd.y - 38 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative group cursor-default">
          {/* Animated glow */}
          <motion.div
            animate={{ 
              scale: pipelineStage !== 'idle' ? [1, 1.2, 1] : [1, 1.08, 1],
              opacity: pipelineStage !== 'idle' ? [0.4, 0.7, 0.4] : [0.25, 0.4, 0.25],
            }}
            transition={{ duration: pipelineStage !== 'idle' ? 0.8 : 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-3 bg-blue-500/30 rounded-2xl blur-xl"
          />
          {/* Main node */}
          <div className="relative w-[76px] h-[76px] rounded-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 shadow-2xl shadow-blue-500/40 flex flex-col items-center justify-center border border-white/30 overflow-hidden group-hover:scale-105 transition-transform duration-300">
            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-black/20">
              <motion.div 
                className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                animate={{ 
                  width: pipelineStage === 'build' ? '33%' : pipelineStage === 'test' ? '66%' : pipelineStage === 'deploy' ? '100%' : '0%' 
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
            {/* Icon */}
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            {/* Stage text */}
            <span className="text-[9px] font-mono font-bold text-white/90 uppercase tracking-wider mt-1">
              {pipelineStage === 'idle' ? 'READY' : pipelineStage}
            </span>
          </div>
          {/* Label */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="text-[10px] font-mono font-bold tracking-wide text-blue-600 dark:text-blue-400 bg-blue-500/15 px-3 py-1 rounded-full border border-blue-500/25 backdrop-blur-sm">
              CI/CD
            </span>
          </div>
        </div>
      </motion.div>

      {/* Kubernetes Node */}
      <motion.div
        className="absolute"
        style={{ left: positions.k8s.x - 40, top: positions.k8s.y - 40 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative group cursor-default">
          {/* Animated glow */}
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-3 bg-violet-500/30 rounded-2xl blur-xl"
          />
          {/* Main node */}
          <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-400 via-violet-500 to-purple-600 shadow-2xl shadow-violet-500/40 flex items-center justify-center border border-white/30 group-hover:scale-105 transition-transform duration-300">
            {/* Kubernetes icon - proper helm wheel */}
            <svg viewBox="0 0 32 32" className="w-10 h-10 text-white drop-shadow-lg" fill="currentColor">
              <path d="M15.9.5a2.1 2.1 0 0 0-.8.2l-11 5.4a2.1 2.1 0 0 0-1.1 1.4l-2.6 11.8a2.1 2.1 0 0 0 .3 1.7l7.6 9.4a2.1 2.1 0 0 0 1.6.8h12a2.1 2.1 0 0 0 1.6-.8l7.6-9.4a2.1 2.1 0 0 0 .3-1.7l-2.6-11.8a2.1 2.1 0 0 0-1.1-1.4l-11-5.4a2.1 2.1 0 0 0-.8-.2zm.1 5.7a1 1 0 0 1 1 .7l1.4 4.2 4.2 1.4a1 1 0 0 1 0 1.9l-4.2 1.4-1.4 4.2a1 1 0 0 1-1.9 0l-1.4-4.2-4.2-1.4a1 1 0 0 1 0-1.9l4.2-1.4 1.4-4.2a1 1 0 0 1 .9-.7z"/>
            </svg>
          </div>
          {/* Label */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="text-[10px] font-mono font-bold tracking-wide text-violet-600 dark:text-violet-400 bg-violet-500/15 px-3 py-1 rounded-full border border-violet-500/25 backdrop-blur-sm">
              K8S
            </span>
          </div>
        </div>
      </motion.div>

      {/* Server/Cloud Node */}
      <motion.div
        className="absolute"
        style={{ left: positions.server.x - 38, top: positions.server.y - 38 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative group cursor-default">
          {/* Animated glow */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.45, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-3 bg-pink-500/30 rounded-2xl blur-xl"
          />
          {/* Main node */}
          <div className="relative w-[76px] h-[76px] rounded-2xl bg-gradient-to-br from-pink-400 via-rose-500 to-red-600 shadow-2xl shadow-rose-500/40 flex flex-col items-center justify-center border border-white/30 overflow-hidden group-hover:scale-105 transition-transform duration-300">
            {/* Cloud/Server icon */}
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white drop-shadow-lg" fill="currentColor">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/>
            </svg>
            {/* Status LEDs */}
            <div className="flex gap-1.5 mt-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={`led-${i}`}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.25 }}
                  className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50"
                />
              ))}
            </div>
          </div>
          {/* Label */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="text-[10px] font-mono font-bold tracking-wide text-rose-600 dark:text-rose-400 bg-rose-500/15 px-3 py-1 rounded-full border border-rose-500/25 backdrop-blur-sm">
              CLOUD
            </span>
          </div>
        </div>
      </motion.div>

      {/* Orbiting pods around K8s */}
      <OrbitingPods position={positions.k8s} />
    </motion.div>
  );
}

// Separate component for orbiting pods with proper animation
function OrbitingPods({ position }: { position: { x: number; y: number } }) {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1.5) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {[0, 120, 240].map((offset, i) => {
        const angle = ((rotation + offset) * Math.PI) / 180;
        const radius = 52;
        const x = position.x + Math.cos(angle) * radius;
        const y = position.y + Math.sin(angle) * radius;
        
        return (
          <motion.div
            key={`orbit-pod-${i}`}
            className="absolute w-3.5 h-3.5 rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500 shadow-lg shadow-emerald-500/40 border border-white/40 pointer-events-none"
            style={{
              left: x - 7,
              top: y - 7,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 + i * 0.15, duration: 0.4 }}
          />
        );
      })}
    </>
  );
}
