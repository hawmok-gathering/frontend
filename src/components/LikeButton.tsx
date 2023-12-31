'use client';

import React, { useOptimistic, useState } from 'react';
import { RxHeart } from 'react-icons/rx';
import { RxHeartFilled } from 'react-icons/rx';
import { cn } from '@nextui-org/react';

type LikeButtonProps = {
  boolean: boolean;
  iconLikeClassName?: string;
  iconClassName?: string;
  buttonClassName?: string;
  children?: React.ReactNode;
  fn: () => Promise<void>; // return Promise<void> now. but it will be Promise<something> later.
  displayWhenTrue?: React.ReactNode;
  displayWhenFalse?: React.ReactNode;
};

export default function LikeButton({
  boolean,
  iconLikeClassName,
  iconClassName,
  buttonClassName,
  fn,
  children,
}: LikeButtonProps) {
  const [booleanData, setBooleanData] = useState(boolean); // [value, setValue
  const [optimisticBooleanData, setOptimisticBooleanData] = useOptimistic(booleanData);

  const handleToggleLike = async () => {
    setOptimisticBooleanData(!boolean);
    await fn();
    //TODO: fn() 을실행한 결과 (리턴값) 을 받아서 처리해야함.
    setBooleanData(!boolean);
  };

  return (
    <button className={cn(buttonClassName)} onClick={handleToggleLike}>
      {optimisticBooleanData ? (
        <RxHeartFilled className={cn('cursor-pointer text-2xl text-primary', iconLikeClassName)} />
      ) : (
        <RxHeart className={cn('cursor-pointer text-2xl text-primary', iconClassName)} />
      )}
      {children}
    </button>
  );
}
