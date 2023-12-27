'use client';

import { Card, CardHeader, CardBody } from '@nextui-org/card';
import SearchHistoryItem from './SearchHistoryItem';

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
    <Card
      className="absolute top-9 w-full border-[#ccc] bg-white sm:border"
      radius="sm"
      shadow="none"
    >
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
            <SearchHistoryItem
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
