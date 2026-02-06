'use client';

import { useRef } from 'react';
import { ParticleCard, GlobalSpotlight } from './MagicBento';

export default function Projects() {
    const gridRef = useRef<HTMLDivElement>(null);
    const projects = [
        {
            title: "Neon Horizon",
            category: "Web App",
            description: "A futuristic dashboard for managing IoT devices.",
        },
        {
            title: "Velvet UI",
            category: "Design System",
            description: "A comprehensive component library for React applications.",
        },
        {
            title: "Echo Chambers",
            category: "Interactive Art",
            description: "Audio-reactive visual experiments ensuring deep immersion.",
        },
        {
            title: "Zenith",
            category: "E-commerce",
            description: "High-performance headless shopify storefront.",
        }
    ];

    return (
        <>
            <GlobalSpotlight
                gridRef={gridRef}
                enabled={true}
                spotlightRadius={540}
                glowColor="132, 0, 255"
            />
            <section className="relative z-20 bg-[#121212] py-32 px-6 md:px-12 magic-bento-section">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-white mb-16 tracking-tight">Selected Work</h2>

                    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <ParticleCard
                                key={index}
                                className="magic-bento-card magic-bento-card--border-glow group relative h-[400px] rounded-2xl"
                                particleCount={12}
                                glowColor="132, 0, 255"
                                enableTilt={false}
                                clickEffect={true}
                                enableMagnetism={true}
                                style={{
                                    backgroundColor: '#060010',
                                    '--glow-color': 'rgb(132, 0, 255)'
                                } as React.CSSProperties}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50" />

                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <span className="text-sm text-blue-400 font-mono mb-2 block tracking-widest uppercase">
                                        {project.category}
                                    </span>
                                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 max-w-sm group-hover:text-gray-200 transition-colors">
                                        {project.description}
                                    </p>
                                </div>
                            </ParticleCard>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
