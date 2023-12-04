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
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { MainNavBarComponent } from "@/constants/constant";
import PreviousSearch from "./PreviousSearch";
import useLocalStorage from "@/hooks/useLocalStorage";

type NavBarProps = {
  className: string;
};

export default function MainNavBar({ className }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cursor, setCursor] = useState(-1);
  const [input, setInput] = useState("");
  const { value: searchHistory, setValue: setSearchHistory } = useLocalStorage(
    MainNavBarComponent.searchHistory,
    []
  );
  const searchCompleteRef = useRef<HTMLFormElement>(null);

  const searchToggle = useCallback((bool: boolean) => {
    if (bool) {
      setSearchOpen(true);
    } else if (!bool) {
      setSearchOpen(false);
      setCursor(-1);
    }
  }, []);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        searchCompleteRef.current &&
        !searchCompleteRef.current.contains(e.target as Node)
      ) {
        searchToggle(false);
      }
    },
    [searchToggle]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  const keyboardNavigation = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown":
        searchOpen
          ? setCursor((index) =>
              index < history.length - 1 ? index + 1 : index
            )
          : searchToggle(true);
        break;
      case "ArrowUp":
        cursor === 0
          ? searchToggle(false)
          : setCursor((index) => (index > 0 ? index - 1 : index));
        break;
      case "Enter":
        break;
      case "Escape":
        searchToggle(false);
        break;
    }
  };

  const onSubmit = () => {
    if (searchHistory && searchHistory.includes(input)) {
      // setSearchHistory([...searchHistory]);
    }
    if (searchHistory && !searchHistory.includes(input)) {
      setSearchHistory([...searchHistory, input]);
    }
  };

  const history: string[] = useMemo(() => {
    if (searchHistory && searchHistory.length > 0) {
      return searchHistory.filter((text: string) => text.includes(input));
    }
    return [];
  }, [input, searchHistory]);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      isBordered
      height={"80px"}
      className={twMerge("px-3 ")}
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
          <form
            autoComplete="off"
            className="relative group"
            ref={searchCompleteRef}
            onSubmit={onSubmit}
          >
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
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setSearchOpen(true)}
              onKeyDown={(e) => keyboardNavigation(e)}
            />
            <PreviousSearch
              isOpen={searchOpen}
              cursorLocation={cursor}
              history={history}
              setSearchHistory={setSearchHistory}
            />
          </form>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          {/* TODO: 로그인 여부 확인하여 로그인 아웃 변경 및 마이페이지 버튼 */}
          <Link href="/auth/signin">회원가입</Link>
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
