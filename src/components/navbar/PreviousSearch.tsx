"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useRef } from "react";

type PreviousSearchProps = {
  isOpen: boolean;
  cursorLocation: number;
  history: string[];
  setSearchHistory: (value: any) => void;
};

export default function PreviousSearch({
  isOpen,
  cursorLocation,
  history,
  setSearchHistory,
}: PreviousSearchProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onDelete = () => {
    setSearchHistory(() => []);
  };

  if (!isOpen) {
    return null;
  }
  return (
    <Card className="absolute w-full " radius="sm" ref={ref}>
      <CardHeader className="h-12 ">
        <p className="text-xs font-bold">최근 검색어</p>
        <Button
          variant="light"
          color="secondary"
          className="ml-auto hover:bg-none"
          onPress={onDelete}
        >
          전체 삭제
        </Button>
      </CardHeader>
      <CardBody>
        {history && history.length > 0 ? (
          history.map((text, index) => (
            <Link
              key={text}
              href={`/${text}`}
              className={`${cursorLocation === index ? "bg-secondary" : ""}`}
            >
              {text}
            </Link>
          ))
        ) : (
          <div className="flex justify-center items-center text-secondary text-xs p-8">
            최근 검색어가 없습니다.
          </div>
        )}
      </CardBody>
    </Card>
  );
}
