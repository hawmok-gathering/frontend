"use client";

import { NextUIProvider } from "@nextui-org/react";

type UiProviderProps = {
  children: React.ReactNode;
  className?: string;
};

export function Providers({ children, className }: UiProviderProps) {
  return <NextUIProvider className={className}>{children}</NextUIProvider>;
}
