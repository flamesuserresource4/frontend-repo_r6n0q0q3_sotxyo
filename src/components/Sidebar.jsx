import React from 'react';
import { Home, BarChart, Wallet, BadgeDollarSign, Receipt, Settings, LogOut } from 'lucide-react';

const menu = [
  { label: 'Overview', icon: Home },
  { label: 'Income Sources', icon: Wallet },
  { label: 'Analytics', icon: BarChart },
  { label: 'Brand Deals', icon: BadgeDollarSign },
  { label: 'Taxes', icon: Receipt },
  { label: 'Settings', icon: Settings },
  { label: 'Logout', icon: LogOut },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col w-72 shrink-0 border-r border-slate-200 bg-white/60 backdrop-blur-xl">
      <div className="px-6 py-5 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-md" />
          <div>
            <p className="text-xl font-semibold tracking-tight">CreatorPay</p>
            <p className="text-xs text-slate-500">Dashboard</p>
          </div>
        </div>
      </div>
      <nav className="p-3 space-y-1 overflow-y-auto">
        {menu.map((item, idx) => {
          const Icon = item.icon;
          const isActive = idx === 0;
          return (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all group ${
                isActive
                  ? 'bg-indigo-50 text-indigo-700 shadow-sm'
                  : 'hover:bg-slate-50 text-slate-700'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
      <div className="mt-auto p-4">
        <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-4 shadow-sm">
          <p className="text-sm font-semibold">Pro tip</p>
          <p className="text-xs text-slate-500 mt-1">Connect platforms to unify your payouts in one place.</p>
        </div>
      </div>
    </aside>
  );
}
