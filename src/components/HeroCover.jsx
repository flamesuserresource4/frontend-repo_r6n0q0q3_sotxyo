import React from 'react';
import Spline from '@splinetool/react-spline';

function HeroCover() {
  return (
    <section className="relative w-full h-[260px] sm:h-[320px] rounded-2xl overflow-hidden bg-black/95">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {/* Soft vignette overlay for readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      <div className="relative z-10 h-full flex items-end p-6 sm:p-8">
        <div className="text-white">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Creator Analytics</h1>
          <p className="text-white/80 text-sm mt-1">A focused view of your earnings and audience momentum.</p>
        </div>
      </div>
    </section>
  );
}

export default HeroCover;
