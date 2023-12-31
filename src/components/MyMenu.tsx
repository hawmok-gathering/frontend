'use client';
import { Modal, ModalBody, ModalContent, useDisclosure } from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import React from 'react';
import { LuDot } from 'react-icons/lu';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';

type MyMenuProps = {
  isLoggedIn: boolean;
};

export default function MyMenu({ isLoggedIn }: MyMenuProps) {
  const { onOpen, onClose, isOpen } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };
  return (
    <>
      <button onClick={handleOpen}>
        <MdOutlinePersonOutline className="ml-4 text-2xl font-extrabold text-secondary" />
      </button>
      <Modal
        radius="sm"
        isOpen={isOpen}
        onClose={onClose}
        classNames={{
          base: 'mx-auto my-auto w-[448px] h-[588px]',
        }}
      >
        <ModalContent>
          <ModalBody className="justify-between py-20">
            <Image src="/brand.png" alt="brand logo" width={104} height={70} className="mx-auto" />
            <div className="flex h-full flex-col items-center justify-center gap-9">
              <p className="inline-flex items-center text-base font-bold">
                로그인 <LuDot className="inline" /> 회원가입
              </p>
              <Button
                onPress={() => alert('준비중입니다.')}
                variant="light"
                radius="sm"
                className="font-bold text-gray-400 shadow-md"
                startContent={<FcGoogle className="text-lg" />}
              >
                Sign in with Google
              </Button>
              <p className="inline-flex h-fit flex-col items-center justify-center text-sm font-normal">
                <span>지금 로그인하고 발견한</span>
                <span>회식 장소를 저장해보세요!</span>
              </p>
            </div>
            <p className="text-center text-xs font-normal text-secondary">
              단체를 위한 회식 장소 검색 서비스
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
