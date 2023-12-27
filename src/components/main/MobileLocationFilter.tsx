'use client';

import React, { useState } from 'react';
import BottomSheet from '../BottomSheet';
import { Listbox, ListboxItem, ListboxSection, cn, useDisclosure } from '@nextui-org/react';
import { SlLocationPin } from 'react-icons/sl';
import Link from 'next/link';

type Cities = 'seoul' | 'busan';

type LocationFilterProps = {
  locations: {
    [Key in Cities]: { display: string; value: string }[];
  };
};

export default function MobileLocationFilter({ locations }: LocationFilterProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [sorted, setSorted] = useState('');

  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={() => {
        setSorted('');
        onClose();
      }}
      height="524px"
      triggerContent={
        <span className="flex items-center gap-2 text-sm sm:text-base" onClick={onOpen}>
          <SlLocationPin className="inline-flex text-lg text-primary" />
          <b>전체</b>
        </span>
      }
      bodyContent={
        <>
          {/* simple indicator? */}
          <div className="mx-auto my-5 h-[3px] w-[30px] bg-[#E6E6E6]"></div>
          <Listbox label="Select a city" selectionMode="single" className="p-0">
            <ListboxSection
              title={'서울'}
              className="py-2"
              classNames={{
                heading:
                  'bg-red-500 text-sm font-bold text-black flex px-4 h-8 items-center bg-[#F1F1F1]',
                group: 'mt-4 flex flex-col gap-1',
              }}
            >
              {locations.seoul.map(({ display, value }) => (
                <ListboxItem
                  key={value}
                  onPress={() => setSorted(value)}
                  className="flex-row-reverse px-4"
                  classNames={{
                    selectedIcon:
                      'text-black border-2 border-[#E9E9E9] group-data-[selected=true]:border-black w-4 h-4 p-0.5 font-bold',
                    title: 'text-xs text-black',
                  }}
                >
                  {display}
                </ListboxItem>
              ))}
            </ListboxSection>
            <ListboxSection
              title={'부산'}
              className="py-2"
              classNames={{
                heading:
                  'bg-red-500 text-sm font-bold text-black flex px-4 h-8 items-center bg-[#F1F1F1]',
                group: 'mt-4 flex flex-col gap-1',
              }}
            >
              {locations.busan.map(({ display, value }) => (
                <ListboxItem
                  key={value}
                  onPress={() => setSorted(value)}
                  className="flex-row-reverse px-4"
                  classNames={{
                    selectedIcon:
                      'text-black border-2 border-[#E9E9E9] group-data-[selected=true]:border-black w-4 h-4 p-0.5 font-bold',
                    title: 'text-xs text-black',
                  }}
                >
                  {display}
                </ListboxItem>
              ))}
            </ListboxSection>
          </Listbox>
        </>
      }
      footerContent={
        <>
          <Link
            href={{
              pathname: '/',
            }}
            scroll={false}
            onClick={() => {
              setSorted('');
              onClose();
            }}
            className={cn(
              'reading-[22.4px] flex h-[46px] grow items-center justify-center rounded-xl border-[1.5px] border-[#747474] px-[30px] text-base font-normal',
              'sm:rounded-none sm:border-none',
            )}
          >
            초기화
          </Link>
          <Link
            href={`/${sorted ? '?sorted=' + sorted : ''}`}
            scroll={false}
            onClick={onClose}
            className={cn(
              'reading-[22.4px] flex h-[46px] grow-[1.4] items-center justify-center rounded-xl bg-primary px-[30px] text-base font-normal text-white',
              'sm:rounded-none',
            )}
          >
            적용하기
          </Link>
        </>
      }
    />
  );
}
