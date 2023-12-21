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
import StorDetailSection from '@/components/store/StorDetailSection';
import ImageSlider from '@/components/store/ImageSlider';

type StorePageProps = {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
};

export default async function page({ params, searchParams }: StorePageProps) {
  const storeInfo = mokStores[0];
  const tab = searchParams.tab ?? 'info';
  const isLiked = true;
  const fullUrl = process.env.front_end_origin + '/store/' + params.id;

  const handleLikeButton = async () => {
    'use server';
    console.log('like clicked');
  };

  return (
    <>
      <div className="mx-auto w-full px-4 pt-10 sm:max-w-[1180px] sm:px-10 sm:pt-24">
        {/* store name / location section */}
        <section>
          <p className="mb-1 text-[10px] font-normal leading-4 text-secondary sm:mb-2 sm:text-xs">
            {storeInfo.address}
          </p>
          <h1 className="mb-2 text-2xl font-bold leading-[38.4px] text-primary sm:text-[40px] sm:leading-[64px] ">
            {`[${storeInfo.address}] `}
            <span className="text-black"> {storeInfo.name}</span>
          </h1>
          <p className="text-[11px] font-normal leading-[17.6px] text-[#5A5A5A] sm:text-base sm:leading-[25.6px]">
            {storeInfo.address}
          </p>
        </section>

        {/* store image section */}
        <section className="mt-7 flex flex-col justify-between gap-4 sm:flex-row">
          <div className="h-[255px] w-full shrink-0 sm:h-[628px] sm:max-w-[838px] ">
            <ImageSlider imgUrls={['/wine.jpg', '/beer.webp', '/soju.jpg']} />
          </div>
          {/* store simple info section */}
          <div className="w-full">
            <div className="flex w-full shrink-0 justify-between text-ellipsis whitespace-nowrap border-2 border-[#D9D9D9] px-4 py-5 sm:flex-col sm:items-start sm:justify-center sm:gap-6 sm:px-6 sm:py-8">
              <div>
                <h3 className="mb-2 flex items-center gap-2 text-xs font-bold leading-[19.2px] sm:text-base sm:leading-[25.6px]">
                  <MdOutlinePersonOutline className="text-lg" />
                  최대 수용 인원
                </h3>
                <p className=" mb-1 pl-7 text-[10px] leading-4 sm:text-sm sm:leading-[22px]">
                  <span className="font-bold">홀</span> : {storeInfo.hall_capacity} 명
                </p>
                <p className="pl-7 text-[10px] leading-4 sm:text-sm sm:leading-[22px]">
                  <span className="font-bold">룸</span> : {storeInfo.room_capacity} 명
                </p>
              </div>
              <div>
                <h3 className="mb-2 flex items-center gap-2 text-xs font-bold leading-[19.2px] sm:text-base sm:leading-[25.6px]">
                  <MdAccessTime className="text-lg" />
                  영업 시간
                </h3>
                <p className="mb-1 pl-7 text-[10px] leading-4 sm:text-sm sm:leading-[22px]">
                  <span className="font-bold">평일</span> : {storeInfo.weekday_start_time} ~{' '}
                  {storeInfo.weekday_end_time}
                </p>
                <p className="pl-7 text-[10px] leading-4 sm:text-sm sm:leading-[22px]">
                  <span className="font-bold">주말</span> : {storeInfo.weekend_start_time} ~{' '}
                  {storeInfo.weekend_end_time}
                </p>
              </div>
              <div className="hidden sm:block">
                <h3 className="mb-2 flex items-center gap-2 text-base font-bold leading-[25.6px]">
                  <MdOutlinePhone className="text-lg" />
                  전화번호
                </h3>
                <p className="pl-7 text-sm leading-[22px]">{storeInfo.phone}</p>
              </div>
            </div>
            <InteractionButton
              startContent={isLiked ? <RxHeartFilled className="text-red-500" /> : <RxHeart />}
              className="mt-4 hidden text-base font-bold sm:flex"
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
              className="mt-2 hidden text-base font-bold text-white sm:flex"
              color="primary"
            >
              공유하기
            </Clipboard>
          </div>
        </section>

        {/* store menu / info selection section */}
        <section className="pb-[45px] sm:pb-40">
          <StorDetailSection />
        </section>

        {/*Mobile only making call button*/}
        <section className="flex gap-[10px] py-[10px] pb-20 sm:hidden">
          <InteractionButton
            radius="md"
            isIconOnly
            startContent={
              isLiked ? <RxHeartFilled className="text-2xl text-red-500" /> : <RxHeart />
            }
            className="h-[60px] w-[58px] shrink-0 text-base font-bold"
            variant="bordered"
            onPress={handleLikeButton}
          />
          <InteractionButton
            radius="md"
            className="h-[60px] w-full text-[18.35px] font-bold text-white"
            variant="solid"
            color="primary"
            onPress={handleLikeButton}
          >
            전화 하기
          </InteractionButton>
        </section>
      </div>
    </>
  );
}
