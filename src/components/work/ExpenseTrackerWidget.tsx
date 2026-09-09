import React, { useState } from 'react';
import { LineChart } from 'lucide-react';

export const ExpenseTrackerWidget: React.FC = () => {
  const [period, setPeriod] = useState<'month' | 'year'>('month');

  const data = period === 'month' ? {
    income: "$8,450.00",
    expenses: "$2,120.50",
    savings: "$6,329.50"
  } : {
    income: "$101,400.00",
    expenses: "$25,446.00",
    savings: "$75,954.00"
  };

  return (
    <div className="tech-card p-6 border border-white/10 relative overflow-hidden bg-zinc-950/90 shadow-2xl">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <LineChart className="w-4 h-4 text-emerald-400" />
          <span className="font-mono text-xs font-semibold text-zinc-200">FINANCIAL ANALYTICS ENGINE</span>
        </div>
        <div className="flex bg-zinc-900 p-0.5 rounded border border-white/10 text-[11px] font-mono">
          <button
            onClick={() => setPeriod('month')}
            className={`px-2.5 py-0.5 rounded ${period === 'month' ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-white'}`}
          >
            MONTHLY
          </button>
          <button
            onClick={() => setPeriod('year')}
            className={`px-2.5 py-0.5 rounded ${period === 'year' ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-white'}`}
          >
            ANNUAL
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="p-3 rounded bg-zinc-900/90 border border-white/10">
          <span className="font-mono text-[10px] text-zinc-400 block">TOTAL INCOME</span>
          <span className="font-display text-base font-bold text-emerald-400">{data.income}</span>
        </div>
        <div className="p-3 rounded bg-zinc-900/90 border border-white/10">
          <span className="font-mono text-[10px] text-zinc-400 block">TOTAL EXPENSE</span>
          <span className="font-display text-base font-bold text-rose-400">{data.expenses}</span>
        </div>
        <div className="p-3 rounded bg-zinc-900/90 border border-white/10">
          <span className="font-mono text-[10px] text-zinc-400 block">NET SAVINGS</span>
          <span className="font-display text-base font-bold text-blue-400">{data.savings}</span>
        </div>
      </div>

      <div className="p-3 rounded bg-zinc-900/90 border border-white/10">
        <span className="font-mono text-[11px] text-zinc-400 block mb-2">CATEGORY EXPENDITURE BREAKDOWN</span>
        <div className="space-y-2 text-xs font-mono">
          <div>
            <div className="flex justify-between text-[10px] text-zinc-300 mb-1">
              <span>Server Infrastructure & Cloud</span>
              <span>$850.00 (40%)</span>
            </div>
            <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '40%' }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[10px] text-zinc-300 mb-1">
              <span>SaaS API Subscriptions & Models</span>
              <span>$620.00 (29%)</span>
            </div>
            <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full" style={{ width: '29%' }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[10px] text-zinc-300 mb-1">
              <span>Development Tools & Hardware</span>
              <span>$450.50 (21%)</span>
            </div>
            <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '21%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
