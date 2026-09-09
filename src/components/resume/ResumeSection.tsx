import React from 'react';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const ResumeSection: React.FC = () => {
  const pdfUrl = '/Aman_Patel_Resume.pdf';

  return (
    <section id="resume" className="px-6 md:px-12 max-w-7xl mx-auto py-24 border-t border-white/5">
      
      {/* Top Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <SectionHeading
          tag="06 // CURRICULUM VITAE"
          title="RESUME & CV"
          subtitle="Official resume document of Aman Patel — Full-Stack Developer & AI Engineer."
        />

        {/* Download & View Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={pdfUrl}
            download="Aman_Patel_Resume.pdf"
            className="btn-primary text-xs py-2.5 px-5 flex items-center gap-2 shadow-lg hover:shadow-blue-500/20"
          >
            <Download className="w-4 h-4" />
            <span>Download Official PDF</span>
          </a>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs py-2.5 px-4 flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open PDF in New Tab</span>
          </a>
        </div>
      </div>

      {/* PDF Viewer Container */}
      <div className="tech-card p-2 sm:p-4 border border-white/10 bg-[#0c0c12] rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 border-b border-white/10 rounded-t-xl text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-400" />
            <span className="font-semibold text-white">Aman_Patel_Resume.pdf</span>
          </div>
          <span className="hidden sm:inline text-zinc-500">Official Document</span>
        </div>

        {/* Embedded Interactive PDF Viewer */}
        <div className="w-full h-[650px] sm:h-[850px] relative bg-zinc-950 rounded-b-xl overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0`}
            title="Aman Patel Resume PDF"
            className="w-full h-full border-none rounded-b-xl"
          />
          
          {/* Mobile Fallback Overlay if PDF Iframe is constrained on small devices */}
          <div className="md:hidden p-6 text-center space-y-4 bg-zinc-950/90 border-t border-white/10 flex flex-col items-center justify-center">
            <p className="text-zinc-300 text-xs font-mono">
              Viewing on a mobile device? Tap below to open or download the high-resolution PDF.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={pdfUrl}
                download="Aman_Patel_Resume.pdf"
                className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-2 px-4 inline-flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Fullscreen</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

