import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Ikigai | Free Education NGO',
  description: 'Providing free education to financially struggling students.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans bg-ikigai-bg text-ikigai-dark antialiased selection:bg-ikigai-accent/20 selection:text-ikigai-dark">
        {children}
      </body>
    </html>
  );
}
