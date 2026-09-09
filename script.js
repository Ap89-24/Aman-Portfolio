/* ==========================================================================
   Aman Patel Portfolio — Interactive Engine & Visualizations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initBackgroundCanvas();
  initNavigation();
  initAIBattleArena();
  initDeployGuard();
  initResearchForge();
  initExpenseTracker();
  initMindsetStepper();
  initProjectModals();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. Interactive Background Canvas (Node Constellation System)
   -------------------------------------------------------------------------- */
function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  // Disable or reduce particles on low-power or mobile screens
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 25 : 55;

  const particles = [];
  const mouse = { x: width / 2, y: height / 2, radius: 180 };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 1.5 + 1;
      this.label = ['AI', 'API', 'SYSTEM', 'CLOUD', 'K8S', 'LLM', 'RAG'][Math.floor(Math.random() * 7)];
      this.showLabel = Math.random() > 0.8;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse attraction
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        this.x -= (dx / dist) * force * 1.5;
        this.y -= (dy / dist) * force * 1.5;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(244, 244, 247, 0.4)';
      ctx.fill();

      if (this.showLabel && !isMobile) {
        ctx.font = '9px JetBrains Mono';
        ctx.fillStyle = 'rgba(161, 161, 170, 0.35)';
        ctx.fillText(this.label, this.x + 6, this.y + 3);
      }
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const alpha = (1 - dist / 120) * 0.12;
          ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* --------------------------------------------------------------------------
   2. Navigation, Mobile Menu & Theme Toggle
   -------------------------------------------------------------------------- */
function initNavigation() {
  const nav = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav?.classList.add('bg-opacity-90', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-3');
      nav?.classList.remove('py-5');
    } else {
      nav?.classList.remove('bg-opacity-90', 'backdrop-blur-md', 'border-b', 'border-white/10');
      nav?.classList.add('py-5');
    }
  });

  mobileToggle?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });

  // Theme toggle button
  const themeToggleBtn = document.getElementById('theme-toggle');
  themeToggleBtn?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light-editorial') {
      document.documentElement.removeAttribute('data-theme');
      themeToggleBtn.innerHTML = `<i data-lucide="sun" class="w-4 h-4 text-amber-400"></i>`;
    } else {
      document.documentElement.setAttribute('data-theme', 'light-editorial');
      themeToggleBtn.innerHTML = `<i data-lucide="moon" class="w-4 h-4 text-indigo-400"></i>`;
    }
    if (window.lucide) window.lucide.createIcons();
  });
}

/* --------------------------------------------------------------------------
   3. PROJECT 01 — AI Battle Arena Interactive Simulator
   -------------------------------------------------------------------------- */
function initAIBattleArena() {
  const runBtn = document.getElementById('arena-run-btn');
  const promptSelect = document.getElementById('arena-prompt-select');
  const outputA = document.getElementById('arena-model-a-out');
  const outputB = document.getElementById('arena-model-b-out');
  const judgeOut = document.getElementById('arena-judge-out');
  const winnerBadge = document.getElementById('arena-winner-badge');
  const statusBadge = document.getElementById('arena-status-badge');

  if (!runBtn) return;

  const battleScenarios = {
    cache: {
      prompt: "Design a high-concurrency distributed cache with eviction policies.",
      modelA: "Mistral-7B: Utilizing an LFU-LRU hybrid data structure backed by Redis Cluster with synchronized pub-sub eviction events. Memory overhead ~4.2MB per node.",
      modelB: "Gemini-Pro: Implementing consistent hashing across partition nodes with ring-based replication and async write-back to persistent storage. Zero-lock lock-free read rings.",
      judge: "AI Judge Evaluation: Gemini-Pro scored 96/100 due to superior lock-free concurrency handling and zero-latency read ring design.",
      winner: "WINNER: Gemini-Pro (96/100)"
    },
    quantum: {
      prompt: "Explain Quantum Entanglement and its implications for cryptographic key exchange.",
      modelA: "Mistral-7B: Entanglement creates correlated quantum states across spatial distances. In QKD (E91 protocol), eavesdropping collapses state coherence, revealing interception instantly.",
      modelB: "Gemini-Pro: Bell pairs enable quantum key distribution via non-locality. Attempting interception alters state probabilities, guaranteeing 100% eavesdrop detection.",
      judge: "AI Judge Evaluation: Mistral-7B provided higher precision regarding the E91 protocol implementation and decoherence detection.",
      winner: "WINNER: Mistral-7B (94/100)"
    },
    rag: {
      prompt: "Compare Hybrid Sparse-Dense Vector Search vs HyDE (Hypothetical Document Embeddings).",
      modelA: "Mistral-7B: Sparse-dense hybrid search combines BM25 keyword matching with HNSW vector embeddings via Reciprocal Rank Fusion (RRF) for high recall.",
      modelB: "Gemini-Pro: HyDE uses LLM to generate a draft answer first, then embeds the draft to search vector DBs, solving vocabulary mismatch problems.",
      judge: "AI Judge Evaluation: Draw (91/91). Both models demonstrated exceptional technical depth for production RAG pipelines.",
      winner: "RESULT: Tie (91 vs 91)"
    }
  };

  runBtn.addEventListener('click', () => {
    const key = promptSelect ? promptSelect.value : 'cache';
    const data = battleScenarios[key] || battleScenarios.cache;

    if (statusBadge) statusBadge.innerText = "● LIVE BATTLE IN PROGRESS...";
    if (statusBadge) statusBadge.className = "text-xs font-mono text-amber-400 font-semibold animate-pulse";
    
    outputA.innerText = "Streaming response tokens...";
    outputB.innerText = "Streaming response tokens...";
    judgeOut.innerText = "Waiting for model completions...";
    if (winnerBadge) winnerBadge.innerText = "EVALUATING...";

    let i = 0;
    let j = 0;

    const streamInterval = setInterval(() => {
      if (i < data.modelA.length) {
        outputA.innerText = data.modelA.substring(0, i + 3);
        i += 3;
      }
      if (j < data.modelB.length) {
        outputB.innerText = data.modelB.substring(0, j + 3);
        j += 3;
      }

      if (i >= data.modelA.length && j >= data.modelB.length) {
        clearInterval(streamInterval);
        setTimeout(() => {
          judgeOut.innerText = data.judge;
          if (winnerBadge) winnerBadge.innerText = data.winner;
          if (statusBadge) {
            statusBadge.innerText = "● BATTLE COMPLETE";
            statusBadge.className = "text-xs font-mono text-emerald-400 font-semibold";
          }
        }, 400);
      }
    }, 30);
  });
}

/* --------------------------------------------------------------------------
   4. PROJECT 02 — DeployGuard Live Kubernetes Cluster Monitor
   -------------------------------------------------------------------------- */
function initDeployGuard() {
  const eventLog = document.getElementById('k8s-event-log');
  const cpuVal = document.getElementById('k8s-cpu-val');
  const memVal = document.getElementById('k8s-mem-val');

  if (!eventLog) return;

  const mockEvents = [
    { time: '15:24:01', type: 'POD_SCALED', text: 'k8s-pod-api-88f9 replica set scaled from 3 to 5' },
    { time: '15:24:04', type: 'HEALTH_CHECK', text: 'Ingress controller health check passed (200 OK)' },
    { time: '15:24:08', type: 'EVENT_BUS', text: 'Published DeploymentEvent[v2.4.1] to WebSocket stream' },
    { time: '15:24:12', type: 'METRICS_SYNC', text: 'Cluster memory usage stabilized at 4.2GB / 8GB' },
    { time: '15:24:15', type: 'POD_READY', text: 'Container api-worker-04 state changed to Running' }
  ];

  let index = 0;

  setInterval(() => {
    const evt = mockEvents[index % mockEvents.length];
    const row = document.createElement('div');
    row.className = 'flex items-center justify-between text-xs py-1 border-b border-white/5 animate-fadeIn';
    row.innerHTML = `
      <span class="font-mono text-zinc-400">${evt.time}</span>
      <span class="font-mono text-blue-400 px-1.5 py-0.5 rounded bg-blue-500/10 text-[10px]">${evt.type}</span>
      <span class="text-zinc-300 truncate max-w-[220px]">${evt.text}</span>
    `;

    eventLog.insertBefore(row, eventLog.firstChild);
    if (eventLog.children.length > 5) {
      eventLog.removeChild(eventLog.lastChild);
    }

    // Dynamic Telemetry shift
    if (cpuVal) cpuVal.innerText = `${Math.floor(Math.random() * 15 + 28)}%`;
    if (memVal) memVal.innerText = `${(Math.random() * 0.4 + 4.1).toFixed(1)} GB`;

    index++;
  }, 3200);
}

/* --------------------------------------------------------------------------
   5. PROJECT 03 — ResearchForge Semantic Search & Knowledge Graph
   -------------------------------------------------------------------------- */
function initResearchForge() {
  const searchInput = document.getElementById('research-search-input');
  const searchBtn = document.getElementById('research-search-btn');
  const resultsContainer = document.getElementById('research-results');

  if (!searchBtn) return;

  const mockQueryResults = [
    { title: "Attention Is All You Need", match: "98.4% Match", tags: ["Transformer", "Self-Attention"], abstract: "We propose the Transformer, a model architecture relying entirely on self-attention mechanisms..." },
    { title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP", match: "95.1% Match", tags: ["RAG", "Vector Search"], abstract: "We explore RAG models which combine pre-trained parametric and non-parametric memory..." },
    { title: "LangGraph: Building Multi-Agent Stateful Applications", match: "91.8% Match", tags: ["Agentic AI", "Graph State"], abstract: "Cyclic graph workflows enable complex reasoning loops with memory persistence across agent calls..." }
  ];

  searchBtn.addEventListener('click', () => {
    const val = searchInput?.value || "RAG Optimization";
    if (resultsContainer) {
      resultsContainer.innerHTML = `
        <div class="p-3 text-xs font-mono text-blue-400 bg-blue-500/10 rounded border border-blue-500/20 mb-3 animate-pulse">
          🔍 Executing vector similarity search & semantic retrieval for: "${val}"
        </div>
      `;

      setTimeout(() => {
        resultsContainer.innerHTML = mockQueryResults.map(item => `
          <div class="p-3 rounded bg-zinc-900/80 border border-white/10 text-xs hover:border-blue-500/40 transition-all mb-2">
            <div class="flex items-center justify-between mb-1">
              <span class="font-bold text-zinc-100 font-display">${item.title}</span>
              <span class="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">${item.match}</span>
            </div>
            <p class="text-zinc-400 text-[11px] mb-2">${item.abstract}</p>
            <div class="flex gap-1.5">
              ${item.tags.map(t => `<span class="text-[9px] font-mono text-zinc-300 bg-white/5 px-1.5 py-0.5 rounded">${t}</span>`).join('')}
            </div>
          </div>
        `).join('');
      }, 500);
    }
  });
}

/* --------------------------------------------------------------------------
   6. PROJECT 04 — Expense Tracker Analytics Interactive Breakdown
   -------------------------------------------------------------------------- */
function initExpenseTracker() {
  const toggleBtns = document.querySelectorAll('.expense-tab');
  const statIncome = document.getElementById('expense-income');
  const statExpense = document.getElementById('expense-out');
  const statSavings = document.getElementById('expense-sav');

  if (!toggleBtns.length) return;

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      toggleBtns.forEach(b => b.classList.remove('bg-blue-600', 'text-white'));
      btn.classList.add('bg-blue-600', 'text-white');

      const mode = btn.getAttribute('data-period');
      if (mode === 'month') {
        if (statIncome) statIncome.innerText = "$8,450.00";
        if (statExpense) statExpense.innerText = "$2,120.50";
        if (statSavings) statSavings.innerText = "$6,329.50";
      } else {
        if (statIncome) statIncome.innerText = "$101,400.00";
        if (statExpense) statExpense.innerText = "$25,446.00";
        if (statSavings) statSavings.innerText = "$75,954.00";
      }
    });
  });
}

/* --------------------------------------------------------------------------
   7. Engineering Mindset ("How I Build") Interactive Stepper
   -------------------------------------------------------------------------- */
function initMindsetStepper() {
  const stepBtns = document.querySelectorAll('.mindset-step-btn');
  const stepTitle = document.getElementById('mindset-step-title');
  const stepDesc = document.getElementById('mindset-step-desc');
  const stepDetail = document.getElementById('mindset-step-detail');

  if (!stepBtns.length) return;

  const mindsetDetails = {
    "1": {
      title: "01 — Understand & Scrutinize",
      desc: "Before writing a single line of code, I break down the domain requirements, performance budgets, edge cases, and security constraints.",
      detail: "Key artifacts: Requirement matrix, data access patterns, API SLAs, latency expectations."
    },
    "2": {
      title: "02 — Architect & Model",
      desc: "Design data schemas, component boundaries, microservices vs monolith tradeoffs, caching layers, and asynchronous event flows.",
      detail: "Key artifacts: ER diagrams, OpenAPI specs, system topology diagrams, state machine maps."
    },
    "3": {
      title: "03 — Build with Craft",
      desc: "Write clean, modular, type-safe code using modern engineering patterns. Prioritize maintainability, legibility, and high performance.",
      detail: "Key stack: TypeScript, Python, Node.js, Next.js, LangChain, Tailwind CSS."
    },
    "4": {
      title: "04 — Test & Verify",
      desc: "Implement automated unit, integration, and load testing. Benchmark concurrency limits under synthetic traffic load.",
      detail: "Key validation: Jest, Cypress, PyTest, K6 load testing, zero-regression pipelines."
    },
    "5": {
      title: "05 — Containerize & Deploy",
      desc: "Deploy resilient infrastructure using Docker containers, Kubernetes clusters, infrastructure-as-code, and automated CI/CD.",
      detail: "Key tools: Kubernetes, Docker, Helm, GitHub Actions, AWS, Supabase."
    },
    "6": {
      title: "06 — Monitor & Improve",
      desc: "Establish real-time observability with telemetry metrics, error tracking, automated alerts, and continuous optimization.",
      detail: "Key telemetry: Prometheus, Grafana, OpenTelemetry, Sentry, real-time logging."
    }
  };

  stepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      stepBtns.forEach(b => {
        b.classList.remove('border-blue-500', 'bg-blue-500/10', 'text-blue-400');
        b.classList.add('border-white/10', 'bg-zinc-900/50', 'text-zinc-400');
      });

      btn.classList.remove('border-white/10', 'bg-zinc-900/50', 'text-zinc-400');
      btn.classList.add('border-blue-500', 'bg-blue-500/10', 'text-blue-400');

      const id = btn.getAttribute('data-step');
      const info = mindsetDetails[id];
      if (info) {
        if (stepTitle) stepTitle.innerText = info.title;
        if (stepDesc) stepDesc.innerText = info.desc;
        if (stepDetail) stepDetail.innerText = info.detail;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8. Project Modals / Technical Deep Dives
   -------------------------------------------------------------------------- */
function initProjectModals() {
  const modalOverlay = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content-body');
  const openBtns = document.querySelectorAll('.open-project-modal');

  if (!modalOverlay) return;

  const projectDetailsMap = {
    "arena": {
      title: "AI Battle Arena — System Deep Dive",
      html: `
        <div class="space-y-4 text-sm text-zinc-300">
          <p><strong class="text-white">Architecture Overview:</strong> Built on a distributed WebSocket streaming pipeline connecting multiple asynchronous LLM worker threads (Mistral, Gemini, Cohere) with an automated AI judge scoring loop.</p>
          <div class="code-box">
            [Client WebSockets] ➔ [API Gateway] ➔ [LangGraph Orchestrator]
                                                    ├── Worker 1 (Mistral 7B)
                                                    ├── Worker 2 (Gemini Pro)
                                                    └── Worker 3 (AI Judge Evaluator)
          </div>
          <h4 class="font-bold text-white font-display">Key Technical Highlights:</h4>
          <ul class="list-disc list-inside space-y-1 text-zinc-400">
            <li>Low-latency token streaming using Node.js event loops and WebSockets.</li>
            <li>LangGraph state persistence across multi-turn model evaluations.</li>
            <li>Custom rubric parsing for standardized AI judge confidence scoring.</li>
          </ul>
        </div>
      `
    },
    "deployguard": {
      title: "DeployGuard — Infrastructure Architecture",
      html: `
        <div class="space-y-4 text-sm text-zinc-300">
          <p><strong class="text-white">Architecture Overview:</strong> Real-time Kubernetes event consumer that leverages the K8s Client API, watching pod status changes, container crashes, and deployment rollouts across clusters.</p>
          <div class="code-box">
            [K8s API Watcher] ➔ [In-Memory EventBus] ➔ [WebSocket Broadcaster] ➔ [React Dashboard]
          </div>
          <h4 class="font-bold text-white font-display">Key Technical Highlights:</h4>
          <ul class="list-disc list-inside space-y-1 text-zinc-400">
            <li>Sub-50ms event propagation from cluster node to web frontend.</li>
            <li>Dockerized deployment agent with zero-privilege security context.</li>
            <li>Automated slack/webhook notifications for failed deployment rollouts.</li>
          </ul>
        </div>
      `
    },
    "researchforge": {
      title: "ResearchForge — RAG Engine Architecture",
      html: `
        <div class="space-y-4 text-sm text-zinc-300">
          <p><strong class="text-white">Architecture Overview:</strong> End-to-end semantic paper analysis engine utilizing vector embeddings, hybrid BM25 + dense search retrieval, and context-stuffed prompt generation.</p>
          <div class="code-box">
            [User Prompt] ➔ [Vector Search (HNSW)] ➔ [RRF Re-ranking] ➔ [LLM Synthesis Engine]
          </div>
          <h4 class="font-bold text-white font-display">Key Technical Highlights:</h4>
          <ul class="list-disc list-inside space-y-1 text-zinc-400">
            <li>Chunking strategies optimized for dense academic PDF parsing.</li>
            <li>LangChain vector pipeline with Supabase pgvector backend storage.</li>
            <li>Interactive citation graph mapping paper relationships visually.</li>
          </ul>
        </div>
      `
    },
    "expense": {
      title: "Expense Tracker — Full-Stack Architecture",
      html: `
        <div class="space-y-4 text-sm text-zinc-300">
          <p><strong class="text-white">Architecture Overview:</strong> Microservices-inspired full-stack web application featuring secure JWT authentication, relational MongoDB transactions, and analytics aggregation pipelines.</p>
          <div class="code-box">
            [React App] ➔ [Express API Middleware] ➔ [MongoDB Aggregation Engine]
          </div>
          <h4 class="font-bold text-white font-display">Key Technical Highlights:</h4>
          <ul class="list-disc list-inside space-y-1 text-zinc-400">
            <li>Automated expense categorization using pattern matching algorithms.</li>
            <li>Docker container composition for instant local staging deployment.</li>
            <li>Responsive SVG financial charting with zero heavy library overhead.</li>
          </ul>
        </div>
      `
    }
  };

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-project');
      const details = projectDetailsMap[projId] || projectDetailsMap["arena"];
      if (modalTitle) modalTitle.innerText = details.title;
      if (modalContent) modalContent.innerHTML = details.html;
      modalOverlay.classList.add('active');
    });
  });

  modalClose?.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
  });

  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });
}

/* --------------------------------------------------------------------------
   9. Contact Form & Copy Email Toast
   -------------------------------------------------------------------------- */
function initContactForm() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');

  copyBtn?.addEventListener('click', () => {
    const email = "aman082199@gmail.com";
    navigator.clipboard.writeText(email);
  });

  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success-msg');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formSuccess) {
      formSuccess.classList.remove('hidden');
      contactForm.reset();
      setTimeout(() => formSuccess.classList.add('hidden'), 4000);
    }
  });
}
