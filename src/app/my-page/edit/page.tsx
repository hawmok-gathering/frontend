import BackgroundCard from '@/components/BackgroundCard';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import React, { ComponentPropsWithRef } from 'react';
import { BsDot } from 'react-icons/bs';

export default function EditPage() {
  const handleSubmit = async (form: FormData) => {
    'use server';
    const { name, phone, email, birth } = Object.fromEntries(form.entries());
  };

  return (
    <>
      {/* my page hero section */}
      <section className="w-full pt-24">
        <BackgroundCard
          radius="none"
          imgUrl="url('/my-page.jpg')"
          className="relative flex h-[206px] items-center justify-center bg-cover bg-center"
        >
          <div className="absolute left-0 top-0 h-full w-full bg-black opacity-50" />
          <h1 className="z-[1] text-[40px] font-bold text-white">내 정보 수정</h1>
        </BackgroundCard>
      </section>

      <section className="mx-auto w-full max-w-[1180px] px-10 pt-[162px]">
        <div className="mb-10 flex max-h-fit justify-between">
          <p className="text-[32px] font-bold">내 정보</p>
          <span className="relative mt-auto inline-block">
            필수 입력 항목 <BsDot className="absolute -left-4 -top-2 text-xl text-primary" />
          </span>
        </div>

        {/* edit my info section */}
        <form className="flex w-full flex-col" action={handleSubmit}>
          {/* <div className="flex w-full border-b-2 border-t-2 border-t-[#7D7D7D]">
            <CustomInput
              name="name"
              radius="none"
              width={455}
              label="이름"
              labelPlacement="outside-left"
              placeholder="이름명"
              type="text"
            />
            <Button
              radius="none"
              className="my-auto ml-5 h-12 w-[164px] bg-[#7D7D7D] text-base font-bold text-white"
            >
              본인인증
            </Button>
          </div>
          <div className="w-full border-b-2">
            <CustomInput
              name="phone"
              radius="none"
              label="휴대폰 번호"
              labelPlacement="outside-left"
              placeholder="000-***-0000"
              type="text"
            />
          </div>
          <div className="w-full border-b-2">
            <CustomInput
              name="birth"
              radius="none"
              label="생년월일"
              labelPlacement="outside-left"
              placeholder="XXXX.XX.XX"
            />
          </div> */}
          <div className="w-full border-b-2 border-t-2 border-t-[#7D7D7D]">
            <CustomInput
              name="email"
              radius="none"
              label="이메일 (ID)"
              labelPlacement="outside-left"
              placeholder="abc@gmail.com"
              type="email"
              readOnly
            />
          </div>
          <div className="flex h-[110px] items-center border-b-2 px-6 py-4">
            <span className="w-[296px] text-base font-bold text-secondary">관심 지역</span>
            <div>dsd</div>
          </div>
          <div className="flex h-[100px] items-center  border-b-2 border-[#7D7D7D] px-6 py-4">
            <span className="w-[296px] text-base font-bold text-secondary">
              개인정보 수집 및 이용 안내
            </span>
          </div>
          <div className="flex justify-center gap-4 py-20">
            <Button radius="none" className="h-12 w-[164px] text-base font-bold">
              취소
            </Button>
            <Button
              radius="none"
              className="h-12 w-[164px] text-base font-bold text-white"
              color="primary"
              type="submit"
            >
              수정
            </Button>
          </div>
        </form>
      </section>
      <section className="mx-auto w-full max-w-[1180px] px-10 pb-40">
        <h2 className="mb-10 text-[32px] font-bold">주소록</h2>
        <div className="flex w-full bg-[#F2F2F2]">
          <CustomInput
            radius="none"
            width={455}
            label="기본 주소"
            labelPlacement="outside-left"
            placeholder="[*****] 서울 광진구 동일로 . ****.**"
            type="text"
            classNames={{
              inputWrapper: 'bg-[#FBFBFB]',
            }}
          />
          <Button
            radius="none"
            className="my-auto ml-5 h-12 w-[164px] border border-[#7D7D7D] bg-white text-base font-bold text-[#7D7D7D]"
          >
            수정
          </Button>
        </div>
      </section>
    </>
  );
}

type CustomInputProps = {} & ComponentPropsWithRef<typeof Input>;

const CustomInput = (props: CustomInputProps) => {
  const { children, classNames, ...rest } = props;
  return (
    <Input
      classNames={{
        base: 'h-[100px] py-6 px-6 w-fit ',
        label: 'w-[296px] text-base font-bold text-secondary',
        innerWrapper: 'w-[455px] ',
        mainWrapper: 'h-[68px]',
        input: 'ml-5 ',
        inputWrapper: 'rounded-lg border border-[#F5F5F5] bg-[#FBFBFB]',
        ...classNames,
      }}
      {...rest}
    >
      {children}
    </Input>
  );
};
