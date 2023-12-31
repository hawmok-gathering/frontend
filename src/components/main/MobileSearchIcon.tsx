'use client';
import React, { FormEvent, useState } from 'react';
import BottomSheet from '../BottomSheet';
import { Input, useDisclosure } from '@nextui-org/react';
import { GrSearch } from 'react-icons/gr';
import { useRouter } from 'next/navigation';
import useLocalStorage from '@/hooks/useLocalStorage';
import { MainNavBarComponent, SearchParams } from '@/constants/constant';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';

export default function MobileSearchIcon() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    onClose();
    router.push(`/search?${params}`);
  };

  const onSingleHistoryDelete = (name: string) => {
    setSearchHistory(searchHistory.filter(({ text }) => name !== text));
  };

  return (
    <BottomSheet
      height="100%"
      hideCloseButton={true}
      className={'rounded-t-none'}
      isOpen={isOpen}
      onClose={onClose}
      // Icon
      triggerContent={
        <button className="ml-auto" onClick={onOpen}>
          <GrSearch className="text-xl font-extrabold text-secondary" />
        </button>
      }
      // main content as children
      bodyContent={
        <div className="flex h-full w-full flex-col px-4">
          {/* searchInput and back navigation button*/}
          <nav className="flex h-14 items-center gap-6 bg-white text-xl font-bold leading-normal text-black sm:hidden">
            <button onClick={onClose}>
              <IoIosArrowBack className="text-xl font-extrabold text-secondary" />
            </button>
            <form className="w-full" onSubmit={onSubmit}>
              <Input
                fullWidth
                height={32}
                radius="full"
                classNames={{
                  inputWrapper: 'border-[#ccc] border h-[32px]',
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
          <div className="w-full flex-grow flex-col rounded-lg px-4 py-5">
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
      }
    />
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
    <div className={`flex h-9 gap-[10px] rounded-md`}>
      <Link className={` flex w-full items-center justify-start`} href={`/search?${searchParams}`}>
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-default">
          <IoSearchSharp className="inline h-6 w-6 text-white" />
        </span>
        <span className="ml-[10px] text-sm font-normal text-[#616060]">{name}</span>
        <span className="ml-auto flex items-center gap-[10px] text-sm font-normal text-[#ABABAB]">
          <p>
            {new Intl.DateTimeFormat('ko-KR', {
              month: '2-digit',
              day: '2-digit',
            }).format(new Date(date))}
          </p>
        </span>
      </Link>
      <button
        type="button"
        className="shrink-0 text-sm font-normal text-[#ABABAB]"
        onClick={() => onDelete(name)}
      >
        삭제
      </button>
    </div>
  );
};
