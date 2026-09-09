export interface Project {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  technology: string[];
  categoryLabel: string;
  githubUrl: string;
  liveUrl?: string;
  architectureDetails: {
    overview: string;
    diagram: string;
    highlights: string[];
  };
}

export interface TechCategory {
  id: string;
  title: string;
  icon: string;
  items: string[];
  accentColor?: string;
}

export interface MindsetStep {
  id: string;
  stepNumber: string;
  shortTitle: string;
  fullTitle: string;
  description: string;
  artifacts: string;
}
