'use client';

import React, { useRef, useState } from 'react';
import { CardBody } from '@nextui-org/react';
import BackgroundCard from '@/components/BackgroundCard';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/button';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

export type Carousel = {
  title: string;
  tag: string;
  imgUrl: string;
};

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

const sliderItems: Carousel[] = [
  {
    title: '1차로 가기좋은',
    tag: '# 맛  # 든든한 한끼',
    imgUrl: 'url(/steak.jpg)',
  },
  {
    title: '2차에 딱맞는',
    tag: '# 1차로 끝내긴 아쉬울 때',
    imgUrl: 'url(/beer.webp)',
  },
  {
    title: '프라이빗 하게',
    tag: '# 조용한  # 분위기 좋은',
    imgUrl: 'url(/wine.jpg)',
  },
  {
    title: '테스트용 카드4',
    tag: '# 3번인덱스  # 태그 구분은 빈칸 두개',
    imgUrl: 'url(/soju.jpg)',
  },
];

export default function MainCarousel() {
  const router = useRouter();
  return (
    <Carousel
      items={sliderItems}
      renderItem={({ handleIndex, index, isSelected, item }) => (
        <BackgroundCard
          shadow="none"
          radius="sm"
          key={item.title + index}
          imgUrl={item.imgUrl}
          className={`h-[196px] w-[148px] shrink-0 cursor-pointer bg-cover bg-center bg-origin-border font-bold text-white sm:h-[328px] sm:w-[248px] ${
            isSelected ? '-translate-y-8 ' : ''
          }`}
        >
          {/**gradient image*/}
          <div className="absolute h-full w-3/4 -translate-x-10 bg-opacity-20 bg-gradient-to-r from-black from-0% to-transparent to-90%"></div>
          <CardBody
            className="flex h-full flex-col justify-start overflow-y-hidden pb-9 pt-[83px] sm:pt-[197px]"
            onClick={() => handleIndex(index)}
          >
            <Button
              onClick={() => router.push('/search?searchQuery=스테이크')}
              isIconOnly
              radius="full"
              size="sm"
              className="h-[24] w-[60px] bg-white px-3 py-3 text-[10px] font-bold leading-4 text-primary"
            >
              둘러보기
            </Button>

            <h3 className="mt-2 text-base leading-[25.6px]">{item.title}</h3>
            <span className="mt-4  text-[10px] font-normal leading-[16px] sm:text-xs ">
              {item.tag}
            </span>
          </CardBody>
        </BackgroundCard>
      )}
    ></Carousel>
  );
}

{
  /**  Carousel */
}

function Carousel<O extends Record<string | number | symbol, any>>({
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
        <div className="absolute bottom-8 flex w-full justify-center gap-4 text-white">
          {Array.from({ length: items.length }, (_, i) => (
            <button
              key={i}
              value={i}
              className={`${
                index === i ? 'w-8 bg-[#827C0A]' : 'w-[14px] bg-black opacity-70'
              } h-[14px] origin-center rounded-full transition-all`}
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
