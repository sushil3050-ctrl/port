'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0.8, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);

    return (
        <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10 flex flex-col justify-between pb-[100vh] overflow-x-hidden">
            {/* Section 1 */}
            <motion.div
                className="h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-0 max-w-full overflow-x-hidden"
                style={{ boxSizing: 'border-box' }} // ensures padding doesn't increase width
                initial={{ opacity: 0, y: 0, scale: 1 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ amount: 0.3 }}
            >
                <motion.h1
                    className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold mb-4 tracking-tighter"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.span
                        className="bg-gradient-to-r from-white to-red-150 bg-clip-text text-transparent"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        I&apos;m Sush!l RK
                    </motion.span>
                </motion.h1>
                <motion.p
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-light max-w-2xl px-6 md:px-0"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Secure Full-Stack Developer | Integrating AI/ML with Security-First Architecture
                </motion.p>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                className="h-screen flex items-center justify-start px-4 sm:px-8 md:px-20 w-full max-w-full overflow-x-hidden"
                style={{ boxSizing: 'border-box' }}
                initial={{ opacity: 0, x: -50, scale: 1 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ amount: 0.4 }}
            >
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold max-w-full md:max-w-4xl leading-tight text-white"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    I Build <br />
                    <motion.span
                        className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        digital experiences.
                    </motion.span>
                </motion.h2>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                className="h-screen flex items-center justify-end px-4 sm:px-8 md:px-20 w-full max-w-full overflow-x-hidden"
                style={{ boxSizing: 'border-box' }}
                initial={{ opacity: 0, x: 50, scale: 1 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ amount: 0.3 }}
            >
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold max-w-full md:max-w-4xl text-right leading-tight text-white"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Bridging <br />
                    <motion.span
                        className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        design
                    </motion.span>{' '}
                    & engineering.
                </motion.h2>
            </motion.div>
        </div>
    );
}
