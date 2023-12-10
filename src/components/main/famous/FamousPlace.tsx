'use client';
import StoreCard, { Store } from '@/components/StoreCard';
import { Button } from '@nextui-org/button';
import { Spacer } from '@nextui-org/spacer';
import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { SlLocationPin } from 'react-icons/sl';

type FamousPlaceProps = {
  stores: Store[];
};

export default function FamousPlace({ stores }: FamousPlaceProps) {
  const [filtered, setFiltered] = useState('서울');

  let to = '서울';
  if (filtered === '서울') {
    to = '부산';
  }

  const famousStores = stores.filter(store => store.address === filtered);

  return (
    <>
      <div className="flex justify-between">
        <Button
          startContent={<SlLocationPin className="stroke-[5px] text-lg" />}
          variant="light"
          onPress={() => setFiltered(to)}
          className="mx-0 px-0 text-base font-bold text-secondary data-[hover=true]:bg-transparent"
        >
          {filtered} 전체
        </Button>
        <Button
          endContent={<IoIosArrowForward />}
          variant="light"
          className="text-base font-bold text-secondary data-[hover=true]:bg-transparent"
        >
          회식 장소 더보기
        </Button>
      </div>

      <Spacer y={8} />
      <div className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-5">
        {famousStores.map(store => (
          <StoreCard key={store.storeId} store={store} page="main" />
        ))}
      </div>
    </>
  );
}
