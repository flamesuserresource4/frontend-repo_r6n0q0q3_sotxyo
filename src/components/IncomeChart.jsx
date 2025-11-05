import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function IncomeChart({ entries }) {
  const data = [...entries]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((e) => ({
      date: new Date(e.date).toLocaleDateString(),
      amount: e.amount,
    }));

  return (
    <section className="w-full">
      <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">
        <h2 className="text-base font-medium text-gray-900 mb-4">Income Trend</h2>
        <div className="h-56 sm:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <XAxis dataKey="date" tick={{ fontSize: 12 }} axisLine={{ stroke: '#e5e7eb' }} tickLine={false} />
              <YAxis tick={{ fontSize: 12 }} axisLine={{ stroke: '#e5e7eb' }} tickLine={false} />
              <Tooltip cursor={{ stroke: '#9ca3af' }} contentStyle={{ fontSize: 12 }} />
              <Line type="monotone" dataKey="amount" stroke="#111827" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export default IncomeChart;
