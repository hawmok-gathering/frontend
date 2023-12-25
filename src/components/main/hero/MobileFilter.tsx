import BottomSheet from '@/components/BottomSheet';
import { cn } from '@nextui-org/react';
import Link from 'next/link';
import React, { ComponentPropsWithoutRef } from 'react';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';

type Location = { value: string; display: string };
type InterestedLocation = { seoul: Location[]; busan: Location[] };
type InterestedGroup = { value: string; display: string };

type MobielFilterProps = {
  searchParams: { [key: string]: string };
  interestedLocation: InterestedLocation;
  interestedGroup: InterestedGroup[];
};

export default function MoblieFilter(props: MobielFilterProps) {
  const { searchParams, interestedLocation, interestedGroup } = props;
  return (
    <section className="sm:hidden">
      <BottomSheet
        displayContent={
          <div className="flex h-14 max-w-[120px]">
            <button
              type="button"
              className="flex w-[60px] shrink-0 flex-col items-center justify-between rounded-l-sm border-r border-r-[#D9D9D9] bg-white py-2"
            >
              <SlLocationPin className="stroke-[3px] text-medium font-extrabold text-secondary" />
              <small>{searchParams.area ? searchParams.area : '지역'}</small>
            </button>
            <button
              type="button"
              className="flex w-[60px] shrink-0 flex-col items-center justify-between rounded-r-sm border-l border-l-[#D9D9D9] bg-white py-2"
            >
              <MdOutlinePersonOutline className="text-xl font-extrabold text-secondary" />
              <small>{searchParams.party ? searchParams.party : '인원'}</small>
            </button>
          </div>
        }
        height="524px"
      >
        {/* simple indicator? */}
        <div className="mx-auto my-5 h-[3px] w-[30px] bg-[#E6E6E6]"></div>

        {/* Sheet name */}
        <b className="text-center text-base">맞춤 필터</b>

        <h3 className="mb-[26px] mt-10 text-sm font-bold">관심 지역</h3>
        <div className="mb-1 flex gap-1">
          {interestedLocation.seoul.map(location => (
            <LinkFilter
              aria-label={`지역 필터 ${location.display} 선택`}
              key={location.value}
              href={{ pathname: '/', query: { ...searchParams, area: location.value } }}
              scroll={false}
              isClicked={searchParams.area === location.value}
            >
              {location.display}
            </LinkFilter>
          ))}
        </div>
        <div className="flex gap-1">
          {interestedLocation.busan.map(location => (
            <LinkFilter
              aria-label={`지역 필터 ${location.display} 선택`}
              key={location.value}
              href={{ pathname: '/', query: { ...searchParams, area: location.value } }}
              scroll={false}
              isClicked={searchParams.area === location.value}
            >
              {location.display}
            </LinkFilter>
          ))}
        </div>

        <h3 className="mt-[30px] text-sm font-bold">인원</h3>
        <div className="flex gap-1">
          {interestedGroup.map(group => (
            <LinkFilter
              aria-label={`인원 필터 ${group.display} 선택`}
              key={group.display}
              href={{ pathname: '/', query: { ...searchParams, party: group.value } }}
              scroll={false}
              isClicked={searchParams.party === group.value}
              style={{
                width: '60px',
                height: '28px',
              }}
            >
              {group.display}
            </LinkFilter>
          ))}
        </div>
      </BottomSheet>
    </section>
  );
}

type LinkProps = {
  isClicked?: boolean;
} & ComponentPropsWithoutRef<typeof Link>;

const LinkFilter = (props: LinkProps) => {
  const { isClicked, children, className, ...rest } = props;
  return (
    <Link
      className={cn(
        'inline-flex h-8 w-20 shrink-0 items-center justify-center rounded-full border border-[#ccc] text-[10px] font-normal',
        className,
        isClicked ? 'border-black font-bold text-black' : '',
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};
