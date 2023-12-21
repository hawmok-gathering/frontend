import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { twMerge } from 'tailwind-merge';
import { Providers } from './providers';
import MainNavBar from '@/components/main/navbar/MainNavBar';
import ToastContextProvider from '@/toast/ToastContextProvider';
import ToastViewer from '@/toast/ToastViewer';
import Footer from '@/components/Footer';

const myFont = localFont({
  src: './SUIT-Variable.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HWAMOKE',
  description: 'Find gathering place for people who love to drink and eat.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full bg-background light`}>
      <ToastContextProvider>
        <body className={twMerge(myFont.className, 'h-[100dvh] w-full light')}>
          <Providers className="h-full bg-background text-foreground">
            <MainNavBar />
            <main className="h-full flex-col">{children}</main>
            <ToastViewer />
          </Providers>
        </body>
      </ToastContextProvider>
      {/* <Footer /> */}
    </html>
  );
}
