'use client';

import { ComponentPropsWithoutRef, useState } from 'react';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';
import ClientAutoComplete from './ClientAutoComplete';
import { cn } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import BackgroundCard from '@/components/BackgroundCard';
import MobileFilter from './MobileFilter';
import { Badge } from '@nextui-org/badge';

const autoOne = [
  {
    sectionTitle: '서울',
    items: [
      { label: '서울전체', value: 'seoul' },
      { label: '강남구', value: 'gangnam' },
      { label: '마포구', value: 'mapo' },
    ],
  },
  {
    sectionTitle: '부산',
    items: [
      { label: '부산전체', value: 'busan' },
      { label: '부산진구', value: 'busanjin' },
      { label: '해운대구', value: 'haeundae' },
    ],
  },
];

const autTwo = [
  {
    sectionTitle: '인원',
    items: [
      { label: '5~8인', value: '5-8' },
      { label: '9~12인', value: '9-12' },
      { label: '13~16인', value: '13-16' },
      { label: '17~20인', value: '17-20' },
      { label: '20인 이상', value: '21' },
    ],
  },
];

type CustomAutoComplete = {} & ComponentPropsWithoutRef<typeof ClientAutoComplete>;

type HeroBackgroundProps = {
  imgUrl: string;
  children?: React.ReactNode;
  searchParams: { [key: string]: string };
} & ComponentPropsWithoutRef<'div'>;

export type FilterState = {
  location: string;
  party: string;
  type: string;
};

export default function Hero(props: HeroBackgroundProps) {
  const { children, style, className, imgUrl, searchParams, ...rest } = props;
  const [filterState, setFilterState] = useState<FilterState>(searchParams as FilterState);
  const router = useRouter();

  const handleSearch = () => {
    if (!filterState.location || !filterState.party) {
      return alert('지역과 인원을 선택해주세요');
    }

    const searchParameters = new URLSearchParams(filterState);
    router.push(`/search?${searchParameters}`);
  };

  return (
    // background Div
    <BackgroundCard
      radius={'none'}
      imgUrl={imgUrl}
      className={cn(`relative h-full w-full bg-cover bg-center bg-origin-border`, className)}
      style={{ ...style }}
      {...rest}
    >
      {/* overlay */}
      <div className="absolute h-full w-full bg-black bg-opacity-40"></div>

      {/* inner div for fixed with. */}
      <div
        className={`pt m-auto flex h-full w-full max-w-[1180px] flex-col items-start whitespace-nowrap px-4 py-10 sm:px-10 sm:py-24`}
      >
        {/* Hero TextField */}
        <div className="z-[1] text-2xl font-bold leading-[38.4px] sm:text-5xl sm:leading-[76.8px]">
          <p className=" text-white">다수가 모이는</p>
          <p className=" text-white">
            회식 장소를 <span className="text-primary">한 번에</span>
          </p>
          <p className="sm:leading-[25.6px ] mt-4 text-xs font-medium leading-[19.2px] text-[#FFFAEA] sm:text-base">
            맞춤형 회식 장소를 3초만에 찾아보세요!
          </p>
        </div>

        {/* auto complete for selecting area and portion of party */}
        <section className="z-[1] mt-24 flex gap-3 sm:mt-40 sm:gap-6">
          <div className="hidden gap-2 sm:flex">
            <CustomAutoComplete
              onInputChange={value => setFilterState({ ...filterState, location: value })}
              value={filterState.location}
              items={autoOne}
              placeholder="지역 정보"
              labelPlacement="outside-left"
              startContent={<SlLocationPin className="text-4xl font-bold" />}
              aria-label="지역 설정 선택"
              label={
                <div className="absolute -top-[55px] left-2 text-base text-white">
                  <Badge
                    color="primary"
                    showOutline={false}
                    className="-right-2 h-2 w-2 rounded-full"
                  >
                    지역
                  </Badge>
                </div>
              }
            />

            <CustomAutoComplete
              onInputChange={value => setFilterState({ ...filterState, party: value })}
              items={autTwo}
              value={filterState.party}
              placeholder="인원"
              labelPlacement="outside-left"
              startContent={<MdOutlinePersonOutline className="text-5xl font-bold" />}
              aria-label="인원 설정 선택"
              label={
                <div className="absolute -top-[55px] left-2 text-base text-white">
                  <Badge
                    color="primary"
                    showOutline={false}
                    className="-right-2 h-2 w-2 rounded-full"
                  >
                    인원
                  </Badge>
                </div>
              }
            />
          </div>

          {/* mobile version */}
          <MobileFilter
            filterState={filterState}
            setFilterState={setFilterState}
            interestedGroup={autTwo}
            interestedLocation={autoOne}
            searchParams={searchParams}
          />

          {/* 1차/2차 buttons */}
          <div className="flex w-fit flex-col gap-1 whitespace-nowrap sm:flex-row sm:gap-3">
            <HeroRadioButton
              onClick={() => setFilterState({ ...filterState, type: '1차' })}
              isClicked={filterState.type === '1차'}
            >
              <b># 1차</b>
              <span className="font-normal text-black">로</span>
              <b className="text-black"> 든든하게 </b>
            </HeroRadioButton>
            <HeroRadioButton
              onClick={() => setFilterState({ ...filterState, type: '2차' })}
              isClicked={filterState.type === '2차'}
            >
              <b># 2차</b>
              <span className="font-normal text-black">로</span>
              <b className="text-black"> 가볍게 </b>
            </HeroRadioButton>
          </div>

          <button
            onClick={handleSearch}
            className="flex h-14 w-[73px] items-center justify-center rounded-sm bg-primary text-[10px] font-bold text-white sm:h-[44px] sm:w-[127px] sm:text-sm"
          >
            회식 장소 선택
          </button>
        </section>
      </div>
    </BackgroundCard>
  );
}

type RadioButtonProps = {
  isClicked: boolean;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<'button'>;

const HeroRadioButton = ({ isClicked, children, ...rest }: RadioButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        'shrink-0 grow rounded-sm bg-white px-4 text-[10px] sm:w-[144px] sm:text-sm',
        isClicked ? 'border-1 border-primary text-primary' : 'border border-[#A8A8A8]',
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

const CustomAutoComplete = (props: CustomAutoComplete) => {
  const { items, name, placeholder, startContent, ...otherProps } = props;
  return (
    <ClientAutoComplete
      items={items}
      name={name}
      placeholder={placeholder}
      startContent={startContent}
      className="h-full w-[60px] sm:w-[134px]"
      labelPlacement="outside"
      radius="none"
      popoverProps={{
        radius: 'none',
        offset: 0,
      }}
      selectorButtonProps={{
        color: 'primary',
      }}
      aria-labelledby="party-portion 인원"
      inputProps={{
        classNames: {
          inputWrapper: 'sm:w-[134px] w-[60px] h-14 sm:h-[44px] rounded-sm',
          input: 'text-xs',
        },
      }}
      listboxProps={{
        classNames: {
          base: 'p-2 py-3',
        },
      }}
      {...otherProps}
    />
  );
};
