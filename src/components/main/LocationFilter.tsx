'use client';

import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import React from 'react';
import { SlLocationPin } from 'react-icons/sl';
import { useRouter } from 'next/navigation';

type Cities = 'seoul' | 'busan';

type LocationFilterProps = {
  locations: {
    [Key in Cities]: { display: string; value: string }[];
  };
};

export default function LocationFilter({ locations }: LocationFilterProps) {
  const router = useRouter();
  return (
    <Popover>
      <PopoverTrigger>
        <span className="flex items-center gap-2 text-sm sm:text-base">
          <SlLocationPin className="inline-flex text-lg text-primary" />
          <b>전체</b>
        </span>
      </PopoverTrigger>
      <PopoverContent className="rounded-sm px-6 py-4">
        <Listbox
          label="Select a city"
          selectionMode="single"
          className="w-32 p-0"
          onSelectionChange={key => {
            router.push('/' + '?sorted=' + Object.values(key)[0], { scroll: false });
          }}
        >
          <ListboxSection
            title={'서울'}
            className="py-2"
            classNames={{
              heading: 'text-xs text-secondary font-bold',
            }}
          >
            {locations.seoul.map(({ display, value }) => (
              <ListboxItem
                key={value}
                className="flex-row-reverse"
                classNames={{
                  selectedIcon:
                    'text-primary border-2 border-[#E9E9E9] group-data-[selected=true]:border-primary w-4 h-4 p-0.5 font-bold',
                  title: 'text-[10px] text-secondary group-data-[selected=true]:text-primary',
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
              heading: 'text-xs text-secondary font-bold',
            }}
          >
            {locations.busan.map(({ display, value }) => (
              <ListboxItem
                key={value}
                className="flex-row-reverse"
                classNames={{
                  selectedIcon:
                    'text-primary border-2 border-[#E9E9E9] group-data-[selected=true]:border-primary w-4 h-4 p-0.5 font-bold',
                  title: 'text-[10px] text-secondary group-data-[selected=true]:text-primary',
                }}
              >
                {display}
              </ListboxItem>
            ))}
          </ListboxSection>
        </Listbox>
      </PopoverContent>
    </Popover>
  );
}
