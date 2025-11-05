import React from 'react';
import { Users, TrendingUp, DollarSign, Sparkles } from 'lucide-react';

function Stat({ icon: Icon, label, value, accent }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`h-9 w-9 rounded-lg flex items-center justify-center ${accent}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs text-gray-500">{label}</div>
        <div className="text-sm font-semibold text-gray-900">{value}</div>
      </div>
    </div>
  );
}

function QuickStats() {
  return (
    <div className="w-full h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm flex flex-col">
      <div className="flex items-start justify-between">
        <h3 className="text-sm font-medium text-gray-600">Quick Stats</h3>
        <Sparkles className="h-4 w-4 text-gray-400" />
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Stat icon={Users} label="Total Users" value="481,722" accent="bg-gray-100 text-gray-800" />
        <Stat icon={TrendingUp} label="Growth Rate" value="+9.71%" accent="bg-emerald-100 text-emerald-700" />
        <Stat icon={DollarSign} label="Avg Earnings / User" value="$94.32" accent="bg-blue-100 text-blue-700" />
      </div>

      <div className="mt-5 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-4">
        <div className="text-xs font-medium text-gray-700 mb-1">AI Insight</div>
        <p className="text-sm leading-relaxed text-gray-600">
          Your TikTok sponsorship income grew 18% this month. <span className="font-medium text-gray-800">Post more content on Tuesdays.</span>
        </p>
      </div>
    </div>
  );
}

export default QuickStats;
