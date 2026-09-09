import React, { useEffect, useRef } from 'react';
import { Github, GitCommit, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading } from '../ui/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

export const GithubSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    const grid = gridRef.current;
    if (!el || !grid) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Heatmap squares stagger in
      const squares = grid.querySelectorAll('.commit-square');
      if (squares.length) {
        gsap.fromTo(
          squares,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            stagger: { amount: 0.8, from: 'random' },
            scrollTrigger: {
              trigger: grid,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  const gridSquares = Array.from({ length: 350 }).map((_, i) => {
    const levels = ['bg-zinc-900', 'bg-emerald-950', 'bg-emerald-800', 'bg-emerald-500'];
    const level = levels[(i * 7 + 3) % levels.length];
    return level;
  });

  return (
    <section id="github" ref={containerRef} className="px-6 md:px-12 max-w-7xl mx-auto py-24 border-t border-white/5">
      {/* Hackathon Achievement Box */}
      <div className="mb-16 tech-card p-8 border border-white/10 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs">
            <Award className="w-4 h-4" />
            <span>ACHIEVEMENT HIGHLIGHT</span>
          </div>
          <h3 className="font-display font-bold text-2xl text-white">Smart India Hackathon</h3>
          <p className="text-zinc-400 text-sm max-w-xl">
            Engineered real-time scalable software solution under intense national hackathon constraints, demonstrating rapid problem-solving and architectural precision.
          </p>
        </div>

        <div className="px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold">
          NATIONAL RECOGNITION
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <SectionHeading
          tag="05 // GITHUB CONTRIBUTIONS"
          title="GITHUB CONTRIBUTIONS"
          subtitle="Continuous building, commits, and public code contributions."
          className="mb-0"
        />

        <a
          href="https://github.com/Ap89-24"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-xs font-mono self-start"
        >
          <Github className="w-4 h-4" />
          <span>VIEW GITHUB ↗</span>
        </a>
      </div>

      <div className="tech-card p-6 border border-white/10 bg-zinc-950/80">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-xs text-zinc-400">
          <span className="flex items-center gap-2">
            <GitCommit className="w-4 h-4 text-emerald-400" />
            <span>500+ COMMITS IN THE PAST YEAR</span>
          </span>
          <span className="text-emerald-400">STREAK: ACTIVE</span>
        </div>

        <div ref={gridRef} className="overflow-x-auto pb-2">
          <div className="grid grid-rows-7 grid-flow-col gap-1 min-w-[700px]">
            {gridSquares.map((lvlClass, idx) => (
              <div key={idx} className={`commit-square w-2.5 h-2.5 rounded-xs ${lvlClass}`} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 text-[11px] font-mono text-zinc-500">
          <span>Less</span>
          <div className="flex gap-1">
            <span className="w-2.5 h-2.5 rounded-xs bg-zinc-900" />
            <span className="w-2.5 h-2.5 rounded-xs bg-emerald-950" />
            <span className="w-2.5 h-2.5 rounded-xs bg-emerald-800" />
            <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500" />
          </div>
          <span>More</span>
        </div>
      </div>
    </section>
  );
};
