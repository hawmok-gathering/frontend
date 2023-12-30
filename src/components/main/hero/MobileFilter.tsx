import BottomSheet from '@/components/BottomSheet';
import { cn, useDisclosure } from '@nextui-org/react';
import Link from 'next/link';
import React, { ComponentPropsWithoutRef, Dispatch, SetStateAction } from 'react';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';
import { FilterState } from './Hero';

type FilterItemProps = {
  sectionTitle: string;
  items: {
    label: string;
    value: string;
  }[];
}[];

type InterestedLocation = FilterItemProps;
type InterestedGroup = FilterItemProps;
type MobileFilterProps = {
  filterState: FilterState;
  setFilterState: Dispatch<SetStateAction<FilterState>>;
  searchParams: { [key: string]: string };
  interestedLocation: InterestedLocation;
  interestedGroup: InterestedGroup;
};

export default function MobileFilter(props: MobileFilterProps) {
  const { searchParams, interestedLocation, interestedGroup, filterState, setFilterState } = props;
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleSheetClose = () => {
    setFilterState(searchParams as FilterState);
    onClose();
  };

  return (
    <section className="sm:hidden">
      <BottomSheet
        isOpen={isOpen}
        onClose={handleSheetClose}
        height="524px"
        triggerContent={
          <div className="flex h-14 max-w-[120px]">
            <button
              onClick={onOpen}
              type="button"
              className="flex w-[60px] shrink-0 flex-col items-center justify-between rounded-l-sm border-r border-r-[#D9D9D9] bg-white py-2"
            >
              <SlLocationPin className="stroke-[3px] text-medium font-extrabold text-secondary" />
              <small>{filterState.location ? filterState.location : '지역'}</small>
            </button>
            <button
              onClick={onOpen}
              type="button"
              className="flex w-[60px] shrink-0 flex-col items-center justify-between rounded-r-sm border-l border-l-[#D9D9D9] bg-white py-2"
            >
              <MdOutlinePersonOutline className="text-xl font-extrabold text-secondary" />
              <small>{filterState.party ? filterState.party : '인원'}</small>
            </button>
          </div>
        }
        bodyContent={
          <div className="w-full px-4">
            {/* simple indicator? */}
            <div className="mx-auto my-5 h-[3px] w-[30px] bg-[#E6E6E6]"></div>

            {/* Sheet name */}
            <p className="text-center text-base font-bold">맞춤 필터</p>

            <h3 className="mb-[26px] mt-10 text-sm font-bold">관심 지역</h3>
            <div className="mb-1 flex gap-1">
              {interestedLocation[0].items.map(location => (
                <LinkFilter
                  aria-label={`지역 필터 ${location.label} 선택`}
                  key={location.value}
                  onClick={() => setFilterState({ ...filterState, location: location.value })}
                  isClicked={filterState.location === location.value}
                >
                  {location.label}
                </LinkFilter>
              ))}
            </div>
            <div className="flex gap-1">
              {interestedLocation[1].items.map(location => (
                <LinkFilter
                  aria-label={`지역 필터 ${location.label} 선택`}
                  key={location.value}
                  onClick={() => setFilterState({ ...filterState, location: location.value })}
                  isClicked={filterState.location === location.value}
                >
                  {location.label}
                </LinkFilter>
              ))}
            </div>

            <h3 className="mb-[26px] mt-[30px] text-sm font-bold">인원</h3>
            <div className="flex gap-1">
              {interestedGroup[0].items.map(item => (
                <LinkFilter
                  aria-label={`인원 선택 필터`}
                  key={item.label}
                  onClick={() => setFilterState({ ...filterState, party: item.value })}
                  isClicked={filterState.party === item.value}
                  style={{
                    width: '60px',
                    height: '28px',
                  }}
                >
                  {item.label}
                </LinkFilter>
              ))}
            </div>
          </div>
        }
        footerContent={
          <>
            <button
              onClick={() => setFilterState({} as FilterState)}
              className={cn(
                'reading-[22.4px] flex h-[46px] grow items-center justify-center rounded-xl border-[1.5px] border-[#747474] px-[30px] text-base font-normal',
                'sm:rounded-none sm:border-none',
              )}
            >
              초기화
            </button>
            <Link
              href={{
                pathname: '/',
                query: { ...filterState },
              }}
              scroll={false}
              onClick={onClose}
              className={cn(
                'reading-[22.4px] flex h-[46px] grow-[1.4] items-center justify-center rounded-xl bg-primary px-[30px] text-base font-normal text-white',
                'sm:rounded-none',
              )}
            >
              적용하기
            </Link>
          </>
        }
      ></BottomSheet>
    </section>
  );
}

type LinkProps = {
  isClicked?: boolean;
} & ComponentPropsWithoutRef<'button'>;

const LinkFilter = (props: LinkProps) => {
  const { isClicked, children, className, ...rest } = props;
  return (
    <button
      className={cn(
        'inline-flex h-8 w-20 shrink-0 items-center justify-center rounded-full border border-[#ccc] text-[10px] font-normal',
        className,
        isClicked ? 'border-black font-bold text-black' : '',
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
