import React, { useEffect, useRef } from 'react';
import { ArrowDownRight, Github } from 'lucide-react';
import gsap from 'gsap';
import { TechnicalVisualizer } from './TechnicalVisualizer';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const line3Ref = useRef<HTMLDivElement | null>(null);
  const badgesRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // 1. Small label reveal
      if (labelRef.current) {
        tl.fromTo(
          labelRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 }
        );
      }

      // 2. AMAN PATEL masked reveal (overflow hidden, translate-y, blur -> sharp)
      if (nameRef.current) {
        const nameUnits = nameRef.current.querySelectorAll('.hero-name-unit');
        tl.fromTo(
          nameUnits,
          { y: '120%', opacity: 0, filter: 'blur(12px)' },
          { y: '0%', opacity: 1, filter: 'blur(0px)', duration: 0.9, stagger: 0.1 },
          '-=0.3'
        );
      }

      // 3. Sequential tagline lines reveal
      const lines = [line1Ref.current, line2Ref.current, line3Ref.current].filter(Boolean);
      if (lines.length) {
        lines.forEach((lineEl) => {
          if (!lineEl) return;
          const units = lineEl.querySelectorAll('.line-unit');
          tl.fromTo(
            units,
            { y: '100%', opacity: 0, filter: 'blur(8px)' },
            { y: '0%', opacity: 1, filter: 'blur(0px)', duration: 0.7, stagger: 0.04 },
            '-=0.4'
          );
        });
      }

      // 4. Technical badges stagger
      if (badgesRef.current) {
        const badges = badgesRef.current.children;
        tl.fromTo(
          badges,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.05 },
          '-=0.3'
        );
      }

      // 5. Hero CTAs reveal
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
          '-=0.3'
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={containerRef} className="min-h-[88vh] flex items-center px-6 md:px-12 max-w-7xl mx-auto py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        
        <div className="lg:col-span-7 space-y-6">
          {/* Small Label */}
          <div ref={labelRef} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-[10px] sm:text-xs tracking-wider uppercase opacity-0 max-w-full">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping flex-shrink-0" />
            <span className="truncate">FULL-STACK DEVELOPER · AI ENGINEER · DEVOPS</span>
          </div>

          {/* Masked Hero Display Name: AMAN PATEL */}
          <h1 ref={nameRef} className="text-5xl sm:text-8xl lg:text-9xl font-display font-bold text-white tracking-tight leading-[0.95] overflow-hidden py-1">
            <span className="inline-block overflow-hidden mr-[0.2em]">
              <span className="hero-name-unit inline-block transform translate-y-full opacity-0">AMAN</span>
            </span>
            <span className="inline-block overflow-hidden">
              <span className="hero-name-unit inline-block transform translate-y-full opacity-0">PATEL</span>
            </span>
          </h1>

          {/* Sequential Tagline Lines */}
          <div className="space-y-1.5 font-display text-lg sm:text-2xl font-medium text-zinc-200">
            <div ref={line1Ref} className="overflow-hidden">
              <span className="line-unit inline-block transform translate-y-full opacity-0 text-white font-semibold">
                Building AI-powered products,
              </span>
            </div>
            <div ref={line2Ref} className="overflow-hidden">
              <span className="line-unit inline-block transform translate-y-full opacity-0 text-zinc-300">
                scalable backend systems,
              </span>
            </div>
            <div ref={line3Ref} className="overflow-hidden">
              <span className="line-unit inline-block transform translate-y-full opacity-0 text-zinc-400 font-normal">
                and real-time infrastructure — from idea to production.
              </span>
            </div>
          </div>

          {/* Technical Badges */}
          <div ref={badgesRef} className="flex flex-wrap gap-2 pt-2">
            <span className="tech-label tech-label-accent">AI / LLM</span>
            <span className="tech-label">FULL-STACK</span>
            <span className="tech-label">BACKEND</span>
            <span className="tech-label">CLOUD</span>
            <span className="tech-label">SYSTEM ARCHITECTURE</span>
          </div>

          {/* Hero CTAs */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">
            <a href="#work" className="btn-primary">
              <span>EXPLORE WORK</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/Ap89-24"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github className="w-4 h-4" />
              <span>GITHUB ↗</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <TechnicalVisualizer />
        </div>

      </div>
    </section>
  );
};
