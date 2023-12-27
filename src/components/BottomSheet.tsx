'use client';
import React, { ComponentPropsWithoutRef } from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter } from '@nextui-org/modal';
import { cn } from '@nextui-org/react';

type SheetProps = {
  bodyContent: React.ReactNode;
  triggerContent: React.ReactNode;
  footerContent?: React.ReactNode;
  height?: string;
} & Omit<ComponentPropsWithoutRef<typeof Modal>, 'height' | 'children'>;

export default function BottomSheet(props: SheetProps) {
  const { bodyContent, footerContent, triggerContent, height, className, ...rest } = props;

  return (
    <>
      {triggerContent}
      <Modal
        isDismissable={true}
        className={cn(
          'fixed bottom-0 left-0 right-0 m-0 w-screen max-w-[1100px] rounded-t-3xl sm:m-0 sm:mx-auto',
          className,
        )}
        style={{ height }}
        radius="none"
        {...rest}
      >
        <ModalContent>
          <ModalBody className="gap-0 px-0">{bodyContent}</ModalBody>
          {footerContent && (
            <ModalFooter className="justify-start gap-2 px-4 py-10 sm:gap-0 sm:p-0">
              {footerContent}
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
