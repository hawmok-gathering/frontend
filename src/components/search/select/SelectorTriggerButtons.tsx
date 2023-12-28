import React, { useRef, useState } from 'react';
import { CustomButton } from './Selector';
import useDrag from '@/hooks/useDrag';
import useTouch from '@/hooks/useTouch';

type SelectorTriggerButtonsProps = {
  selectState: { [key: string]: string | undefined };
  onOpen: () => void;
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
        <CustomButton onPress={onOpen} selected={!!selectState.area}>
          {selectState.area ? selectState.area : '지역'}
        </CustomButton>
        <CustomButton onPress={onOpen} selected={!!selectState.party}>
          {selectState.party ? selectState.party : '인원'}
        </CustomButton>
        <CustomButton onPress={onOpen} selected={!!selectState.radio}>
          {selectState.radio ? selectState.radio : '회식 유형'}
        </CustomButton>
        <CustomButton onPress={onOpen} selected={!!selectState.feel}>
          {selectState.feel ? selectState.feel : '분위기'}
        </CustomButton>
        <CustomButton onPress={onOpen} selected={!!selectState.table}>
          {selectState.table ? selectState.table : '좌석 타입'}
        </CustomButton>
      </div>
    </div>
  );
}
