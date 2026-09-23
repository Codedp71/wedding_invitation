import { Great_Vibes, Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'], variable: '--font-great-vibes' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-cormorant' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Pankaj & Manpreet — Wedding Invitation',
  description: 'Join us to celebrate the wedding of Pankaj and Manpreet. 10 November 2026.',
  icons: {
    icon: [
      { url: '/wedding-favicon.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/wedding-favicon.png',
    apple: '/wedding-favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
