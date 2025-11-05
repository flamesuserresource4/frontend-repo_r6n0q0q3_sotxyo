import React, { useState } from 'react';

function IncomeForm({ onAdd }) {
  const [platform, setPlatform] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);
    if (!platform || isNaN(parsedAmount) || !date) return;

    onAdd({ id: crypto.randomUUID(), platform, amount: parsedAmount, date, notes });
    setPlatform('');
    setAmount('');
    setDate('');
    setNotes('');
  };

  return (
    <section className="w-full">
      <form onSubmit={handleSubmit} className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">
        <h2 className="text-base font-medium text-gray-900">Add Income</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1" htmlFor="platform">Platform</label>
            <input
              id="platform"
              type="text"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
              placeholder="e.g. YouTube"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1" htmlFor="amount">Amount</label>
            <input
              id="amount"
              type="number"
              min="0"
              step="0.01"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1" htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col lg:col-span-1 sm:col-span-2">
            <label className="text-sm text-gray-600 mb-1" htmlFor="notes">Notes</label>
            <input
              id="notes"
              type="text"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800"
              placeholder="Optional"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Add Entry
          </button>
        </div>
      </form>
    </section>
  );
}

export default IncomeForm;
