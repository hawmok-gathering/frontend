'use client';

import { Button } from '@nextui-org/button';
import React, { ComponentPropsWithoutRef, useState } from 'react';
import { MdRotateLeft } from 'react-icons/md';
import { FaAngleDown } from 'react-icons/fa';
import Link from 'next/link';
import { SearchParams } from '@/constants/constant';
import {
  Tab,
  Tabs,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  ModalFooter,
} from '@nextui-org/react';
import AreaTab, { Locations } from './AreaTab';
import PeopleTab from './PeopleTab';
import FeelingTab from './FeelingTab';
import TableTypesTab from './TableTypesTab';
import { RxCross2 } from 'react-icons/rx';
import { useRouter } from 'next/navigation';

const locationsItem: Locations = [
  {
    sectionName: '서울',
    items: [
      { location: '서울 전체', key: '서울 전체' },
      { location: '강남구', key: '강남구' },
      { location: '마포구', key: '마포구' },
    ],
  },
  {
    sectionName: '부산',
    items: [
      { location: '부산 전체', key: '부산 전체' },
      { location: '해운대구', key: '해운대구' },
      { location: '부산진구', key: '부산진구' },
    ],
  },
];

type SelectorProps = {
  search: { [key: string]: string | undefined };
};

export default function Selector({ search }: SelectorProps) {
  //TODO: searchParams 를 state로 바꿀지 생각해보기.
  const { searchQuery } = search;
  const [selectState, setSelectState] = useState({ ...search });
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <div className="flex w-full items-center justify-start gap-2">
        <Link href={`/search?${SearchParams.query}=${selectState.area ?? searchQuery ?? ''}`}>
          <Button
            isIconOnly
            radius="full"
            variant="bordered"
            size="sm"
            startContent={<MdRotateLeft className="text-lg" />}
            style={{ width: '28px' }}
          ></Button>
        </Link>
        <CustomButton onPress={onOpen} selected={!!selectState.area}>
          {selectState.area ? selectState.area : '지역'}
        </CustomButton>
        <CustomButton onPress={onOpen} selected={!!selectState.party}>
          {selectState.party ? selectState.party : '인원'}
        </CustomButton>
        <CustomButton onPress={onOpen} selected={!!selectState.radio}>
          {selectState.radio ? selectState.radio : '회식 유형'}
        </CustomButton>
        <CustomButton onPress={onOpen} selected={!!selectState.feel}>
          {selectState.feel ? selectState.feel : '분위기'}
        </CustomButton>
        <CustomButton onPress={onOpen} selected={!!selectState.table}>
          {selectState.table ? selectState.table : '좌석 타입'}
        </CustomButton>
      </div>
      <Modal
        closeButton={false}
        isOpen={isOpen}
        onClose={onOpenChange}
        className={`fixed bottom-0 left-1/2 z-50 mx-0 mb-0 h-[640px] -translate-x-[50.5%] rounded-bl-none rounded-br-none after:content-none sm:mb-0`}
        classNames={{
          base: 'max-w-[1100px]',
        }}
      >
        <ModalContent>
          <Tabs
            variant="underlined"
            classNames={{
              base: 'px-5 py-2',
              tab: 'font-bold text-base h-[60px] w-fit p-0 ',
              tabList: 'px-3 py-0 flex justify-start gap-6 ',
              cursor: 'w-full',
            }}
          >
            <Tab title="지역" key="지역" className="py-0">
              <AreaTab
                locations={locationsItem}
                selectState={selectState}
                setSelectState={setSelectState}
              />
            </Tab>
            <Tab title="인원" key="인원" className="py-0">
              <PeopleTab selectState={selectState} setSelectState={setSelectState} />
            </Tab>
            <Tab title="회식 유형" key="회식 유형" className="py-0">
              <ModalBody>Modal Body</ModalBody>
            </Tab>
            <Tab title="분위기" key="분위기" className="py-0">
              <FeelingTab selectState={selectState} setSelectState={setSelectState} />
            </Tab>
            <Tab title="좌석 타입" key="좌석 타입" className="py-0">
              <TableTypesTab selectState={selectState} setSelectState={setSelectState} />
            </Tab>
          </Tabs>
          <ModalFooter className="mt-auto h-[118px] flex-wrap justify-normal gap-0 p-0">
            <div className="flex h-12 w-full items-center gap-2 bg-[#F5F5F5] px-7 py-4">
              <button
                className="h-fit w-fit rounded-full border-[#E9E9E9] bg-white p-1"
                onClick={() => setSelectState({ ...search })}
              >
                <MdRotateLeft className="text-lg" />
              </button>
              {Object.entries(selectState).map(([key, value]) => {
                if (key === 'searchQuery') return;
                return (
                  <button
                    key={key}
                    className="flex items-center gap-[10px] rounded-full bg-[#302F2D] px-2 py-1 text-white"
                    onClick={() =>
                      setSelectState(prev => {
                        const newState = { ...prev };
                        delete newState[key];
                        return newState;
                      })
                    }
                  >
                    <small>{value}</small>
                    <RxCross2 />
                  </button>
                );
              })}
            </div>
            <Button
              radius="none"
              className="h-[70px] w-1/3  text-base font-bold"
              onPress={onOpenChange}
            >
              취소
            </Button>
            <Button
              onPress={() => {
                const params = new URLSearchParams(selectState as Record<string, string>);
                router.push(`/search?${params}`);
                onOpenChange();
              }}
              radius="none"
              className="h-[70px] w-2/3  text-base font-bold text-white"
              color="primary"
            >
              선택하기
            </Button>
          </ModalFooter>
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
      size="sm"
      radius="full"
      variant={selected ? 'light' : 'bordered'}
      endContent={<FaAngleDown className="scale-150 text-[#C6C6C6]" />}
      className={`${
        selected ? 'bg-[#302F2D] text-white' : 'text-black'
      } data-[hover=true]:bg-" px-2 text-[10px] font-bold leading-4 sm:px-3`}
      {...rest}
    >
      {children}
    </Button>
  );
};
