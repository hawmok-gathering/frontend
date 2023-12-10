import { Button } from '@nextui-org/button';
import React, { ComponentPropsWithoutRef } from 'react';
import { FaRotateRight } from 'react-icons/fa6';
import { FaAngleDown } from 'react-icons/fa';
import Link from 'next/link';
import { SearchParams } from '@/constants/constant';

type SelectorProps = {
  search: { [key: string]: string | undefined };
};

export default function Selector({ search }: SelectorProps) {
  const { party, area, radio, feel, hall, searchQuery: query } = search;

  return (
    <div className="flex w-full items-center justify-start gap-2">
      <Link href={`/search?${SearchParams.query}=${query}`}>
        <Button
          isIconOnly
          radius="full"
          variant="bordered"
          size="sm"
          startContent={<FaRotateRight className="rotate-45" />}
          style={{ width: '28px' }}
        ></Button>
      </Link>
      <CustomButton selected={!!area}>강남구</CustomButton>
      <CustomButton selected={!!party}>10~15명</CustomButton>
      <CustomButton selected={!!radio}>1차 회식</CustomButton>
      <CustomButton selected={!!feel}>분위기</CustomButton>
      <CustomButton selected={!!hall}>홀</CustomButton>
    </div>
  );
}

type CustomButton = {
  selected: boolean;
} & ComponentPropsWithoutRef<typeof Button>;
const CustomButton = (props: CustomButton) => {
  const { selected, children, ...rest } = props;
  return (
    <Button
      {...rest}
      size="sm"
      radius="full"
      variant={selected ? 'light' : 'bordered'}
      className={`${
        selected ? 'bg-[#302F2D] text-white' : 'text-black'
      } data-[hover=true]:bg-" px-3 text-[10px] font-bold leading-4`}
      endContent={<FaAngleDown />}
    >
      {children}
    </Button>
  );
};
