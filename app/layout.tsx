import type { Metadata } from 'next';
import { Footer } from '@/components/footer';
import { FloatingDockNav } from '@/components/floating-dock-nav';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Ramanujam Chakravarthula - Full Stack Developer',
    template: '%s | Ramanujam Chakravarthula'
  },
  description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies. Building amazing digital experiences.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Ramanujam Chakravarthula' }],
  creator: 'Ramanujam Chakravarthula',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Ramanujam Chakravarthula - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    siteName: 'Ramanujam Chakravarthula Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramanujam Chakravarthula - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    creator: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
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
