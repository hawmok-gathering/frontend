'use client';

import { Button } from '@nextui-org/button';
import React, { useRef, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

type RenderItemProps = {
  item: any;
  index: number;
  isSelected: boolean;
  handleIndex: (index: number) => void;
};

type CarouselProps<T> = {
  children?: React.ReactNode;
  items: T[];
  renderItem: ({ item, isSelected, handleIndex, index }: RenderItemProps) => React.ReactNode;
};

export default function Carousel<O extends Record<string | number | symbol, any>>({
  children,
  items,
  renderItem,
}: CarouselProps<O>) {
  const [index, setIndex] = useState(1);
  const ref = useRef<HTMLDivElement>(null);

  const handleIndex = (idx: number) => {
    if (idx === index) {
      return;
    }

    let stepOffset = -268;
    if (window.innerWidth <= 768) {
      stepOffset = -164;
    }
    const gap = (idx - index) * stepOffset;
    setIndex(() => idx);

    if (ref.current) {
      ref.current.style.transform += `translateX(${gap}px)`;
    }
  };

  return (
    <>
      <div className={`relative mx-auto h-full w-[328px]  overflow-x-hidden sm:w-[786px]`}>
        <div className={`left-20 flex h-full items-center gap-5 transition-all`} ref={ref}>
          {items.map((item, idx) =>
            renderItem({
              item: item,
              index: idx,
              isSelected: index === idx,
              handleIndex: handleIndex,
            }),
          )}
        </div>
        {/** 캐로셀 슬라이더 버튼 */}
        <div className="absolute bottom-4 flex w-full justify-center gap-4 text-white sm:bottom-8">
          {Array.from({ length: items.length }, (_, i) => (
            <button
              key={i}
              value={i}
              className={`${
                index === i ? 'w-8 bg-orange-500' : 'w-[14px]'
              } h-[14px] origin-center rounded-full bg-black opacity-70 transition-all`}
              onClick={() => handleIndex(i)}
            ></button>
          ))}
        </div>
      </div>
      {/* 캐로셀 버튼 */}
      <div className="absolute left-1/2 top-1/2 h-2 w-[390px] -translate-x-1/2 -translate-y-1/2 self-center sm:w-[890px]">
        {index !== 0 && (
          <Button
            isIconOnly
            size="sm"
            radius="full"
            className=" absolute left-0  bg-black bg-opacity-70 text-white"
            onPress={() => handleIndex(index - 1)}
          >
            <IoIosArrowBack className="scale-150" />
          </Button>
        )}
        {index !== items.length - 1 && (
          <Button
            isIconOnly
            size="sm"
            radius="full"
            className="absolute right-0 bg-black bg-opacity-70 text-white"
            onPress={() => handleIndex(index + 1)}
          >
            <IoIosArrowForward className="scale-150" />
          </Button>
        )}
      </div>
    </>
  );
}
