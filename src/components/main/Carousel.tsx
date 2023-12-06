"use client";

import React, { useRef, useState } from "react";
import { CardSize } from "@/constants/constant";
import { Carousel } from "@/app/page";

type CarouselProps = {
  items: Carousel[];
  children: React.ReactNode;
};

export default function Carousel({ items, children }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const childrenCount = React.Children.count(children);
  const [index, setIndex] = useState(1);

  const updatedChildren = React.Children.map<
    React.ReactNode,
    React.ReactElement | any
  >(children, (child: React.ReactElement, idx) =>
    React.cloneElement(child, {
      style: {
        ...child.props.style,
        transform: index === idx ? "translateY(-10%)" : "",
      },
    })
  );

  //TODO: change stepOffset to dynamic value
  const stepOffset = 270;
  // console.log(carouselRef.current?.offsetTop);

  return (
    <div className={`h-full relative w-[790px] mx-auto`}>
      <div
        ref={carouselRef}
        className={`flex mx-auto gap-${CardSize.CarouselGap} overflow-x-hidden h-full items-center`}
      >
        {updatedChildren}
      </div>
      {/** 캐로셀 슬라이더 버튼 */}
      <div className="w-full absolute text-white bottom-8 flex justify-center gap-4">
        {Array.from({ length: childrenCount }, (_, i) => (
          <button
            key={i}
            value={i}
            className={`${
              index === i ? "w-8 bg-yellow-500" : "w-[14px]"
            } h-[14px] rounded-full bg-white opacity-50 transition-all origin-center`}
            onClick={() => setIndex(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}
