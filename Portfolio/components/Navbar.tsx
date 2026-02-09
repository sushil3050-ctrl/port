'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPastScrollyCanvas, setIsPastScrollyCanvas] = useState(false);
  const [scrollyCanvasEl, setScrollyCanvasEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setScrollyCanvasEl(document.querySelector('.scrolly-canvas-container') as HTMLElement);
  }, []);

  // Use scrollYProgress for precise timing aligned with sequence
  const { scrollYProgress: localScrollYProgress } = useScroll({
    target: scrollyCanvasEl ? { current: scrollyCanvasEl } as any : undefined,
    offset: ["start start", "end end"]
  });

  // Mouse position for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth movement
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Transform mouse position to rotation values
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Monitor scrollYProgress to detect when sequence ends and FlowingMenuSection enters
  useMotionValueEvent(localScrollYProgress, 'change', (latest) => {
    // Only allow transition to the post-scrolly state once the sequence has
    // fully loaded. ScrollyCanvas sets `data-sequence-loaded="true"` when ready.
    const sequenceReady = scrollyCanvasEl?.dataset?.sequenceLoaded === 'true';
    if (scrollyCanvasEl && sequenceReady) {
      const sectionEnd = scrollyCanvasEl.offsetTop + scrollyCanvasEl.offsetHeight - window.innerHeight;
      // Trigger exactly after the scrolly canvas end (no extra offset)
      setIsPastScrollyCanvas(window.scrollY > sectionEnd);
    } else if (!scrollyCanvasEl) {
      // Fallback to progress when no element reference is available
      setIsPastScrollyCanvas(latest > 0.99);
    } else {
      // Sequence not yet ready — keep navbar in pre-scrolly state
      setIsPastScrollyCanvas(false);
    }
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
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
        /* ADJUST NAVBAR DIMENSIONS HERE: w-[width], px-[horizontal padding], py-[vertical padding] */
        className="pointer-events-auto relative flex items-center gap-4 md:gap-7 px-2 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl transition-colors hover:border-white/20 w-full max-w-[100%]"
      >
        {/* 3D Glass Layering */}
        <div style={{ transform: "translateZ(10px)" }} className="flex gap-4 md:gap-30 items-center">

          {/* ADJUST NAME BUTTON DIMENSIONS HERE: px-[padding], text-[size] */}






          {/* <div
                        style={{ transform: "translateZ(20px)" }}
                        className="
                        px-70 py-1 rounded-full
                        bg-gradient-to-r from-[#0b0000] via-[#5a0000] to-[#121212]
                        whitespace-pre

                        text-xl font-bold text-white
                        font-[Cinzel]
                        tracking-wider
                        shadow-[0_10px_40px_rgba(255,0,0,0.5)]
                        transition-transform transform
                        hover:scale-105 hover:shadow-[0_15px_50px_rgba(255,0,0,0.7)]
                        active:scale-95
                        border-b-4 border border-x-red-700 border-t-red-700 border-b-red-900
                        text-shadow-[2px_2px_6px_rgba(255,0,0,0.7)]
                        text-left
                        cursor-default
                        flex items-center justify-start pl-6
                        ">
                            🗝  The Sush!l RK  /  Portfolio     
                        </div> */}





          {/* <div
  style={{ transform: "translateZ(20px)" }}
  className="
    px-10 py-2 rounded-3xl
    bg-gradient-to-r from-[#0b0000] via-[#5a0000] to-[#121212]
    whitespace-pre

    text-xl font-bold text-white
    font-[Cinzel]
    tracking-wider
    shadow-[0_10px_40px_rgba(255,0,0,0.5)]
    transition-transform transform
    hover:scale-105 hover:shadow-[0_15px_50px_rgba(255,0,0,0.7)]
    active:scale-95
    border-b-4 border border-x-red-700 border-t-red-700 border-b-red-900
    text-shadow-[2px_2px_6px_rgba(255,0,0,0.7)]
    text-left
    cursor-default
    flex items-center justify-start pl-6
  "
>
  🗝  The Sush!l RK  /  Portfolio     
</div> */}




          <div
            style={{ transform: "translateZ(20px)" }}
            className={isPastScrollyCanvas ? `
    px-4 md:px-10 py-2 rounded-3xl
    bg-gradient-to-r from-[#0b0000] via-[#5a0000] to-[#121212]
    whitespace-pre

    text-lg md:text-xl font-bold text-white
    font-[Cinzel]
    tracking-wider
    shadow-[0_10px_40px_rgba(255,0,0,0.5)]
    transition-all duration-800 transform
    hover:scale-105 hover:shadow-[0_15px_50px_rgba(255,0,0,0.7)]
    active:scale-95
    border-b-4 border border-x-red-700 border-t-red-700 border-b-red-900
    text-left
    cursor-default
    flex items-center justify-start pl-4 md:pl-6
  ` : `
    relative
    px-4 md:px-10 py-2 rounded-3xl
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
      text-sm md:text-xl font-bold text-white
      font-[Cinzel]
      tracking-wider
      text-left
      block
    ` : `
      font-['Oswald'] uppercase
      text-[10px] sm:text-lg md:text-xl
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






          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs md:text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}

          <button
            onClick={() => window.open("www.linkedin.com/in/getsushilkamble Vanity URL name", "_blank")}
            className="px-2 md:px-3 py-1 rounded-full bg-white text-black text-[10px] md:text-sm font-semibold transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            Let's Connect
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
