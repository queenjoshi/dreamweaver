"use client";

import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import BottomNav from '@/components/bottom-nav';
import { Web3Provider } from '@/components/web3-provider';
import { FirebaseClientProvider } from '@/firebase';
import AppInitializer from '@/components/app-initializer';
import DreamRadio from '@/components/dream-radio';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <title>DreamWeaver</title>
        <meta name="description" content="Weave your dreams into surreal art." />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <Web3Provider>
          <FirebaseClientProvider>
            <AppInitializer>
              <div className="relative flex flex-col min-h-screen">
                <main className="flex-1 pb-24">{children}</main>
                <BottomNav />
                <DreamRadio />
              </div>
            </AppInitializer>
            <Toaster />
          </FirebaseClientProvider>
        </Web3Provider>
      </body>
    </html>
  );
}
