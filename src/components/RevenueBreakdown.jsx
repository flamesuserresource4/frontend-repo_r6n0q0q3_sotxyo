import React from 'react';

function Row({ label, value, color }) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
        <span className="text-sm text-gray-700">{label}</span>
      </div>
      <span className="text-sm font-semibold text-gray-900">{value}</span>
    </div>
  );
}

function RevenueBreakdown() {
  return (
    <div className="w-full h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-600">Revenue Breakdown</h3>
          <p className="text-xs text-gray-500">This month by category</p>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold text-gray-900">$12,740</div>
          <div className="text-xs text-emerald-600">+4.3%</div>
        </div>
      </div>

      <div className="mt-4 divide-y divide-gray-200">
        <Row label="Sponsorships" value="$6,200" color="#10b981" />
        <Row label="Ad Revenue" value="$3,450" color="#3b82f6" />
        <Row label="Affiliates" value="$1,620" color="#f59e0b" />
        <Row label="Merch" value="$1,090" color="#111827" />
        <Row label="Subscriptions" value="$380" color="#8b5cf6" />
      </div>

      <div className="mt-5 rounded-xl bg-gray-50 border border-gray-200 p-4">
        <p className="text-sm text-gray-600">
          Tip: Diversify high-variance channels. Consider a weekly series to stabilize ad revenue dips.
        </p>
      </div>
    </div>
  );
}

export default RevenueBreakdown;
