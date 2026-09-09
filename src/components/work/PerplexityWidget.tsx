import React, { useState } from 'react';
import { Search, Globe, ExternalLink, Sparkles, Layers } from 'lucide-react';

export const PerplexityWidget: React.FC = () => {
  const [query, setQuery] = useState('What are the latest breakthroughs in Quantum Computing?');
  const [isSearching, setIsSearching] = useState(false);
  const [activeSources, setActiveSources] = useState([
    { id: 1, title: 'Nature Quantum Physics', domain: 'nature.com', url: 'https://nature.com' },
    { id: 2, title: 'MIT Technology Review', domain: 'technologyreview.com', url: 'https://technologyreview.com' },
    { id: 3, title: 'ArXiv Quantum Hardware', domain: 'arxiv.org', url: 'https://arxiv.org' }
  ]);
  const [answerText, setAnswerText] = useState(
    'Recent 2026 quantum breakthroughs highlight 1,000+ logical qubit fault-tolerant systems using topological error correction [1]. Neutral atom arrays have reached record coherence times exceeding 45 seconds [2], enabling real-time quantum error mitigation for molecular simulations [3].'
  );
  const [relatedQueries, setRelatedQueries] = useState([
    'How do neutral atom qubits compare to superconducting circuits?',
    'What is topological quantum error correction?'
  ]);

  const presetQueries: Record<string, { sources: Array<{ id: number; title: string; domain: string; url: string }>; text: string; related: string[] }> = {
    'quantum': {
      sources: [
        { id: 1, title: 'Nature Quantum Physics', domain: 'nature.com', url: 'https://nature.com' },
        { id: 2, title: 'MIT Technology Review', domain: 'technologyreview.com', url: 'https://technologyreview.com' },
        { id: 3, title: 'ArXiv Quantum Hardware', domain: 'arxiv.org', url: 'https://arxiv.org' }
      ],
      text: 'Recent 2026 quantum breakthroughs highlight 1,000+ logical qubit fault-tolerant systems using topological error correction [1]. Neutral atom arrays have reached record coherence times exceeding 45 seconds [2], enabling real-time quantum error mitigation for molecular simulations [3].',
      related: ['How do neutral atom qubits compare to superconducting circuits?', 'What is topological quantum error correction?']
    },
    'wasm': {
      sources: [
        { id: 1, title: 'WebAssembly W3C Specs', domain: 'w3.org', url: 'https://w3.org' },
        { id: 2, title: 'MDN Web Docs — WASM', domain: 'developer.mozilla.org', url: 'https://developer.mozilla.org' }
      ],
      text: 'WebAssembly compiles C++/Rust to bytecode executed in a stack-based virtual machine at near-native CPU speed [1]. Memory is allocated as a contiguous linear array of bytes accessible safely via sandbox boundaries [2].',
      related: ['What is WASI (WebAssembly System Interface)?', 'How does WebAssembly GC memory allocation work?']
    },
    'moe': {
      sources: [
        { id: 1, title: 'Hugging Face MoE Guide', domain: 'huggingface.co', url: 'https://huggingface.co' },
        { id: 2, title: 'DeepSeek & Mistral MoE', domain: 'arxiv.org', url: 'https://arxiv.org' }
      ],
      text: 'Mixture of Experts (MoE) replaces dense feed-forward layers with a top-k router network that activates a sparse subset of expert parameters per token [1]. This reduces inference compute costs by up to 60% while maintaining trillion-parameter capacity [2].',
      related: ['How does routing load balancing work in MoE?', 'What is expert parallelism?']
    }
  };

  const handleRunQuery = (key: string) => {
    setIsSearching(true);
    const data = presetQueries[key] || presetQueries['quantum'];
    
    if (key === 'wasm') setQuery('How does WebAssembly work under the hood?');
    else if (key === 'moe') setQuery('Explain Mixture of Experts (MoE) architecture.');
    else setQuery('What are the latest breakthroughs in Quantum Computing?');

    setAnswerText('Searching 5 web sources & synthesizing answer tokens...');
    
    setTimeout(() => {
      setActiveSources(data.sources);
      setAnswerText(data.text);
      setRelatedQueries(data.related);
      setIsSearching(false);
    }, 700);
  };

  return (
    <div className="tech-card p-6 border border-white/10 relative overflow-hidden bg-zinc-950/90 shadow-2xl">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span className="font-mono text-xs font-semibold text-zinc-200">PERPLEXITY AI // SEARCH & SYNTHESIS</span>
        </div>
        <span className={`font-mono text-[11px] ${isSearching ? 'text-amber-400 animate-pulse' : 'text-indigo-400'}`}>
          {isSearching ? 'RETRIEVING SOURCES...' : 'REAL-TIME RETRIEVAL: ACTIVE'}
        </span>
      </div>

      {/* Preset Quick Chips */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        <button
          onClick={() => handleRunQuery('quantum')}
          className="px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-[11px] font-mono text-zinc-300 transition-all"
        >
          Quantum 2026
        </button>
        <button
          onClick={() => handleRunQuery('wasm')}
          className="px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-[11px] font-mono text-zinc-300 transition-all"
        >
          WASM Internals
        </button>
        <button
          onClick={() => handleRunQuery('moe')}
          className="px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-[11px] font-mono text-zinc-300 transition-all"
        >
          MoE Architecture
        </button>
      </div>

      {/* Query Bar */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-zinc-900 border border-white/10 rounded px-3 py-1.5 font-mono text-xs text-zinc-200 focus:outline-none focus:border-indigo-500 flex-1"
        />
        <button
          onClick={() => handleRunQuery('quantum')}
          disabled={isSearching}
          className="px-4 py-1.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-semibold transition-all flex items-center gap-1"
        >
          <span>Ask AI</span>
          <Search className="w-3 h-3" />
        </button>
      </div>

      {/* Verified Web Sources Strip */}
      <div className="mb-4">
        <span className="font-mono text-[10px] text-zinc-400 block mb-1.5 flex items-center gap-1">
          <Globe className="w-3 h-3 text-indigo-400" />
          VERIFIED SOURCES ({activeSources.length})
        </span>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {activeSources.map((src) => (
            <a
              key={src.id}
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-zinc-900/90 border border-white/10 hover:border-indigo-500/40 text-[11px] flex items-center justify-between group transition-all"
            >
              <div className="truncate">
                <span className="font-mono font-bold text-zinc-200 block truncate">[{src.id}] {src.title}</span>
                <span className="text-[9px] text-zinc-500 font-mono block">{src.domain}</span>
              </div>
              <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-indigo-400 shrink-0 ml-1" />
            </a>
          ))}
        </div>
      </div>

      {/* Synthesized Answer Box */}
      <div className="p-3.5 rounded-lg bg-zinc-900/90 border border-white/10 font-mono text-xs leading-relaxed text-zinc-200">
        <div className="flex items-center gap-1.5 mb-2 pb-1 border-b border-white/5 text-[11px] text-indigo-400 font-bold">
          <Layers className="w-3.5 h-3.5" />
          <span>SYNTHESIZED ANSWER</span>
        </div>
        <p className="text-zinc-300 text-xs leading-relaxed">
          {answerText}
        </p>
      </div>

      {/* Follow-up Prompts */}
      <div className="mt-3 pt-3 border-t border-white/5">
        <span className="font-mono text-[10px] text-zinc-500 block mb-1">RELATED FOLLOW-UP QUESTIONS:</span>
        <div className="space-y-1">
          {relatedQueries.map((rq, idx) => (
            <div key={idx} className="text-[11px] font-mono text-indigo-400 hover:text-indigo-300 cursor-pointer flex items-center gap-1">
              <span>➔ {rq}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
