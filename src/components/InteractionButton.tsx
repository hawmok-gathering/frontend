'use client';
import { Button } from '@nextui-org/button';
import React, { ComponentPropsWithRef } from 'react';

type InteractionButtonProps = {
  onPress: () => void;
} & Omit<ComponentPropsWithRef<typeof Button>, 'onPress'>;

export default function InteractionButton(props: InteractionButtonProps) {
  const { children, onPress, ...rest } = props;

  return (
    <Button radius="none" fullWidth {...rest} onPress={async () => await onPress()}>
      {children}
    </Button>
  );
}
