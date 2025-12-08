import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'FlowSense ERP | AI-Powered Manufacturing ERP Software',
  description: 'Transform your manufacturing operations with FlowSense - the next-generation AI-powered ERP solution. 30+ AI features, document scanning, predictive analytics, and complete operational control.',
  keywords: ['manufacturing ERP', 'AI ERP software', 'production management', 'inventory management', 'supply chain management', 'ERP India', 'Industry 4.0'],
  authors: [{ name: 'FlowSense Technologies' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://flowsense.ai',
    siteName: 'FlowSense ERP',
    title: 'FlowSense ERP | AI-Powered Manufacturing ERP Software',
    description: 'Transform your manufacturing operations with AI. 30+ AI features, 90% time savings, and complete operational control.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlowSense ERP | AI-Powered Manufacturing ERP Software',
    description: 'Transform your manufacturing operations with AI. 30+ AI features, 90% time savings.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <meta name='theme-color' content='#8b5cf6' />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
