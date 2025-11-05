import React from 'react';
import Sidebar from './components/Sidebar.jsx';
import Topbar from './components/Topbar.jsx';
import Hero from './components/Hero.jsx';
import Charts from './components/Charts.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex gap-6">
          <Sidebar />
          <main className="flex-1 space-y-6">
            <Hero />
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <Topbar />
            </div>
            <Charts />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
