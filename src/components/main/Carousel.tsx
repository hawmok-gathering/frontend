'use client';

import React, { useRef, useState } from 'react';
import { CardSize } from '@/constants/constant';
import { Carousel } from '@/app/page';

type CarouselProps = {
  items: Carousel[];
  children: React.ReactNode;
};

export default function Carousel({ items, children }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const childrenCount = React.Children.count(children);
  const [index, setIndex] = useState(1);

  const updatedChildren = React.Children.map<React.ReactNode, React.ReactElement | any>(
    children,
    (child: React.ReactElement, idx) =>
      React.cloneElement(child, {
        style: {
          ...child.props.style,
          transform: index === idx ? 'translateY(-10%)' : '',
        },
      }),
  );

  //TODO: change stepOffset to dynamic value
  const stepOffset = 270;
  // console.log(carouselRef.current?.offsetTop);

  return (
    <div className={`relative mx-auto h-full w-[790px]`}>
      <div ref={carouselRef} className={`flex h-full items-center gap-5 overflow-x-hidden`}>
        {updatedChildren}
      </div>
      {/** 캐로셀 슬라이더 버튼 */}
      <div className="absolute bottom-8 flex w-full justify-center gap-4 text-white">
        {Array.from({ length: childrenCount }, (_, i) => (
          <button
            key={i}
            value={i}
            className={`${
              index === i ? 'w-8 bg-yellow-500' : 'w-[14px]'
            } h-[14px] origin-center rounded-full bg-white opacity-50 transition-all`}
            onClick={() => setIndex(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}
