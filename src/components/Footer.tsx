import Link from 'next/link';
import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';
import { BsInstagram } from 'react-icons/bs';
import { FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex h-fit w-full justify-center bg-[#302F2D] ">
      <section className="relative h-[340px] w-full text-ellipsis whitespace-nowrap px-4 py-9 text-[10px] font-normal text-white sm:h-[280px] sm:w-[1100px] sm:px-10 sm:text-xs">
        {/* 화목 서비스 이용 약관 */}
        <nav className="mb-8 ">
          <Link href={'/'} key="이용 약관">
            화목 서비스 이용 약관
          </Link>
          {/* TODO:링크로 바꾸기 */}
          <Separator />
          <FooterButton key="개인정보 처리방침">개인정보 처리방침</FooterButton>
          <Separator />
          <FooterButton key="고객 센터">고객 센터</FooterButton>
          <Separator />
          <FooterButton key="채용정보">채용정보</FooterButton>
        </nav>

        {/* 문의 및 연락처 */}
        <table className="mb-20 w-fit sm:mb-16">
          <tbody className="w-full">
            <tr>
              <td className="">고객센터 (이용 및 결제문의)</td>
              <td className="px-2">|</td>
              <td className="">cs@hwamoke.co.kr / 02-000-0000(유료)</td>
            </tr>
            <tr>
              <td className="">화목 기업용 서비스 문의</td>
              <td className="px-2">|</td>
              <td className="hidden sm:flex">
                b2b-sales@hwamoke.com / 기업용 서비스 제안서 다운로드
              </td>
              <td className="sm:hidden">
                b2b-sales@hwamoke.com /<br /> 기업용 서비스 제안서 다운로드
              </td>
            </tr>
            <tr>
              <td className="">제휴 및 대의 협력</td>
              <td className="px-2">|</td>
              <td className="">https://hwamoke.team/contact</td>
            </tr>
          </tbody>
        </table>

        {/* 화목 주소*/}
        <div className="text-white text-opacity-50">
          <span>주식회사 화목</span>
          <Separator />
          <span>대표 OOO</span>
          <Separator />
          <span>서울특별시 XX구 XX대로</span>
        </div>

        {/* Copyright */}
        <div className="mb-4 mt-1 sm:mb-0">
          <span className="flex items-center gap-2 text-white text-opacity-50">
            <div className="relative h-[20px] w-[26px] sm:h-8 sm:w-11">
              <Image src="/brand_blank.png" fill alt="Hwamoke brand logo with white contrast" />
            </div>
            Copyright
            <FaRegCopyright /> 2023 by 화목, Inc. All rights reserved.
          </span>
        </div>
        <div className="flex justify-end gap-6 sm:absolute sm:bottom-12 sm:w-full">
          <button className="rounded-full border bg-none p-1">
            <FaTwitter className="scale-110 text-xl " />
          </button>
          <button className="rounded-full border bg-none p-1">
            <FaFacebook className="scale-110 text-xl " />
          </button>
          <button className="rounded-full border bg-none p-1">
            <BsInstagram className="scale-110 text-xl " />
          </button>
          <button className="rounded-full border bg-none p-1">
            <FaYoutube className="scale-110 text-xl " />
          </button>
        </div>
      </section>
    </footer>
  );
}

type FooterButtonProps = {
  children: React.ReactNode;
};
const FooterButton = ({ children }: FooterButtonProps) => {
  return <button style={{ all: 'unset', cursor: 'pointer' }}>{children}</button>;
};
const Separator = () => {
  return <span className="mx-2">|</span>;
};
