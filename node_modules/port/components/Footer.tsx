'use client';

export default function Footer() {
    return (
        <footer id="contact" className="relative z-30 w-full py-6 sm:py-8 md:py-12 px-4 sm:px-6 border-t border-white/5 bg-white/[0.02] backdrop-blur-xl">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6 sm:gap-8">
                <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                        Sush!l RK
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 max-w-xs">
                        Building the next generation of digital experiences with security and AI.
                    </p>
                </div>

                <div className="flex gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="https://github.com/sushil3050-ctrl" className="hover:text-white transition-colors">GitHub</a>
                    <a href="www.linkedin.com/in/getsushilkamble" className="hover:text-white transition-colors">LinkedIn</a>
                </div>

                <div className="text-xs sm:text-sm text-gray-600 text-center md:text-right cursor-none" >
                    © {new Date().getFullYear()} Sush!l RK. All rights reserved. <br /> <hr className="border-white/5 my-2" />
                    Made with ❤️ by Sush!l RK
                </div>
            </div>
        </footer>
    );
}
