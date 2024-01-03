import { SearchParams as ConstValueOfParams } from '@/constants/constant';
import React from 'react';
import { mokStores } from '../page';
import Link from 'next/link';
import StoreCard from '@/components/StoreCard';
import MobileNavbar from '@/components/MobileNavbar';
import Selector, { SearchParams } from './components/Selector';

type SearchPageProps = {
  searchParams: SearchParams & { sort: string };
};

export default async function page({ searchParams }: SearchPageProps) {
  const query = searchParams[ConstValueOfParams.query] ?? searchParams.location;
  const sorted = searchParams.sort ?? 'latest';
  const length = mokStores.length;

  // const { searchQuery, area, party, mood, table } = searchParams;
  //TODO: get rest Data form sever using searchQuery, area, party, mood, table and etc.
  //TODO: pass the data to SearchResultPage component.
  // select component will handle the state of searchParams.

  return (
    <div className="mx-auto w-full px-4 pt-2 sm:w-[1180px] sm:px-10 sm:pt-[100px]">
      {/* Title section */}
      <section className="relative">
        <h2 className="hidden text-center text-[40px] font-bold sm:block ">
          <span className="text-primary">{`'${query}'`}</span> 에 대한 검색 결과
        </h2>

        {/* Mobile only navbar */}
        <MobileNavbar>
          <p className="mx-auto pr-4 text-xl font-bold leading-normal">검색 결과</p>
        </MobileNavbar>
      </section>
      {/* Selector (filter) section */}
      <section className="mb-14 mt-10 sm:mb-10 sm:mt-[160px]">
        <Selector search={searchParams} />
      </section>

      {/* SearchResult section */}
      <section className="mb-10 sm:mb-20">
        {/* Sort section */}
        <div className="flex max-w-full justify-end">
          <div
            className={`flex h-6 w-[82px] rounded-md bg-[#F1F1F1] p-0.5 text-[10px] sm:h-8 sm:w-[132px] sm:text-xs`}
          >
            <Link
              href={{
                pathname: '/search',
                query: { ...searchParams, sort: 'latest' },
              }}
              scroll={false}
              className={`${
                sorted === 'latest' ? 'bg-primary text-white' : 'bg-transparent text-secondary'
              } box-border flex w-1/2 items-center justify-center rounded-sm font-bold sm:rounded-md `}
            >
              최신순
            </Link>
            <Link
              href={{
                pathname: '/search',
                query: { ...searchParams, sort: 'pop' },
              }}
              scroll={false}
              className={`${
                sorted === 'latest' ? 'bg-transparent text-secondary' : 'bg-primary text-white'
              } box-border flex w-1/2 items-center justify-center rounded-sm font-bold sm:rounded-md `}
            >
              인기순
            </Link>
          </div>
        </div>

        {/* SearchResult Card section */}
        <div className="flex h-7 items-center justify-start text-xs font-bold text-primary">
          <p>총 {length} 건</p>
        </div>
        <div className="grid grid-cols-2 justify-items-center gap-4 py-2 sm:grid-cols-4 sm:gap-5">
          {mokStores.map(item => (
            <StoreCard page="search" store={item} key={item.storeId} />
          ))}
        </div>
      </section>
    </div>
  );
}
