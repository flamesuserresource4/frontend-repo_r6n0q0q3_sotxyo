import React, { useMemo, useState } from 'react';
import SummaryCard from './components/SummaryCard.jsx';
import IncomeForm from './components/IncomeForm.jsx';
import EntriesTable from './components/EntriesTable.jsx';
import IncomeChart from './components/IncomeChart.jsx';

function App() {
  const [entries, setEntries] = useState([]);

  const total = useMemo(
    () => entries.reduce((sum, e) => sum + (Number.isFinite(e.amount) ? e.amount : 0), 0),
    [entries]
  );

  const handleAdd = (entry) => {
    setEntries((prev) => [entry, ...prev]);
  };

  const handleDelete = (id) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">CreatorPay Dashboard</h1>
          <p className="mt-1 text-sm text-gray-600">Manually track your creator income across platforms.</p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          <SummaryCard total={total} />
          <IncomeForm onAdd={handleAdd} />
          <EntriesTable entries={entries} onDelete={handleDelete} />
          <IncomeChart entries={entries} />
        </div>
      </div>
    </div>
  );
}

export default App;
