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

            <section
                id="projects"
                className="relative z-20 bg-[#121212] py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 magic-bento-section"
            >
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 md:mb-16 tracking-tight">
                        Selected Projects
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8" ref={gridRef}>
                        {projects.map((project, index) => (
                            <ParticleCard
                                key={index}
                                className="magic-bento-card magic-bento-card--border-glow group relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] rounded-2xl overflow-hidden"
                                particleCount={12}
                                glowColor="132, 0, 255"
                                enableTilt={true}
                                enableMagnetism={true}
                                clickEffect={true}
                            >
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#060010] via-[#060010]/50 to-transparent" />
                                </div>

                                <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6 md:p-8">
                                    <span className="text-xs sm:text-sm text-blue-400 font-mono mb-2 block tracking-widest uppercase">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-sm group-hover:text-gray-200 transition-colors">
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
