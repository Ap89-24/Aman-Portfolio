import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mindsetSteps } from '../../data/mindset';
import { SectionHeading } from '../ui/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

export const HowIBuild: React.FC = () => {
  const [activeId, setActiveId] = useState('1');
  const activeStep = mindsetSteps.find((s) => s.id === activeId) || mindsetSteps[0];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackLineRef = useRef<HTMLDivElement | null>(null);
  const stepBtnsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const line = trackLineRef.current;
    const btns = stepBtnsRef.current;
    if (!container || !line || !btns) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Horizontal connecting line draws itself on scroll
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // 2. Step buttons reveal sequentially
      if (btns.children.length) {
        gsap.fromTo(
          btns.children,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: btns,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section id="mindset" ref={containerRef} className="px-6 md:px-12 max-w-7xl mx-auto py-24 border-t border-white/5">
      <SectionHeading
        tag="04 // METHODOLOGY"
        title="HOW I BUILD"
        subtitle="An engineering lifecycle focused on reliability, performance, and clean code."
      />

      {/* GSAP Horizontal Line Track */}
      <div className="relative mb-6">
        <div
          ref={trackLineRef}
          className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 origin-left scale-x-0 -translate-y-1/2 z-0"
        />

        <div ref={stepBtnsRef} className="grid grid-cols-2 md:grid-cols-6 gap-3 relative z-10">
          {mindsetSteps.map((s) => {
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className={`mindset-step-btn p-3 rounded-lg text-left transition-all ${
                  isActive
                    ? 'border border-blue-500 bg-blue-500/10 text-blue-400'
                    : 'border border-white/10 bg-zinc-900/90 text-zinc-400 hover:border-white/20'
                }`}
              >
                <span className="font-mono text-[10px] block opacity-70">STEP {s.stepNumber}</span>
                <span className="font-display font-bold text-sm">{s.shortTitle}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step Detail Card */}
      <div className="tech-card p-6 border border-white/10 bg-zinc-950/80">
        <h3 className="font-display font-bold text-xl text-white mb-2">
          {activeStep.fullTitle}
        </h3>
        <p className="text-zinc-300 text-base leading-relaxed mb-4">
          {activeStep.description}
        </p>
        <div className="font-mono text-xs text-blue-400 p-3 rounded bg-blue-500/10 border border-blue-500/20">
          {activeStep.artifacts}
        </div>
      </div>
    </section>
  );
};
