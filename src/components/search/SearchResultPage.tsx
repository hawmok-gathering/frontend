'use client';

import React, { useState } from 'react';
import { Store } from '../StoreCard';

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
      <div className="flex w-full justify-end">
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
      ;
    </>
  );
}
