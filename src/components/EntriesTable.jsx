import React from 'react';

function EntriesTable({ entries, onDelete }) {
  if (!entries.length) {
    return (
      <section className="w-full">
        <div className="rounded-lg border border-gray-200 bg-white p-6 text-center text-sm text-gray-600 shadow-sm">
          No entries yet. Add your first income above.
        </div>
      </section>
    );
  }

  return (
    <section className="w-full">
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">Platform</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">Notes</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {entries.map((e) => (
                <tr key={e.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">{e.platform}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">${e.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{new Date(e.date).toLocaleDateString()}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{e.notes || '-'}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => onDelete(e.id)}
                      className="text-sm text-red-600 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default EntriesTable;
