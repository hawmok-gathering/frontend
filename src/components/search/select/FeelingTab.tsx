import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox';
import { ModalBody } from '@nextui-org/modal';
import React from 'react';

type FeelingSelectionProps = {
  setSelectState: React.Dispatch<
    React.SetStateAction<{
      [x: string]: string | undefined;
    }>
  >;
  selectState: any;
};

const sampleAtmosphere = {
  sectionTitle: '분위기',
  items: [
    { label: '분위기 전체', value: '분위기 전체' },
    { label: '분위기1', value: '분위기1' },
    { label: '분위기2', value: '분위기2' },
  ],
};

export default function FeelingTab({ setSelectState, selectState }: FeelingSelectionProps) {
  return (
    <ModalBody>
      <Listbox
        selectionMode="single"
        aria-label="select location list box"
        selectedKeys={new Set([selectState.feel ?? ''])}
        onSelectionChange={e => {
          if (e instanceof Set) {
            e.forEach(item => setSelectState({ ...selectState, feel: item as string }));
          }
        }}
      >
        <ListboxSection
          title="분위기"
          classNames={{
            heading: 'font-bold text-[14px] text-black p-2 block',
            group: 'p-0',
          }}
        >
          {sampleAtmosphere.items.map(feeing => (
            <ListboxItem
              key={feeing.value}
              classNames={{
                selectedIcon:
                  'border-2 border-[#E9E9E9] group-data-[selected=true]:border-black w-4 h-4 p-0.5 font-bold',
              }}
              className="flex-row-reverse"
            >
              {feeing.label}
            </ListboxItem>
          ))}
        </ListboxSection>
      </Listbox>
    </ModalBody>
  );
}