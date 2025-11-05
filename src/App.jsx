import React from 'react';
import Sidebar from './components/Sidebar.jsx';
import Topbar from './components/Topbar.jsx';
import Hero from './components/Hero.jsx';
import Charts from './components/Charts.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-50">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div className="flex gap-5 lg:gap-6 xl:gap-8">
          <Sidebar />
          <main className="flex-1 space-y-5 sm:space-y-6">
            <Hero />
            <Topbar />
            <Charts />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
