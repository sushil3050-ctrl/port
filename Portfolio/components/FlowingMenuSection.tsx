'use client';

import GradientBlinds from './GradientBlinds';
import FlowingMenu from './FlowingMenu';

interface MenuItemData {
  link: string;
  text: string;
  image: string;
}

interface FlowingMenuSectionProps {
  items?: MenuItemData[];
}

export default function FlowingMenuSection({ 
  items = [
    { link: '#', text: '↓ Skills ↓', image: 'https://picsum.photos/100/100?random=FRRACRKRsw2s' },
    { link: '#', text: 'python [Data Analytics]', image: 'https://images.weserv.nl/?url=logo.svgcdn.com/logos/python.svg&w=600&h=400&fit=contain&bg=000000' },
    { link: '#', text: 'Java', image: 'https://images.weserv.nl/?url=logo.svgcdn.com/logos/java.svg&w=600&h=400&fit=contain&bg=000000' },
    { link: '#', text: 'c++', image: 'https://images.weserv.nl/?url=favpng.com/png_view/letter-c-c-programming-language-icon-png/1APweGpH.png&w=600&h=400&fit=contain&bg=000000' },
    { link: '#', text: 'c', image: 'https://images.weserv.nl/?url=logo.svgcdn.com/logos/c.svg&w=600&h=400&fit=contain&bg=000000' },
    { link: '#', text: 'Linux', image: 'https://images.weserv.nl/?url=www.pngmart.com/files/15/Linux-Tux-Logo-PNG.png&w=600&h=400&fit=contain&bg=000000' }
  ]
}: FlowingMenuSectionProps) {
  return (
    <section className="relative w-full" style={{ height: '650px', position: 'relative', background: '#121212', overflow: 'hidden' }}>
      {/* Gradient Blinds Background - Full section (behind the FlowingMenu) */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 1,
        display: 'block',
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        <GradientBlinds
          gradientColors={['#FF9FFC', '#5227FF']}
          angle={147}
          noise={0}
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

      {/* Flowing Menu Container - Overlay with its own background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          pointerEvents: 'auto'
        }}
      >
        {/* Flowing Menu Wrapper - Centered container with dark background */}
        <div
          style={{
            width: '100%',
            height: '70%',
            maxWidth: '1200px',
            background: 'rgba(6, 0, 16, 0.85)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
        >
          <FlowingMenu 
            items={items}
            speed={15}
            textColor="#ffffff"
            bgColor="transparent"
            marqueeBgColor="#ffffff"
            marqueeTextColor="#060010"
            borderColor="rgba(255, 255, 255, 0.2)"
          />
        </div>
      </div>
    </section>
  );
}
