'use client';

export default function Footer() {
    return (
        <footer className="relative z-30 w-full py-12 px-6 border-t border-white/5 bg-white/[0.02] backdrop-blur-xl">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                        Sush!l RK
                    </h3>
                    <p className="text-sm text-gray-500 max-w-xs">
                        Building the next generation of digital experiences with security and AI.
                    </p>
                </div>

                <div className="flex gap-8 text-sm text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                </div>

                <div className="text-sm text-gray-600">
                    © {new Date().getFullYear()} Sush!l RK. All rights reserved. <br /> <hr /> <br />
                    Made with ❤️ by Sush!l RK
                </div>
            </div>
        </footer>
    );
}
