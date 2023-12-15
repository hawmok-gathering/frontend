'use client';

import { Image } from '@nextui-org/image';
import { Card } from '@nextui-org/card';
import Link from 'next/link';
import { LuDot } from 'react-icons/lu';
import { RxHeart } from 'react-icons/rx';
import { RxHeartFilled } from 'react-icons/rx';
export type Store = {
  storeId: number;
  name: string;
  store_image_url: string;
  phone: string;
  content: string;
  address: string;
  created_at: string;
  updated_at: string;
  weekday_start_time: string;
  weekday_end_time: string;
  weekend_start_time: string;
  weekend_end_time: string;
  hall_capacity: string;
  room_capacity: string;
  category: string;
};

type StoreCardProps = {
  store: Store;
  page: 'main' | 'search';
};

export default function StoreCard({ store, page }: StoreCardProps) {
  // const isMain = false;
  const isMain = page === 'main';
  return (
    <Card
      radius="none"
      className="h-fit max-w-[156px] bg-transparent sm:max-w-[260px]"
      shadow="none"
      // style={{
      //   height: isMain ? '394px' : '418px',
      // }}
    >
      <Link href={`/store/${store.storeId}`}>
        <Image
          src={store.store_image_url}
          radius="none"
          alt={store.content}
          isZoomed
          className="h-[168px] max-w-[156px] object-cover sm:h-[296px] sm:max-w-[260px]"
        ></Image>
      </Link>
      <div className="flex h-full flex-col pt-1 sm:pt-5">
        <div className="flex items-center justify-between sm:pb-1">
          <p className=" text-[10px] font-normal leading-[16px] text-secondary sm:text-xs">
            {store.category}
            <span>
              <LuDot className="inline" />
            </span>
            {store.address}
          </p>
          {isMain ? (
            <p className="text-[10px] font-bold leading-[16px] text-secondary sm:text-xs">
              수용인원 {store.hall_capacity}
            </p>
          ) : (
            <RxHeart className="cursor-pointer text-xl" />
            //TODO: like 에 따른 색 구분 .하트크기 조절
          )}
        </div>
        <Link href={`/store/${store.storeId}`}>
          <h3 className="text-sm font-bold leading-[22.4px] text-black sm:text-base sm:leading-[25px]">
            <span className={`${isMain ? '' : 'text-primary'}`}>[{store.address}]</span>
            {store.name}
          </h3>
        </Link>
        <div className=" mt-1 flex justify-between text-xs font-normal text-secondary sm:mt-4">
          <p className="leading-4">{store.address}</p>
          {isMain && <RxHeart className="cursor-pointer text-lg text-primary" />}
        </div>
        {!isMain && (
          <div className="flex items-center justify-between text-xs font-normal text-secondary">
            <RxHeartFilled className="inline text-lg" />
            <span className="ml-1 mr-auto">{' store.likes 명'}</span>

            <span className="mr-1 text-[10px] font-bold sm:text-xs">수용인원 </span>
            <span className="text-[10px] font-normal sm:text-xs">{store.hall_capacity}</span>
          </div>
        )}
      </div>
    </Card>
  );
}
