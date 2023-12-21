import { Button } from '@nextui-org/button';
import { ComponentPropsWithoutRef } from 'react';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';
import ClientAutoComplete from './ClientAutoComplete';
import { RadioGroup, Radio } from '@nextui-org/radio';
import { cn } from '@nextui-org/react';
import { redirect } from 'next/navigation';
import BackgroundCard from '@/components/BackgroundCard';

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
      { label: '5~10명', value: '5~10' },
      { label: '10~15명', value: '10~15' },
      { label: '15~20명', value: '15~20' },
      { label: '20~25명', value: '20~25' },
      { label: '25~30명', value: '25~30' },
    ],
  },
];
type CustomRadioProps = {} & ComponentPropsWithoutRef<typeof Radio>;
type CustomAutoComplete = {} & ComponentPropsWithoutRef<typeof ClientAutoComplete>;

type HeroBackgroundProps = {
  imgUrl: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<'div'>;

export default function Hero(props: HeroBackgroundProps) {
  const { children, style, className, imgUrl, ...rest } = props;

  const handleButtonSearch = async (form: FormData) => {
    'use server';

    const area = form.get('area') as string;
    const party = form.get('party') as string;
    const radio = form.get('radio') as string;

    const searchParams = new URLSearchParams({ area: area, party: party, radio: radio });
    redirect(`/search?${searchParams.toString()}`);
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
      {/* children */}
      {/* inner div for fixed with. */}
      <div
        className={`pt m-auto flex h-full w-full max-w-[1180px] flex-col items-start px-4 py-10 sm:px-10 sm:py-24`}
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
        <form action={handleButtonSearch} className="mt-24 flex gap-3 sm:mt-40 sm:gap-6">
          <div className="flex gap-2">
            <CustomAutoComplete
              items={autoOne}
              name="area"
              placeholder="지역"
              startContent={<SlLocationPin className="text-4xl font-bold" />}
            />

            <CustomAutoComplete
              items={autTwo}
              name="party"
              placeholder="인원"
              startContent={<MdOutlinePersonOutline className="text-5xl font-bold" />}
            />
          </div>

          {/* buttons */}
          <RadioGroup
            name="radio"
            className=""
            classNames={{
              base: cn(''),
              wrapper:
                'flex flex-col gap-3 sm:gap-2 justify-evenly sm:flex-row sm:items-center h-[56px] sm:h-[44px]',
            }}
          >
            <CustomRadio value={'first'}>
              # 1차 <span className="font-normal text-black">로</span>
              <span className="text-black"> 든든하게 </span>
            </CustomRadio>
            <CustomRadio value={'second'}>
              # 2차 <span className="font-normal text-black">로</span>
              <span className="text-black"> 가볍게 </span>
            </CustomRadio>
          </RadioGroup>

          <Button
            radius="none"
            className="h-14 w-[73px] text-[10px] font-bold text-white sm:h-[44px] sm:w-[127px] sm:text-sm"
            variant="solid"
            color="primary"
            type="submit"
          >
            회식 장소 선택
          </Button>
        </form>
      </div>
    </BackgroundCard>
  );
}

const CustomRadio = (props: CustomRadioProps) => {
  const { children, value, ...otherProps } = props;
  return (
    <Radio
      {...otherProps}
      value={value}
      className="flex items-center justify-center"
      classNames={{
        base: 'sm:px-4 px-1 flex items-center justify-center inline-flex bg-white min-w-[86px] h-6 sm:h-[44px] data-[selected=true]:border-primary border-2 border-white sm:border-2 sm:border-default data-[selected=true]:text-primary mx-[1px]',
        wrapper: 'hidden',
        labelWrapper: 'm-0 ',
        label:
          'flex items-center justify-center text-[10px] leading-[16px] sm:text-sm font-bold text-inherit p-0 ',
      }}
    >
      {children}
    </Radio>
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
          inputWrapper: 'sm:w-[134px] w-[60px] h-14 sm:h-[44px]',
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
