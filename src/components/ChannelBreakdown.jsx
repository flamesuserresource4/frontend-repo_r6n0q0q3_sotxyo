import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const data = [
  { name: 'TikTok', value: 16500 },
  { name: 'YouTube', value: 12200 },
  { name: 'Instagram', value: 8800 },
  { name: 'Merch', value: 5200 },
  { name: 'Subscriptions', value: 3800 },
  { name: 'Other', value: 1950 },
];

const total = data.reduce((s, d) => s + d.value, 0);
const prev = total / 1.097; // back out an approx +9.7%
const growth = ((total - prev) / prev) * 100;

function ChannelBreakdown() {
  return (
    <div className="w-full h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-600">Platform / Channel Breakdown</h3>
          <p className="text-xs text-gray-500">Share of income by source</p>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold text-gray-900">${total.toLocaleString()}</div>
          <div className={`text-xs ${growth >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>{growth >= 0 ? '+' : ''}{growth.toFixed(1)}%</div>
        </div>
      </div>
      <div className="mt-4 h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} width={100} />
            <Tooltip formatter={(v) => [`$${v.toLocaleString()}`, 'Income']} labelStyle={{ color: '#111827' }} contentStyle={{ borderRadius: 12, borderColor: '#e5e7eb' }} />
            <Bar dataKey="value" fill="#111827" radius={[6, 6, 6, 6]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ChannelBreakdown;
