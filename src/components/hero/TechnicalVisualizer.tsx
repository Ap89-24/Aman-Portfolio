import React, { useEffect, useRef } from 'react';
import { Cpu, Network, Database } from 'lucide-react';
import gsap from 'gsap';

export const TechnicalVisualizer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const node1Ref = useRef<HTMLDivElement | null>(null);
  const node2Ref = useRef<HTMLDivElement | null>(null);
  const node3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Initial entrance
      gsap.fromTo(
        container,
        { scale: 0.9, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 1, delay: 0.4, ease: 'power3.out' }
      );

      // 2. Subtle node floating animation
      const nodes = [node1Ref.current, node2Ref.current, node3Ref.current].filter(Boolean);
      nodes.forEach((node, i) => {
        if (!node) return;
        gsap.to(node, {
          y: i % 2 === 0 ? -6 : 6,
          duration: 3 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.3,
        });
      });
    }, container);

    // Subtle mouse tilt reaction
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(container, {
        rotateY: x * 0.03,
        rotateX: -y * 0.03,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const onMouseLeave = () => {
      gsap.to(container, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'power2.out' });
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);

    return () => {
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-md p-6 rounded-2xl bg-zinc-950/80 border border-white/10 backdrop-blur-xl shadow-2xl relative group overflow-hidden tech-border perspective-1000"
    >
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all" />
      
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <span className="font-mono text-[11px] text-zinc-400">system_architecture.sys</span>
      </div>

      <div className="space-y-4">
        {/* Node 1 */}
        <div ref={node1Ref} className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/90 border border-blue-500/20 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span className="text-zinc-200 font-medium">AI / LLMs</span>
          </div>
          <span className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">ONLINE</span>
        </div>

        <div className="flex justify-center my-1">
          <div className="w-0.5 h-6 bg-gradient-to-b from-blue-500 to-indigo-500" />
        </div>

        {/* Node 2 */}
        <div ref={node2Ref} className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/90 border border-indigo-500/20 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <Network className="w-4 h-4 text-indigo-400" />
            <span className="text-zinc-200 font-medium">REST & WebSocket APIs</span>
          </div>
          <span className="text-[10px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">STREAMING</span>
        </div>

        <div className="flex justify-center my-1">
          <div className="w-0.5 h-6 bg-gradient-to-b from-indigo-500 to-cyan-500" />
        </div>

        {/* Node 3 */}
        <div ref={node3Ref} className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/90 border border-cyan-500/20 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <Database className="w-4 h-4 text-cyan-400" />
            <span className="text-zinc-200 font-medium">Scalable Backend & K8s</span>
          </div>
          <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">READY</span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
        <span>LATENCY: 12ms</span>
        <span className="text-emerald-400">● 99.99% UPTIME</span>
      </div>
    </div>
  );
};
