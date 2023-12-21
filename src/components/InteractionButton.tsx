'use client';
import { Button } from '@nextui-org/button';
import React, { ComponentPropsWithRef } from 'react';

type InteractionButtonProps = {
  onPress: () => void;
} & Omit<ComponentPropsWithRef<typeof Button>, 'onPress'>;

export default function InteractionButton(props: InteractionButtonProps) {
  const { children, onPress, ...rest } = props;
  //TODO: Optimistic UI Update needed.
  // add favorite store to user's favorite list.

  return (
    <Button radius="none" fullWidth {...rest} onPress={async () => onPress()}>
      {children}
    </Button>
  );
}
