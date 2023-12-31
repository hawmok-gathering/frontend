import BackgroundCard from '@/components/BackgroundCard';
import LoginRequest from '@/components/main/LoginRequest';
import Hero from '@/components/main/hero/Hero';
import MainCarousel from '@/components/main/MainCarousel';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlinePersonOutline } from 'react-icons/md';
import StoreCard from '@/components/StoreCard';
import MobileSearchIcon from '@/components/main/MobileSearchIcon';
import LocationFilter from '@/components/main/LocationFilter';
import MobileLocationFilter from '@/components/main/MobileLocationFilter';

export const mokStores = [
  {
    storeId: 1,
    location_id: '서울시 마포구 서교동 123-1',
    //
    name: '청기와 부산 갈매기 ',
    store_image_url: '/beer.webp',
    phone: '02-1234-5678',
    content: '맛있는 음식과 함께 즐거운 시간을 보내세요',
    address: '부산',
    created_at: '12월',
    updated_at: '13월',
    weekday_start_time: '오전 12시',
    weekday_end_time: '오후 12시',
    weekend_start_time: '오전 11시',
    weekend_end_time: '새벽 1시',
    hall_capacity: '30',
    room_capacity: '10',
    category: '술집',
  },
  // 비슷하게 5개 더 만들기
  {
    storeId: 2,
    name: '할머니 부산 순대국',
    store_image_url: '/beer.webp',
    phone: '02-1234-5678',
    content: '이곳은 밥집입니다. 부산에있습니다.',
    address: '부산',
    created_at: '12월',
    updated_at: '7월',
    weekday_start_time: '오전 9시',
    weekday_end_time: '오후 9시',
    weekend_start_time: '오후 3시',
    weekend_end_time: '새벽 5시',
    hall_capacity: '120',
    room_capacity: '15',
    category: '밥집',
  },
  {
    storeId: 3,
    name: '할머니 서울 순대국',
    store_image_url: '/beer.webp',
    phone: '02-1234-5678',
    content: '이곳은 밥집입니다.',
    address: '서울',
    created_at: '12월',
    updated_at: '7월',
    weekday_start_time: '오전 9시',
    weekday_end_time: '오후 9시',
    weekend_start_time: '오후 3시',
    weekend_end_time: '새벽 5시',
    hall_capacity: '120',
    room_capacity: '15',
    category: '밥집',
  },
  {
    storeId: 4,
    name: '삼촌네 서울 순대국',
    store_image_url: '/beer.webp',
    phone: '02-1234-5678',
    content: '이곳은 밥집입니다.',
    address: '서울',
    created_at: '12월',
    updated_at: '7월',
    weekday_start_time: '오전 9시',
    weekday_end_time: '오후 9시',
    weekend_start_time: '오후 3시',
    weekend_end_time: '새벽 5시',
    hall_capacity: '120',
    room_capacity: '15',
    category: '밥집',
  },
  {
    storeId: 5,
    name: '할머니 부산 돼지국밥',
    store_image_url: '/beer.webp',
    phone: '02-1234-5678',
    content: '이곳은 밥집입니다.',
    address: '서울',
    created_at: '12월',
    updated_at: '7월',
    weekday_start_time: '오전 9시',
    weekday_end_time: '오후 9시',
    weekend_start_time: '오후 3시',
    weekend_end_time: '새벽 5시',
    hall_capacity: '120',
    room_capacity: '15',
    category: '밥집',
  },
  {
    storeId: 6,
    name: '삼촌네 서울 순대국',
    store_image_url: '/beer.webp',
    phone: '02-1234-5678',
    content: '이곳은 밥집입니다.',
    address: '서울',
    created_at: '12월',
    updated_at: '7월',
    weekday_start_time: '오전 9시',
    weekday_end_time: '오후 9시',
    weekend_start_time: '오후 3시',
    weekend_end_time: '새벽 5시',
    hall_capacity: '120',
    room_capacity: '15',
    category: '밥집',
  },
  {
    storeId: 7,
    name: '양재 순대',
    store_image_url: '/beer.webp',
    phone: '02-1234-5678',
    content: '이곳은 밥집입니다.',
    address: '서울',
    created_at: '12월',
    updated_at: '7월',
    weekday_start_time: '오전 9시',
    weekday_end_time: '오후 9시',
    weekend_start_time: '오후 3시',
    weekend_end_time: '새벽 5시',
    hall_capacity: '120',
    room_capacity: '15',
    category: '밥집',
  },
  {
    storeId: 8,
    name: '돈까스좋아',
    store_image_url: '/beer.webp',
    phone: '02-1234-5678',
    content: '이곳은 밥집입니다.',
    address: '서울',
    created_at: '12월',
    updated_at: '7월',
    weekday_start_time: '오전 9시',
    weekday_end_time: '오후 9시',
    weekend_start_time: '오후 3시',
    weekend_end_time: '새벽 5시',
    hall_capacity: '120',
    room_capacity: '15',
    category: '밥집',
  },
  {
    storeId: 9,
    name: '돈까스좋아 부산',
    store_image_url: '/beer.webp',
    phone: '02-1234-5678',
    content: '이곳은 밥집입니다.',
    address: '부산',
    created_at: '12월',
    updated_at: '7월',
    weekday_start_time: '오전 9시',
    weekday_end_time: '오후 9시',
    weekend_start_time: '오후 3시',
    weekend_end_time: '새벽 5시',
    hall_capacity: '120',
    room_capacity: '15',
    category: '밥집',
  },
];

const interestedLocation = {
  seoul: [
    { display: '서울 전체', value: '서울' },
    { display: '강남구', value: '강남' },
    { display: '마포구', value: '마포' },
  ],
  busan: [
    { display: '부산 전체', value: '부산' },
    { display: '해운대구', value: '해운대' },
    { display: '부산진구', value: '부산진' },
  ],
};

type HomePageProps = {
  searchParams: { [key: string]: string };
};

export default async function Home({ searchParams }: HomePageProps) {
  const isLogin = false;
  const { sorted } = searchParams;
  const filteredLocation = sorted ?? '서울';

  const filteredStores = mokStores.filter(store => store.address === filteredLocation);

  return (
    <>
      {/*Mobile only navbar*/}
      <nav className="flex h-14 items-center px-4 text-xl font-bold leading-normal text-black sm:hidden">
        <Link href="/" className="">
          <Image src="/brand.png" alt="brand logo" width={44} height={30} />
        </Link>
        <MobileSearchIcon />
        <button className="ml-4">
          <MdOutlinePersonOutline className="text-2xl font-extrabold text-secondary" />
        </button>
      </nav>

      {/*Main page hero section*/}
      <section className="h-[346px] w-full sm:h-[630px]">
        <Hero imgUrl="url(/hero.jfif)" searchParams={searchParams} />
      </section>

      {/*Login request section -- shows when user is not logged in*/}
      {!isLogin && (
        <section className="items-center bg-[#FFFAEA]  py-4">
          <LoginRequest />
        </section>
      )}
      <section className="mx-auto px-4 pb-5 pt-20 sm:max-w-[1180px] sm:px-10 sm:pb-10 sm:pt-40">
        <p className={`inline-flex h-[43px] items-center text-xl font-bold sm:text-3xl`}>
          이런 장소를 찾고 있나요
        </p>
      </section>
      {/*Main page carousel section*/}
      <section className="bg-[#FFFAEA] ">
        <div className={`relative mx-auto h-[328px] px-4 sm:h-[498px] sm:max-w-[1180px] sm:px-10`}>
          <MainCarousel />
        </div>
      </section>

      {/*Famous place section*/}
      <section className="sm: h-fit py-10 sm:pb-40 sm:pt-20">
        <BackgroundCard
          overlay
          imgUrl="url(/table.jfif)"
          radius={'none'}
          className="bg-cover bg-center"
        >
          <div
            className={`z-[1] mx-auto flex h-full w-full flex-col px-4 py-10 text-[#FFFAEA] sm:w-[1180px] sm:px-10 sm:py-20`}
          >
            <b className="mb-6 text-xl leading-[32px] sm:mb-8 sm:text-[32px]">
              많이 찾는 회식 장소
            </b>

            {/* Desktop only filter */}
            <div className="ml-auto hidden cursor-pointer sm:inline-block">
              <LocationFilter locations={interestedLocation} />
            </div>

            {/* Mobile only filter */}
            <div className="ml-auto cursor-pointer sm:hidden">
              <MobileLocationFilter locations={interestedLocation} />
            </div>

            <div className="mt-5 grid grid-cols-2 justify-items-center gap-y-3 sm:mt-10 sm:grid-cols-4 sm:grid-rows-1 sm:gap-5">
              {filteredStores.map(store => (
                <StoreCard key={store.storeId} store={store} page="main" />
              ))}
            </div>
          </div>
        </BackgroundCard>
      </section>
    </>
  );
}
