'use client';
import { createContext, useState } from 'react';

interface ToastContextProvider {
  children: React.ReactNode;
}

type ToastOptions = {
  position?:
    | 'bottom-center'
    | 'bottom-left'
    | 'bottom-right'
    | 'top-center'
    | 'top-left'
    | 'top-right';
  autoCleanup?: boolean;
  cleanupTime?: number;
  type?: 'default' | 'success' | 'warning' | 'error';
};

type AddToast = {
  id?: string;
} & ToastOptions;

export type Toast = { text: string } & AddToast;

type Add = (text: string, options?: AddToast) => void;

type ToastContext = {
  addToast: Add;
  removeToast: (id: string) => void;
  toasts: Toast[];
};

const defaultToast: ToastOptions = {
  position: 'top-center',
  autoCleanup: true,
  cleanupTime: 3000,
  type: 'default',
};

export const ToastContext = createContext<ToastContext | null>(null);

export default function ToastContextProvider({ children }: ToastContextProvider) {
  const [toast, setToast] = useState<Toast[]>([]);

  const addToast = (text: string, { id = crypto.randomUUID(), ...toastOptions }: AddToast = {}) => {
    const newToast = {
      id,
      text,
      ...defaultToast,
      ...toastOptions,
    };

    setToast(prev => [...prev, newToast]);

    if (newToast.autoCleanup) {
      setTimeout(() => {
        setToast(prev => prev.filter(t => t.id !== newToast.id));
      }, newToast.cleanupTime);
    }
  };

  const removeToast = (id: string) => {
    setToast(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toasts: toast }}>
      {children}
    </ToastContext.Provider>
  );
}
