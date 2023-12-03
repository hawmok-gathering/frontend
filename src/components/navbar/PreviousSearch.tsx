import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useRef } from "react";

type PreviousSearchProps = {
  isOpen: boolean;
  setInput: (text: string) => void;
};

export default function PreviousSearch({
  isOpen,
  setInput,
}: PreviousSearchProps) {
  const ref = useRef<HTMLDivElement>(null);

  if (!isOpen) {
    return null;
  }
  return (
    <Card className="absolute w-full " radius="sm" ref={ref}>
      <CardHeader className="h-12 ">
        <p className="text-sm">최근 검색어</p>
        <Button
          variant="light"
          color="secondary"
          className="ml-auto hover:bg-none"
        >
          전체 삭제
        </Button>
      </CardHeader>
      <CardBody>
        <Link href={"/auth"} onClick={() => setInput("임시")}>
          이동
        </Link>
      </CardBody>
    </Card>
  );
}
