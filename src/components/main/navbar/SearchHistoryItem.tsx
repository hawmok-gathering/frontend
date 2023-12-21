import React from 'react';
import { SearchParams } from '@/constants/constant';
import Link from 'next/link';
import { IoSearchSharp } from 'react-icons/io5';

type SearchHistory = {
  name: string;
  cursor: boolean;
  date: Date;
  onDelete: (text: string) => void;
  setSearchOpen: (value: boolean) => void;
};

export default function SearchHistoryItem({
  name,
  cursor,
  date,
  onDelete,
  setSearchOpen,
}: SearchHistory) {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete(SearchParams.query);
  searchParams.append(SearchParams.query, name);

  return (
    <div className={`flex h-9 ${cursor ? 'bg-[#ddd]' : ''} rounded-md px-4 `}>
      <Link
        className={` flex items-center justify-start`}
        href={`/search?${searchParams}`}
        onClick={() => setSearchOpen(false)}
      >
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-default">
          <IoSearchSharp className="inline h-6 w-6 text-white" />
        </span>
        <span className="ml-[10px] text-sm font-normal text-[#616060]">{name}</span>
      </Link>
      <span className="ml-auto flex items-center gap-[10px] text-sm font-normal text-[#ABABAB]">
        <p>
          {new Intl.DateTimeFormat('ko-KR', {
            month: '2-digit',
            day: '2-digit',
          }).format(new Date(date))}
        </p>
        <button type="button" onClick={() => onDelete(name)}>
          삭제
        </button>
      </span>
    </div>
  );
}
