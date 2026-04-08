import React from 'react';
import './globals.css';
import 'leaflet/dist/leaflet.css';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={manrope.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
