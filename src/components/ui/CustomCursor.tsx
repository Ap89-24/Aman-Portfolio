import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isProjectHover, setIsProjectHover] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch/mobile
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
    if (isTouchDevice) return;

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    gsap.set(dot, { xPercent: -50, yPercent: -50 });
    gsap.set(ring, { xPercent: -50, yPercent: -50 });

    const xDotSet = gsap.quickSetter(dot, 'x', 'px');
    const yDotSet = gsap.quickSetter(dot, 'y', 'px');

    const xRingTo = gsap.quickTo(ring, 'x', { duration: 0.3, ease: 'power3.out' });
    const yRingTo = gsap.quickTo(ring, 'y', { duration: 0.3, ease: 'power3.out' });

    const onMouseMove = (e: MouseEvent) => {
      xDotSet(e.clientX);
      yDotSet(e.clientY);
      xRingTo(e.clientX);
      yRingTo(e.clientY);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const projectCard = target.closest('.project-hover-target');
      const interactiveEl = target.closest('a, button, input, select, textarea, .tech-card');

      if (projectCard) {
        setIsProjectHover(true);
        setCursorText('VIEW');
        gsap.to(ring, {
          width: 80,
          height: 80,
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderColor: 'rgba(59, 130, 246, 0.8)',
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(dot, { opacity: 0, duration: 0.2 });
      } else if (interactiveEl) {
        setIsHovered(true);
        setCursorText('');
        gsap.to(ring, {
          width: 48,
          height: 48,
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          borderColor: 'rgba(59, 130, 246, 0.5)',
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(dot, { scale: 1.5, duration: 0.2 });
      } else {
        setIsProjectHover(false);
        setIsHovered(false);
        setCursorText('');
        gsap.to(ring, {
          width: 32,
          height: 32,
          backgroundColor: 'transparent',
          borderColor: 'rgba(255, 255, 255, 0.3)',
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(dot, { opacity: 1, scale: 1, duration: 0.2 });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <>
      {/* Small Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-400 pointer-events-none z-[9999] hidden md:block"
      />

      {/* Trailing Ring */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[9998] flex items-center justify-center font-mono text-[10px] font-bold text-white tracking-widest hidden md:flex transition-colors duration-300"
      >
        {isProjectHover && <span className="animate-pulse">{cursorText}</span>}
      </div>
    </>
  );
};
