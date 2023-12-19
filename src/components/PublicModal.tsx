'use client';
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
import { ComponentPropsWithoutRef } from 'react';

type DefaultModalProps = {
  children?: React.ReactNode;

} & Omit<ComponentPropsWithoutRef<typeof Modal>, 'children' | 'title'>;

export default function PublicModal({ children, ...rest }: DefaultModalProps) {
  const { onOpenChange } = useDisclosure();
  return (
    <>
      <Modal size={'lg'} defaultOpen onOpenChange={onOpenChange} {...rest} isDismissable={false}>
        <ModalContent>
          {onClose => (
            <>
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
