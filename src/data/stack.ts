import { TechCategory } from '../types';

export const stackCategories: TechCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'Code',
    items: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'C++', 'JAVA'],
    accentColor: 'blue'
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'Layout',
    items: ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'GSAP', 'Chart.js'],
    accentColor: 'indigo'
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'Server',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'Zod Validation'],
    accentColor: 'cyan'
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'Database',
    items: ['MongoDB', 'Mongoose'],
    accentColor: 'emerald'
  },
  {
    id: 'ai',
    title: 'AI & GenAI',
    icon: 'Sparkles',
    items: ['LangChain', 'LangGraph', 'Multi-Agent AI Workflows', 'RAG', 'Google Gemini API'],
    accentColor: 'amber'
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    icon: 'Cloud',
    items: ['Docker', 'GitHub Actions', 'Linux', 'AWS', 'Kubernetes', 'Terraform', 'Render', 'Vercel'],
    accentColor: 'rose'
  },
  {
    id: 'core',
    title: 'Core Concepts',
    icon: 'Cpu',
    items: ['Data Structures & Algorithms', 'OOP', 'Auth & Authorization', 'CRUD Operations', 'API Integration', 'Responsive UI', 'Performance Optimization'],
    accentColor: 'violet'
  }
];

