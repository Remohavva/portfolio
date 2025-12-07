import type { Metadata } from 'next';
import { Footer } from '@/components/footer';
import { StaggeredMenuWrapper } from '@/components/staggered-menu-wrapper';

import LightPillar from '@/components/light-pillar';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <LightPillar
            topColor="#0ea5e9"
            bottomColor="#06b6d4"
            intensity={0.3}
            rotationSpeed={0.15}
            interactive={true}
            glowAmount={0.004}
            pillarWidth={5.0}
            pillarHeight={0.4}
            noiseIntensity={0.2}
            mixBlendMode="screen"
            pillarRotation={0}
          />
          {/* Overlay to improve readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50/95 via-blue-50/90 to-cyan-50/95" />
        </div>

        
        <div className="relative z-10">
          <StaggeredMenuWrapper />
          <main className="min-h-screen pt-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
