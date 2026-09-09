import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GSAPTextReveal } from './GSAPTextReveal';

gsap.registerPlugin(ScrollTrigger);

interface SectionHeadingProps {
  tag: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  subtitle,
  className = '',
}) => {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const line = lineRef.current;
    const container = containerRef.current;
    if (!line || !container) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`mb-16 ${className}`}>
      <span className="section-tag block font-mono text-xs text-blue-400 font-semibold tracking-wider uppercase mb-2">
        {tag}
      </span>
      <GSAPTextReveal
        text={title}
        as="h2"
        className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight leading-tight"
        stagger={0.06}
      />
      {/* GSAP Animated Accent Line */}
      <div
        ref={lineRef}
        className="w-full h-px bg-gradient-to-r from-blue-500 via-indigo-500 to-transparent mt-4 origin-left scale-x-0"
      />
      {subtitle && (
        <p className="text-zinc-400 text-lg font-display mt-3 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
