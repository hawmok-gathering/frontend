import { Spinner } from '@nextui-org/spinner';
import React from 'react';

export default function loading() {
  return (
    <div className="flex h-screen w-full grow items-center justify-center bg-black bg-opacity-20">
      <Spinner color="white" />
    </div>
  );
}
