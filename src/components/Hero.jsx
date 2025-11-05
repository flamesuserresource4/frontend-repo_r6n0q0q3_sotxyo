import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full rounded-3xl overflow-hidden bg-white/60 backdrop-blur-xl border border-slate-200 shadow-lg">
      <div className="grid lg:grid-cols-2">
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            All your creator income. One simple dashboard.
          </h1>
          <p className="mt-3 text-slate-600 max-w-prose">
            Monitor platform earnings, track growth, and visualize your revenue streams with a beautiful, responsive dashboard.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Live demo • Client-side only
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
              Fintech • Glassmorphism • Motion
            </span>
          </div>
        </div>
        <div className="relative h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] xl:h-[520px]">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
