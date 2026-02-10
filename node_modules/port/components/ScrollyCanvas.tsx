'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

interface ScrollyCanvasProps {
    children?: React.ReactNode;
}

export default function ScrollyCanvas({ children }: ScrollyCanvasProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, 74]);

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            for (let i = 0; i <= 74; i++) {
                const img = new Image();
                const src = `/sequence/frame_${i.toString().padStart(3, '0')}.webp`;
                img.src = src;
                await new Promise((resolve) => {
                    img.onload = resolve;
                    img.onerror = resolve; // Continue even if error
                });
                loadedImages.push(img);
            }
            setImages(loadedImages);
            setIsLoaded(true);
            // Mark the container as having the sequence loaded so other components
            // (e.g., Navbar) can wait for this before transitioning.
            if (containerRef.current) containerRef.current.dataset.sequenceLoaded = 'true';
        };

        loadImages();
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = images[index];
        if (!img) return;

        // Use clientWidth instead of innerWidth to exclude the vertical scrollbar width
        canvas.width = document.documentElement.clientWidth;
        canvas.height = window.innerHeight;

        // Draw image cover logic
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    useMotionValueEvent(frameIndex, 'change', (latest) => {
        const index = Math.round(latest);
        if (images[index]) {
            renderFrame(index);
        }
    });

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded) renderFrame(0);
    }, [isLoaded]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (images.length > 0) renderFrame(Math.round(frameIndex.get()));
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [images]);

    return (
        <div ref={containerRef} className="h-[500vh] w-full relative scrolly-canvas-container">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full object-cover"
                />
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white bg-black">
                        Loading...
                    </div>
                )}
            </div>
            {children}
        </div>
    );
}
