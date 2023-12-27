'use client';
import { Autocomplete, AutocompleteItem, AutocompleteSection } from '@nextui-org/autocomplete';
import { ComponentPropsWithoutRef } from 'react';

type AutocompleteItem = {
  sectionTitle: string;
  items: { label: string; value: string }[];
};

type ClientAutoCompleteProps<T> = {
  items: T[];
  defaultItems?: any[];
  role?: string;
} & Omit<ComponentPropsWithoutRef<typeof Autocomplete>, 'items' | 'defaultItems' | 'children'>;

export default function ClientAutoComplete<T extends AutocompleteItem>({
  items,
  defaultItems,
  role,
  ...rest
}: ClientAutoCompleteProps<T>) {
  let param = 'where';

  if (role && param !== role) {
    param = role;
  }

  return (
    <Autocomplete {...rest} isClearable={false} defaultItems={defaultItems}>
      {items?.map(item => (
        <AutocompleteSection
          title={item.sectionTitle}
          key={item.sectionTitle}
          classNames={{
            heading: 'flex w-full sticky top-1 z-20 py-1.5 px-2 rounded-small font-bold',
          }}
        >
          {item.items.map((item, index) => (
            <AutocompleteItem
              key={item.value + index}
              value={item.value}
              className="flex-row-reverse py-1"
              classNames={{
                selectedIcon:
                  'text-primary border-2 border-[#E9E9E9] group-data-[selected=true]:border-primary w-4 h-4 p-0.5 font-bold',
                title: 'text-xs text-secondary group-data-[selected=true]:text-primary',
              }}
            >
              {item.label}
            </AutocompleteItem>
          ))}
        </AutocompleteSection>
      ))}
    </Autocomplete>
  );
}
