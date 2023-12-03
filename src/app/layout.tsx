import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Providers } from "./providers";
import MainNavBar from "@/components/MainNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light h-[100dvh] bg-background">
      <body className={twMerge(inter.className, "w-screen h-[100dvh] light")}>
        <Providers className="min-h-full bg-background text-foreground">
          <MainNavBar className="" />
          <main className="flex flex-col h-full">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
