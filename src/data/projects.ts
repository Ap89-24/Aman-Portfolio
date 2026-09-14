import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'expense-tracker',
    num: '01',
    title: 'Expense Tracker – Personal Finance Platform',
    tagline: 'Premium Personal Finance & Budgeting Platform with AI Insights.',
    description: 'A full-stack personal finance and budgeting platform featuring Generative AI financial insights, JWT auth, GSAP & Recharts dashboard, containerized with Docker and automated K3s deployment on AWS EC2.',
    technology: ['React 19', 'Node.js', 'Express.js', 'MongoDB', 'Docker', 'Kubernetes (K3s)', 'GitHub Actions', 'Generative AI', 'AWS EC2'],
    categoryLabel: 'FINTECH & DEVOPS PLATFORM',
    githubUrl: 'https://github.com/Ap89-24',
    liveUrl: 'http://13.207.58.126/',
    architectureDetails: {
      overview: 'Full-stack microservices-inspired application containerized with Docker and deployed via GitHub Actions CI/CD pipeline on automated K3s cluster on AWS EC2 with Traefik Ingress & HPA.',
      diagram: `[React 19 Dashboard] ➔ [Traefik Ingress Controller] ➔ [Express REST API]\n                                                        ├── MongoDB Database\n                                                        └── GenAI Financial Insights Engine`,
      highlights: [
        'Integrated Generative AI to generate personalized financial insights by analyzing month-over-month category variance & savings rates.',
        'Developed secure REST APIs, JWT authentication, containerized with Docker and GitHub Actions CI/CD for automated K3s deployment on AWS EC2.',
        'Designed interactive financial dashboard with real-time analytics using GSAP transitions, Recharts visualizations, and Traefik Ingress routing.',
        'Configured Horizontal Pod Autoscalers (HPA) in Kubernetes to scale pods dynamically based on real-time CPU & Memory load.'
      ]
    }
  },
  {
    id: 'arena',
    num: '02',
    title: 'AI Battle Arena',
    tagline: 'Where AI models compete, reason & win in real time.',
    description: 'A full-stack AI Battle Arena comparing responses from multiple LLMs for user prompts in real time, featuring a LangGraph-based workflow orchestrating Mistral & Cohere models with Gemini as an AI Judge.',
    technology: ['React.js', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Express.js', 'MongoDB', 'Clerk Auth', 'LangGraph', 'Gemini AI', 'Mistral', 'Cohere'],
    categoryLabel: 'FEATURED AI SYSTEM',
    githubUrl: 'https://github.com/Ap89-24',
    liveUrl: 'https://ai-battle-arena-pi.vercel.app',
    architectureDetails: {
      overview: 'LangGraph-based AI workflow orchestrating multi-model competition (Mistral & Cohere) with Gemini acting as an AI Judge for automated quality and reasoning evaluation.',
      diagram: `[Client WebSockets] ➔ [Express API & Clerk Auth] ➔ [LangGraph Orchestrator]\n                                                        ├── Worker 1 (Mistral)\n                                                        ├── Worker 2 (Cohere)\n                                                        └── Worker 3 (Gemini AI Judge)`,
      highlights: [
        'LangGraph AI workflow orchestrating Mistral & Cohere models with Gemini as an AI Judge for automated winner evaluation.',
        'Secure RESTful APIs with Express.js, MongoDB, and Clerk Authentication for chat session & battle history management.',
        'AI evaluation pipeline scoring responses with detailed reasoning based on quality, clarity, and factual accuracy.',
        'Responsive interactive frontend using React, Tailwind CSS, GSAP, and Framer Motion for real-time response rendering.'
      ]
    }
  },
  {
    id: 'perplexity',
    num: '03',
    title: 'Perplexity – AI Search Engine',
    tagline: 'Conversational AI search engine with real-time web retrieval.',
    description: 'An AI-powered search engine combining LLMs with real-time web search via Tavily AI, LangChain query-to-answer pipelines, prompt engineering, tool calling, and source-grounded citation synthesis.',
    technology: ['React.js', 'Node.js', 'Express.js', 'LangChain', 'Tavily AI Search', 'LLMs', 'Prompt Engineering'],
    categoryLabel: 'AI SEARCH & RESEARCH',
    githubUrl: 'https://github.com/Ap89-24/Perplexity',
    liveUrl: 'https://perplexity-weld.vercel.app',
    architectureDetails: {
      overview: 'Query-to-answer automated pipeline using LangChain tool calling and Tavily AI web retrieval for real-time contextual information discovery and citation-grounded response generation.',
      diagram: `[User Query] ➔ [LangChain Query Pipeline]\n                ├── Tavily AI Search API (Web Retrieval)\n                ├── Context Injection & Tool Calling\n                └── LLM Response Generator (Source Citations)`,
      highlights: [
        'LLM workflows using LangChain integrating prompt engineering, tool calling, web retrieval, and context injection.',
        'Integrated Tavily AI Search as web-retrieval layer to perform real-time information discovery for LLM response generation.',
        'Developed RESTful backend services with Node.js and Express.js for query processing and AI orchestration.',
        'Built responsive React interface dynamically rendering AI answers with verifiable source information citations.'
      ]
    }
  }
];

