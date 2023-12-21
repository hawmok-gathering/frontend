'use client';

import { MainNavBarComponent, SearchParams } from '@/constants/constant';
import useLocalStorage from '@/hooks/useLocalStorage';
import { Input } from '@nextui-org/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';
import { GrSearch } from 'react-icons/gr';
import { IoIosArrowBack } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';

export default function Page() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const { value: searchHistory, setValue: setSearchHistory } = useLocalStorage<any[]>(
    MainNavBarComponent.searchHistory,
    [],
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input || input.trim() === '') {
      return;
    }
    if (searchHistory && !searchHistory.find(history => history.text === input)) {
      setSearchHistory([{ text: input, date: new Date() }, ...searchHistory]);
    }
    const params = new URLSearchParams(window.location.search);

    params.delete(SearchParams.query);
    params.append(SearchParams.query, input);
    router.push(`/search?${params}`);
  };

  const onSingleHistoryDelete = (name: string) => {
    setSearchHistory(searchHistory.filter(({ text }) => name !== text));
  };

  return (
    <div className="flex h-full w-full flex-col px-4 pb-5">
      {/* searchInput and back navigation button*/}
      <nav className="flex h-14 items-center gap-6 bg-white text-xl font-bold leading-normal text-black sm:hidden">
        <Link href="/">
          <IoIosArrowBack className="text-xl font-extrabold text-secondary" />
        </Link>
        <form className="w-full" onSubmit={onSubmit}>
          <Input
            fullWidth
            height={32}
            radius="full"
            classNames={{
              inputWrapper: 'border-secondary border-2 h-[32px]',
              input: 'pl-9 placeholder:text-[#9E9E9E] ',
            }}
            size="sm"
            type="search"
            variant="bordered"
            placeholder={MainNavBarComponent.searchPlaceholder}
            startContent={
              <button type="submit">
                <GrSearch className="text-xl font-extrabold text-secondary" />
              </button>
            }
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </form>
      </nav>

      {/* search history title*/}
      <div className="mb-5 mt-12 flex text-sm font-normal">
        <span>최근 검색어</span>
        <button className="ml-auto text-[#CCCCCC]" onClick={() => setSearchHistory(() => [])}>
          전체 삭제
        </button>
      </div>

      {/* search history list*/}
      <div className="w-full flex-grow flex-col rounded-lg border-2 border-[#F1F1F1] px-4 py-5">
        {searchHistory && searchHistory.length > 0 ? (
          searchHistory.map(({ text, date }, index) => (
            <MobileSearchHistory
              key={text}
              name={text}
              date={date}
              onDelete={onSingleHistoryDelete}
            />
          ))
        ) : (
          <div className="flex h-[234px] items-center justify-center text-xs text-secondary">
            최근 검색어가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}

type SearchHistory = {
  name: string;
  date: Date;
  onDelete: (text: string) => void;
};

const MobileSearchHistory = ({ name, date, onDelete }: SearchHistory) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete(SearchParams.query);
  searchParams.append(SearchParams.query, name);

  return (
    <div className={`flex h-9 rounded-md `}>
      <Link className={` flex items-center justify-start`} href={`/search?${searchParams}`}>
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
