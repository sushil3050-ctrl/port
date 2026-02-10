'use client';

import GradientBlinds from './GradientBlinds';
export default function About() {
  return (
    <section id="about" className="relative w-full min-h-[80vh] flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 overflow-hidden bg-[#121212]">
      {/* Background Gradient Blinds */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <GradientBlinds
          gradientColors={['#FF9FFC', '#5227FF']}
          angle={147}
          noise={0}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>

      {/* Glassmorphism Content Box */}
      <div className="relative z-10 w-full max-w-5xl p-6 sm:p-8 md:p-12 lg:p-20 rounded-[24px] sm:rounded-[32px] md:rounded-[48px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-10 tracking-tighter">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9FFC] to-[#5227FF]">Me</span>
          </h2>

          <div className="space-y-4 sm:space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed font-light">
            <p>
              I'm a designer and developer dedicated to crafting exceptional digital experiences.
              My approach blends technical precision with artistic vision to build interfaces that aren't just functional, but unforgettable.
            </p>
            <p>
              Specializing in motion design and high-end web development, I leverage modern tools
              to bring static designs to life. I believe every pixel counts and every interaction
              is an opportunity to delight.
            </p>
          </div>

          <div className="mt-12 flex gap-4">
            <div className="h-1 w-20 bg-gradient-to-r from-[#FF9FFC] to-[#5227FF] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}