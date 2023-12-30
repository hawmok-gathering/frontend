import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox';
import React from 'react';
import { TabProps } from './Selector';

const sampleMood = {
  sectionTitle: '분위기',
  items: [
    { label: '분위기 전체', value: '분위기 전체' },
    { label: '분위기1', value: '분위기1' },
    { label: '분위기2', value: '분위기2' },
  ],
};

export default function MoodTab({ setSelectState, selectState }: TabProps) {
  return (
    <Listbox
      selectionMode="single"
      className="px-4"
      aria-label="select atmosphere list box"
      selectedKeys={new Set([selectState.mood ?? ''])}
      onSelectionChange={e => {
        if (e instanceof Set) {
          e.forEach(item => setSelectState({ ...selectState, mood: item as string }));
        }
      }}
    >
      <ListboxSection
        title={sampleMood.sectionTitle}
        classNames={{
          heading: 'font-bold text-sm text-black p-2 block',
          group: 'p-0',
        }}
      >
        {sampleMood.items.map(mood => (
          <ListboxItem
            key={mood.value}
            classNames={{
              selectedIcon:
                'border-2 border-[#E9E9E9] group-data-[selected=true]:border-black w-4 h-4 p-0.5 font-bold',
            }}
            className="flex-row-reverse"
          >
            {mood.label}
          </ListboxItem>
        ))}
      </ListboxSection>
    </Listbox>
  );
}
