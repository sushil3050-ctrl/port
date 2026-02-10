'use client';

import { motion } from 'framer-motion';

export default function Overlay() {
    return (
        <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10 flex flex-col justify-between pb-[100vh] overflow-x-hidden">
            {/* Section 1 */}
            <motion.div
                className="h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-0 max-w-full overflow-x-hidden"
                style={{ boxSizing: 'border-box' }} // ensures padding doesn't increase width
                initial={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold mb-4 tracking-tighter">
                    <span className="bg-gradient-to-r from-white to-red-150 bg-clip-text text-transparent">
                        I'm Sush!l RK
                    </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-light max-w-2xl px-6 md:px-0">
                    Secure Full-Stack Developer | Integrating AI/ML with Security-First Architecture
                </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                className="h-screen flex items-center justify-start px-4 sm:px-8 md:px-20 w-full max-w-full overflow-x-hidden"
                style={{ boxSizing: 'border-box' }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ amount: 0.5 }}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold max-w-full md:max-w-4xl leading-tight text-white">
                    I Build <br />
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        digital experiences.
                    </span>
                </h2>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                className="h-screen flex items-center justify-end px-4 sm:px-8 md:px-20 w-full max-w-full overflow-x-hidden"
                style={{ boxSizing: 'border-box' }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ amount: 0.5 }}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold max-w-full md:max-w-4xl text-right leading-tight text-white">
                    Bridging <br />
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                        design
                    </span>{' '}
                    & engineering.
                </h2>
            </motion.div>
        </div>
    );
}
