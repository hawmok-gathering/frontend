"use client";

import { twMerge } from "tailwind-merge";
import { Input } from "@nextui-org/input";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
} from "@nextui-org/react";
import { GrSearch } from "react-icons/gr";
import { useState } from "react";
import { MainNavBarComponent } from "@/constants/constant";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

type NavBarProps = {
  className: string;
};

export default function MainNavBar({ className }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      height={"80px"}
      className={twMerge("px-3")}
    >
      {/* TODO: 각 드롭다운의 링크 작성하기 */}
      {/* <NavbarItem>
        <NavbarMenuToggle
          className="sm:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand>add icon</NavbarBrand>
      </NavbarItem> */}
      <NavbarBrand>add icon</NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <form className="relative group">
            <Input
              className="w-[576px] peer"
              classNames={{
                inputWrapper: "border-primary",
                input: "pl-4 placeholder:text-[9E9E9E]",
              }}
              size="sm"
              type="search"
              variant="bordered"
              color="primary"
              placeholder={MainNavBarComponent.searchPlaceholder}
              endContent={
                <button>
                  <GrSearch className="text-primary" />
                </button>
              }
            />
            <div className="hidden peer-focus:flex">dsaddasd</div>
          </form>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          {/* TODO: 로그인 여부 확인하여 로그인 아웃 변경 및 마이페이지 버튼 */}
          <Link href="/auth/signin">Sign-in</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {/* TODO: 모바일 환경에서 메뉴 아이템 노출하기 for temporary*/}
        <NavbarItem>
          <Link href="/about">About</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/blog">Blog</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact">Contact</Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
