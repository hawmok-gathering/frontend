import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { twMerge } from 'tailwind-merge';
import { Providers } from './providers';
import MainNavBar from '@/components/main/navbar/MainNavBar';
import ToastContextProvider from '@/toast/ToastContextProvider';
import ToastViewer from '@/toast/ToastViewer';

const inter = Inter({ subsets: ['latin'] });
const myFont = localFont({
  src: './SUIT-Variable.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-[100dvh] bg-background light`}>
      <body className={twMerge(myFont.className, 'h-[100dvh] w-full light')}>
        <Providers className="min-h-full bg-background text-foreground">
          <ToastContextProvider>
            <MainNavBar className="" />
            <main className="flex h-full flex-col">{children}</main>
            <ToastViewer />
          </ToastContextProvider>
        </Providers>
      </body>
    </html>
  );
}
