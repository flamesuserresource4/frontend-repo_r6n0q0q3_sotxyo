import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
  { month: 'Jan', value: 2100 },
  { month: 'Feb', value: 2300 },
  { month: 'Mar', value: 2500 },
  { month: 'Apr', value: 2700 },
  { month: 'May', value: 2950 },
  { month: 'Jun', value: 3100 },
  { month: 'Jul', value: 3300 },
  { month: 'Aug', value: 3520 },
  { month: 'Sep', value: 3740 },
  { month: 'Oct', value: 4100 },
];

const current = data[data.length - 1].value;
const prev = data[data.length - 2].value;
const growth = ((current - prev) / prev) * 100;

function EarningsChart() {
  return (
    <div className="w-full h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-600">Earnings Over Time</h3>
          <p className="text-xs text-gray-500">Jan – Oct</p>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold text-gray-900">${current.toLocaleString()}</div>
          <div className={`text-xs ${growth >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>{growth >= 0 ? '+' : ''}{growth.toFixed(1)}%</div>
        </div>
      </div>
      <div className="mt-4 h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={{ stroke: '#e5e7eb' }} tickLine={{ stroke: '#e5e7eb' }} />
            <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={{ stroke: '#e5e7eb' }} tickLine={{ stroke: '#e5e7eb' }} tickFormatter={(v) => `$${v}`} />
            <Tooltip formatter={(v) => [`$${v.toLocaleString()}`, 'Earnings']} labelStyle={{ color: '#111827' }} contentStyle={{ borderRadius: 12, borderColor: '#e5e7eb' }} />
            <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2.5} dot={{ r: 3 }} activeDot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default EarningsChart;
