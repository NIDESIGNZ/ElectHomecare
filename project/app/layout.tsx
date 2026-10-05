import './globals.css';
import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { SmoothScroll } from '@/components/smooth-scroll';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { MobileBar } from '@/components/mobile-bar';
import { JsonLd } from '@/components/json-ld';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  axes: ['opsz', 'SOFT'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://electhomecare.com.au'),
  title: {
    default: 'Elect Home Care | Professional Service with Heartfelt Care',
    template: '%s | Elect Home Care',
  },
  description:
    'In-home care on the Mornington Peninsula. Personalised, professional care with no call centres. Open 24/7. Free in-home consultation. Call 0419 322 955.',
  keywords: [
    'home care',
    'aged care',
    'in-home care',
    'Mornington Peninsula',
    'personal care',
    'companion care',
    'respite care',
    'Elect Home Care',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://electhomecare.com.au',
    siteName: 'Elect Home Care',
    title: 'Elect Home Care | Professional Service with Heartfelt Care',
    description:
      'Supporting Joyful Independence at Home. Personalised, professional in-home care on the Mornington Peninsula.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elect Home Care',
    description:
      'Professional Service with Heartfelt Care. In-home care on the Mornington Peninsula.',
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd />
        <SmoothScroll />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <MobileBar />
      </body>
    </html>
  );
}
