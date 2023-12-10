'use client';

import { Button } from '@nextui-org/button';
import React, { ComponentPropsWithoutRef, useState } from 'react';
import { FaRotateRight } from 'react-icons/fa6';
import { FaAngleDown } from 'react-icons/fa';
import Link from 'next/link';
import { SearchParams } from '@/constants/constant';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal';
import { Tab, Tabs } from '@nextui-org/react';
type SelectorProps = {
  search: { [key: string]: string | undefined };
};

export default function Selector({ search }: SelectorProps) {
  const { party, radio, feel, hall, area, searchQuery } = search;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <div className="flex w-full items-center justify-start gap-2">
        <Link href={`/search?${SearchParams.query}=${area ?? searchQuery ?? ''}`}>
          <Button
            isIconOnly
            radius="full"
            variant="bordered"
            size="sm"
            startContent={<FaRotateRight className="rotate-45" />}
            style={{ width: '28px' }}
          ></Button>
        </Link>
        <CustomButton onPress={onOpen} selected={!!area}>
          {area ?? '지역'}
        </CustomButton>
        <CustomButton onPress={onOpen} selected={!!party}>
          {party ?? '인원'}
        </CustomButton>
        <CustomButton onPress={onOpen} selected={!!radio}>
          {radio ?? '회식 유형'}
        </CustomButton>
        <CustomButton onPress={onOpen} selected={!!feel}>
          {feel ?? '분위기'}
        </CustomButton>
        <CustomButton onPress={onOpen} selected={!!hall}>
          {hall ?? '좌석 타입'}
        </CustomButton>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onOpenChange}
        className={`fixed bottom-0 left-1/2 z-50 h-[640px] -translate-x-[52%] rounded-bl-none rounded-br-none sm:mb-0`}
        classNames={{
          base: 'max-w-[1100px]',
        }}
      >
        <ModalContent>
          <Tabs
            variant="underlined"
            classNames={{
              base: 'p-4',
              tab: 'font-bold text-base h-[60px] w-fit p-0 ',
              tabList: 'px-3 py-0 flex justify-start gap-6 ',
              cursor: 'w-full',
            }}
          >
            <Tab title="지역" key="지역">
              <ModalBody>Modal Body</ModalBody>
            </Tab>
            <Tab title="인원" key="인원">
              <ModalBody>Modal Body</ModalBody>
            </Tab>
            <Tab title="회식 유형" key="회식 유형">
              <ModalBody>Modal Body</ModalBody>
            </Tab>
            <Tab title="분위기" key="분위기">
              <ModalBody>Modal Body</ModalBody>
            </Tab>
            <Tab title="좌석 타입" key="6번">
              <ModalBody>Modal Body</ModalBody>
            </Tab>
          </Tabs>
        </ModalContent>
      </Modal>
    </div>
  );
}

type CustomButton = {
  selected: boolean;
} & ComponentPropsWithoutRef<typeof Button>;
const CustomButton = (props: CustomButton) => {
  const { selected, children, ...rest } = props;
  return (
    <Button
      {...rest}
      size="sm"
      radius="full"
      variant={selected ? 'light' : 'bordered'}
      className={`${
        selected ? 'bg-[#302F2D] text-white' : 'text-black'
      } data-[hover=true]:bg-" px-3 text-[10px] font-bold leading-4`}
      endContent={<FaAngleDown className="text-[#C6C6C6]" />}
    >
      {children}
    </Button>
  );
};
