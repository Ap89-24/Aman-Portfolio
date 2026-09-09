import React, { useState } from 'react';
import { Mail, Github, Linkedin, CheckCircle2 } from 'lucide-react';
import { GSAPTextReveal } from '../ui/GSAPTextReveal';

interface ContactProps {
  onCopyEmail: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onCopyEmail }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:aman082199@gmail.com?subject=${subject}&body=${body}`;

    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="px-6 md:px-12 max-w-7xl mx-auto py-24 border-t border-white/5 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-6 space-y-6">
          <span className="section-tag block font-mono text-xs text-blue-400 font-semibold tracking-wider uppercase">
            06 // GET IN TOUCH
          </span>

          <GSAPTextReveal
            text="LET'S BUILD SOMETHING MEANINGFUL."
            as="h2"
            className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight leading-tight"
            stagger={0.07}
          />

          <GSAPTextReveal
            text="Have an idea, opportunity, or interesting technical problem? Feel free to reach out directly."
            as="p"
            className="text-zinc-400 text-lg leading-relaxed font-normal"
            stagger={0.03}
          />

          <div className="pt-2">
            <span className="font-mono text-xs text-zinc-500 block mb-1 uppercase">Direct Email Address:</span>
            <div className="inline-flex items-center gap-3 p-3 rounded-lg bg-zinc-900 border border-white/10 font-mono text-sm text-zinc-200">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>aman082199@gmail.com</span>
              <button
                onClick={onCopyEmail}
                className="ml-2 px-2.5 py-1 rounded bg-white/10 hover:bg-blue-600 text-xs text-white transition-all"
              >
                Copy
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://github.com/Ap89-24"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs"
            >
              <Github className="w-4 h-4" />
              <span>GITHUB ↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/aman-patel-7098b8282"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span>LINKEDIN ↗</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <form onSubmit={handleSubmit} className="tech-card p-8 border border-white/10 bg-zinc-950/90 space-y-4">
            <h3 className="font-display font-bold text-xl text-white mb-2">Send a Message</h3>
            
            <div>
              <label className="block font-mono text-xs text-zinc-400 mb-1">YOUR NAME</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Doe"
                className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block font-mono text-xs text-zinc-400 mb-1">YOUR EMAIL</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@company.com"
                className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block font-mono text-xs text-zinc-400 mb-1">PROJECT OR MESSAGE</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project, idea, or role..."
                className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-blue-500"
              />
            </div>

            <button type="submit" className="w-full btn-primary py-3 text-sm">
              <span>Send Message →</span>
            </button>

            {submitted && (
              <div className="p-3 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono text-center flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Message sent successfully! I'll get back to you shortly.</span>
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};
