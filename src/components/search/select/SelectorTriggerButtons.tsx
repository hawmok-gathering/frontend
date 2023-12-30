import React, { ComponentPropsWithoutRef, useRef, useState } from 'react';
import useDrag from '@/hooks/useDrag';
import useTouch from '@/hooks/useTouch';
import { Button } from '@nextui-org/button';
import { FaAngleDown } from 'react-icons/fa';
import { SearchPageProps } from '@/constants/constant';

type SelectorTriggerButtonsProps = {
  selectState: { [key: string]: string | undefined };
  onOpen: (key: string) => void;
};

export default function SelectorTriggerButtons(props: SelectorTriggerButtonsProps) {
  const { selectState, onOpen } = props;
  const [containerX, setContainerX] = useState(0);
  const selectorSectionRef = useRef<HTMLDivElement>(null);
  const selectorContainerRef = useRef<HTMLDivElement>(null);

  const temp = (deltaX: number) => {
    const containerWidth = selectorContainerRef.current?.scrollWidth;
    const sectionWidth = selectorSectionRef.current?.offsetWidth;

    console.log(deltaX);
    console.log(containerWidth, sectionWidth);

    if (containerX + deltaX > 0) {
      setContainerX(0);
    } else if (containerX + deltaX < -containerWidth! + sectionWidth!) {
      setContainerX(-containerWidth! + sectionWidth!);
    } else {
      setContainerX(containerX + deltaX);
    }
  };
  return (
    <div ref={selectorSectionRef} className="w-full overflow-hidden">
      <div
        ref={selectorContainerRef}
        draggable={false}
        style={{ transform: `translateX(${0}px)` }}
        className=" flex shrink-0 gap-2"
        {...useDrag(temp)}
        {...useTouch(temp)}
      >
        {Object.entries(SearchPageProps).map(([query, key]) => (
          <CustomButton key={key} onPress={() => onOpen(key)} selected={!!selectState[query]}>
            {selectState[query] ? selectState[query] : key}
          </CustomButton>
        ))}
      </div>
    </div>
  );
}

type CustomButton = {
  selected: boolean;
} & ComponentPropsWithoutRef<typeof Button>;
export const CustomButton = (props: CustomButton) => {
  const { selected, children, ...rest } = props;
  return (
    <Button
      size="sm"
      radius="full"
      variant={selected ? 'light' : 'bordered'}
      endContent={<FaAngleDown className="scale-150 text-[#C6C6C6]" />}
      className={`${
        selected ? 'bg-[#302F2D] text-white' : 'text-black'
      } data-[hover=true]:bg-" px-2 text-[10px] font-bold leading-4 sm:px-3`}
      {...rest}
    >
      {children}
    </Button>
  );
};
