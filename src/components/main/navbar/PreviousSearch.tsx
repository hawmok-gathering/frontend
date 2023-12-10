'use client';

import { SearchParams } from '@/constants/constant';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import Link from 'next/link';
import { useRef } from 'react';
import { IoSearchSharp } from 'react-icons/io5';

type PreviousSearchProps = {
  isOpen: boolean;
  cursorLocation: number;
  history: { text: string; date: Date }[];
  setSearchHistory: (value: any) => void;
  setSearchOpen: (value: boolean) => void;
};

export default function PreviousSearch({
  isOpen,
  cursorLocation,
  history,
  setSearchHistory,
  setSearchOpen,
}: PreviousSearchProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onAllHistoryDelete = () => {
    setSearchHistory(() => []);
  };

  const onSingleHistoryDelete = (name: string) => {
    setSearchHistory(history.filter(({ text }) => name !== text));
  };

  if (!isOpen) {
    return null;
  }
  return (
    <Card className="absolute w-full" radius="sm" ref={ref}>
      <CardHeader className="mt-2 h-12 p-0 px-4">
        <span className="flex h-8 items-center text-sm font-medium">최근 검색어</span>
        <span
          className={'ml-auto px-0 text-sm font-normal text-[#6F6F6F] hover:cursor-pointer'}
          onClick={onAllHistoryDelete}
        >
          전체 삭제
        </span>
      </CardHeader>
      <CardBody className="p-0 pb-3">
        {history && history.length > 0 ? (
          history.map(({ text, date }, index) => (
            <PreviousSearch.searchHistory
              key={text}
              cursor={index === cursorLocation}
              name={text}
              date={date}
              onDelete={onSingleHistoryDelete}
              setSearchOpen={setSearchOpen}
            />
          ))
        ) : (
          <div className="flex h-[234px] items-center justify-center text-xs text-secondary">
            최근 검색어가 없습니다.
          </div>
        )}
      </CardBody>
    </Card>
  );
}

type SearchHistory = {
  name: string;
  cursor: boolean;
  date: Date;
  onDelete: (text: string) => void;
  setSearchOpen: (value: boolean) => void;
};

PreviousSearch.searchHistory = ({ name, cursor, date, onDelete, setSearchOpen }: SearchHistory) => {
  return (
    <div className={`flex h-9 ${cursor ? 'bg-[#ddd]' : ''} rounded-md px-4 `}>
      <Link
        className={` flex items-center justify-start`}
        href={`/search?${SearchParams.query}=${name}`}
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
};
