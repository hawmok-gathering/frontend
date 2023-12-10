import SearchResultPage from '@/components/search/SearchResultPage';
import Selector from '@/components/search/Selector';
import { SearchParams } from '@/constants/constant';
import Link from 'next/link';
import React from 'react';

type SearchPageProps = {
  searchParams: { [key: string]: string | undefined };
};

export default async function page({ searchParams }: SearchPageProps) {
  const searchParam = searchParams[SearchParams.query];
  const sort = searchParams.sort ?? 'latest';

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
        {/* <div className="flex w-full justify-end">
          <div className={`flex h-8 w-[132px] rounded-md bg-[#F1F1F1] p-0.5 text-xs`}>
            <Link
              href={`?${new URLSearchParams({ ...searchParams, sort: 'latest' })}`}
              className={`${
                sort === 'latest' ? 'bg-primary text-white' : 'bg-transparent text-secondary'
              } box-border flex w-1/2 items-center justify-center rounded-md font-bold`}
            >
              최신순
            </Link>
            <Link
              href={`?${new URLSearchParams({ ...searchParams, sort: 'pop' })}`}
              className={`${
                sort === 'latest' ? 'bg-transparent text-secondary' : 'bg-primary text-white'
              } box-border flex w-1/2 items-center justify-center rounded-md font-bold`}
            >
              인기순
            </Link>
          </div>
        </div> */}
        <SearchResultPage items={[]} />
      </section>
    </div>
  );
}
