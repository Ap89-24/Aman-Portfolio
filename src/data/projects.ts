import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'arena',
    num: '01',
    title: 'AI Battle Arena',
    tagline: 'Where AI models compete, reason & win.',
    description: 'A real-time multi-model AI platform where different LLMs compete to answer the same prompt. Responses are streamed live, evaluated by an AI judge, and scored to determine the winner.',
    technology: ['LangChain', 'LangGraph', 'Mistral', 'Gemini', 'Cohere', 'WebSockets'],
    categoryLabel: 'FEATURED AI SYSTEM',
    githubUrl: 'https://github.com/Ap89-24',
    architectureDetails: {
      overview: 'Built on a distributed WebSocket streaming pipeline connecting multiple asynchronous LLM worker threads (Mistral, Gemini, Cohere) with an automated AI judge scoring loop.',
      diagram: `[Client WebSockets] ➔ [API Gateway] ➔ [LangGraph Orchestrator]\n                                        ├── Worker 1 (Mistral 7B)\n                                        ├── Worker 2 (Gemini Pro)\n                                        └── Worker 3 (AI Judge Evaluator)`,
      highlights: [
        'Low-latency token streaming using Node.js event loops and WebSockets.',
        'LangGraph state persistence across multi-turn model evaluations.',
        'Custom rubric parsing for standardized AI judge confidence scoring.'
      ]
    }
  },
  {
    id: 'deployguard',
    num: '02',
    title: 'DeployGuard',
    tagline: 'Real-time Kubernetes monitoring & deployment intelligence.',
    description: 'A Kubernetes monitoring platform that watches cluster resources, detects deployment changes, processes infrastructure events, and streams updates in real time.',
    technology: ['TypeScript', 'Node.js', 'Kubernetes', 'Docker', 'WebSockets', 'EventBus'],
    categoryLabel: 'CLOUD & DEVOPS PLATFORM',
    githubUrl: 'https://github.com/Ap89-24',
    architectureDetails: {
      overview: 'Real-time Kubernetes event consumer that leverages the K8s Client API, watching pod status changes, container crashes, and deployment rollouts across clusters.',
      diagram: `[K8s API Watcher] ➔ [In-Memory EventBus] ➔ [WebSocket Broadcaster] ➔ [React Dashboard]`,
      highlights: [
        'Sub-50ms event propagation from cluster node to web frontend.',
        'Dockerized deployment agent with zero-privilege security context.',
        'Automated webhook notifications for failed deployment rollouts.'
      ]
    }
  },
  {
    id: 'perplexity',
    num: '03',
    title: 'Perplexity Engine',
    tagline: 'AI-powered conversational search & real-time answer synthesis.',
    description: 'An AI-powered search engine inspired by Perplexity that combines live query intent parsing, web retrieval, LLM reasoning, and inline citation synthesis to deliver instant factual answers.',
    technology: ['Next.js', 'TypeScript', 'LangChain', 'OpenAI', 'Vector Search', 'Web Retrieval'],
    categoryLabel: 'AI SEARCH & SYNTHESIS',
    githubUrl: 'https://github.com/Ap89-24/Perplexity',
    architectureDetails: {
      overview: 'Multi-stage AI search workflow combining natural language query expansion, parallel search API execution, chunk re-ranking, and streaming context synthesis with verified web source citations.',
      diagram: `[User Query] ➔ [Query Expansion & Intent Classifier]\n                      ├── Web Search API (Tavily/Serp)\n                      ├── Vector DB Chunk Reranker\n                      └── [LLM Synthesizer with Citations [1][2]]`,
      highlights: [
        'Parallelized search retrieval with sub-800ms end-to-end synthesis latency.',
        'Inline citation mapping binding LLM tokens directly to verified source URLs.',
        'Stateful conversation thread context preservation using LangChain memory.'
      ]
    }
  },
  {
    id: 'expense',
    num: '04',
    title: 'Expense Tracker',
    tagline: 'Track money. Understand spending.',
    description: 'A full-stack financial management application for managing income, expenses, categories, and transactions.',
    technology: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker'],
    categoryLabel: 'FINTECH & ANALYTICS',
    githubUrl: 'https://github.com/Ap89-24',
    architectureDetails: {
      overview: 'Microservices-inspired full-stack web application featuring secure JWT authentication, relational MongoDB transactions, and analytics aggregation pipelines.',
      diagram: `[React App] ➔ [Express API Middleware] ➔ [MongoDB Aggregation Engine]`,
      highlights: [
        'Automated expense categorization using pattern matching algorithms.',
        'Docker container composition for instant local staging deployment.',
        'Responsive SVG financial charting with zero heavy library overhead.'
      ]
    }
  }
];
