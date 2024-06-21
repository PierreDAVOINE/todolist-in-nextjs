import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  variable: '--be-vietnam-pro',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'TOP-TODO-LIST',
  description: 'La toto list de ouf.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn(beVietnamPro.variable)}>{children}</body>
    </html>
  );
}
