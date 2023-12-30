import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox';
import React from 'react';
import { TabProps } from './Selector';

const TypeCategory = [
  { label: '1차 회식', value: '1차 회식' },
  { label: '2차 회식', value: '2차 회식' },
];

export default function TypeTab({ setSelectState, selectState }: TabProps) {
  return (
    <Listbox
      selectionMode="single"
      className="px-4"
      aria-label="select category list box"
      selectedKeys={new Set([selectState.type ?? ''])}
      onSelectionChange={e => {
        if (e instanceof Set) {
          e.forEach(item => setSelectState({ ...selectState, type: item as string }));
        }
      }}
    >
      <ListboxSection
        title="회식 유형"
        classNames={{
          heading: 'font-bold text-[14px] text-black p-2 block',
          group: 'p-0',
        }}
      >
        {TypeCategory.map(type => (
          <ListboxItem
            key={type.value}
            classNames={{
              selectedIcon:
                'border-2 border-[#E9E9E9] group-data-[selected=true]:border-black w-4 h-4 p-0.5 font-bold',
            }}
            className="flex-row-reverse"
          >
            {type.label}
          </ListboxItem>
        ))}
      </ListboxSection>
    </Listbox>
  );
}
