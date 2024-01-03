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

type LayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default async function RootLayout({ children, modal }: LayoutProps) {
  return (
    <html lang="en" className={`h-[100svh] bg-background light`}>
      <ToastContextProvider>
        <body className={twMerge(myFont.className, 'h-[100svh] w-full light')}>
          <Providers className="flex h-full flex-col bg-background text-foreground">
            <MainNavBar />
            <main className="grow">
              {children}
              {modal}
            </main>
            <ToastViewer />
            <Footer />
            <div id="modal-root" />
          </Providers>
        </body>
      </ToastContextProvider>
    </html>
  );
}
