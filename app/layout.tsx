import type { Metadata } from 'next';
import { Footer } from '@/components/footer';
import { FloatingDockNav } from '@/components/floating-dock-nav';
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
        {/* Background with Grid */}
        <div className="fixed inset-0 z-0 bg-gradient-to-br from-gray-900 via-black to-purple-950">
          {/* Grid Pattern */}
          <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>

        <div className="relative z-10">
          <main className="min-h-screen pt-2 sm:pt-4 md:pt-6 pb-20 sm:pb-24 md:pb-28">
            {children}
          </main>
          <Footer />
        </div>

        <FloatingDockNav />
      </body>
    </html>
  );
}
