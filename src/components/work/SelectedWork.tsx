import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../../data/projects';
import { Project } from '../../types';
import { AIBattleArenaWidget } from './AIBattleArenaWidget';
import { DeployGuardWidget } from './DeployGuardWidget';
import { PerplexityWidget } from './PerplexityWidget';
import { ExpenseTrackerWidget } from './ExpenseTrackerWidget';
import { ProjectModal } from '../modal/ProjectModal';
import { SectionHeading } from '../ui/SectionHeading';
import { GSAPTextReveal } from '../ui/GSAPTextReveal';

gsap.registerPlugin(ScrollTrigger);

export const SelectedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const projectRows = container.querySelectorAll('.project-row');
      projectRows.forEach((row) => {
        const num = row.querySelector('.project-num');
        const title = row.querySelector('.project-title');
        const desc = row.querySelector('.project-desc');
        const tech = row.querySelector('.project-tech');
        const visual = row.querySelector('.project-visual');
        const cta = row.querySelector('.project-cta');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });

        if (num) tl.fromTo(num, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
        if (title) tl.fromTo(title, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3');
        if (desc) tl.fromTo(desc, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3');
        if (tech) tl.fromTo(tech.children, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.05 }, '-=0.2');
        if (visual) tl.fromTo(visual, { scale: 0.95, opacity: 0, y: 30 }, { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4');
        if (cta) tl.fromTo(cta, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, '-=0.2');

        // GSAP Hover Effects
        const visualContainer = row.querySelector('.project-visual-container');
        const titleText = row.querySelector('.project-title-text');
        const arrowIcon = row.querySelector('.project-arrow-icon');
        const accentLine = row.querySelector('.project-accent-line');

        if (visualContainer) {
          const onEnter = () => {
            gsap.to(visualContainer, { scale: 1.03, duration: 0.4, ease: 'power2.out' });
            if (titleText) gsap.to(titleText, { x: 8, duration: 0.3, ease: 'power2.out' });
            if (arrowIcon) gsap.to(arrowIcon, { x: 6, y: -6, duration: 0.3, ease: 'power2.out' });
            if (accentLine) gsap.to(accentLine, { scaleX: 1.5, duration: 0.3, ease: 'power2.out' });
          };

          const onLeave = () => {
            gsap.to(visualContainer, { scale: 1, duration: 0.4, ease: 'power2.out' });
            if (titleText) gsap.to(titleText, { x: 0, duration: 0.3, ease: 'power2.out' });
            if (arrowIcon) gsap.to(arrowIcon, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
            if (accentLine) gsap.to(accentLine, { scaleX: 1, duration: 0.3, ease: 'power2.out' });
          };

          row.addEventListener('mouseenter', onEnter);
          row.addEventListener('mouseleave', onLeave);
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const renderWidget = (id: string) => {
    switch (id) {
      case 'arena':
        return <AIBattleArenaWidget />;
      case 'deployguard':
        return <DeployGuardWidget />;
      case 'perplexity':
        return <PerplexityWidget />;
      case 'expense':
        return <ExpenseTrackerWidget />;
      default:
        return null;
    }
  };

  return (
    <section id="work" ref={containerRef} className="px-6 md:px-12 max-w-7xl mx-auto py-24 border-t border-white/5">
      <SectionHeading
        tag="01 // PORTFOLIO"
        title="SELECTED WORK"
        subtitle="Systems I've designed, built, broken, and shipped."
      />

      <div className="space-y-32">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={project.id}
              className="project-row project-hover-target grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group cursor-pointer"
            >
              {/* Text Left / Right Alternating */}
              <div className={`lg:col-span-5 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="project-num flex items-center gap-3">
                  <span className="font-mono text-sm text-blue-400 font-bold">{project.num}</span>
                  <span className="project-accent-line w-8 h-px bg-blue-500/40 origin-left transition-transform" />
                  <span className="tech-label tech-label-accent">{project.categoryLabel}</span>
                </div>

                <div className="project-title">
                  <h3 className="project-title-text text-3xl sm:text-4xl font-display font-bold text-white group-hover:text-blue-400 transition-colors inline-flex items-center gap-2">
                    <span>{project.title}</span>
                  </h3>
                </div>

                <p className="project-desc text-blue-400 font-display text-lg font-medium">
                  {project.tagline}
                </p>

                <p className="project-desc text-zinc-400 text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="project-tech flex flex-wrap gap-2 pt-2">
                  {project.technology.map((tech, i) => (
                    <span key={i} className="tech-label">{tech}</span>
                  ))}
                </div>

                <div className="project-cta flex items-center gap-4 pt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-primary text-xs py-2.5 px-5 group"
                  >
                    <span>View Architecture</span>
                    <ExternalLink className="project-arrow-icon w-3.5 h-3.5 ml-1" />
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1"
                  >
                    <span>GitHub Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Visual Widget Left / Right Alternating */}
              <div className={`lg:col-span-7 project-visual ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="project-visual-container transition-transform">
                  {renderWidget(project.id)}
                </div>
              </div>

            </div>
          );
        })}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
