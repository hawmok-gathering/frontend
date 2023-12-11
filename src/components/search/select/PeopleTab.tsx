import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox';
import { ModalBody } from '@nextui-org/modal';
import React from 'react';

const ppl = [
  { label: '5~10명', value: '5~10명' },
  { label: '10~15명', value: '10~15명' },
  { label: '15~20명', value: '15~20명' },
  { label: '20~25명', value: '20~25명' },
  { label: '25~30명', value: '25~30명' },
];

type PeopleSelectionProps = {
  setSelectState: React.Dispatch<
    React.SetStateAction<{
      [x: string]: string | undefined;
    }>
  >;
  selectState: any;
};

export default function PeopleTab({ setSelectState, selectState }: PeopleSelectionProps) {
  return (
    <ModalBody>
      <Listbox
        selectionMode="single"
        aria-label="select location list box"
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
    </ModalBody>
  );
}
