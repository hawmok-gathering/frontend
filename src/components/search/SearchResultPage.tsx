import React from 'react';
import StoreCard, { Store } from '../StoreCard';
import Link from 'next/link';

type SearchResultProps = {
  items: Store[];
  searchParams: { [key: string]: NonNullable<string | undefined> };
};

export default function SearchResult({ items, searchParams }: SearchResultProps) {
  const params = new URLSearchParams(searchParams);
  const sorted = params.get('sort');
  params.delete('sort');

  const length = items.length;

  return (
    <>
      <div className="flex max-w-full justify-end">
        <div
          className={`flex h-6 w-[82px] rounded-md bg-[#F1F1F1] p-0.5 text-[10px] sm:h-8 sm:w-[132px] sm:text-xs`}
        >
          <Link
            href={`?${params}&sort=latest`}
            className={`${
              sorted === 'latest' ? 'bg-primary text-white' : 'bg-transparent text-secondary'
            } box-border flex w-1/2 items-center justify-center rounded-sm font-bold sm:rounded-md `}
          >
            최신순
          </Link>
          <Link
            href={`?${params}&sort=pop`}
            className={`${
              sorted === 'latest' ? 'bg-transparent text-secondary' : 'bg-primary text-white'
            } box-border flex w-1/2 items-center justify-center rounded-sm font-bold sm:rounded-md `}
          >
            인기순
          </Link>
        </div>
      </div>
      <div className="flex h-7 items-center justify-start text-xs font-bold text-primary">
        <p>총 {length} 건</p>
      </div>
      <div className="grid grid-cols-2 justify-items-center gap-4 py-2 sm:grid-cols-4 sm:gap-5">
        {items.map(item => (
          <StoreCard page="search" store={item} key={item.storeId} />
        ))}
      </div>
    </>
  );
}
