import BackgroundCard from '@/components/BackgroundCard';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import React from 'react';
import LikeLocationButton from '@/components/LikeLocationButton';
import MobileNavbar from '@/components/MobileNavbar';
import { MdOutlinePersonOutline } from 'react-icons/md';

const mokeLocations = ['서울 전체', '강남구', '마포구', '부산 전체', '해운대구', '부산진구'];

export default function EditPage() {
  const handleSubmit = async (form: FormData) => {
    // for now the form have nothing to submit.
    'use server';
    const { email } = Object.fromEntries(form.entries());
  };

  const handleFavorLocation = async () => {
    'use server';
    const url = '/api/test';
    const res = await fetch(url);
    console.log('testFn called');
  };

  return (
    <>
      <MobileNavbar className="px-4">
        <MdOutlinePersonOutline className="ml-auto scale-150 text-lg" />
      </MobileNavbar>
      {/* my page hero section */}
      <section className="w-full pt-16 sm:pt-24">
        <BackgroundCard
          radius="none"
          imgUrl="url('/my-page.jpg')"
          className="relative flex h-[206px] items-center justify-center bg-cover bg-center"
        >
          <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50" />
          <h1 className="z-[1] text-[40px] font-bold text-white">내 정보 수정</h1>
        </BackgroundCard>
      </section>

      <section className="mx-auto w-full max-w-[1180px] px-4 pt-20 sm:px-10 sm:pt-[162px]">
        <div className="mb-10 flex max-h-fit justify-between">
          <p className="text-[32px] font-bold">내 정보</p>
        </div>

        {/* edit my info section */}
        <form className="flex w-full flex-col" action={handleSubmit}>
          <div className="w-full border-b-2 border-t-2 border-t-[#7D7D7D]">
            <Input
              classNames={{
                base: 'h-[100px] py-6 px-2 sm:px-6',
                label:
                  'w-[84px] sm:w-[296px] text-sm sm:text-base font-bold text-secondary shrink-0',
                mainWrapper: 'h-[43px] sm:h-[68px] w-full',
                input: 'ml-5 ',
                inputWrapper: 'rounded-lg border border-[#F5F5F5] bg-[#FBFBFB]',
              }}
              name="email"
              label="이메일 (ID)"
              labelPlacement="outside-left"
              placeholder="abc@gmail.com"
              type="email"
              readOnly
            />
          </div>
          <div className="flex h-fit items-center border-b-2 border-[#7D7D7D] px-2 py-4 sm:px-6">
            <span className="w-[84px] shrink-0 text-sm font-bold text-secondary sm:w-[296px] sm:text-base">
              관심 지역
            </span>
            <div data-id="scrollWrapper">
              <div className=" flex flex-wrap gap-1 sm:gap-2">
                {/* 관심지역 추가 제거 버튼. */}
                {mokeLocations.map(location => (
                  <LikeLocationButton key={location} boolean={true} fn={handleFavorLocation}>
                    <b>{location}</b>
                  </LikeLocationButton>
                ))}
                <p className="mt-4 text-[10px] font-normal text-[#A8A8A8] sm:mt-6 sm:text-xs">
                  선택한 지역 근처의 회식 장소를 추천드려요 (복수 선택 가능)
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 py-20">
            <Button
              radius="none"
              className="h-12 w-[164px] border-1 border-[#ccc] text-sm font-bold text-secondary sm:text-base"
              variant="bordered"
            >
              취소
            </Button>
            <Button
              radius="none"
              className="h-12 w-[164px] text-sm font-bold text-white sm:text-base"
              color="primary"
              type="submit"
            >
              수정
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
