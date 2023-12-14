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
      <h2 className="mb-10 text-[32px] font-bold">장소 소개</h2>
      <div className="mb-4 flex flex-wrap gap-2">
        {tempInfoOne.map(info => (
          <Tag key={info.text} text={info.text} />
        ))}
      </div>
      <Card className="mb-20 px-6 py-8 text-sm font-normal" radius="sm">
        {description}
      </Card>
      <div className="mb-20 w-full border-b-3 border-[#F1F1F1]" />

      <div className="mb-5 flex">
        <span className="flex h-[372px] w-[140px] shrink-0 items-center justify-center bg-[#302F2D] text-[32px] font-bold text-white">
          홀 1
        </span>
        <div className="h-[372px]">
          <ImageSlider key="1st" imgUrls={['/steak.jpg', '/beer.webp', '/wine.jpg', '/soju.jpg']} />
        </div>
      </div>
      <div className="mb-20 flex">
        <span className="flex h-[372px] w-[140px] shrink-0 items-center justify-center bg-[#302F2D] text-[32px] font-bold text-white">
          홀 2
        </span>
        <div className="h-[372px]">
          <ImageSlider key="2st" imgUrls={['/steak.jpg', '/beer.webp', '/wine.jpg', '/soju.jpg']} />
        </div>
      </div>
      <div className="border-2 border-[#F1F1F1] px-6 py-8">
        <MiniTitle text="단체석 이용 안내" className="mb-10" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cumque nesciunt
          reprehenderit voluptatum! Est sit, aliquid repudiandae provident omnis maxime temporibus,
          consequatur minima explicabo perferendis hic. Quis assumenda similique quibusdam.
        </p>
        <MiniTitle text="편의 시설" className="mb-10 mt-20" />
        <ul className="list-disc px-6 text-base font-normal">
          <li>1번 편의시설</li>
          <li>2번 편의시설</li>
          <li>3번 편의시설</li>
        </ul>
        <MiniTitle text="매장 위치" className="mb-[30px] mt-20" />
        <div className="flex items-center gap-1 text-base font-normal">
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
  return <h3 className={cn('text-[32px] font-bold leading-[32px]', className)}>{text}</h3>;
};
