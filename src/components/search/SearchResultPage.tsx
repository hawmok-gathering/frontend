'use client';

import React, { useState } from 'react';
import StoreCard, { Store } from '../StoreCard';

type SearchResultProps = {
  items: Store[];
};

export default function SearchResult({ items }: SearchResultProps) {
  const [sorted, setSort] = useState('latest');

  const length = items.length;

  let changeSort = 'latest';
  if (sorted === 'latest') {
    changeSort = 'pop';
  }
  return (
    <>
      <div className="flex max-w-full justify-end">
        <div className={`flex h-8 w-[132px] rounded-md bg-[#F1F1F1] p-0.5 text-xs`}>
          <button
            className={`${
              sorted === 'latest' ? 'bg-primary text-white' : 'bg-transparent text-secondary'
            } box-border flex w-1/2 items-center justify-center rounded-md font-bold `}
            onClick={() => setSort('latest')}
          >
            최신순
          </button>
          <button
            className={`${
              sorted === 'latest' ? 'bg-transparent text-secondary' : 'bg-primary text-white'
            } box-border flex w-1/2 items-center justify-center rounded-md font-bold `}
            onClick={() => setSort('pop')}
          >
            인기순
          </button>
        </div>
      </div>
      <div className="flex h-7 items-center justify-start text-xs font-bold text-primary">
        <p>총 {length} 건</p>
      </div>
      <div className="grid grid-cols-4 justify-items-center gap-5 py-4">
        {items.map(item => (
          <StoreCard page="search" store={item} key={item.storeId} />
        ))}
      </div>
    </>
  );
}
