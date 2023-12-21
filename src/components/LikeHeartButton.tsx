'use client';

import React, { useOptimistic, useState } from 'react';
import { RxHeart } from 'react-icons/rx';
import { RxHeartFilled } from 'react-icons/rx';
import { cn } from '@nextui-org/react';

type LikeHeartButtonProps = {
  isLike: boolean;
  iconLikeClassName?: string;
  iconClassName?: string;
  buttonClassName?: string;
  children?: React.ReactNode;
};

export default function LikeHeartButton({
  isLike,
  iconLikeClassName,
  iconClassName,
  buttonClassName,
  children,
}: LikeHeartButtonProps) {
  const [like, setLike] = useState(isLike); // [value, setValue
  const [optimisticLike, setOptimisticLike] = useOptimistic(like);

  const handleToggleLike = async () => {
    setOptimisticLike(!isLike);
    //TODO:
    setLike(!isLike);
  };

  return (
    <button className={cn(buttonClassName)} onClick={handleToggleLike}>
      {optimisticLike ? (
        <RxHeartFilled className={cn('cursor-pointer text-2xl text-primary', iconLikeClassName)} />
      ) : (
        <RxHeart className={cn('cursor-pointer text-2xl text-primary', iconClassName)} />
      )}
      {children}
    </button>
  );
}
