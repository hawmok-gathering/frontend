import SearchResultPage from '@/components/search/SearchResultPage';
import Selector from '@/components/search/select/Selector';
import { SearchParams } from '@/constants/constant';
import Link from 'next/link';
import React from 'react';
import { mokStores } from '../page';

type SearchPageProps = {
  searchParams: { [key: string]: string | undefined };
};

export default async function page({ searchParams }: SearchPageProps) {
  const searchParam = searchParams[SearchParams.query] ?? searchParams.area;
  const sort = searchParams.sort ?? 'latest';
  const stores = mokStores;

  //TODO: get API here.
  return (
    <div className="mx-auto w-[1180px] px-10 pt-[100px]">
      <section>
        <h2 className="text-center text-[40px] font-bold">
          <span className="text-primary">{`'${searchParam}'`}</span> 에 대한 검색 결과
        </h2>
      </section>
      <section className="mb-10 mt-[160px]">
        <Selector search={searchParams} />
      </section>
      <section>
        <SearchResultPage items={stores} />
      </section>
    </div>
  );
}
