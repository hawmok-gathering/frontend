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
  const stepOffset = -270;

  const handleIndex = (idx: number) => {
    if (idx === index) {
      return;
    }

    const gap = (idx - index) * stepOffset;
    setIndex(() => idx);

    if (ref.current) {
      ref.current.style.transform += `translateX(${gap}px)`;
    }
  };

  return (
    <>
      <div className={`relative mx-auto h-full w-[790px] overflow-x-hidden`}>
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
        <div className="absolute bottom-8 flex w-full justify-center gap-4 text-white">
          {Array.from({ length: items.length }, (_, i) => (
            <button
              key={i}
              value={i}
              className={`${
                index === i ? 'w-8 bg-yellow-500' : 'w-[14px]'
              } h-[14px] origin-center rounded-full bg-white opacity-50 transition-all`}
              onClick={() => handleIndex(i)}
            ></button>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 mx-auto my-auto w-[830px] -translate-y-1/2 self-center">
        {index !== 0 && (
          <Button
            isIconOnly
            radius="full"
            className=" absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white"
            onPress={() => handleIndex(index - 1)}
          >
            <IoIosArrowBack className="scale-150" />
          </Button>
        )}
        {index !== items.length - 1 && (
          <Button
            isIconOnly
            radius="full"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white"
            onPress={() => handleIndex(index + 1)}
          >
            <IoIosArrowForward className="scale-150" />
          </Button>
        )}
      </div>
    </>
  );
}

// const updatedChildren = React.Children.map<React.ReactNode, React.ReactElement | any>(
//   children,
//   (child: React.ReactElement, idx) => {
//     if (React.isValidElement(child)) {
//       const typedChild = child as React.ReactElement;
//       return React.cloneElement(typedChild, {
//         style: {
//           ...typedChild.props.style,
//           transform: index === idx ? 'translateY(-10%)' : '',
//         },
//         onClick: function () {
//           console.log('Element clicked!');
//         },
//         onPress: function () {
//           console.log('Element clicked!');
//         },
//       });
//     }
//   },
// );
