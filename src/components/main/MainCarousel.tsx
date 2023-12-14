'use client';

import React from 'react';
import Carousel from './Carousel';
import { Button, CardBody, Spacer } from '@nextui-org/react';
import BackgroundCard from '@/components/BackgroundCard';

export type Carousel = {
  title: string;
  tag: string;
  imgUrl: string;
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
  return (
    <Carousel
      items={sliderItems}
      renderItem={({ handleIndex, index, isSelected, item }) => (
        <BackgroundCard
          radius="sm"
          key={item.title + index}
          imgUrl={item.imgUrl}
          className={`h-[196px] w-[148px] shrink-0 cursor-pointer overflow-hidden bg-cover bg-center bg-origin-border font-bold text-white sm:h-[328px] sm:w-[248px] ${
            isSelected ? '-translate-y-8 ' : ''
          }`}
        >
          {/**gradient image*/}
          <div className="absolute h-full w-3/4 -translate-x-10 bg-opacity-20 bg-gradient-to-r from-black from-0% to-transparent to-90%"></div>
          <CardBody
            className="flex h-full flex-col justify-start overflow-hidden pb-9 pt-[83px] sm:pt-[197px]"
            onClick={() => handleIndex(index)}
          >
            <Button
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
