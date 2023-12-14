import { ToastContext } from '@/toast/ToastContextProvider';
import { useContext } from 'react';

export function useToast() {
  const toast = useContext(ToastContext);

  if (!toast) {
    throw new Error('useToast must be used within ToastContextProvider');
  }

  return toast;
}
