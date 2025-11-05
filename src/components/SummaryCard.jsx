import React from 'react';

function SummaryCard({ total }) {
  return (
    <section className="w-full">
      <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-600">Total Income</h2>
        </div>
        <div className="mt-3 sm:mt-4">
          <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SummaryCard;
