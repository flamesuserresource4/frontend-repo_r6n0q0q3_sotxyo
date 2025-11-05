import React from 'react';
import HeroCover from './components/HeroCover.jsx';
import EarningsChart from './components/EarningsChart.jsx';
import QuickStats from './components/QuickStats.jsx';
import ChannelBreakdown from './components/ChannelBreakdown.jsx';
import RevenueBreakdown from './components/RevenueBreakdown.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <HeroCover />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <EarningsChart />
          <QuickStats />
          <ChannelBreakdown />
          <RevenueBreakdown />
        </div>
      </div>
    </div>
  );
}

export default App;
