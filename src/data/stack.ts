import { TechCategory } from '../types';

export const stackCategories: TechCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    icon: 'Code',
    items: ['Java', 'JavaScript', 'TypeScript', 'Python'],
    accentColor: 'blue'
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'Layout',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    accentColor: 'indigo'
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'Server',
    items: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets'],
    accentColor: 'cyan'
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'Database',
    items: ['MongoDB', 'PostgreSQL', 'Supabase', 'Redis'],
    accentColor: 'emerald'
  },
  {
    id: 'ai',
    title: 'AI & LLMs',
    icon: 'Sparkles',
    items: ['LangChain', 'LangGraph', 'Mistral', 'Gemini', 'RAG', 'Vector Search'],
    accentColor: 'amber'
  },
  {
    id: 'cloud',
    title: 'Cloud / DevOps',
    icon: 'Cloud',
    items: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions'],
    accentColor: 'rose'
  }
];
