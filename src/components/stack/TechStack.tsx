import React, { useEffect, useRef } from 'react';
import { Code, Layout, Server, Database, Sparkles, Cloud } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { stackCategories } from '../../data/stack';
import { SectionHeading } from '../ui/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

export const TechStack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = el.querySelectorAll('.stack-card');
      if (cards.length) {
        gsap.fromTo(
          cards,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code': return <Code className="w-4 h-4 text-blue-400" />;
      case 'Layout': return <Layout className="w-4 h-4 text-indigo-400" />;
      case 'Server': return <Server className="w-4 h-4 text-cyan-400" />;
      case 'Database': return <Database className="w-4 h-4 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-amber-400" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-rose-400" />;
      default: return <Code className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="stack" ref={containerRef} className="px-6 md:px-12 max-w-7xl mx-auto py-24 border-t border-white/5">
      <SectionHeading
        tag="03 // TECHNOLOGIES"
        title="THE STACK"
        subtitle="Languages, frameworks, and infrastructure tools I engineer with."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stackCategories.map((cat) => (
          <div key={cat.id} className="stack-card tech-card p-6 border border-white/10 opacity-0">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
              {getIcon(cat.icon)}
              <h3 className="font-display font-bold text-white text-base">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item, i) => (
                <span
                  key={i}
                  className={`tech-label ${i === 0 ? 'tech-label-accent' : ''}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
