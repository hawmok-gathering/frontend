import BackgroundCard from '@/components/BackgroundCard';
import React from 'react';
import { MdStorefront } from 'react-icons/md';
import { BiPencil } from 'react-icons/bi';
import { RxHeart } from 'react-icons/rx';
import Link from 'next/link';
import { mokStores } from '../page';
import StoreCard from '@/components/StoreCard';
import { MdOutlinePersonOutline } from 'react-icons/md';
import MobileNavbar from '@/components/MobileNavbar';

const temporalSession = {
  isLoggedIn: true,
  user: {
    name: '이상돈',
  },
};

type MyPageProps = {
  searchParams: { [key: string]: string | undefined };
};

export default async function page({ searchParams }: MyPageProps) {
  // const session = getSession();
  let sorted = searchParams.sorted ?? 'likes';

  return (
    <>
      <MobileNavbar className="px-4">
        <MdOutlinePersonOutline className="ml-auto scale-150 text-lg" />
      </MobileNavbar>
      <div className="w-full pb-20 pt-16 sm:pb-40 sm:pt-24">
        {/** my page hero section */}

        <BackgroundCard
          shadow="none"
          imgUrl="url('/my-page.jpg')"
          className={`relative flex flex-col items-center justify-evenly bg-cover bg-center py-10 sm:h-[426px] sm:py-0`}
          radius="none"
        >
          <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50" />
          <h1 className="z-[1] mb-10 text-2xl font-bold text-primary sm:mb-0 sm:text-[40px]">
            {temporalSession.user.name}
            <span className="text-white">님, 안녕하세요!</span>
          </h1>
          <div className="z-[1] flex h-[88px] w-fit items-center justify-center whitespace-nowrap bg-white px-4 text-xs font-bold text-black sm:h-[140px]  sm:px-24 sm:text-sm">
            <Link
              href="/my-page?sorted=watched"
              className="flex h-full flex-col items-center justify-center gap-2 sm:gap-4"
            >
              <MdStorefront className="text-xl" />
              최근 본 회식 장소
            </Link>
            <span className="h-fit px-2 text-lg font-bold text-gray-200 sm:h-10 sm:px-3 sm:text-3xl">
              |
            </span>
            <Link
              href="/my-page/edit"
              className="flex h-full flex-col items-center justify-center gap-2 sm:gap-4"
            >
              <BiPencil className="text-xl" />내 정보 수정
            </Link>
            <span className="h-fit px-2 text-lg font-bold text-gray-200 sm:h-10 sm:px-3 sm:text-3xl">
              |
            </span>
            <Link
              href="/my-page?sorted=likes"
              className="flex h-full flex-col items-center justify-center gap-2 sm:gap-4"
            >
              <RxHeart className="text-xl" />
              관심 회식 장소
            </Link>
          </div>
        </BackgroundCard>

        {/** sort button section */}
        <section className="mx-auto w-full max-w-[1180px] px-4 pt-[82px] sm:px-10 sm:pt-[162px]">
          <div
            className={`flex h-8 w-full rounded-md bg-[#F1F1F1] p-0.5 text-[10px] font-bold sm:w-[240px]`}
          >
            <Link
              href="/my-page?sorted=likes"
              scroll={false}
              className={`${
                sorted === 'likes' ? 'bg-primary text-white' : 'bg-transparent text-secondary'
              } box-border flex w-1/2 items-center justify-center rounded-md`}
            >
              관심 회식 장소{'( )'}
            </Link>
            <Link
              scroll={false}
              href="/my-page?sorted=watched"
              className={`${
                sorted === 'likes' ? 'bg-transparent text-secondary' : 'bg-primary text-white'
              } box-border flex w-1/2 items-center justify-center rounded-md`}
            >
              최근 본 회식 장소{'( )'}
            </Link>
          </div>

          {/** restaurant cars section */}
          <div className="mx-auto grid w-full grid-cols-2 justify-items-center gap-4 pt-[22px] sm:grid-cols-4 sm:gap-5 sm:pt-10">
            {mokStores.map(store => (
              <StoreCard page="search" store={store} key={store.storeId} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
