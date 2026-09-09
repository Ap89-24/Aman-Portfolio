import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 pt-16 pb-12 px-6 md:px-12 bg-[#050507] text-zinc-400 font-display text-sm relative z-10">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Alignment Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left Brand info */}
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-zinc-900 border border-white/10 flex items-center justify-center font-bold text-white text-xs">
                AP
              </div>
              <span className="font-bold text-white text-base tracking-wide">Aman Patel</span>
            </div>
            <p className="text-zinc-500 font-mono text-xs pl-11">
              Full-Stack Developer · AI Engineer · DevOps
            </p>
          </div>

          {/* Right Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-zinc-400">
            <a
              href="https://github.com/Ap89-24"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-zinc-400" />
              <span>GitHub ↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/aman-patel-7098b8282"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn ↗</span>
            </a>

            <a
              href="mailto:aman082199@gmail.com"
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>Email ✉</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

        {/* Bottom Alignment Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500">
          <div>
            © 2026 Aman Patel. All rights reserved.
          </div>
          <div>
            Built with curiosity & caffeine.
          </div>
        </div>

      </div>
    </footer>
  );
};
