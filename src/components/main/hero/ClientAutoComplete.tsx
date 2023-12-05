"use client";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { ComponentPropsWithoutRef } from "react";

type ClientAutoCompleteProps<T> = {
  items: T[];
  defaultItems?: any[];
  role?: string;
} & Omit<
  ComponentPropsWithoutRef<typeof Autocomplete>,
  "items" | "defaultItems" | "children"
>;

export default function ClientAutoComplete<
  T extends { value: string; label: string }
>({ items, defaultItems, role, ...rest }: ClientAutoCompleteProps<T>) {
  let param = "where";

  if (role && param !== role) {
    param = role;
  }

  return (
    <Autocomplete
      {...rest}
      defaultItems={defaultItems}
      items={items}
      onInputChange={(e) => console.log(e)}
    >
      {(item: T) => (
        <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
      )}
    </Autocomplete>
  );
}
