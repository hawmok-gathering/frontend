'use client';
import React, { ComponentPropsWithRef, useEffect } from 'react';
import { Button } from '@nextui-org/button';
import { useToast } from '@/hooks/useToast';

type ClipboardProps = {
  copyText: string;
} & ComponentPropsWithRef<typeof Button>;

export default function Clipboard(props: ClipboardProps) {
  const { children, copyText, ...rest } = props;
  const { addToast } = useToast();

  const handleShare = async () => {
    const copyToClipboard = async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        console.log('URL copied to clipboard');
      } catch (error) {
        console.error('Failed to copy URL to clipboard:', error);
      }
    };

    // Call the function to copy the URL to clipboard
    await copyToClipboard(copyText);
    addToast('링크가 복사되었습니다.');
  };

  return (
    <Button {...rest} onPress={handleShare}>
      {children}
    </Button>
  );
}
