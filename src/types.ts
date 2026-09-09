export interface Project {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
}

export interface TechCategory {
  title: string;
  iconName: string;
  items: string[];
  highlight?: string;
}

export interface MindsetStep {
  step: string;
  title: string;
  description: string;
  artifacts: string;
}
