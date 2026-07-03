import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/theme-provider';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'Lalon Sheikh | Senior Frontend Developer',
  description: 'Portfolio of Lalon Sheikh, a Senior Frontend Developer specializing in React, Next.js, and TypeScript. Building exceptional digital experiences.',
  keywords: ['frontend developer', 'react developer', 'next.js', 'typescript', 'web development', 'portfolio'],
  authors: [{ name: 'Lalon Sheikh' }],
  creator: 'Lalon Sheikh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lalonsheikh.dev',
    title: 'Lalon Sheikh | Senior Frontend Developer',
    description: 'Portfolio of Lalon Sheikh, a Senior Frontend Developer specializing in React, Next.js, and TypeScript.',
    siteName: 'Lalon Sheikh Portfolio',
    images: [
      {
        url: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Lalon Sheikh - Senior Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lalon Sheikh | Senior Frontend Developer',
    description: 'Portfolio of Lalon Sheikh, a Senior Frontend Developer specializing in React, Next.js, and TypeScript.',
    images: ['https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200'],
    creator: '@lalonsheikh',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} font-sans antialiased`}>
       
          {children}
        
      </body>
    </html>
  );
}
