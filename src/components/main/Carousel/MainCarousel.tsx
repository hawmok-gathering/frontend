'use client';

import React from 'react';
import Carousel from '../Carousel';
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
          key={item.title + index}
          imgUrl={item.imgUrl}
          className={`h-[338px] w-[250px] shrink-0 cursor-pointer overflow-hidden bg-cover bg-center bg-origin-border font-bold text-white ${
            isSelected ? '-translate-y-10 ' : ''
          }`}
        >
          {/**gradient image*/}
          <div className="absolute h-full w-3/4 -translate-x-10 bg-opacity-20 bg-gradient-to-r from-black from-0% to-transparent to-90%"></div>
          <CardBody className="flex h-full flex-col py-12" onClick={() => handleIndex(index)}>
            <Button
              radius="full"
              className="mt-auto h-[26px] w-16 bg-white text-xs font-bold text-primary"
            >
              둘러보기
            </Button>
            <Spacer y={3} />
            <h3 className="text-2xl">{item.title}</h3>
            <Spacer y={6} />
            <span className="text-xs">{item.tag}</span>
          </CardBody>
        </BackgroundCard>
      )}
    ></Carousel>
  );
}
