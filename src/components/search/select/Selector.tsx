'use client';

import { Button } from '@nextui-org/button';
import React, { ComponentPropsWithoutRef, useState, useRef } from 'react';
import { MdRotateLeft } from 'react-icons/md';
import { FaAngleDown } from 'react-icons/fa';
import { Tab, Tabs, ModalBody, useDisclosure, cn } from '@nextui-org/react';
import AreaTab, { Locations } from './AreaTab';
import PeopleTab from './PeopleTab';
import FeelingTab from './FeelingTab';
import TableTypesTab from './TableTypesTab';
import { RxCross2 } from 'react-icons/rx';
import { useRouter } from 'next/navigation';
import BottomSheet from '@/components/BottomSheet';
import useDrag from '@/hooks/useDrag';

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
  const { searchQuery } = search;
  const [selectState, setSelectState] = useState({ ...search });
  const [containerX, setContainerX] = useState(0);
  const selectorSectionRef = useRef<HTMLDivElement>(null);
  const selectorContainerRef = useRef<HTMLDivElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const handleTouchDrag = (deltaX: number) => {
    const containerWidth = selectorContainerRef.current?.scrollWidth;
    const sectionWidth = selectorSectionRef.current?.offsetWidth;

    if (containerX + deltaX > 0) {
      setContainerX(0);
    } else if (containerX + deltaX < -containerWidth! + sectionWidth!) {
      setContainerX(-containerWidth! + sectionWidth!);
    } else {
      setContainerX(containerX + deltaX);
    }
  };

  return (
    <div>
      <div className="flex w-full items-center justify-start gap-2">
        <Button
          onClick={() => {
            setSelectState({});
          }}
          isIconOnly
          radius="full"
          variant="bordered"
          size="sm"
          startContent={<MdRotateLeft className="text-lg" />}
          style={{ width: '28px' }}
        ></Button>

        <BottomSheet
          isOpen={isOpen}
          onClose={() => {
            setSelectState({ ...search });
            onClose();
          }}
          height="640px"
          triggerContent={
            <div ref={selectorSectionRef} className="overflow-hidden">
              <div
                ref={selectorContainerRef}
                draggable={false}
                style={{ transform: `translateX(${containerX}px)` }}
                className=" flex w-fit shrink-0 gap-2"
                {...useDrag(handleTouchDrag)}
              >
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
            </div>
          }
          bodyContent={
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
          }
          footerClassName="px-0"
          footerContent={
            <div className="mt-auto flex h-fit grow flex-col gap-6 p-0 sm:gap-0">
              {/* selected status */}
              <div className="flex h-12 w-full items-center gap-2 whitespace-nowrap bg-[#F5F5F5] px-7 py-4">
                <button
                  className="h-fit w-fit rounded-full border border-[#E9E9E9] bg-white p-1"
                  onClick={() => setSelectState({})}
                >
                  <MdRotateLeft className="text-lg" />
                </button>
                {Object.entries(selectState).map(([key, value]) => {
                  if (key === 'searchQuery') return;
                  return (
                    <button
                      key={key}
                      className="flex items-center gap-[10px] rounded-full bg-[#302F2D] px-3 py-1 text-white"
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

              <div className="flex w-full grow gap-2 px-4 sm:px-0">
                <button
                  className={cn(
                    'reading-[22.4px] flex h-[46px] grow items-center justify-center rounded-xl border-[1.5px] border-[#747474] px-[30px] text-base font-normal sm:h-[74px]',
                    'sm:rounded-none sm:border-none',
                  )}
                  onClick={() => {
                    setSelectState({ ...search });
                    onClose();
                  }}
                >
                  취소
                </button>
                <button
                  onClick={() => {
                    const params = new URLSearchParams(selectState as Record<string, string>);
                    router.push(`/search?${params}`);
                    onClose();
                  }}
                  className={cn(
                    'reading-[22.4px] flex h-[46px] grow-[1.4] items-center justify-center rounded-xl bg-primary px-[30px] text-base font-normal text-white sm:h-[74px]',
                    'sm:rounded-none',
                  )}
                >
                  선택하기
                </button>
              </div>
            </div>
          }
        />
      </div>
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
