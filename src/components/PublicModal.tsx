'use client';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
import { ComponentPropsWithoutRef } from 'react';

type DefaultModalProps = {
  children?: React.ReactNode;
  title: string;
} & Omit<ComponentPropsWithoutRef<typeof Modal>, 'children' | 'title'>;

export default function PublicModal({ children, title, ...rest }: DefaultModalProps) {
  const { onOpenChange } = useDisclosure();
  return (
    <>
      <Modal size={'lg'} defaultOpen onOpenChange={onOpenChange} {...rest} isDismissable={false}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{children}</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
