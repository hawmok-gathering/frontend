'use client';
import { useToast } from '@/hooks/useToast';
import React from 'react';
import { Toast } from './ToastContextProvider';
import { RxCross2 } from 'react-icons/rx';

export default function ToastViewer() {
  const { removeToast, toasts } = useToast();

  const toastByPosition = toasts.reduce(
    (allToast, toast) => {
      const { position } = toast;

      if (!allToast[position!]) {
        allToast[position!] = [];
      }
      allToast[position!].push(toast);

      return allToast;
    },
    {} as Record<string, Toast[]>,
  );
  return (
    <div>
      {Object.entries(toastByPosition).map(([position, toasts]) => {
        return (
          <div key={position} className={`${position} toast-container`}>
            {toasts.map(toast => {
              return <ToastMessage key={toast.id} toast={toast} removeToast={removeToast} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

interface ToastMessageProps {
  toast: Toast;
  removeToast: (id: string) => void;
}

function ToastMessage({ toast, removeToast }: ToastMessageProps) {
  return (
    <div
      className={`animate-fadeIn flex cursor-pointer items-center justify-center rounded-md p-4
      text-sm font-normal text-white transition-all
      `}
      onClick={() => removeToast(toast.id!)}
      style={{
        width: '204px',
        height: '48px',
        backgroundColor: '#747474',
      }}
    >
      {toast.text} <RxCross2 className="ml-2" />
    </div>
  );
}
