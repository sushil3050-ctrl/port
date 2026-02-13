'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPastScrollyCanvas, setIsPastScrollyCanvas] = useState(false);
  const scrollyCanvasRef = useRef<HTMLElement | null>(null);
  const [isPastCanvasState, setIsPastCanvasState] = useState(false);

  useEffect(() => {
    scrollyCanvasRef.current = document.querySelector('.scrolly-canvas-container') as HTMLElement;
  }, []);

  const { scrollYProgress: localScrollYProgress } = useScroll({
    target: scrollyCanvasRef,
    offset: ["start start", "end end"]
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  useMotionValueEvent(localScrollYProgress, 'change', (latest) => {
    const el = scrollyCanvasRef.current;
    const sequenceReady = el?.dataset?.sequenceLoaded === 'true';
    if (el && sequenceReady) {
      const sectionEnd = el.offsetTop + el.offsetHeight - window.innerHeight;
      setIsPastScrollyCanvas(window.scrollY > sectionEnd);
    } else if (!el) {
      setIsPastScrollyCanvas(latest > 0.99);
    } else {
      setIsPastScrollyCanvas(false);
    }
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <nav className="fixed top-8 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="pointer-events-auto relative flex items-center justify-center px-1.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl transition-colors hover:border-white/20 w-fit max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto gap-0"
      >
        {/* 3D Glass Layering */}
        <div style={{ transform: "translateZ(10px)" }} className="flex items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 px-1 sm:px-2">
          {/* Title / Glass Layer */}
          <div
            style={{ transform: "translateZ(20px)" }}
            className={isPastScrollyCanvas ? `
              px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl md:rounded-3xl
              bg-gradient-to-r from-[#0b0000] via-[#5a0000] to-[#121212]
              whitespace-pre
              text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-white
              font-[Cinzel]
              tracking-wider
              shadow-[0_10px_40px_rgba(255,0,0,0.5)]
              transition-all duration-800 transform
              hover:scale-105 hover:shadow-[0_15px_50px_rgba(255,0,0,0.7)]
              active:scale-95
              border-b-4 border border-x-red-700 border-t-red-700 border-b-red-900
              text-left
              cursor-default
              flex items-center justify-start pl-2 sm:pl-3 md:pl-4
            ` : `
              relative
              px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl md:rounded-3xl
              whitespace-pre
              bg-white/5 backdrop-blur-2xl
              border border-white/10
              shadow-[0_8px_30px_rgba(0,0,0,0.35)]
              cursor-default
              transition-all duration-800
            `}
          >
            <span
              className={isPastScrollyCanvas ? `
                text-[8px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold text-white
                font-[Cinzel]
                tracking-wider
                text-left
                block
              ` : `
                font-['Oswald'] uppercase
                text-[8px] sm:text-xs md:text-base lg:text-lg xl:text-xl
                tracking-wider
                text-white
                drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]
                text-left
                block
              `}
            >
              🗝 THE SUSH!L RK / PORTFOLIO
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-4 sm:gap-2 md:gap-4 lg:gap-6 items-center">
            {["About", "Projects", "Skills"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[8px] sm:text-xs md:text-sm font-medium text-gray-300 transition-colors hover:text-white mx-2px"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={() => window.open("https://www.linkedin.com/in/getsushilkamble", "_blank")}
            className="px-2 sm:px-3 py-1 rounded-full bg-white text-black text-[9px] sm:text-xs md:text-sm font-semibold transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            Let&apos;s Connect
          </button>
        </div>

        {/* Glow Effect */}
        {isHovered && (
          <motion.div
            layoutId="glow"
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </motion.div>
    </nav>
  );
}