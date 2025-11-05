import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Topbar() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {/* Left side: filters and summary */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative inline-flex items-center">
          <select className="appearance-none pe-8 ps-3 py-2 rounded-xl border border-slate-200 bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30">
            {[
              'Jan 2024','Feb 2024','Mar 2024','Apr 2024','May 2024','Jun 2024','Jul 2024','Aug 2024','Sep 2024','Oct 2024','Nov 2024','Dec 2024'
            ].map(m => (
              <option key={m}>{m}</option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-2 h-4 w-4 text-slate-400" />
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">Total Income</p>
            <div className="flex items-baseline gap-2">
              <p className="text-xl font-semibold text-slate-900">$45,450</p>
              <span className="text-xs font-medium text-emerald-600">+9.7%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Sync Your Platforms */}
      <div className="flex flex-wrap items-center gap-2 md:justify-end">
        <span className="me-2 text-xs font-medium text-slate-500">Sync Your Platforms</span>
        <button className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700">
          Sync YouTube
        </button>
        <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50">
          Sync TikTok
        </button>
        <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50">
          Sync Instagram
        </button>
        <button disabled aria-disabled="true" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-medium text-slate-400 shadow-sm cursor-not-allowed">
          More Integrations — Coming Soon
        </button>
      </div>
    </div>
  );
}
