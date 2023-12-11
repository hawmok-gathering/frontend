import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox';
import { ModalBody } from '@nextui-org/modal';
import React from 'react';

const phaseCategory = [
  { label: '1차 회식', value: '1차 회식' },
  { label: '2차 회식', value: '2차 회식' },
];

type PeopleSelectionProps = {
  setSelectState: React.Dispatch<
    React.SetStateAction<{
      [x: string]: string | undefined;
    }>
  >;
  selectState: any;
};

export default function PhaseCategory({ setSelectState, selectState }: PeopleSelectionProps) {
  return (
    <ModalBody>
      <Listbox
        selectionMode="single"
        aria-label="select category list box"
        selectedKeys={new Set([selectState.party ?? ''])}
        onSelectionChange={e => {
          if (e instanceof Set) {
            e.forEach(item => setSelectState({ ...selectState, party: item as string }));
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
          {phaseCategory.map(party => (
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
    </ModalBody>
  );
}
