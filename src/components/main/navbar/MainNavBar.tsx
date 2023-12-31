'use client';

import { Input } from '@nextui-org/input';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu } from '@nextui-org/navbar';
import { GrSearch } from 'react-icons/gr';
import { useState, useEffect, useRef, useCallback, FormEvent } from 'react';
import { MainNavBarComponent, SearchParams } from '@/constants/constant';
import PreviousSearch from './PreviousSearch';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function MainNavBar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const router = useRouter();
  const [cursor, setCursor] = useState(-1);
  const [input, setInput] = useState('');
  const { value: searchHistory, setValue: setSearchHistory } = useLocalStorage<any[]>(
    MainNavBarComponent.searchHistory,
    [],
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

  // for blur effect of search bar autocomplete begin
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (searchCompleteRef.current && !searchCompleteRef.current.contains(e.target as Node)) {
        searchToggle(false);
      }
    },
    [searchToggle],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);
  // for blur effect of search bar autocomplete end.

  // behavior for search bar autocomplete
  const keyboardNavigation = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        if (searchOpen && searchHistory.length > 0) {
          setCursor(index => {
            const newIndex = index < searchHistory.length - 1 ? index + 1 : index;
            setInput(searchHistory[newIndex].text);
            return newIndex;
          });
        } else {
          searchToggle(true);
        }
        break;
      case 'ArrowUp':
        if (cursor <= 0) {
          searchToggle(false);
        } else {
          setCursor(index => {
            const newIndex = index > 0 ? index - 1 : index;
            setInput(searchHistory[newIndex].text);
            return newIndex;
          });
        }
        break;
      case 'Escape':
        searchToggle(false);
        break;
    }
  };

  // form onSubmit handler. may conflicting occur with search bar autocomplete enter event.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input || input.trim() === '') {
      return;
    }
    if (searchHistory && !searchHistory.find(history => history.text === input)) {
      setSearchHistory([{ text: input, date: new Date() }, ...searchHistory]);
    }
    searchToggle(false);
    const params = new URLSearchParams(window.location.search);
    params.delete(SearchParams.query);
    params.append(SearchParams.query, input);
    router.push(`/search?${params}`);
  };

  return (
    <Navbar
      isBlurred={false}
      // onMenuOpenChange={setIsMenuOpen}
      isBordered
      height={'80px'}
      className="hidden px-3 sm:flex"
      classNames={{
        wrapper: 'max-w-[1180px] sm:px-10 px-4 ',
      }}
    >
      {/* TODO: 각 드롭다운의 링크 작성하기 */}
      {/* <NavbarItem>
        <NavbarMenuToggle
          className="sm:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand>add icon</NavbarBrand>
      </NavbarItem> */}
      <NavbarBrand onClick={() => router.push('/')} className="cursor-pointer">
        <Image src="/brand.png" width={104} height={70} alt="hwamoke brand logo" />
      </NavbarBrand>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <form
            autoComplete="off"
            className="group relative"
            ref={searchCompleteRef}
            onSubmit={onSubmit}
          >
            <Input
              data-testid="navbar-search-input"
              className="focus::outline-none peer w-[576px] hover:shadow-md "
              classNames={{
                inputWrapper:
                  'sm:z-[1] bg-white border-[#ccc] border focus:border-[#ccc] data-[hover=true]:border-[#ccc] group-data-[focus=true]:border-[#ccc]',
                input: 'pl-9 placeholder:text-[#9E9E9E] py-3 ',
              }}
              size="sm"
              type="search"
              variant="bordered"
              placeholder={MainNavBarComponent.searchPlaceholder}
              endContent={
                <button>
                  <GrSearch className="text-xl font-extrabold text-secondary" />
                </button>
              }
              value={input}
              onChange={e => setInput(e.target.value)}
              onClick={() => setSearchOpen(prev => !prev)}
              onKeyDown={e => keyboardNavigation(e)}
            />
            <PreviousSearch
              isOpen={searchOpen}
              cursorLocation={cursor}
              history={searchHistory}
              setSearchHistory={setSearchHistory}
              setSearchOpen={setSearchOpen}
            />
          </form>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex items-center text-base">
          {/* TODO: 로그인 여부 확인하여 로그인 아웃 변경 및 마이페이지 버튼 */}
          <Link href="/login" color="foreground">
            로그인
          </Link>
          <div className="mx-4 h-4 w-0.5 shrink-0 border"></div>
          <Link href="/login">회원가입</Link>
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
