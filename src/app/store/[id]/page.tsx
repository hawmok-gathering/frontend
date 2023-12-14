import { mokStores } from '@/app/page';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { MdAccessTime } from 'react-icons/md';
import { MdOutlinePhone } from 'react-icons/md';
import React from 'react';
import InteractionButton from '@/components/InteractionButton';
import { RxHeart } from 'react-icons/rx';
import { RxHeartFilled } from 'react-icons/rx';
import { FiShare2 } from 'react-icons/fi';
import Clipboard from '@/components/store/Clipboard';

type StorePageProps = {
  params: { id: string };
};

export default function page({ params }: StorePageProps) {
  const storeInfo = mokStores[0];
  const isLiked = true;
  const fullUrl = process.env.front_end_origin + '/store/' + params.id;

  const handleLikeButton = async () => {
    'use server';
    console.log('like clicked');
  };

  const handleShareButton = async () => {
    'use server';
    console.log('share clicked');
  };

  return (
    <div className="mx-auto w-full max-w-[1180px] px-10 pt-24">
      {/* store name / location section */}
      <section>
        <p className="text-xs font-normal text-secondary">{storeInfo.address}</p>
        <h1 className="text-[40px] font-bold leading-[64px] text-primary">
          {`[${storeInfo.address}] `}
          <span className="text-black"> {storeInfo.name}</span>
        </h1>
        <p className="mt-2 text-base font-normal leading-[25.6px] text-[#5A5A5A]">
          {storeInfo.address}
        </p>
      </section>

      {/* store image section */}
      <section className="mt-7 flex justify-between">
        <div className="h-[628px] w-[838px] shrink-0 bg-slate-200"></div>
        {/* store simple info section */}
        <div className=" w-[242px] ">
          <div className="flex h-[332px] w-full shrink-0 items-center justify-center border-2 border-[#D9D9D9]">
            <div className="h-[268px] w-fit text-ellipsis whitespace-nowrap">
              <h3 className="mb-2 flex items-center gap-2 text-base font-bold leading-[25.6px]">
                <MdOutlinePersonOutline className="text-lg" />
                최대 수용 인원
              </h3>
              <p className=" mb-1 pl-7 text-sm leading-[22px]">
                <span className="font-bold">홀</span> : {storeInfo.hall_capacity} 명
              </p>
              <p className="pl-7 text-sm leading-[22px]">
                <span className="font-bold">룸</span> : {storeInfo.room_capacity} 명
              </p>
              <h3 className="mb-2 mt-6 flex items-center gap-2 text-base font-bold leading-[25.6px]">
                <MdAccessTime className="text-lg" />
                영업 시간
              </h3>
              <p className="mb-1 pl-7 text-sm leading-[22px]">
                <span className="font-bold">평일</span> : {storeInfo.weekday_start_time} ~{' '}
                {storeInfo.weekday_end_time}
              </p>
              <p className="pl-7 text-sm leading-[22px]">
                <span className="font-bold">주말</span> : {storeInfo.weekend_start_time} ~{' '}
                {storeInfo.weekend_end_time}
              </p>
              <h3 className="mb-2 mt-6 flex items-center gap-2 text-base font-bold leading-[25.6px]">
                <MdOutlinePhone className="text-lg" />
                전화번호
              </h3>
              <p className="pl-7 text-sm leading-[22px]">{storeInfo.phone}</p>
            </div>
          </div>
          <InteractionButton
            startContent={isLiked ? <RxHeartFilled className="text-red-500" /> : <RxHeart />}
            className="mt-4 text-base font-bold"
            variant="bordered"
            onPress={handleLikeButton}
          >
            관심장소
          </InteractionButton>
          <Clipboard
            copyText={fullUrl!}
            fullWidth
            radius="none"
            startContent={<FiShare2 className="text-white" />}
            className="mt-2 text-base font-bold text-white"
            color="primary"
          >
            공유하기
          </Clipboard>
        </div>
      </section>
    </div>
  );
}
