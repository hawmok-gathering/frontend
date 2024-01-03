'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    if (!dialogRef.current?.open) {
      // @ts-ignore
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  if (typeof window === 'undefined') return null;

  return createPortal(
    <div className="fixed bottom-0 flex h-full w-full items-center justify-center bg-black bg-opacity-40">
      <dialog ref={dialogRef} onClose={onDismiss}>
        {children}
        <button
          onClick={onDismiss}
          className="absolute right-2 top-2 flex h-12 w-12 items-center justify-center rounded-[15px] border-none bg-transparent text-lg after:text-black after:content-['x']"
        />
      </dialog>
    </div>,
    document.getElementById('modal-root')!,
  );
}
