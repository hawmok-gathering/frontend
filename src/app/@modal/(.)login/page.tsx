import React from 'react';
import { Modal } from './modal';
import { LuDot } from 'react-icons/lu';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { FcGoogle } from 'react-icons/fc';

export default function page() {
  return (
    <Modal>
      <div className="flex h-[588px] flex-col justify-between px-4 py-20 sm:px-8">
        <Image src="/brand.png" alt="brand logo" width={104} height={70} className="mx-auto" />
        <div className="flex flex-col items-center justify-center gap-9">
          <p className="inline-flex items-center text-base font-bold">
            로그인 <LuDot className="inline" /> 회원가입
          </p>
          <Button
            variant="light"
            radius="sm"
            className="font-bold text-gray-400 shadow-md"
            startContent={<FcGoogle className="text-lg" />}
          >
            Sign in with Google {`(준비중)`}
          </Button>
          <p className="inline-flex h-fit flex-col items-center justify-center text-sm font-normal">
            <span>지금 로그인하고 발견한</span>
            <span>회식 장소를 저장해보세요!</span>
          </p>
        </div>
        <p className="text-center text-xs font-normal text-secondary">
          단체를 위한 회식 장소 검색 서비스
        </p>
      </div>
    </Modal>
  );
}
