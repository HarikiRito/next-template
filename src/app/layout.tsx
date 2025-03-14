import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import './globals.css';

import React from 'react';
import { ReactQueryProvider } from 'src/shared/providers/ReactQueryProvider';
import { I18nProvider } from 'src/shared/i18n/I18nProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <I18nProvider>
        <html lang='en'>
          <body className={inter.className}>{children}</body>
        </html>
      </I18nProvider>
    </ReactQueryProvider>
  );
}
