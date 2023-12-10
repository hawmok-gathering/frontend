import { Button } from '@nextui-org/button';
import { Spacer } from '@nextui-org/spacer';
import { ComponentPropsWithoutRef } from 'react';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';
import ClientAutoComplete from './ClientAutoComplete';
import { RadioGroup, Radio } from '@nextui-org/radio';
import { cn } from '@nextui-org/react';
import { redirect } from 'next/navigation';
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

type BackgroundPosition = 'top' | 'bottom' | 'center' | 'left' | 'right';

type HeroBackgroundProps = {
  imgUrl: string;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  backgroundPosition?: BackgroundPosition;
  innerWidth?: string;
} & ComponentPropsWithoutRef<'div'>;

export default function Hero({
  children,
  imgUrl,
  width,
  height,
  innerWidth,
  ...rest
}: HeroBackgroundProps) {
  const { style } = rest;

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
    <div
      className={`bg-origin-border ${width ? width : 'w-full'} ${height ? height : 'h-full'} `}
      {...rest}
      style={{
        backgroundImage: `${imgUrl}`,
        ...style,
      }}
    >
      {/* inner div for fixed with. */}
      <div
        className={`m-auto flex flex-col items-start justify-center px-10 py-6 ${
          innerWidth ? innerWidth : 'max-w-[1180px]'
        } h-full`}
      >
        {/* Hero TextField */}
        <div>
          <p className="text-5xl font-bold text-white">다수가 모이는</p>
          <Spacer y={10} />
          <p className="text-5xl font-bold text-white">
            회식 장소를 <span className="text-primary">한 번에</span>
          </p>
          <Spacer y={10} />
          <p className="text-[#FFFAEA]">맞춤형 회식 장소를 3초만에 찾아보세요!</p>
        </div>
        <Spacer y={32} />

        {/* auto complete for selecting area and portion of party */}
        <form style={{ display: 'flex', gap: '10px' }} action={handleButtonSearch}>
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

          <Spacer x={5} />

          {/* buttons */}
          <RadioGroup
            name="radio"
            orientation="horizontal"
            classNames={{
              base: cn('flex justify-center items-center min-w-[278px]'),
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
          <Spacer x={5} />
          <Button
            radius="none"
            className="h-[44px] w-[127px] text-sm font-bold text-white"
            variant="solid"
            color="primary"
            type="submit"
          >
            회식 장소 선택
          </Button>
        </form>
      </div>
    </div>
  );
}

const CustomRadio = (props: CustomRadioProps) => {
  const { children, value, ...otherProps } = props;
  return (
    <Radio
      {...otherProps}
      value={value}
      classNames={{
        base: 'inline-flex bg-white max-w-[133px] w-[133px] h-[44px] data-[selected=true]:border-primary border-2 border-default data-[selected=true]:text-primary mx-[1px]',
        wrapper: 'hidden',
        label: 'text-sm font-bold text-inherit',
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
      className="h-full w-[134px]"
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
          inputWrapper: 'w-[134px] h-[44px]',
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
