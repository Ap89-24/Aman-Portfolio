import React, { useEffect, useRef, useState } from 'react';
import { Github, Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface NavbarProps {
  onCopyEmail: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCopyEmail }) => {
  const navRef = useRef<HTMLElement | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Enforce dark mode strictly
    document.documentElement.classList.remove('light');
    document.documentElement.removeAttribute('data-theme');
    localStorage.removeItem('theme');
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -40px',
        onEnter: () => {
          gsap.to(nav, {
            backgroundColor: 'var(--bg-secondary)',
            backdropFilter: 'blur(16px)',
            borderBottomColor: 'var(--border-color)',
            paddingTop: '12px',
            paddingBottom: '12px',
            duration: 0.3,
            ease: 'power2.out',
          });
        },
        onLeaveBack: () => {
          gsap.to(nav, {
            backgroundColor: 'transparent',
            backdropFilter: 'blur(0px)',
            borderBottomColor: 'var(--border-color)',
            paddingTop: '20px',
            paddingBottom: '20px',
            duration: 0.3,
            ease: 'power2.out',
          });
        },
      });
    }, nav);

    return () => ctx.revert();
  }, []);

  const navLinks = [
    { num: '01', label: 'Work', href: '#work' },
    { num: '02', label: 'About', href: '#about' },
    { num: '03', label: 'Stack', href: '#stack' },
    { num: '04', label: 'How I Build', href: '#mindset' },
    { num: '05', label: 'Contributions', href: '#github' },
    { num: '06', label: 'Resume', href: '#resume' },
    { num: '07', label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5 px-6 md:px-12 border-b border-white/5 bg-[#070709]/0"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Status */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center font-display font-bold text-lg text-white group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
              AP
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-semibold text-sm tracking-wide text-zinc-100">Aman Patel</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 font-display text-sm text-zinc-400">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#stack" className="hover:text-white transition-colors">Stack</a>
            <a href="#mindset" className="hover:text-white transition-colors">How I Build</a>
            <a href="#github" className="hover:text-white transition-colors">Contributions</a>
            <a href="#resume" className="hover:text-white transition-colors font-medium text-blue-400">Resume</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Ap89-24"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-zinc-200 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub ↗</span>
            </a>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="md:hidden p-2.5 rounded-lg bg-zinc-900 border border-white/15 text-zinc-200 hover:text-white active:scale-95 transition-all"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Premium Mobile Overlay Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-[#070709]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 md:hidden overflow-y-auto animate-in fade-in duration-200">
          
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/15 flex items-center justify-center font-display font-bold text-lg text-white">
                AP
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-sm text-zinc-100">Aman Patel</span>
                <span className="font-mono text-[10px] text-blue-400 uppercase tracking-wider">Navigation Menu</span>
              </div>
            </div>

            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/15 flex items-center justify-center text-zinc-200 hover:text-white active:scale-95 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="group flex items-center justify-between py-3.5 border-b border-white/5 hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-blue-400 font-semibold">{link.num}</span>
                  <span className="font-display text-xl font-medium text-zinc-100 group-hover:text-blue-400 transition-colors">
                    {link.label}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </nav>

          {/* Mobile Overlay Footer Actions */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Ap89-24"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex-1 py-3 px-4 rounded-xl bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-200 flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors"
              >
                <Github className="w-4 h-4 text-white" />
                <span>GitHub / Ap89-24 ↗</span>
              </a>

              <button
                onClick={() => {
                  onCopyEmail();
                  setMobileOpen(false);
                }}
                className="py-3 px-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-blue-400 flex items-center justify-center gap-2 hover:bg-blue-500/20 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </button>
            </div>

            <div className="text-center font-mono text-[10px] text-zinc-500 tracking-wider uppercase">
              FULL-STACK DEVELOPER · AI ENGINEER · DEVOPS
            </div>
          </div>

        </div>
      )}
    </>
  );
};

