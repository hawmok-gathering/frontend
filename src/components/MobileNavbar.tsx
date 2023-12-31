'use client';

import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { cn } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

type MobileNavbarProps = {
  children: React.ReactNode;
  backArrow?: boolean;
  className?: string;
};

export default function MobileNavbar({ children, className, backArrow = true }: MobileNavbarProps) {
  const router = useRouter();

  return (
    <nav className={cn('flex h-14 items-center text-xl font-bold sm:hidden', className)}>
      {backArrow && (
        <button onClick={() => router.back()}>
          <IoIosArrowBack className="scale-125 text-secondary" />
        </button>
      )}
      {children}
    </nav>
  );
}
