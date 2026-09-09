import React, { useState } from 'react';
import { BookOpenCheck, Search } from 'lucide-react';

export const ResearchForgeWidget: React.FC = () => {
  const [query, setQuery] = useState('Attention Mechanism in Transformers');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([
    {
      title: "Attention Is All You Need",
      match: "98.4% Match",
      tags: ["Transformer", "Self-Attention"],
      abstract: "We propose the Transformer, a model architecture relying entirely on self-attention mechanisms to compute representations..."
    },
    {
      title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP",
      match: "95.1% Match",
      tags: ["RAG", "Vector Search"],
      abstract: "We explore RAG models which combine pre-trained parametric and non-parametric memory..."
    }
  ]);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setResults([
        {
          title: `Vector Match for: "${query}"`,
          match: "99.1% Cosine Similarity",
          tags: ["HNSW", "Dense Embedding", "RRF"],
          abstract: `Retrieved top semantic chunks matching query embeddings from Supabase pgvector store...`
        },
        {
          title: "LangGraph: Building Multi-Agent Stateful Applications",
          match: "93.4% Match",
          tags: ["Agentic AI", "Graph State"],
          abstract: "Cyclic graph workflows enable complex reasoning loops with memory persistence across agent calls..."
        }
      ]);
      setIsSearching(false);
    }, 600);
  };

  return (
    <div className="tech-card p-6 border border-white/10 relative overflow-hidden bg-zinc-950/90 shadow-2xl">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <BookOpenCheck className="w-4 h-4 text-indigo-400" />
          <span className="font-mono text-xs font-semibold text-zinc-200">RAG SEMANTIC SEARCH ENGINE</span>
        </div>
        <span className="font-mono text-[11px] text-indigo-400">VECTOR EMBEDDINGS: ACTIVE</span>
      </div>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-zinc-900 border border-white/10 rounded px-3 py-1.5 font-mono text-xs text-zinc-200 focus:outline-none focus:border-indigo-500 flex-1"
        />
        <button
          onClick={handleSearch}
          disabled={isSearching}
          className="px-4 py-1.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-semibold transition-all flex items-center gap-1"
        >
          <span>Search RAG</span>
          <Search className="w-3 h-3" />
        </button>
      </div>

      <div className="min-h-[140px] space-y-2">
        {isSearching ? (
          <div className="p-3 text-xs font-mono text-blue-400 bg-blue-500/10 rounded border border-blue-500/20 animate-pulse">
            🔍 Executing vector similarity search & semantic retrieval...
          </div>
        ) : (
          results.map((item, idx) => (
            <div key={idx} className="p-3 rounded bg-zinc-900/80 border border-white/10 text-xs">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-zinc-100 font-display">{item.title}</span>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">{item.match}</span>
              </div>
              <p className="text-zinc-400 text-[11px] mb-2">{item.abstract}</p>
              <div className="flex gap-1.5">
                {item.tags.map((t, i) => (
                  <span key={i} className="text-[9px] font-mono text-zinc-300 bg-white/5 px-1.5 py-0.5 rounded">{t}</span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
