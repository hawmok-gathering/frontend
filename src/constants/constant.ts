export const MainNavBarComponent = Object.freeze({
  searchPlaceholder: '지역이나 음식명을 검색해보세요!',
  searchHistory: 'searchHistory',
});

export const ContentBoxPosition = Object.freeze({
  desktopMaxWidthClassName: 'max-w-[1280px]',
  desktopWidthClassName: 'w-[1280px]',
  desktopPaddingXClassName: 'p-6',
  desktopPaddingX: '24px',
  desktopPaddingXRem: '1.5rem',
});

export const CardSize = Object.freeze({
  CarouselWidthClassName: 'w-[250px]',
  CarouselHeightClassName: 'h-[338px]',
  CarouselGapClassName: 'gap-5',
  CarouselWidth: 250,
  CarouselGap: 5,
});

export const GeneralClassName = Object.freeze({
  fullWidth: 'w-full',
  fullHeight: 'h-full',
});

export const SearchParams = Object.freeze({
  query: 'searchQuery' as const,
});

export const SearchPageProps = Object.freeze({
  location: '지역',
  party: '인원',
  type: '회식 유형',
  mood: '분위기',
  seat: '좌석 타입',
});
