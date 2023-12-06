"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Link from "next/link";
import { useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";

type PreviousSearchProps = {
  isOpen: boolean;
  cursorLocation: number;
  history: { text: string; date: Date }[];
  setSearchHistory: (value: any) => void;
};

export default function PreviousSearch({
  isOpen,
  cursorLocation,
  history,
  setSearchHistory,
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
      <CardHeader className="h-12 p-0 px-4 mt-2">
        <span className="text-sm font-medium h-8 flex items-center">
          최근 검색어
        </span>
        <span
          className={
            "ml-auto px-0 hover:cursor-pointer font-normal text-[#6F6F6F] text-sm"
          }
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
            />
          ))
        ) : (
          <div className="flex justify-center h-[234px] items-center text-secondary text-xs">
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
};

PreviousSearch.searchHistory = ({
  name,
  cursor,
  date,
  onDelete,
}: SearchHistory) => {
  return (
    <div className={`flex h-9 ${cursor ? "bg-[#ddd]" : ""} rounded-md px-4 `}>
      <Link className={` flex justify-start items-center`} href={`/${name}`}>
        <span className="h-6 w-6 bg-default rounded-full inline-flex items-center justify-center">
          <IoSearchSharp className="inline w-6 h-6 text-white" />
        </span>
        <span className="ml-[10px] text-[#616060] text-sm font-normal">
          {name}
        </span>
      </Link>
      <span className="ml-auto flex gap-[10px] text-sm text-[#ABABAB] font-normal items-center">
        <p>
          {new Intl.DateTimeFormat("ko-KR", {
            month: "2-digit",
            day: "2-digit",
          }).format(new Date(date))}
        </p>
        <button type="button" onClick={() => onDelete(name)}>
          삭제
        </button>
      </span>
    </div>
  );
};
