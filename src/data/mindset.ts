import { MindsetStep } from '../types';

export const mindsetSteps: MindsetStep[] = [
  {
    id: '1',
    stepNumber: '01',
    shortTitle: 'Understand',
    fullTitle: '01 — Understand & Scrutinize',
    description: 'Before writing a single line of code, I break down domain requirements, performance budgets, edge cases, and security constraints.',
    artifacts: 'Key artifacts: Requirement matrix, data access patterns, API SLAs, latency expectations.'
  },
  {
    id: '2',
    stepNumber: '02',
    shortTitle: 'Architect',
    fullTitle: '02 — Architect & Model',
    description: 'Design data schemas, component boundaries, microservices vs monolith tradeoffs, caching layers, and asynchronous event flows.',
    artifacts: 'Key artifacts: ER diagrams, OpenAPI specs, system topology diagrams, state machine maps.'
  },
  {
    id: '3',
    stepNumber: '03',
    shortTitle: 'Build',
    fullTitle: '03 — Build with Craft',
    description: 'Write clean, modular, type-safe code using modern engineering patterns. Prioritize maintainability, legibility, and high performance.',
    artifacts: 'Key stack: TypeScript, Python, Node.js, Next.js, LangChain, Tailwind CSS.'
  },
  {
    id: '4',
    stepNumber: '04',
    shortTitle: 'Test',
    fullTitle: '04 — Test & Verify',
    description: 'Implement automated unit, integration, and load testing. Benchmark concurrency limits under synthetic traffic load.',
    artifacts: 'Key validation: Jest, Cypress, PyTest, K6 load testing, zero-regression pipelines.'
  },
  {
    id: '5',
    stepNumber: '05',
    shortTitle: 'Deploy',
    fullTitle: '05 — Containerize & Deploy',
    description: 'Deploy resilient infrastructure using Docker containers, Kubernetes clusters, infrastructure-as-code, and automated CI/CD.',
    artifacts: 'Key tools: Kubernetes, Docker, Helm, GitHub Actions, AWS, Supabase.'
  },
  {
    id: '6',
    stepNumber: '06',
    shortTitle: 'Improve',
    fullTitle: '06 — Monitor & Improve',
    description: 'Establish real-time observability with telemetry metrics, error tracking, automated alerts, and continuous optimization.',
    artifacts: 'Key telemetry: Prometheus, Grafana, OpenTelemetry, Sentry, real-time logging.'
  }
];
