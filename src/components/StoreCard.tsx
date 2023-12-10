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
      className="h-[394px] max-w-[260px] bg-transparent"
      shadow="none"
      style={{
        height: isMain ? '394px' : '418px',
      }}
    >
      <Link href={`/${store.storeId}`}>
        <Image
          src={store.store_image_url}
          radius="none"
          alt={store.content}
          isZoomed
          className="h-[296px] max-w-[260px] object-cover"
        ></Image>
      </Link>
      <div className="flex h-full flex-col pt-5">
        <div className="flex justify-between pb-1 text-xs font-normal text-secondary">
          <p>
            {store.category}
            <span>
              <LuDot className="inline" />
            </span>
            {store.address}
          </p>
          {isMain ? (
            <p>수용인원 {store.hall_capacity}</p>
          ) : (
            <RxHeart className="cursor-pointer text-lg" />
            //TODO: like 에 따른 색 구분
          )}
        </div>
        <Link href={`/${store.storeId}`}>
          <h3 className="text-base font-bold text-black">
            <span className={`${isMain ? '' : 'text-primary'}`}>[{store.address}]</span>{' '}
            {store.name}
          </h3>
        </Link>
        <div className="mt-auto flex justify-between text-xs font-normal text-secondary">
          <p className="leading-4 ">{store.address}</p>
          {isMain && <RxHeart className="cursor-pointer text-lg text-primary" />}
        </div>
        {!isMain && (
          <div className="flex items-center justify-between text-xs font-normal text-secondary">
            <p className="leading-4 ">
              <span>
                <RxHeartFilled className="inline text-base" />
              </span>
              {' store.likes 명'}
            </p>
            <p>수용인원 {store.hall_capacity}</p>
          </div>
        )}
      </div>
    </Card>
  );
}
