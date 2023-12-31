import { Card } from '@nextui-org/card';
import Link from 'next/link';
import { LuDot } from 'react-icons/lu';
import { RxHeartFilled } from 'react-icons/rx';
import LikeButton from './LikeButton';
import { cn } from '@nextui-org/react';
import Image from 'next/image';
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

  const handleStoreLike = async () => {
    'use server';
    console.log('like clicked');
  };

  return (
    <Card
      radius="none"
      className="h-fit w-full max-w-[156px] text-ellipsis bg-transparent sm:max-w-[260px]"
      shadow="none"
    >
      <Link
        className="relative h-[168px] w-full max-w-[156px] sm:h-[296px] sm:max-w-[260px]"
        href={`/store/${store.storeId}`}
      >
        <Image src={store.store_image_url} alt={store.content} fill></Image>
      </Link>
      <div className="flex h-full flex-col pt-1 sm:pt-5">
        <div className="flex items-center justify-between sm:pb-1">
          <small
            className={cn(
              'text-[10px] font-normal leading-[16px] sm:text-xs',
              isMain ? 'text-[#F1F1F1]' : 'text-secondary',
            )}
          >
            {store.category}
            <span>
              <LuDot className="inline" />
            </span>
            {store.address}
          </small>
          {isMain ? (
            <small className="text-[10px] leading-[16px] text-[#F1F1F1] sm:text-xs">
              <b>수용인원 </b>
              {store.hall_capacity}
            </small>
          ) : (
            <LikeButton boolean={true} iconClassName="text-secondary" fn={handleStoreLike} />
            //TODO: like 에 따른 색 구분 .하트크기 조절
          )}
        </div>
        <Link href={`/store/${store.storeId}`}>
          <h3
            className={cn(
              'line-clamp-2 h-10 text-sm font-bold leading-[22.4px] sm:h-[50px] sm:text-base sm:leading-[25px] ',
              isMain ? 'text-white' : 'text-black',
            )}
          >
            <span className={`${isMain ? 'text-white' : 'text-primary'}`}>[{store.address}] </span>
            {store.name}
          </h3>
        </Link>
        <div
          className={cn(
            'mt-1 flex justify-between text-xs font-normal',
            isMain ? 'text-[#D9D9D9]' : ' text-secondary',
          )}
        >
          <p className="leading-4">{store.address}</p>
          {/* {isMain && <RxHeart className="cursor-pointer text-2xl text-primary" />} */}
          {isMain && <LikeButton boolean={true} fn={handleStoreLike} />}
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
