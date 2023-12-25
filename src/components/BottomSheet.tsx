'use client';
import React from 'react';
import { Modal, ModalContent, ModalBody, useDisclosure } from '@nextui-org/react';

type SheetProps = {
  children: React.ReactNode;
  displayContent: React.ReactNode;
};

export default function BottomSheet({ children, displayContent }: SheetProps) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>{displayContent}</button>;
      <Modal isOpen={isOpen}>
        <ModalContent>
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
