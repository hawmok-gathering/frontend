import BackgroundCard from '@/components/BackgroundCard';
import React from 'react';
import { MdStorefront } from 'react-icons/md';
import { BiPencil } from 'react-icons/bi';
import { RxHeart } from 'react-icons/rx';
import Link from 'next/link';
import { mokStores } from '../page';
import StoreCard from '@/components/StoreCard';

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
    <div className="w-full pt-24">
      {/** my page hero section */}
      <BackgroundCard
        shadow="none"
        imgUrl="url('/my-page.jpg')"
        className={`relative flex h-[426px] flex-col items-center justify-evenly bg-cover bg-center`}
        radius="none"
      >
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50" />
        <h1 className="z-[1] text-[40px] font-bold text-primary">
          {temporalSession.user.name}
          <span className="text-white">님, 안녕하세요!</span>
        </h1>
        <div className="z-[1] flex h-[140px] w-[520px] items-center justify-center bg-white text-black">
          <Link
            href="/my-page?sorted=watched"
            className="flex h-full flex-col items-center justify-center gap-4 text-sm font-bold"
          >
            <MdStorefront className="text-xl" />
            최근 본 회식 장소
          </Link>
          <span className=" h-10 px-3 text-3xl font-bold text-gray-200"> | </span>
          <Link
            href="/my-page/edit"
            className="flex h-full flex-col items-center justify-center gap-4 text-sm font-bold"
          >
            <BiPencil className="text-xl" />내 정보 수정
          </Link>
          <span className=" h-10 px-3 text-3xl font-bold text-gray-200"> | </span>
          <Link
            href="/my-page?sorted=likes"
            className="flex h-full flex-col items-center justify-center gap-4 text-sm font-bold"
          >
            <RxHeart className="text-xl" />
            관심 회식 장소
          </Link>
        </div>
      </BackgroundCard>

      {/** sort button section */}
      <section className="mx-auto w-full max-w-[1180px] px-10 pt-[162px]">
        <div className={`flex h-8 w-[240px] rounded-md bg-[#F1F1F1] p-0.5 text-[10px] font-bold`}>
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
        <div className="mx-auto grid w-full grid-cols-4 justify-items-center gap-5 pt-10">
          {mokStores.map(store => (
            <StoreCard page="search" store={store} key={store.storeId} />
          ))}
        </div>
      </section>

      {/* <section className="mx-auto grid w-full max-w-[1180px] grid-cols-4 justify-items-center gap-5 px-10 pt-10">
        {mokStores.map(store => (
          <StoreCard page="search" store={store} key={store.storeId} />
        ))}
      </section> */}
    </div>
  );
}
