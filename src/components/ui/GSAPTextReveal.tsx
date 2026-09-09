import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GSAPTextRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div' | 'span';
  stagger?: number;
  delay?: number;
  duration?: number;
  useScrollTrigger?: boolean;
  splitBy?: 'words' | 'lines';
}

export const GSAPTextReveal: React.FC<GSAPTextRevealProps> = ({
  text,
  className = '',
  as: Component = 'div',
  stagger = 0.05,
  delay = 0,
  duration = 0.8,
  useScrollTrigger = true,
  splitBy = 'words',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const targetItems = el.querySelectorAll('.gsap-reveal-unit');
    if (!targetItems.length) return;

    const ctx = gsap.context(() => {
      const animProps: gsap.TweenVars = {
        y: '0%',
        opacity: 1,
        filter: 'blur(0px)',
        duration,
        stagger,
        delay,
        ease: 'power4.out',
      };

      if (useScrollTrigger) {
        animProps.scrollTrigger = {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        };
      }

      gsap.fromTo(
        targetItems,
        {
          y: '110%',
          opacity: 0,
          filter: 'blur(10px)',
        },
        animProps
      );
    }, el);

    return () => ctx.revert();
  }, [text, delay, stagger, duration, useScrollTrigger]);

  const words = text.split(' ');

  return (
    <Component ref={containerRef as any} className={`overflow-hidden ${className}`}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block overflow-hidden mr-[0.25em] align-top">
          <span className="gsap-reveal-unit inline-block transform translate-y-full opacity-0 blur-sm">
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
};
