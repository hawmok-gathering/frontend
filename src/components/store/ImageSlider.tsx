'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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
          alt={`restaurant image ${idx}`}
          width={838}
          height={628}
          className="h-full w-full shrink-0 grow-0 object-cover "
          style={{ translate: `${imgIndex * -100}%`, transition: 'translate 300ms ease-in-out' }}
        ></Image>
      ))}
      <button
        className="absolute bottom-0 left-0 top-0 bg-none pl-4 transition-all hover:bg-black hover:bg-opacity-50 sm:p-3"
        onClick={showPrevImage}
        aria-label="view previous image"
      >
        <span className="inline-flex rounded-full bg-[#877560] bg-opacity-50 sm:p-2">
          <IoIosArrowBack className="text-white" />
        </span>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 bg-none pr-4 transition-all hover:bg-black hover:bg-opacity-50 sm:p-3"
        onClick={showNextImage}
        aria-label="view next image"
      >
        <span className="inline-flex rounded-full bg-[#877560] bg-opacity-50 sm:p-2">
          <IoIosArrowForward className="text-white" />
        </span>
      </button>
      <div className="absolute bottom-4 flex w-full justify-center gap-4 sm:bottom-10 ">
        {imgUrls.map((v, i) => (
          <button
            aria-label={`view image ${i + 1} of ${imgUrls.length}`}
            key={i + v}
            className={`${
              imgIndex === i ? ' bg-[#827C0A]' : 'bg-[#877560]'
            } h-2  w-2 rounded-full  transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:h-[14px] sm:w-[14px]`}
            onClick={() => setImageIndex(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}
