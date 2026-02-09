'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { ParticleCard, GlobalSpotlight } from './MagicBento';
import FlowingMenuSection from './FlowingMenuSection';

export default function Projects() {
    const gridRef = useRef<HTMLDivElement>(null);


    const projects = [
        {
            title: "Sales Analysis & Forecasting",
            category: "Desktop App",
            description:
                "A professional desktop application for analyzing historical sales data and forecasting future sales with an intuitive GUI. Built with Python and Tkinter, the app provides comprehensive sales insights and predictive analytics using advanced time series forecasting.",
            image: "/card_imgs/Sales.png",
        },
        {
            title: "ResQNet",
            category: "Web App",
            description:
                "ResQNet is a real-time emergency healthcare coordination platform that connects citizens, hospitals, and doctors to quickly find available beds, book ambulances, and manage urgent care when every second counts.",
            image: "/card_imgs/ResQNet.png",
        },
        {
            title: "Echo Chambers",
            category: "Interactive Art",
            description: "Audio-reactive visual experiments ensuring deep immersion.",
            image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
        },
        {
            title: "Zenith",
            category: "E-commerce",
            description: "High-performance headless shopify storefront.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        },
    ];

    return (
        <>
            <GlobalSpotlight
                gridRef={gridRef}
                enabled={true}
                spotlightRadius={540}
                glowColor="132, 0, 255"
            />

            <section
                id="projects"
                className="relative z-20 bg-[#121212] py-32 px-6 md:px-12 magic-bento-section"
            >
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-white mb-16 tracking-tight">
                        Selected Work
                    </h2>

                    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <ParticleCard
                                key={index}
                                className="magic-bento-card magic-bento-card--border-glow group relative h-[400px] rounded-2xl overflow-hidden"
                                particleCount={12}
                                glowColor="132, 0, 255"
                                enableTilt={true}
                                clickEffect={true}
                                enableMagnetism={true}
                                style={{
                                    backgroundColor: '#060010',
                                    '--glow-color': 'rgb(132, 0, 255)',
                                } as React.CSSProperties}

                            >
                                {/* ================= IMAGE SPOTLIGHT ================= */}
                                {project.image && project.image.trim() !== '' && (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="
                                            object-cover
                                            opacity-10
                                            group-hover:opacity-70
                                            transition-all
                                            duration-700
                                            ease-out
                                        "
                                    />
                                )}
                                {/* =================================================== */}

                                {/* Overlay (keeps text readable) */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/60" />

                                {/* Content */}
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

            <FlowingMenuSection />
        </>
    );
}
