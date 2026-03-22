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

interface Pod {
  id: number;
  x: number;
  y: number;
  status: 'running' | 'pending' | 'creating';
  scale: number;
}

interface ClusterEvent {
  id: number;
  type: 'pod' | 'event' | 'workload' | 'service';
  fromCluster: 'k8s' | 'server';
  toCluster: 'k8s' | 'server';
  progress: number;
}

export function DevOpsPipeline({ mouseX, mouseY }: DevOpsPipelineProps) {
  const [packets, setPackets] = useState<DataPacket[]>([]);
  const [pipelineStage, setPipelineStage] = useState<'idle' | 'build' | 'test' | 'deploy'>('idle');
  const [pods, setPods] = useState<Pod[]>([]);
  const [clusterEvents, setClusterEvents] = useState<ClusterEvent[]>([]);

  // Parallax effect
  const xMotion = useTransform(mouseX, [0, 1], [-12, 12]);
  const yMotion = useTransform(mouseY, [0, 1], [-12, 12]);

  // Initialize cluster pods
  useEffect(() => {
    const initialPods: Pod[] = [
      { id: 1, x: -22, y: -18, status: 'running', scale: 1 },
      { id: 2, x: 22, y: -18, status: 'running', scale: 1 },
      { id: 3, x: -22, y: 18, status: 'running', scale: 1 },
      { id: 4, x: 22, y: 18, status: 'running', scale: 1 },
      { id: 5, x: 0, y: 0, status: 'running', scale: 1.1 },
    ];
    setPods(initialPods);
  }, []);

  // Cluster-to-cluster communication
  useEffect(() => {
    const createClusterEvent = () => {
      const eventTypes: ('pod' | 'event' | 'workload' | 'service')[] = ['pod', 'event', 'workload', 'service'];
      const randomType = eventTypes[Math.floor(Math.random() * eventTypes.length)];
      const direction = Math.random() > 0.5;
      
      const newEvent: ClusterEvent = {
        id: Date.now() + Math.random(),
        type: randomType,
        fromCluster: direction ? 'k8s' : 'server',
        toCluster: direction ? 'server' : 'k8s',
        progress: 0,
      };
      setClusterEvents(prev => [...prev.slice(-8), newEvent]);
    };

    const interval = setInterval(createClusterEvent, 1200);
    setTimeout(createClusterEvent, 500);
    return () => clearInterval(interval);
  }, []);

  // Animate cluster events
  useEffect(() => {
    const interval = setInterval(() => {
      setClusterEvents(prev => {
        return prev.map(event => {
          const newProgress = event.progress + 0.025;
          if (newProgress >= 1) return null;
          return { ...event, progress: newProgress };
        }).filter(Boolean) as ClusterEvent[];
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Main animation loop
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

  // Animate pods when packet arrives
  useEffect(() => {
    const hasK8sPacket = packets.some(p => p.stage === 'cicd-to-k8s' && p.progress > 0.8);
    if (hasK8sPacket) {
      setPods(prev => prev.map((pod, i) => ({
        ...pod,
        status: i === 4 ? 'creating' : pod.status,
        scale: i === 4 ? 1.3 : pod.scale,
      })));
      
      setTimeout(() => {
        setPods(prev => prev.map(pod => ({
          ...pod,
          status: 'running',
          scale: pod.id === 5 ? 1.1 : 1,
        })));
      }, 500);
    }
  }, [packets]);

  // Animate packets through pipeline
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

  // Layout positions
  const positions = {
    code: { x: 70, y: 195 },
    cicd: { x: 210, y: 195 },
    k8s: { x: 350, y: 195 },
    server: { x: 490, y: 195 },
  };

  const getPacketPosition = useCallback((packet: DataPacket) => {
    const { stage, progress } = packet;
    const t = progress;
    let start, end, controlY;
    
    switch (stage) {
      case 'code-to-cicd':
        start = positions.code; end = positions.cicd; controlY = -35; break;
      case 'cicd-to-k8s':
        start = positions.cicd; end = positions.k8s; controlY = -40; break;
      case 'k8s-to-server':
        start = positions.k8s; end = positions.server; controlY = -35; break;
      default: return positions.code;
    }
    
    const midX = (start.x + end.x) / 2;
    const midY = start.y + controlY;
    
    const x = (1 - t) * (1 - t) * start.x + 2 * (1 - t) * t * midX + t * t * end.x;
    const y = (1 - t) * (1 - t) * start.y + 2 * (1 - t) * t * midY + t * t * end.y;
    
    return { x, y };
  }, []);

  const getPacketColor = (stage: string) => {
    // Brutalist colors map
    switch (stage) {
      case 'code-to-cicd': return '#A3E635'; // Lime
      case 'cicd-to-k8s': return '#EAB308'; // Marigold
      case 'k8s-to-server': return '#FF4500'; // Blaze Orange
      default: return '#A3E635';
    }
  };

  const getClusterEventPosition = useCallback((event: ClusterEvent) => {
    const { fromCluster, toCluster, progress } = event;
    const t = progress;
    const start = fromCluster === 'k8s' ? positions.k8s : positions.server;
    const end = toCluster === 'k8s' ? positions.k8s : positions.server;
    const offsetY = (event.id % 3 - 1) * 15;
    const x = start.x + (end.x - start.x) * t;
    const y = start.y + (end.y - start.y) * t + Math.sin(t * Math.PI) * (-50 + offsetY);
    return { x, y };
  }, []);

  const getClusterEventStyle = (type: string) => {
    switch (type) {
      case 'pod': return { color: '#FF4500', size: 8 };
      case 'event': return { color: '#EAB308', size: 6 };
      case 'workload': return { color: '#A3E635', size: 7 };
      case 'service': return { color: '#FAFAF9', size: 5 };
      default: return { color: '#FF4500', size: 6 };
    }
  };

  return (
    <motion.div
      style={{ x: xMotion, y: yMotion }}
      className="relative w-[560px] h-[400px] flex items-center justify-center p-4"
    >
      {/* Brutalist structural background grid for pipeline */}
      <div className="absolute inset-0 border-2 border-border-color bg-background/50 backdrop-blur-sm" />
      <div className="absolute inset-x-0 h-px bg-border-color top-1/2" />
      <div className="absolute inset-y-0 w-px bg-border-color left-1/4" />
      <div className="absolute inset-y-0 w-px bg-border-color left-2/4" />
      <div className="absolute inset-y-0 w-px bg-border-color left-3/4" />

      {/* SVG for paths and animations */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 560 400">
        <defs>
          <filter id="packetGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Solid sharp paths instead of blurred lines */}
        <motion.path
          d={`M ${positions.code.x + 32} ${positions.code.y} Q ${(positions.code.x + positions.cicd.x) / 2} ${positions.code.y - 40} ${positions.cicd.x - 38} ${positions.cicd.y}`}
          fill="none"
          stroke="#A3E635"
          strokeWidth="3"
          strokeDasharray="8 4"
        />
        <motion.path
          d={`M ${positions.cicd.x + 38} ${positions.cicd.y} Q ${(positions.cicd.x + positions.k8s.x) / 2} ${positions.cicd.y - 45} ${positions.k8s.x - 40} ${positions.k8s.y}`}
          fill="none"
          stroke="#EAB308"
          strokeWidth="3"
          strokeDasharray="8 4"
        />
        <motion.path
          d={`M ${positions.k8s.x + 40} ${positions.k8s.y} Q ${(positions.k8s.x + positions.server.x) / 2} ${positions.k8s.y - 40} ${positions.server.x - 38} ${positions.server.y}`}
          fill="none"
          stroke="#FF4500"
          strokeWidth="3"
          strokeDasharray="8 4"
        />

        {/* Cluster-to-Cluster Communication lines (Sharp style) */}
        <motion.path
          d={`M ${positions.k8s.x + 50} ${positions.k8s.y} Q ${(positions.k8s.x + positions.server.x) / 2} ${positions.k8s.y - 70} ${positions.server.x - 38} ${positions.server.y}`}
          fill="none"
          stroke="#FAFAF9"
          strokeWidth="2"
          strokeDasharray="6,6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, strokeDashoffset: [0, -20] }}
          transition={{ strokeDashoffset: { duration: 1.5, repeat: Infinity, ease: "linear" } }}
        />
        <motion.path
          d={`M ${positions.server.x - 38} ${positions.server.y + 10} Q ${(positions.k8s.x + positions.server.x) / 2} ${positions.server.y + 50} ${positions.k8s.x + 50} ${positions.k8s.y + 10}`}
          fill="none"
          stroke="#FAFAF9"
          strokeWidth="2"
          strokeDasharray="6,6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, strokeDashoffset: [0, 20] }}
          transition={{ strokeDashoffset: { duration: 1.5, repeat: Infinity, ease: "linear" } }}
        />

        {/* Cluster-to-Cluster Event Particles */}
        {clusterEvents.map((event) => {
          const pos = getClusterEventPosition(event);
          const style = getClusterEventStyle(event.type);
          return (
            <g key={event.id}>
              {/* Main particle - sharp square */}
              <motion.rect
                x={pos.x - style.size}
                y={pos.y - style.size}
                width={style.size * 2}
                height={style.size * 2}
                fill={style.color}
                initial={{ scale: 0 }}
                animate={{ scale: [0.8, 1.1, 0.8] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            </g>
          );
        })}

        {/* Animated data packets */}
        {packets.map((packet) => {
          const pos = getPacketPosition(packet);
          const color = getPacketColor(packet.stage);
          return (
            <g key={packet.id}>
              {/* Outer bright square */}
              <motion.rect
                x={pos.x - 12}
                y={pos.y - 12}
                width="24"
                height="24"
                fill="none"
                stroke={color}
                strokeWidth="3"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0.8, 1.2, 0.8], opacity: 1 }}
                transition={{ scale: { duration: 1, repeat: Infinity } }}
              />
              {/* Inner core square */}
              <motion.rect
                x={pos.x - 6}
                y={pos.y - 6}
                width="12"
                height="12"
                fill={color}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              />
            </g>
          );
        })}
      </svg>

      {/* Nodes mapping */}
      {/* CODE Node */}
      <motion.div
        className="absolute z-10"
        style={{ left: positions.code.x - 32, top: positions.code.y - 32 }}
      >
        <div className="relative group cursor-default">
          <div className="w-16 h-16 bg-tertiary border-2 border-white shadow-[6px_6px_0px_#000] flex items-center justify-center transition-transform group-hover:-translate-y-1">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-black" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="text-[10px] font-mono font-bold tracking-widest text-black bg-tertiary px-3 py-1 border-2 border-white uppercase shadow-[2px_2px_0_#000]">
              CODE
            </span>
          </div>
        </div>
      </motion.div>

      {/* CI/CD Node */}
      <motion.div
        className="absolute z-10"
        style={{ left: positions.cicd.x - 38, top: positions.cicd.y - 38 }}
      >
        <div className="relative group cursor-default">
          <div className="w-[76px] h-[76px] bg-secondary border-2 border-white shadow-[6px_6px_0px_#000] flex flex-col items-center justify-center transition-transform group-hover:-translate-y-1">
            <div className="absolute top-0 left-0 right-0 h-2 bg-black/20">
              <motion.div 
                className="h-full bg-white"
                animate={{ width: pipelineStage === 'build' ? '33%' : pipelineStage === 'test' ? '66%' : pipelineStage === 'deploy' ? '100%' : '0%' }}
              />
            </div>
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <span className="text-[10px] font-mono font-black text-black uppercase tracking-wider mt-1">
              {pipelineStage === 'idle' ? 'RDY' : pipelineStage}
            </span>
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="text-[10px] font-mono font-bold tracking-widest text-black bg-secondary px-3 py-1 border-2 border-white uppercase shadow-[2px_2px_0_#000]">
              CI/CD
            </span>
          </div>
        </div>
      </motion.div>

      {/* K8S Node */}
      <motion.div
        className="absolute z-10"
        style={{ left: positions.k8s.x - 50, top: positions.k8s.y - 50 }}
      >
        <div className="relative group cursor-default">
          <div className="w-[100px] h-[100px] bg-primary border-4 border-white shadow-[8px_8px_0px_#000] flex items-center justify-center transition-transform group-hover:-translate-y-1 overflow-hidden">
            {pods.map((pod) => (
              <motion.div
                key={pod.id}
                className="absolute"
                style={{
                  left: `calc(50% + ${pod.x}px - 8px)`,
                  top: `calc(50% + ${pod.y}px - 8px)`,
                }}
                animate={{ scale: pod.status === 'creating' ? [1, 1.3, 1] : pod.scale }}
              >
                <div className={`w-4 h-4 border-2 border-black ${
                  pod.status === 'running' ? 'bg-white' : pod.status === 'creating' ? 'bg-secondary' : 'bg-tertiary'
                }`} />
              </motion.div>
            ))}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none mix-blend-multiply">
              <svg viewBox="0 0 32 32" className="w-16 h-16 text-black" fill="currentColor">
                <path d="M15.9.5a2.1 2.1 0 0 0-.8.2l-11 5.4a2.1 2.1 0 0 0-1.1 1.4l-2.6 11.8a2.1 2.1 0 0 0 .3 1.7l7.6 9.4a2.1 2.1 0 0 0 1.6.8h12a2.1 2.1 0 0 0 1.6-.8l7.6-9.4a2.1 2.1 0 0 0 .3-1.7l-2.6-11.8a2.1 2.1 0 0 0-1.1-1.4l-11-5.4a2.1 2.1 0 0 0-.8-.2z"/>
              </svg>
            </div>
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="text-[10px] font-mono font-bold tracking-widest text-black bg-primary px-3 py-1 border-2 border-white uppercase shadow-[2px_2px_0_#000]">
              CLUSTER
            </span>
          </div>
        </div>
      </motion.div>

      {/* SERVER Node */}
      <motion.div
        className="absolute z-10"
        style={{ left: positions.server.x - 38, top: positions.server.y - 38 }}
      >
        <div className="relative group cursor-default">
          <div className="w-[76px] h-[76px] bg-white border-4 border-black shadow-[6px_6px_0px_#FF4500] flex flex-col items-center justify-center transition-transform group-hover:-translate-y-1">
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-black" fill="currentColor">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/>
            </svg>
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="text-[10px] font-mono font-bold tracking-widest text-black bg-white px-3 py-1 border-2 border-primary uppercase shadow-[2px_2px_0_#000]">
              CLOUD
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
