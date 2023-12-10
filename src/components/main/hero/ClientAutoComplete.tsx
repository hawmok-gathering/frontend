'use client';
import { Autocomplete, AutocompleteItem, AutocompleteSection } from '@nextui-org/autocomplete';
('next/navigation');
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
    <Autocomplete
      {...rest}
      isClearable={false}
      defaultItems={defaultItems}
      onInputChange={e => console.log(e)}
    >
      {items?.map(item => (
        <AutocompleteSection
          title={item.sectionTitle}
          key={item.sectionTitle}
          classNames={{
            heading: 'flex w-full sticky top-1 z-20 py-1.5 px-2 rounded-small font-bold',
          }}
        >
          {item.items.map((item, index) => (
            // <AutocompleteItem
            //   key={item.value + index}
            //   textValue={item.label}
            //   className="py-1"
            //   classNames={{
            //     selectedIcon: "text-primary",
            //   }}
            // >
            //   <Checkbox
            //     radius="none"
            //     classNames={{
            //       label: "text-xs text-[#5E5E5E]",
            //     }}
            //   >
            //     {item.label}
            //   </Checkbox>
            // </AutocompleteItem>
            <AutocompleteItem
              key={item.value + index}
              value={item.value}
              className="py-1"
              classNames={{
                selectedIcon: 'text-primary',
                title: 'text-xs text-secondary',
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
