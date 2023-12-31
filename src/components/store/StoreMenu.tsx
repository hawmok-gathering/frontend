import React, { useRef, useState } from 'react';
import MenuCard from './MenuCard';
import BackgroundCard from '../BackgroundCard';
import useDrag from '@/hooks/useDrag';
import useTouch from '@/hooks/useTouch';
import { useDisclosure } from '@nextui-org/react';
import BottomSheet from '../BottomSheet';
import ImageSlider from './ImageSlider';

const mokMenu = [
  { name: '스테이크', price: 1300, imgUrl: '/steak.jpg' },
  { name: '스테이크', price: 1300, imgUrl: '/steak.jpg' },
  { name: '스테이크', price: 1300, imgUrl: '/steak.jpg' },
  { name: '스테이크', price: 1300, imgUrl: '/steak.jpg' },
  { name: '스테이크', price: 1300, imgUrl: '/steak.jpg' },
];

const mokMenu2 = [
  { imgUrl: '/steak.jpg' },
  { imgUrl: '/steak.jpg' },
  { imgUrl: '/steak.jpg' },
  { imgUrl: '/steak.jpg' },
  { imgUrl: '/steak.jpg' },
];

//드래그 이미지 슬라이더

export default function StoreMenu() {
  const [containerX, setContainerX] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const menuSectionRef = useRef<HTMLDivElement>(null);

  const handleImageDrag = (deltaX: number) => {
    const containerWidth = menuContainerRef.current?.scrollWidth;
    const sectionWidth = menuSectionRef.current?.offsetWidth;

    if (containerX + deltaX > 0) {
      setContainerX(0);
    } else if (containerX + deltaX < -containerWidth! + sectionWidth!) {
      setContainerX(-containerWidth! + sectionWidth!);
    } else {
      setContainerX(containerX + deltaX);
    }
  };

  return (
    <>
      <h2 className="mb-6 text-xl font-bold sm:mb-10 sm:text-[32px]">대표 메뉴</h2>
      <div className="flex flex-col gap-4 ">
        {/* <Menu imgUrl="/steak.jpg" MenuName="스테이크" price={1300} /> */}
        {mokMenu.map((menu, index) => (
          <MenuCard key={index} imgUrl={menu.imgUrl} MenuName={menu.name} price={menu.price} />
        ))}
      </div>
      {/* divider */}
      <div className="my-10 w-full border-b-3 border-[#F1F1F1] sm:my-20" />

      <h2 className=" mb-6 text-xl font-bold sm:mb-10 sm:text-[32px]">메뉴판</h2>
      <div ref={menuSectionRef} className="mb-4 overflow-hidden">
        <BottomSheet
          onClose={onClose}
          height="100%"
          className="rounded-t-none bg-black bg-opacity-70" // opacity ??
          isOpen={isOpen}
          triggerContent={
            <div
              onClick={onOpen}
              ref={menuContainerRef}
              draggable={false}
              style={{ transform: `translateX(${containerX}px)` }}
              className="flex h-[120px] cursor-pointer gap-2 sm:h-60"
              {...useDrag(handleImageDrag)}
              {...useTouch(handleImageDrag)}
            >
              {mokMenu2.map(({ imgUrl }, index) => (
                <BackgroundCard
                  onPress={() => console.log('hit!')}
                  key={imgUrl + index}
                  draggable={false}
                  radius="none"
                  imgUrl={`url(${imgUrl})`}
                  className=" relative h-full w-40 shrink-0 bg-cover bg-center sm:w-80"
                >
                  {/* <div className="w-ful absolute h-full" onClick={() => console.log('hit!')} /> */}
                </BackgroundCard>
              ))}
            </div>
          }
          bodyContent={
            <div className="my-auto h-1/3 sm:mx-auto sm:h-auto sm:w-2/3">
              <ImageSlider imgUrls={mokMenu2.map(store => store.imgUrl)}></ImageSlider>
            </div>
          }
        ></BottomSheet>
        {/* <div
          onClick={() => console.log('hit!')}
          ref={menuContainerRef}
          draggable={false}
          style={{ transform: `translateX(${containerX}px)` }}
          className="flex h-[120px] cursor-pointer gap-2 sm:h-60"
          {...useDrag(handleImageDrag)}
          {...useTouch(handleImageDrag)}
        > */}
        {/* {mokMenu2.map(({ imgUrl }, index) => (
          <BackgroundCard
            onPress={() => console.log('hit!')}
            key={imgUrl + index}
            draggable={false}
            radius="none"
            imgUrl={`url(${imgUrl})`}
            className=" relative h-full w-40 shrink-0 bg-cover bg-center sm:w-80"
          />
        ))} */}
        {/* </div> */}
      </div>
      <small className="text-secondary">
        * 메뉴와 가격은 매장의 사정에 따라 변동될 수 있습니다
      </small>
    </>
  );
}
