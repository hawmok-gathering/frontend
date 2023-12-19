import React, { useRef, useState } from 'react';
import Menu from './Menu';
import BackgroundCard from '../BackgroundCard';
import useDrag from '@/hooks/useDrag';
import useTouch from '@/hooks/useTouch';

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

  return (
    <>
      <h2 className="mb-10 text-[32px] font-bold">대표 메뉴</h2>
      <div className="flex flex-col">
        {/* <Menu imgUrl="/steak.jpg" MenuName="스테이크" price={1300} /> */}
        {mokMenu.map((menu, index) => (
          <Menu key={index} imgUrl={menu.imgUrl} MenuName={menu.name} price={menu.price} />
        ))}
      </div>
      <div className="my-20 w-full border-b-3 border-[#F1F1F1]" />
      <h2 className=" mb-10 text-[32px] font-bold">메뉴판</h2>
      <div className="mb-4 overflow-hidden">
        <div
          style={{ transform: `translateX(${containerX}px)` }}
          className="flex"
          {...useDrag(deltaX => {
            setContainerX(containerX + deltaX);
          })}
          {...useTouch(deltaX => {
            setContainerX(containerX + deltaX);
          })}
        >
          {mokMenu2.map(({ imgUrl }, index) => (
            <div key={imgUrl + index}>
              <BackgroundCard
                radius="none"
                imgUrl={`url(${imgUrl})`}
                className="h-60 w-80 shrink-0 bg-cover bg-center"
              />
            </div>
          ))}
        </div>
      </div>
      <small className="text-secondary">
        * 메뉴와 가격은 매장의 사정에 따라 변동될 수 있습니다
      </small>
    </>
  );
}
