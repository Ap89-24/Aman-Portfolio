import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-950 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 relative">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
          <h3 className="font-display font-bold text-2xl text-white">
            {project.title} — Technical Deep Dive
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6 text-sm text-zinc-300">
          <div>
            <h4 className="font-bold text-white font-display mb-1 text-base">Architecture Overview</h4>
            <p className="text-zinc-400 leading-relaxed">{project.architectureDetails.overview}</p>
          </div>

          <div>
            <h4 className="font-bold text-white font-display mb-2 text-base">System Topology Diagram</h4>
            <div className="code-box whitespace-pre font-mono text-xs text-blue-300">
              {project.architectureDetails.diagram}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white font-display mb-2 text-base">Key Technical Highlights</h4>
            <ul className="space-y-2">
              {project.architectureDetails.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-4"
            >
              View GitHub Repository ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
