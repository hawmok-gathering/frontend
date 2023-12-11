import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox';
import { ModalBody } from '@nextui-org/modal';
import React from 'react';

type TableSelectionProps = {
  setSelectState: React.Dispatch<
    React.SetStateAction<{
      [x: string]: string | undefined;
    }>
  >;
  selectState: any;
};

const tableSample = {
  sectionTitle: '테이블 종류',
  items: [
    { label: '6인석', value: '6인석' },
    { label: '좌식', value: '좌식' },
    { label: '의자', value: '의자' },
    { label: '의자 + 좌식', value: '의자 + 좌식' },
  ],
};

export default function TableTypeTab({ setSelectState, selectState }: TableSelectionProps) {
  return (
    <ModalBody>
      <Listbox
        selectionMode="single"
        aria-label="select location list box"
        selectedKeys={new Set([selectState.table ?? ''])}
        onSelectionChange={e => {
          if (e instanceof Set) {
            e.forEach(item => setSelectState({ ...selectState, table: item as string }));
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
    </ModalBody>
  );
}
