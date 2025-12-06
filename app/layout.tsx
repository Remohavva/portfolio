import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StaggeredMenuWrapper } from '@/components/staggered-menu-wrapper';
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
        <div className="relative">
          <StaggeredMenuWrapper />
          <Navbar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
