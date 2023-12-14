'use client';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { cn } from '@nextui-org/react';

type ImageSliderPros = {
  imgUrls: string[];
};

export default function ImageSlider({ imgUrls }: ImageSliderPros) {
  const [imgIndex, setImageIndex] = useState<number>(0);

  const showNextImage = () => {
    setImageIndex(prev => {
      if (prev === imgUrls.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex(prev => {
      if (prev === 0) {
        return imgUrls.length - 1;
      }
      return prev - 1;
    });
  };

  return (
    <div className="relative flex h-full w-full overflow-hidden">
      {imgUrls.map((url, idx) => (
        <Image
          key={url + idx}
          src={url}
          alt="restaurant image"
          width={838}
          height={628}
          className="h-full w-full shrink-0 grow-0 object-cover "
          style={{ translate: `${imgIndex * -100}%`, transition: 'translate 300ms ease-in-out' }}
        ></Image>
      ))}
      <button
        className="absolute bottom-0 left-0 top-0 bg-none p-3 transition-all hover:bg-black hover:bg-opacity-50"
        onClick={showPrevImage}
      >
        <span className="inline-flex rounded-full bg-black bg-opacity-50 p-2">
          <IoIosArrowBack className="text-white" />
        </span>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 bg-none p-3 transition-all hover:bg-black hover:bg-opacity-50"
        onClick={showNextImage}
      >
        <span className="inline-flex rounded-full bg-black bg-opacity-50 p-2">
          <IoIosArrowForward className="text-white" />
        </span>
      </button>
      <div className="absolute bottom-10 flex w-full justify-center gap-4 ">
        {imgUrls.map((v, i) => (
          <button
            key={i + v}
            className={`${
              imgIndex === i ? ' bg-opacity-100' : 'bg-opacity-50'
            } h-[14px] w-[14px] rounded-full  bg-black  transition-all`}
            onClick={() => setImageIndex(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}
