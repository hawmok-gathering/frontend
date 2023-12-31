'use client';

import React, { ComponentPropsWithoutRef, useState, useOptimistic } from 'react';
import { Button } from '@nextui-org/button';
import { cn } from '@nextui-org/react';

type LikeLocationButtonProps = ComponentPropsWithoutRef<typeof Button> & {
  boolean: boolean;
  fn: () => Promise<void>;
};

export default function LikeLocationButton(props: LikeLocationButtonProps) {
  const { children, boolean, className, ...rest } = props;
  const [booleanData, setBooleanData] = useState(boolean);
  const [optimisticBoolean, setOptimisticBoolean] = useOptimistic(booleanData);

  const handleToggleLike = async () => {
    setOptimisticBoolean(!boolean);
    await props.fn();
    setBooleanData(!boolean);
  };

  return (
    <Button
      onPress={handleToggleLike}
      color="primary"
      variant="bordered"
      radius="full"
      className={cn(
        'h-auto border-1 px-6 py-2 text-[10px] sm:text-xs',
        optimisticBoolean ? ' ' : 'border-black text-black',
        className,
      )}
      {...rest}
    >
      {children}
    </Button>
  );
}
