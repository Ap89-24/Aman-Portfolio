import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading } from '../ui/SectionHeading';
import { GSAPTextReveal } from '../ui/GSAPTextReveal';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    const list = listRef.current;
    if (!el || !list) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (list.children.length) {
        gsap.fromTo(
          list.children,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: list,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  const focusAreas = [
    { num: '01', title: 'AI ENGINEERING', desc: 'LLM Orchestration · RAG Pipelines · Agentic Workflows', color: 'text-blue-400', borderHover: 'hover:border-blue-500/40' },
    { num: '02', title: 'BACKEND ARCHITECTURE', desc: 'High-concurrency APIs · REST & GraphQL · Microservices', color: 'text-indigo-400', borderHover: 'hover:border-indigo-500/40' },
    { num: '03', title: 'REAL-TIME SYSTEMS', desc: 'WebSockets · EventBus · Streaming Telemetry', color: 'text-cyan-400', borderHover: 'hover:border-cyan-500/40' },
    { num: '04', title: 'CLOUD & DEVOPS', desc: 'Docker · Kubernetes · CI/CD Pipelines · AWS', color: 'text-emerald-400', borderHover: 'hover:border-emerald-500/40' },
    { num: '05', title: 'SYSTEM DESIGN', desc: 'Caching Layers · Load Balancing · Resilient DBs', color: 'text-amber-400', borderHover: 'hover:border-amber-500/40' },
  ];

  return (
    <section id="about" ref={containerRef} className="px-6 md:px-12 max-w-7xl mx-auto py-24 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div className="lg:col-span-6 space-y-6">
          <SectionHeading tag="02 // ABOUT AMAN PATEL" title="MORE THAN JUST CODE." className="mb-6" />

          <GSAPTextReveal
            text="I'm a Full-Stack Developer focused on building AI-powered products, scalable backend systems, and real-time applications."
            as="p"
            className="text-zinc-300 text-lg leading-relaxed font-normal"
            stagger={0.03}
          />

          <GSAPTextReveal
            text="I enjoy taking ideas from architecture and APIs all the way to deployment and production. Whether it's designing RAG workflows for multi-modal LLMs or containerizing Kubernetes clusters, I build systems with performance, reliability, and security at their core."
            as="p"
            className="text-zinc-400 text-base leading-relaxed"
            stagger={0.02}
          />

          <div className="pt-4 flex items-center gap-6">
            <div>
              <span className="font-display text-3xl font-bold text-white block">4+</span>
              <span className="font-mono text-xs text-zinc-400 uppercase">Core Projects Shipped</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <span className="font-display text-3xl font-bold text-white block">100%</span>
              <span className="font-mono text-xs text-zinc-400 uppercase">Production Grade</span>
            </div>
          </div>
        </div>

        <div ref={listRef} className="lg:col-span-6 space-y-3">
          {focusAreas.map((area) => (
            <div
              key={area.num}
              className={`p-4 rounded-xl bg-zinc-900/60 border border-white/10 ${area.borderHover} transition-all flex items-center justify-between group cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <span className={`font-mono text-xl font-bold ${area.color}`}>{area.num}</span>
                <div>
                  <h4 className="font-display font-bold text-white text-lg group-hover:text-blue-400 transition-colors">{area.title}</h4>
                  <p className="text-zinc-400 text-xs font-mono">{area.desc}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-blue-400 transition-colors" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
