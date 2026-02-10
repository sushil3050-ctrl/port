'use client';

import GradientBlinds from '@/components/GradientBlinds';

export default function TestGradientPage() {
    return (
        <div className="bg-[#121212] min-h-screen p-8">
            <h1 className="text-white text-3xl font-bold mb-8 font-[Cinzel]">Gradient Blinds Test</h1>

            <div className="w-full max-w-4xl mx-auto">
                <div style={{ width: '100%', height: '600px', position: 'relative', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <GradientBlinds
                        gradientColors={['#FF9FFC', '#5227FF']}
                        angle={147}
                        noise={0.3}
                        blindCount={12}
                        blindMinWidth={50}
                        spotlightRadius={0.5}
                        spotlightSoftness={1}
                        spotlightOpacity={1}
                        mouseDampening={0.15}
                        distortAmount={0}
                        shineDirection="left"
                        mixBlendMode="lighten"
                    />
                </div>
            </div>

            <div className="mt-8 text-white/50 text-sm max-w-4xl mx-auto">
                <p>Testing settings provided in request:</p>
                <pre className="bg-white/5 p-4 rounded mt-2 overflow-auto">
                    {`gradientColors={['#FF9FFC', '#5227FF']}
angle={147w}
noise={0.3}
blindCount={12}
blindMinWidth={50}
spotlightRadius={0.5}
spotlightSoftness={1}
spotlightOpacity={1}
mouseDampening={0.15}
distortAmount={0}
shineDirection="left"
mixBlendMode="lighten"`}
                </pre>
            </div>
        </div>
    );
}
