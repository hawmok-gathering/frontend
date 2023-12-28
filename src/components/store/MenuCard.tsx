import React from 'react';
import BackgroundCard from '../BackgroundCard';

type MenuProps = {
  imgUrl: string;
  MenuName: string;
  price: number;
};

export default function MenuCard({ MenuName, imgUrl, price }: MenuProps) {
  return (
    <div className="flex h-[120px] w-full gap-3 border border-[#D9D9D9] p-4 sm:h-[234px] sm:gap-6 sm:px-6 sm:py-8">
      <BackgroundCard
        radius="none"
        imgUrl={`url(${imgUrl})`}
        className="h-full w-32 bg-cover bg-center sm:w-[253px]"
      />
      <div className="flex flex-col justify-center">
        <p className="text-sm font-bold leading-[22.4px] sm:text-base sm:leading-[25.6px]">
          {MenuName}
        </p>
        <p className="text-xs font-normal leading-[19.2px] sm:text-sm sm:leading-[22.4px]">
          {price}원
        </p>
      </div>
    </div>
  );
}
