import React, { useState, useEffect, useRef } from 'react';
import { Swords, ShieldCheck, Zap } from 'lucide-react';
import gsap from 'gsap';

export const AIBattleArenaWidget: React.FC = () => {
  const [promptKey, setPromptKey] = useState<'cache' | 'quantum' | 'rag'>('cache');
  const [isBattling, setIsBattling] = useState(false);
  const [modelA, setModelA] = useState('Click "Run Battle" to stream real-time model completions...');
  const [modelB, setModelB] = useState('Click "Run Battle" to stream real-time model completions...');
  const [judge, setJudge] = useState('Automated judge scoring evaluates response depth, concurrency safety, and precision.');
  const [winner, setWinner] = useState('AWAITING INPUT');
  const [status, setStatus] = useState('● READY FOR BATTLE');

  const particleA = useRef<SVGCircleElement | null>(null);
  const particleB = useRef<SVGCircleElement | null>(null);
  const particleJudge = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    const pA = particleA.current;
    const pB = particleB.current;
    const pJ = particleJudge.current;
    if (!pA || !pB || !pJ) return;

    const ctx = gsap.context(() => {
      // Particle A travelling down line to battle node
      gsap.to(pA, {
        cx: 150,
        cy: 40,
        duration: 1.8,
        repeat: -1,
        ease: 'linear',
      });

      // Particle B travelling up line to battle node
      gsap.to(pB, {
        cx: 150,
        cy: 40,
        duration: 1.8,
        repeat: -1,
        ease: 'linear',
        delay: 0.4,
      });

      // Particle Judge travelling to winner
      gsap.to(pJ, {
        cy: 90,
        duration: 1.2,
        repeat: -1,
        ease: 'linear',
      });
    });

    return () => ctx.revert();
  }, []);

  const scenarios = {
    cache: {
      modelA: "Mistral-7B: Utilizing an LFU-LRU hybrid data structure backed by Redis Cluster with synchronized pub-sub eviction events. Memory overhead ~4.2MB per node.",
      modelB: "Gemini-Pro: Implementing consistent hashing across partition nodes with ring-based replication and async write-back to persistent storage. Lock-free read rings.",
      judge: "AI Judge Evaluation: Gemini-Pro scored 96/100 due to superior lock-free concurrency handling and zero-latency read ring design.",
      winner: "WINNER: Gemini-Pro (96/100)"
    },
    quantum: {
      modelA: "Mistral-7B: Entanglement creates correlated quantum states across spatial distances. In QKD (E91 protocol), eavesdropping collapses state coherence, revealing interception instantly.",
      modelB: "Gemini-Pro: Bell pairs enable quantum key distribution via non-locality. Attempting interception alters state probabilities, guaranteeing 100% eavesdrop detection.",
      judge: "AI Judge Evaluation: Mistral-7B provided higher precision regarding the E91 protocol implementation and decoherence detection.",
      winner: "WINNER: Mistral-7B (94/100)"
    },
    rag: {
      modelA: "Mistral-7B: Sparse-dense hybrid search combines BM25 keyword matching with HNSW vector embeddings via Reciprocal Rank Fusion (RRF) for high recall.",
      modelB: "Gemini-Pro: HyDE uses LLM to generate a draft answer first, then embeds the draft to search vector DBs, solving vocabulary mismatch problems.",
      judge: "AI Judge Evaluation: Draw (91/91). Both models demonstrated exceptional technical depth for production RAG pipelines.",
      winner: "RESULT: Tie (91 vs 91)"
    }
  };

  const handleRunBattle = () => {
    setIsBattling(true);
    setStatus('● LIVE BATTLE IN PROGRESS...');
    setModelA('Streaming response tokens...');
    setModelB('Streaming response tokens...');
    setJudge('Waiting for model completions...');
    setWinner('EVALUATING...');

    const data = scenarios[promptKey];
    let i = 0;
    let j = 0;

    const interval = setInterval(() => {
      if (i < data.modelA.length) {
        setModelA(data.modelA.substring(0, i + 4));
        i += 4;
      }
      if (j < data.modelB.length) {
        setModelB(data.modelB.substring(0, j + 4));
        j += 4;
      }

      if (i >= data.modelA.length && j >= data.modelB.length) {
        clearInterval(interval);
        setTimeout(() => {
          setJudge(data.judge);
          setWinner(data.winner);
          setStatus('● BATTLE COMPLETE');
          setIsBattling(false);
        }, 300);
      }
    }, 30);
  };

  return (
    <div className="tech-card p-6 border border-white/10 relative overflow-hidden bg-zinc-950/90 shadow-2xl">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Swords className="w-4 h-4 text-blue-400" />
          <span className="font-mono text-xs font-semibold text-zinc-200">AI CONTROL ROOM // LIVE BATTLE ENGINE</span>
        </div>
        <span className={`text-xs font-mono font-semibold ${isBattling ? 'text-amber-400 animate-pulse' : 'text-emerald-400'}`}>
          {status}
        </span>
      </div>

      {/* GSAP Animated Node Diagram Header */}
      <div className="w-full bg-zinc-900/60 p-3 rounded-lg border border-white/5 mb-4 flex flex-col items-center">
        <svg width="300" height="100" viewBox="0 0 300 100" className="overflow-visible">
          {/* Path from Model A to Battle */}
          <line x1="50" y1="20" x2="150" y2="40" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
          {/* Path from Model B to Battle */}
          <line x1="50" y1="60" x2="150" y2="40" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
          {/* Path from Battle to Judge to Winner */}
          <line x1="150" y1="40" x2="150" y2="90" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="2" />

          {/* GSAP Traveling Data Particles */}
          <circle ref={particleA} cx="50" cy="20" r="3" fill="#60a5fa" />
          <circle ref={particleB} cx="50" cy="60" r="3" fill="#818cf8" />
          <circle ref={particleJudge} cx="150" cy="40" r="3" fill="#34d399" />

          {/* Node Badges */}
          <g transform="translate(10, 8)">
            <rect width="80" height="24" rx="4" fill="#0f172a" stroke="#3b82f6" strokeWidth="1" />
            <text x="40" y="16" fill="#93c5fd" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">MODEL A</text>
          </g>

          <g transform="translate(10, 48)">
            <rect width="80" height="24" rx="4" fill="#0f172a" stroke="#6366f1" strokeWidth="1" />
            <text x="40" y="16" fill="#c7d2fe" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">MODEL B</text>
          </g>

          <g transform="translate(115, 28)">
            <rect width="70" height="24" rx="4" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1" />
            <text x="35" y="16" fill="#e0e7ff" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">BATTLE</text>
          </g>

          <g transform="translate(205, 28)">
            <rect width="85" height="24" rx="4" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
            <text x="42" y="16" fill="#a7f3d0" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">AI JUDGE</text>
          </g>
        </svg>
      </div>

      <div className="mb-4">
        <label className="block font-mono text-[11px] text-zinc-400 mb-1.5">SELECT BATTLE PROMPT:</label>
        <div className="flex gap-2">
          <select
            value={promptKey}
            onChange={(e) => setPromptKey(e.target.value as 'cache' | 'quantum' | 'rag')}
            disabled={isBattling}
            className="bg-zinc-900 border border-white/10 rounded px-3 py-1.5 font-mono text-xs text-zinc-200 focus:outline-none focus:border-blue-500 flex-1"
          >
            <option value="cache">Distributed Cache Eviction Strategy</option>
            <option value="quantum">Quantum Cryptographic Key Exchange</option>
            <option value="rag">Sparse-Dense Hybrid Search vs HyDE</option>
          </select>
          <button
            onClick={handleRunBattle}
            disabled={isBattling}
            className="px-4 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold transition-all flex items-center gap-1"
          >
            <span>Run Battle</span>
            <Zap className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="p-3 rounded-lg bg-zinc-900/80 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs text-blue-400 font-bold">MODEL A (Mistral 7B)</span>
            <span className="text-[10px] font-mono text-zinc-400">LATENCY: 42ms</span>
          </div>
          <div className="font-mono text-xs text-zinc-300 min-h-[70px] leading-relaxed">
            {modelA}
          </div>
        </div>

        <div className="p-3 rounded-lg bg-zinc-900/80 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs text-indigo-400 font-bold">MODEL B (Gemini Pro)</span>
            <span className="text-[10px] font-mono text-zinc-400">LATENCY: 38ms</span>
          </div>
          <div className="font-mono text-xs text-zinc-300 min-h-[70px] leading-relaxed">
            {modelB}
          </div>
        </div>
      </div>

      <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-500/30 font-mono text-xs">
        <div className="flex items-center justify-between mb-1">
          <span className="text-blue-400 font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            AI JUDGE EVALUATOR
          </span>
          <span className="text-emerald-400 font-bold">{winner}</span>
        </div>
        <p className="text-zinc-300 text-[11px] leading-relaxed">
          {judge}
        </p>
      </div>
    </div>
  );
};
