import { Card } from '@nextui-org/card';
import React from 'react';
import { cn } from '@nextui-org/react';
import { GrHomeRounded } from 'react-icons/gr';
import ImageSlider from './ImageSlider';

const tempInfoOne = [
  {
    text: '1차 회식',
  },
  { text: '2차 회식' },
  { text: '3차 회식' },
  { text: '대규모 회식' },
  { text: '소규모 회식' },
];

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;

export default function StoreInfo() {
  return (
    <>
      <h2 className="mb-6 text-xl font-bold sm:mb-10 sm:text-[32px]">장소 소개</h2>
      <div className="mb-4 flex flex-wrap gap-2">
        {tempInfoOne.map(info => (
          <Tag key={info.text} text={info.text} />
        ))}
      </div>
      <Card className="mb-10 px-4 py-6 text-sm font-normal sm:mb-20 sm:px-6 sm:py-8" radius="sm">
        {description}
      </Card>

      {/* divider */}
      <div className="mb-10 w-full border-b-3 border-[#F1F1F1] sm:mb-20" />

      <div className="mb-5 flex h-40 sm:h-[372px]">
        <span className="flex w-14 shrink-0 items-center justify-center bg-[#302F2D] text-base font-bold text-white sm:w-[140px] sm:text-[32px]">
          홀 1
        </span>
        <div>
          <ImageSlider key="1st" imgUrls={['/steak.jpg', '/beer.webp', '/wine.jpg', '/soju.jpg']} />
        </div>
      </div> 
      <div className="mb-10 flex h-40 sm:mb-20 sm:h-[372px]">
        <span className="flex w-14 shrink-0 items-center justify-center bg-[#302F2D] text-base font-bold text-white sm:w-[140px] sm:text-[32px]">
          홀 2
        </span>
        <div>
          <ImageSlider key="2st" imgUrls={['/steak.jpg', '/beer.webp', '/wine.jpg', '/soju.jpg']} />
        </div>
      </div>
      <div className="border-2 border-[#F1F1F1] px-4 py-6 sm:px-6 sm:py-8">
        <MiniTitle text="단체석 이용 안내" className="mb-5 sm:mb-10" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cumque nesciunt
          reprehenderit voluptatum! Est sit, aliquid repudiandae provident omnis maxime temporibus,
          consequatur minima explicabo perferendis hic. Quis assumenda similique quibusdam.
        </p>
        <MiniTitle text="편의 시설" className="mb-5 mt-10 sm:mb-10 sm:mt-20" />
        <ul className="list-disc px-6 text-xs font-normal leading-[19.2px] sm:text-base sm:leading-6">
          <li>1번 편의시설</li>
          <li>2번 편의시설</li>
          <li>3번 편의시설</li>
        </ul>
        <MiniTitle text="매장 위치" className="mb-8 mt-10 sm:mb-[30px] sm:mt-20" />
        <div className="flex items-center gap-2 text-xs font-normal sm:text-base">
          <GrHomeRounded className="inline" /> <span>주소</span>
        </div>
      </div>
    </>
  );
}

const Tag = ({ text }: { text: string }) => {
  return (
    <span className="inline-flex h-6 items-center justify-center rounded-full border border-primary px-3 py-2 text-xs font-bold text-primary">
      # {text}
    </span>
  );
};

const MiniTitle = ({ text, className }: { text: string; className?: string }) => {
  return (
    <h3 className={cn('text-base font-bold leading-[32px] sm:text-[32px]', className)}>{text}</h3>
  );
};
