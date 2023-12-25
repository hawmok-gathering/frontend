'use client';
import React, { ComponentPropsWithoutRef } from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/modal';
import { cn } from '@nextui-org/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

type SheetProps = {
  children: React.ReactNode;
  displayContent: React.ReactNode;
  height?: string;
} & Omit<ComponentPropsWithoutRef<typeof Modal>, 'children' | 'height'>;

export default function BottomSheet(props: SheetProps) {
  const { children, displayContent, height, className, ...rest } = props;
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const pagePathName = usePathname();

  return (
    <>
      <div onClick={onOpen} className="w-fit cursor-pointer ">
        {displayContent}
      </div>
      <Modal
        isDismissable={true}
        isOpen={isOpen}
        onClose={onClose}
        className={cn(
          'fixed bottom-0 left-0 right-0 m-0 w-screen max-w-[1100px] rounded-t-3xl sm:m-0 sm:mx-auto',
          className,
        )}
        style={{ height }}
        radius="none"
        {...rest}
      >
        <ModalContent>
          <ModalBody className="gap-0 px-4">{children}</ModalBody>
          <ModalFooter className="justify-start gap-2 px-4 py-10 sm:gap-0 sm:p-0">
            <Link
              href={{
                pathname: pagePathName,
                query: {},
              }}
              scroll={false}
              className={cn(
                'reading-[22.4px] flex h-[46px] grow items-center justify-center rounded-xl border-[1.5px] border-[#747474] px-[30px] text-base font-normal',
                'sm:rounded-none sm:border-none',
              )}
            >
              초기화
            </Link>
            <button
              onClick={onClose}
              className={cn(
                'reading-[22.4px] h-[46px] grow-[1.4] rounded-xl bg-primary px-[30px] text-base font-normal text-white',
                'sm:rounded-none',
              )}
            >
              적용하기
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
