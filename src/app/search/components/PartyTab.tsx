import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox';
import React from 'react';
import { TabProps } from './Selector';

const ppl = [
  { label: '5~8인', value: '5~8인' },
  { label: '9~12인', value: '9~12인' },
  { label: '13~16인', value: '13~16인' },
  { label: '17~20인', value: '17~20인' },
  { label: '20인 이상', value: '20인 이상' },
];

export default function PartyTab({ setSelectState, selectState }: TabProps) {
  return (
    <Listbox
      selectionMode="single"
      className="px-4"
      aria-label="select how many people list box"
      selectedKeys={new Set([selectState.party ?? ''])}
      onSelectionChange={e => {
        if (e instanceof Set) {
          e.forEach(item => setSelectState({ ...selectState, party: item as string }));
        }
      }}
    >
      <ListboxSection
        title="인원"
        classNames={{
          heading: 'font-bold text-[14px] text-black p-2 block',
          group: 'p-0',
        }}
      >
        {ppl.map(party => (
          <ListboxItem
            key={party.value}
            classNames={{
              selectedIcon:
                'border-2 border-[#E9E9E9] group-data-[selected=true]:border-black w-4 h-4 p-0.5 font-bold',
            }}
            className="flex-row-reverse"
          >
            {party.label}
          </ListboxItem>
        ))}
      </ListboxSection>
    </Listbox>
  );
}
