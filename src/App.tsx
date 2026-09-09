import React, { useState } from 'react';
import { BackgroundCanvas } from './components/ui/BackgroundCanvas';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { SelectedWork } from './components/work/SelectedWork';
import { About } from './components/about/About';
import { TechStack } from './components/stack/TechStack';
import { HowIBuild } from './components/mindset/HowIBuild';
import { GithubSection } from './components/github/GithubSection';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/layout/Footer';
import { CheckCircle2 } from 'lucide-react';
import { useLenis } from './hooks/useLenis';

export const App: React.FC = () => {
  useLenis();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('aman082199@gmail.com');
  };

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] font-body relative overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* GSAP Custom Cursor */}
      <CustomCursor />

      {/* Dynamic Cursor Canvas */}
      <BackgroundCanvas />

      {/* Navigation */}
      <Navbar onCopyEmail={handleCopyEmail} />

      {/* Main Content */}
      <main className="relative z-10 pt-28">
        <Hero />
        <SelectedWork />
        <About />
        <TechStack />
        <HowIBuild />
        <GithubSection />
        <Contact onCopyEmail={handleCopyEmail} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
