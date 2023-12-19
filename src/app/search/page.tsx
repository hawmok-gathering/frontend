import SearchResultPage from '@/components/search/SearchResultPage';
import Selector from '@/components/search/select/Selector';
import { SearchParams } from '@/constants/constant';
import React from 'react';
import { mokStores } from '../page';
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';

type SearchPageProps = {
  searchParams: { [key: string]: string | undefined };
};

export default async function page({ searchParams }: SearchPageProps) {
  const searchParam = searchParams[SearchParams.query] ?? searchParams.area;

  const sort = searchParams.sort ?? 'latest';
  const stores = mokStores;

  const { searchQuery, area, party, feel, table } = searchParams;
  //TODO: get rest Data form sever using searchQuery, area, party, feel, table and etc.
  //TODO: pass the data to SearchResultPage component.
  // select component will handle the state of searchParams.

  return (
    <div className="mx-auto w-full px-4 pt-2 sm:w-[1180px] sm:px-10 sm:pt-[100px]">
      <section className="relative">
        <h2 className="hidden text-center text-[40px] font-bold sm:block ">
          <span className="text-primary">{`'${searchParam}'`}</span> 에 대한 검색 결과
        </h2>
        <h2 className="flex h-14 items-center justify-center text-xl font-bold leading-normal text-black sm:hidden">
          <Link href="/" className="absolute left-0">
            <IoIosArrowBack />
          </Link>
          검색 결과
        </h2>
      </section>
      <section className="mb-14 mt-10 sm:mb-10 sm:mt-[160px]">
        <Selector search={searchParams} />
      </section>
      <section className="mb-10 sm:mb-20">
        <SearchResultPage items={stores} />
      </section>
    </div>
  );
}
