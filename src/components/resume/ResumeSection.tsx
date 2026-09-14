import React, { useState } from 'react';
import {
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  Briefcase,
  Code2,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  CheckCircle2,
  Layers,
  Award,
  Globe,
  ChevronRight,
  Terminal,
  Cpu
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const ResumeSection: React.FC = () => {
  const pdfUrl = '/Aman%20Patel-Resume-6.pdf';
  const [activeView, setActiveView] = useState<'pdf' | 'interactive'>('pdf');
  const [activeTab, setActiveTab] = useState<'summary' | 'projects' | 'skills' | 'education'>('summary');

  const resumeSummary =
    "Full Stack Developer with hands-on experience in building scalable and responsive web applications using React.js, Node.js, Express.js, MongoDB, JavaScript, HTML, CSS, and REST APIs. Passionate about developing user-centric solutions, exploring Generative AI, and implementing modern software development practices. Currently expanding expertise in DevOps, including Docker, CI/CD, cloud deployment, and automation, while strengthening problem-solving skills through Data Structures and Algorithms.";

  const educationData = [
    {
      degree: "Bachelor of Technology",
      institution: "JSS Academy of Technical Education",
      location: "Noida, UP",
      year: "2027",
      score: "7.56 CGPA",
      status: "Currently Pursuing",
      highlight: true
    },
    {
      degree: "10+2 Class",
      institution: "Vanita Public School",
      location: "Varanasi",
      year: "2021",
      score: "89%",
      status: "Completed",
      highlight: false
    },
    {
      degree: "10th Class",
      institution: "Vanita Public School",
      location: "Varanasi",
      year: "2019",
      score: "82%",
      status: "Completed",
      highlight: false
    }
  ];

  const resumeProjects = [
    {
      id: "expense-tracker",
      title: "Expense Tracker – Premium Personal Finance & Budgeting Platform",
      link: "http://13.207.58.126/",
      period: "June 2026 - Present",
      category: "FINTECH & DEVOPS",
      tech: [
        "React 19",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Docker",
        "Kubernetes (K3s)",
        "GitHub Actions",
        "Generative AI",
        "AWS EC2",
        "GSAP",
        "Recharts",
        "Traefik Ingress",
        "HPA"
      ],
      points: [
        "Developed a full-stack personal finance and budgeting platform using React 19, Node.js, Express.js, MongoDB, Docker, Kubernetes (K3s), and GitHub Actions.",
        "Integrated Generative AI to generate personalized financial insights by analyzing month-over-month category variance, savings rates, and transaction metrics.",
        "Developed secure REST APIs, implemented JWT authentication, and containerized the application using Docker with a GitHub Actions CI/CD pipeline for automated K3s deployment on AWS EC2.",
        "Designed an interactive financial dashboard with real-time analytics, leveraging GSAP transitions, Recharts visualizations, and a Traefik Ingress controller for routing backend API traffic.",
        "Implemented high-availability infrastructure policies in Kubernetes, configuring Horizontal Pod Autoscalers (HPA) to scale pods dynamically based on real-time CPU and Memory load."
      ]
    },
    {
      id: "ai-arena",
      title: "AI Battle Arena",
      link: "https://ai-battle-arena-pi.vercel.app",
      period: "June 2026 - July 2026",
      category: "AI & LLM ORCHESTRATION",
      tech: [
        "React.js",
        "Tailwind CSS",
        "GSAP",
        "Framer Motion",
        "Express.js",
        "MongoDB",
        "Clerk Auth",
        "LangGraph",
        "Mistral",
        "Cohere",
        "Gemini AI"
      ],
      points: [
        "Developed a full-stack AI Battle Arena that compares responses from multiple Large Language Models (LLMs) for user prompts in real time.",
        "Designed and implemented a LangGraph-based AI workflow to orchestrate Mistral and Cohere models, with Gemini acting as an AI Judge for automated evaluation and winner selection.",
        "Built secure RESTful APIs using Express.js, MongoDB, and Clerk Authentication to manage chat sessions, battle history, and follow-up conversations.",
        "Engineered an AI evaluation pipeline that scores responses, generates detailed reasoning, and determines the best answer based on quality, clarity, and accuracy.",
        "Developed a responsive and interactive frontend using React.js, Tailwind CSS, GSAP, and Framer Motion, featuring animated battle visualizations and real-time AI response rendering."
      ]
    },
    {
      id: "perplexity-engine",
      title: "Perplexity — AI Search & Research Engine",
      link: "https://perplexity-weld.vercel.app",
      period: "March 2026 - April 2026",
      category: "AI SEARCH & RETRIEVAL",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "LangChain",
        "Tavily AI Search",
        "LLMs",
        "Prompt Engineering",
        "Context Injection"
      ],
      points: [
        "Engineered an AI-powered search and research engine inspired by Perplexity, combining LLMs with real-time web search to generate contextual, source-grounded answers from dynamically retrieved information.",
        "LLM workflows using LangChain, integrating prompt engineering, tool calling, web retrieval, and context injection to create an automated query-to-answer pipeline.",
        "Integrated Tavily AI Search as the web-retrieval layer to perform real-time information discovery and return relevant web content for LLM powered response generation.",
        "Developed RESTful backend services with Node.js and Express.js for query processing, AI orchestration, search integration, and frontend-backend communication.",
        "Built a responsive React.js interface for conversational search, dynamically rendering AI-generated answers and supporting source information for improved research and information verification."
      ]
    }
  ];

  const skillGroups = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["JavaScript (ES6+)", "HTML5", "CSS3", "C++", "JAVA"],
      color: "text-blue-400",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Frontend Development",
      icon: Layers,
      skills: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "GSAP", "Chart.js"],
      color: "text-indigo-400",
      borderColor: "border-indigo-500/30"
    },
    {
      title: "Backend Engineering",
      icon: Terminal,
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Zod Validation"],
      color: "text-cyan-400",
      borderColor: "border-cyan-500/30"
    },
    {
      title: "Database Architecture",
      icon: Cpu,
      skills: ["MongoDB", "Mongoose"],
      color: "text-emerald-400",
      borderColor: "border-emerald-500/30"
    },
    {
      title: "AI & GenAI Workflows",
      icon: Sparkles,
      skills: ["LangChain", "LangGraph", "Multi-Agent AI Workflows", "Retrieval-Augmented Generation (RAG)", "Google Gemini API"],
      color: "text-amber-400",
      borderColor: "border-amber-500/30"
    },
    {
      title: "DevOps & Cloud Infrastructure",
      icon: Globe,
      skills: ["Docker", "GitHub Actions", "Linux", "AWS", "Render", "Vercel", "Kubernetes", "Terraform"],
      color: "text-rose-400",
      borderColor: "border-rose-500/30"
    },
    {
      title: "Core Engineering Concepts",
      icon: CheckCircle2,
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Authentication & Authorization",
        "CRUD Operations",
        "API Integration",
        "Responsive UI Development",
        "Performance Optimization"
      ],
      color: "text-violet-400",
      borderColor: "border-violet-500/30"
    }
  ];

  return (
    <section id="resume" className="px-6 md:px-12 max-w-7xl mx-auto py-24 border-t border-white/5">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <SectionHeading
          tag="06 // CURRICULUM VITAE"
          title="LATEST RESUME & CREDENTIALS"
          subtitle="Official resume document of Aman Patel — Full-Stack Developer, AI Engineer & DevOps Specialist."
        />

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Toggle Interactive vs PDF */}
          <div className="p-1 rounded-xl bg-zinc-900 border border-white/10 flex items-center gap-1">
            <button
              onClick={() => setActiveView('interactive')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeView === 'interactive'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Interactive View
            </button>
            <button
              onClick={() => setActiveView('pdf')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeView === 'pdf'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              PDF Document
            </button>
          </div>

          <a
            href={pdfUrl}
            download="Aman_Patel_Resume.pdf"
            className="btn-primary text-xs py-2.5 px-4 flex items-center gap-2 shadow-lg hover:shadow-blue-500/20"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs py-2.5 px-3.5 flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open PDF ↗</span>
          </a>
        </div>
      </div>

      {/* Main Resume Container */}
      <div className="tech-card border border-white/10 bg-[#0c0c12] rounded-2xl shadow-2xl overflow-hidden">
        {/* Top Header Strip */}
        <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-zinc-900/90 border-b border-white/10 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
              AP
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-base leading-tight">Aman Patel</h3>
              <p className="font-mono text-xs text-zinc-400 flex items-center gap-2">
                <MapPin className="w-3 h-3 text-blue-400" /> Noida, Uttar Pradesh, India
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-300">
            <a href="mailto:aman082199@gmail.com" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>aman082199@gmail.com</span>
            </a>
            <span className="text-zinc-600">|</span>
            <a href="tel:8924052624" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>+91 8924052624</span>
            </a>
            <span className="text-zinc-600">|</span>
            <a href="https://github.com/Ap89-24" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Github className="w-3.5 h-3.5 text-blue-400" />
              <span>github.com/Ap89-24</span>
            </a>
          </div>
        </div>

        {/* View Content */}
        {activeView === 'interactive' ? (
          <div className="p-6 md:p-8 space-y-8">
            {/* Interactive Sub-navigation */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-4 overflow-x-auto">
              {[
                { id: 'summary', label: 'Summary', icon: FileText },
                { id: 'projects', label: 'Projects (3)', icon: Briefcase },
                { id: 'skills', label: 'Skills & Tech Stack', icon: Code2 },
                { id: 'education', label: 'Education', icon: GraduationCap }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-blue-500/10 border border-blue-500/40 text-blue-400 font-semibold shadow-inner'
                        : 'bg-zinc-900/60 border border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB 1: SUMMARY */}
            {activeTab === 'summary' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10 space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                    <h4 className="font-display font-bold text-white text-lg">Professional Summary</h4>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed font-normal">
                    {resumeSummary}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/5 space-y-2">
                    <span className="font-mono text-xs text-blue-400 uppercase tracking-wider block">Full Stack</span>
                    <h5 className="font-display font-bold text-white text-base">React.js & Node.js</h5>
                    <p className="text-zinc-400 text-xs">Architecting responsive interfaces, RESTful microservices, and MongoDB data models.</p>
                  </div>
                  <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/5 space-y-2">
                    <span className="font-mono text-xs text-amber-400 uppercase tracking-wider block">AI & GenAI</span>
                    <h5 className="font-display font-bold text-white text-base">LangChain & LangGraph</h5>
                    <p className="text-zinc-400 text-xs">Building RAG pipelines, multi-agent AI workflows, and model comparison judges.</p>
                  </div>
                  <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/5 space-y-2">
                    <span className="font-mono text-xs text-rose-400 uppercase tracking-wider block">DevOps & Cloud</span>
                    <h5 className="font-display font-bold text-white text-base">Docker & K3s (AWS EC2)</h5>
                    <p className="text-zinc-400 text-xs">Automating CI/CD with GitHub Actions, HPA auto-scaling, and Traefik Ingress.</p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: PROJECTS */}
            {activeTab === 'projects' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                {resumeProjects.map((project) => (
                  <div
                    key={project.id}
                    className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-blue-500/40 transition-all space-y-4 group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/10 pb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-[10px] text-blue-400 font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                            {project.category}
                          </span>
                          <span className="font-mono text-xs text-zinc-500">{project.period}</span>
                        </div>
                        <h4 className="font-display font-bold text-white text-xl group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h4>
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs py-2 px-3 self-start md:self-auto inline-flex items-center gap-1.5"
                      >
                        <Globe className="w-3.5 h-3.5 text-blue-400" />
                        <span>Live Application ↗</span>
                      </a>
                    </div>

                    <ul className="space-y-2.5">
                      {project.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-3 text-xs text-zinc-300 leading-relaxed">
                          <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="tech-label text-[11px] py-1 px-2.5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 3: SKILLS */}
            {activeTab === 'skills' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
                {skillGroups.map((group, idx) => {
                  const Icon = group.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-6 rounded-2xl bg-zinc-900/50 border border-white/10 hover:${group.borderColor} transition-all space-y-4`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-zinc-800 border border-white/10 ${group.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-display font-bold text-white text-base">{group.title}</h4>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-white/10 text-xs font-mono text-zinc-200 hover:border-blue-500/50 hover:text-white transition-all"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* TAB 4: EDUCATION */}
            {activeTab === 'education' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                {educationData.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-display font-bold text-white text-lg">{edu.degree}</h4>
                          {edu.highlight && (
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-semibold">
                              CURRENT
                            </span>
                          )}
                        </div>
                        <p className="text-zinc-300 text-sm font-medium">{edu.institution}</p>
                        <p className="text-zinc-500 text-xs font-mono mt-0.5">{edu.location}</p>
                      </div>
                    </div>

                    <div className="sm:text-right border-t sm:border-t-0 border-white/10 pt-3 sm:pt-0">
                      <span className="font-display font-bold text-blue-400 text-xl block">{edu.score}</span>
                      <span className="font-mono text-xs text-zinc-400 block">Graduation: {edu.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* PDF Document Viewer Container */
          <div className="w-full h-[650px] sm:h-[850px] relative bg-zinc-950 overflow-hidden">
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=0`}
              title="Aman Patel Resume PDF"
              className="w-full h-full border-none"
            />

            {/* Mobile Fallback Overlay */}
            <div className="md:hidden p-6 text-center space-y-4 bg-zinc-950/90 border-t border-white/10 flex flex-col items-center justify-center">
              <p className="text-zinc-300 text-xs font-mono">
                Viewing on a mobile device? Tap below to open or download the full high-resolution PDF.
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
        )}
      </div>
    </section>
  );
};


