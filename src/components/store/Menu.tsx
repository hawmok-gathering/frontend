import React from 'react';
import BackgroundCard from '../BackgroundCard';

type MenuProps = {
  imgUrl: string;
  MenuName: string;
  price: number;
};

export default function Menu({ MenuName, imgUrl, price }: MenuProps) {
  return (
    <div className="flex h-[234px] w-full gap-6 border border-[#D9D9D9] px-6 py-8">
      <BackgroundCard
        radius="none"
        imgUrl={`url(${imgUrl})`}
        className="h-[170px] w-[253px] bg-cover bg-center"
      />
      <div className="flex flex-col justify-center">
        <p className="text-base font-bold leading-[25.6px]">{MenuName}</p>
        <p className="text-sm font-normal leading-[22.4px]">{price}원</p>
      </div>
    </div>
  );
}
