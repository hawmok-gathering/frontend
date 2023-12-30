import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox';
import React from 'react';
import { TabProps } from './Selector';

const tableSample = {
  sectionTitle: '테이블 종류',
  items: [
    { label: '룸', value: '룸' },
    { label: '홀', value: '홀' },
    { label: '좌식', value: '좌식' },
    { label: '입식', value: '입식' },
  ],
};

export default function SeatTab({ setSelectState, selectState }: TabProps) {
  return (
    <Listbox
      selectionMode="multiple"
      className="px-4"
      aria-label="select type of Table list box"
      selectedKeys={new Set([selectState.seat ?? ''])}
      onSelectionChange={e => {
        if (e instanceof Set) {
          e.forEach(item => setSelectState({ ...selectState, seat: item as string }));
        }
      }}
    >
      <ListboxSection
        title={tableSample.sectionTitle}
        classNames={{
          heading: 'font-bold text-[14px] text-black p-2 block',
          group: 'p-0',
        }}
      >
        {tableSample.items.map(table => (
          <ListboxItem
            key={table.value}
            classNames={{
              selectedIcon:
                'border-2 border-[#E9E9E9] group-data-[selected=true]:border-black w-4 h-4 p-0.5 font-bold',
            }}
            className="flex-row-reverse"
          >
            {table.label}
          </ListboxItem>
        ))}
      </ListboxSection>
    </Listbox>
  );
}
