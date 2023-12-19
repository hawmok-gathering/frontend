'use client';
import { useState } from 'react';
import React from 'react';
import StoreInfo from './StoreInfo';
import StoreMenu from './StoreMenu';

export default function StorDetailSection() {
  const [tab, setTab] = useState('info');
  return (
    <>
      <div className="mb-10 mt-20 flex sm:mb-20 sm:mt-40">
        <button
          onClick={() => setTab('info')}
          className={`flex h-9 w-1/2 items-start justify-center border-b-2 text-sm font-bold ${
            tab === 'info' ? 'border-primary  text-primary' : 'border-[#D9D9D9] text-[#ABABAB]'
          }`}
        >
          장소 정보
        </button>
        <button
          onClick={() => setTab('menu')}
          className={`flex h-9 w-1/2 items-start justify-center border-b-2 text-sm font-bold ${
            tab === 'info' ? ' border-[#D9D9D9] text-[#ABABAB]' : ' border-primary  text-primary'
          }`}
        >
          메뉴
        </button>
      </div>

      {/* store detail section */}

      {tab === 'info' && <StoreInfo />}
      {tab === 'menu' && <StoreMenu />}
    </>
  );
}
