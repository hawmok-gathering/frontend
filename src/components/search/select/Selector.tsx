'use client';

import { Button } from '@nextui-org/button';
import React, { useState } from 'react';
import { MdRotateLeft } from 'react-icons/md';
import { Tab, Tabs, ModalBody, useDisclosure, cn } from '@nextui-org/react';
import AreaTab, { Locations } from './LocationTab';
import PeopleTab from './PartyTab';
import MoodTab from './MoodTab';
import TableTypesTab from './SeatTab';
import { RxCross2 } from 'react-icons/rx';
import { useRouter } from 'next/navigation';
import BottomSheet from '@/components/BottomSheet';
import SelectorTriggerButtons from './SelectorTriggerButtons';
import { SearchPageProps } from '@/constants/constant';

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

export type TabProps = {
  setSelectState: React.Dispatch<
    React.SetStateAction<{
      [key in SelectKeys]: string | undefined;
    }>
  >;
  selectState: SelectorProps['search'];
};

export type SelectKeys = 'location' | 'party' | 'type' | 'mood' | 'seat' | 'searchQuery';
export type SearchParams = { [key in SelectKeys]: string | undefined };
export type SelectorProps = {
  search: SearchParams;
};

export default function Selector({ search }: SelectorProps) {
  const { searchQuery } = search;
  const [selectState, setSelectState] = useState({ ...search });
  const [tabKey, setTabKey] = useState('지역'); // ['지역', '인원', '회식 유형', '분위기', '좌석 타입']
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const handleOpen = (key: string) => {
    console.log(key);
    setTabKey(key);
    onOpen();
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
          triggerContent={<SelectorTriggerButtons selectState={selectState} onOpen={handleOpen} />}
          bodyContent={
            <Tabs
              selectedKey={tabKey}
              onSelectionChange={setTabKey}
              variant="underlined"
              classNames={{
                base: 'px-5 py-2',
                tab: 'font-bold text-base h-[60px] w-fit p-0 ',
                tabList: 'px-3 py-0 flex justify-start gap-6 ',
                cursor: 'w-full',
              }}
            >
              <Tab title={SearchPageProps.location} key={SearchPageProps.location} className="py-0">
                <AreaTab
                  locations={locationsItem}
                  selectState={selectState}
                  setSelectState={setSelectState}
                />
              </Tab>
              <Tab title={SearchPageProps.party} key={SearchPageProps.party} className="py-0">
                <PeopleTab selectState={selectState} setSelectState={setSelectState} />
              </Tab>
              <Tab title={SearchPageProps.type} key={SearchPageProps.type} className="py-0">
                <ModalBody>Modal Body</ModalBody>
              </Tab>
              <Tab title={SearchPageProps.mood} key={SearchPageProps.mood} className="py-0">
                <MoodTab selectState={selectState} setSelectState={setSelectState} />
              </Tab>
              <Tab title={SearchPageProps.seat} key={SearchPageProps.seat} className="py-0">
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
                          delete newState[key as keyof typeof newState];
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
