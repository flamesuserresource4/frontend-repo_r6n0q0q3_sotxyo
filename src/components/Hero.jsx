import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-lg">
      {/* Background: soft gradient + subtle geometric pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-sky-50" />
        {/* subtle grid dots pattern using SVG */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.25]" aria-hidden="true">
          <defs>
            <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" className="text-slate-200" fill="currentColor" />
            </pattern>
            <radialGradient id="radial-fade" cx="50%" cy="0%" r="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.75" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
          <rect width="100%" height="100%" fill="url(#radial-fade)" />
        </svg>
      </div>

      <div className="relative grid place-items-center px-6 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            All your creator income. One simple dashboard.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-600">
            Monitor platform earnings, track growth, and visualize your revenue streams with a beautiful, responsive dashboard.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <div className="relative">
              {/* Subtle highlight behind CTA */}
              <span aria-hidden className="pointer-events-none absolute inset-0 -z-[1] rounded-full bg-gradient-to-r from-indigo-400/30 via-fuchsia-400/30 to-sky-400/30 blur-xl" />
              <button className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm sm:text-base font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
                Join Free Waitlist
              </button>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Live demo • Client-side only
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
