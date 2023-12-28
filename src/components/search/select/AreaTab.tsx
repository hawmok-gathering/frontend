'use client';
import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox';

import React from 'react';

export type Locations = {
  sectionName: string;
  items: {
    location: string;
    key: string;
  }[];
}[];

type AreaSelectionProps = {
  setSelectState: React.Dispatch<
    React.SetStateAction<{
      [x: string]: string | undefined;
    }>
  >;
  selectState: any;
  locations: Locations;
};

export default function AreaTab({ setSelectState, locations, selectState }: AreaSelectionProps) {
  return (
    <Listbox
      selectionMode="single"
      aria-label="select location list box"
      selectedKeys={new Set([selectState.area ?? ''])}
      className="px-4"
      onSelectionChange={e => {
        if (e instanceof Set) {
          e.forEach(item => setSelectState({ ...selectState, area: item as string }));
        }
      }}
    >
      {locations.map(location => (
        <ListboxSection
          key={location.sectionName}
          title={location.sectionName}
          classNames={{
            heading: 'font-bold text-[14px] text-black p-2 block',
            group: 'p-0',
          }}
        >
          {location.items.map(item => (
            <ListboxItem
              value={item.location}
              key={item.key}
              className="flex-row-reverse"
              classNames={{
                selectedIcon:
                  'border-2 border-[#E9E9E9] group-data-[selected=true]:border-black w-4 h-4 p-0.5 font-bold',
              }}
            >
              {item.location}
            </ListboxItem>
          ))}
        </ListboxSection>
      ))}
    </Listbox>
  );
}
