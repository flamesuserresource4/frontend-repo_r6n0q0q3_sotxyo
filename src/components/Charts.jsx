import React, { useMemo } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from 'recharts';
import { motion } from 'framer-motion';

const monthly = [
  { name: 'Jan', value: 2800 },
  { name: 'Feb', value: 3200 },
  { name: 'Mar', value: 4100 },
  { name: 'Apr', value: 3900 },
  { name: 'May', value: 4800 },
  { name: 'Jun', value: 5200 },
  { name: 'Jul', value: 6100 },
  { name: 'Aug', value: 5900 },
  { name: 'Sep', value: 6300 },
  { name: 'Oct', value: 6700 },
  { name: 'Nov', value: 7100 },
  { name: 'Dec', value: 7400 },
];

const platforms = [
  { name: 'TikTok', value: 18000 },
  { name: 'YouTube', value: 14000 },
  { name: 'Instagram', value: 8000 },
  { name: 'Merch', value: 4000 },
  { name: 'Subs', value: 2000 },
  { name: 'Other', value: 1000 },
];

const revenue = [
  { name: 'YouTube', value: 45 },
  { name: 'Shopify', value: 32 },
  { name: 'Brand Deals', value: 23 },
];

const COLORS = ['#6366F1', '#22C55E', '#F59E0B', '#EF4444', '#06B6D4', '#A78BFA'];

export default function Charts() {
  const totalRev = useMemo(() => 6520, []);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="xl:col-span-2 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-xl p-4 sm:p-6 shadow-lg"
      >
        <div className="flex items-center justify-between pb-4">
          <p className="font-semibold text-slate-800">Earnings Over Time</p>
        </div>
        <div className="h-64 sm:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthly} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0' }} />
              <Line type="monotone" dataKey="value" stroke="#6366F1" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-xl p-4 sm:p-6 shadow-lg"
      >
        <p className="font-semibold text-slate-800">Quick Stats</p>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <Stat label="Total Users" value="481,722" />
          <CountUp label="Growth Rate" value={9.71} suffix="%" />
          <Stat label="Avg Earnings/User" value="$12.32" />
          <div className="col-span-2 rounded-xl border border-slate-200 bg-white/70 p-3 text-slate-600">
            <p className="text-xs font-medium text-slate-500 mb-1">AI Insight</p>
            <p className="text-sm">Your TikTok sponsorship income grew 18% this month. Post more content on Tuesdays.</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-xl p-4 sm:p-6 shadow-lg"
      >
        <p className="font-semibold text-slate-800">Platform Breakdown</p>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={platforms} layout="vertical" margin={{ left: 15, right: 15, top: 10, bottom: 10 }}>
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" width={80} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0' }} formatter={(v) => [`$${v.toLocaleString()}`, 'Amount']} />
              <Bar dataKey="value" radius={[8, 8, 8, 8]}>
                {platforms.map((_, i) => (
                  <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-xl p-4 sm:p-6 shadow-lg"
      >
        <div className="flex items-center justify-between">
          <p className="font-semibold text-slate-800">Revenue Breakdown</p>
          <p className="text-sm text-slate-500">Total ${totalRev.toLocaleString()}</p>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={revenue} dataKey="value" nameKey="name" innerRadius={55} outerRadius={85} paddingAngle={6}>
                {revenue.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" height={36} />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0' }} formatter={(v) => [`${v}%`, 'Share']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/70 p-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-base font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function CountUp({ label, value, suffix = '' }) {
  const [display, setDisplay] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const duration = 1200; // ms
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (value - start) * eased;
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [value]);

  return (
    <div className="rounded-xl border border-slate-200 bg-white/70 p-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-base font-semibold text-emerald-600">{display.toFixed(2)}{suffix}</p>
    </div>
  );
}
