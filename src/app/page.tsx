import BackgroundCard from '@/components/BackgroundCard';
import LoginRequest from '@/components/main/LoginRequest';
import Hero from '@/components/main/hero/Hero';
import { Spacer } from '@nextui-org/spacer';
import MainCarousel from '@/components/main/MainCarousel';
import Link from 'next/link';
import Image from 'next/image';
import { GrSearch } from 'react-icons/gr';
import { MdOutlinePersonOutline } from 'react-icons/md';
import StoreCard from '@/components/StoreCard';
import { Button } from '@nextui-org/react';
import { SlLocationPin } from 'react-icons/sl';
import { IoIosArrowForward } from 'react-icons/io';

export const mokStores = [
  {
    storeId: 1,
    location_id: '서울시 마포구 서교동 123-1',
    //
    name: '청기와 부산 갈매기 ddddsfdsfdsfsdfdsfdsfdssssㅁㄴㅇㄹㄴㅁㄹㄴㄹsssssddd',
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
    { display: '서울 전체', value: 'holeSeoul' },
    { display: '강남구', value: 'gangnam' },
    { display: '마포구', value: 'mapo' },
  ],
  busan: [
    { display: '부산 전체', value: 'holeBusan' },
    { display: '해운대구', value: 'haeundae' },
    { display: '부산진구', value: 'busanjin' },
  ],
};

const interestedGroup = [
  { display: '5~8인', value: '5-8' },
  { display: '9~12인', value: '9-12' },
  { display: '13~16인', value: '13-16' },
  { display: '17~20인', value: '17-20' },
  { display: '20인 이상', value: '21' },
];

type HomePageProps = {
  searchParams: { [key: string]: string };
};

export default async function Home({ searchParams }: HomePageProps) {
  const isLogin = false;
  const { sorted } = searchParams;
  const filteredLocation = sorted ?? '서울';
  const shiftLocation = sorted === '서울' ? '부산' : '서울';

  const filteredStores = mokStores.filter(store => store.address === filteredLocation);

  return (
    <>
      {/*Mobile only navbar*/}
      <nav className="flex h-14 items-center px-4 text-xl font-bold leading-normal text-black sm:hidden">
        <Link href="/" className="">
          <Image src="/brand.png" alt="brand logo" width={44} height={30} />
        </Link>
        <Link href="/mobile" className="ml-auto">
          <GrSearch className="text-xl font-extrabold text-secondary" />
        </Link>
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

      {/*Main page carousel section*/}
      <section className="py-12">
        <div className={`mx-auto px-4 py-6 sm:max-w-[1180px] sm:px-10`}>
          <h2 className={`inline-flex h-[43px] items-center text-xl font-bold sm:text-3xl`}>
            이런 장소를 찾고 있나요
          </h2>
          <Spacer y={6} />
          <BackgroundCard
            overlay={true}
            imgUrl="url(/table.jfif)"
            className="h-[304px] w-full bg-cover bg-center sm:h-[498px]"
            radius="none"
          >
            <MainCarousel />
          </BackgroundCard>
        </div>
      </section>

      {/*Famous place section*/}
      <section className="h-fit bg-[#FFFAEA] py-10 sm:py-20">
        <div className={`mx-auto h-full px-4 sm:w-[1180px] sm:px-10`}>
          <h2 className="mb-6 text-xl font-bold leading-[32px] text-black sm:mb-8 sm:text-3xl">
            많이 찾는 회식 장소
          </h2>
          <div className="flex justify-between">
            <Button
              startContent={<SlLocationPin className="stroke-[5px] text-lg" />}
              variant="light"
              className="mx-0 px-0 text-base font-bold text-secondary data-[hover=true]:bg-transparent"
            >
              <Link href={`/?sorted=${shiftLocation}`} scroll={false}>
                {filteredLocation} 전체
              </Link>
            </Button>
            <Button
              endContent={<IoIosArrowForward />}
              variant="light"
              className="text-base font-bold text-secondary data-[hover=true]:bg-transparent"
            >
              회식 장소 더보기
            </Button>
          </div>
          <Spacer y={8} />
          <div className="grid grid-cols-2 justify-items-center gap-y-3 sm:grid-cols-4 sm:grid-rows-1 sm:gap-5">
            {filteredStores.map(store => (
              <StoreCard key={store.storeId} store={store} page="main" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
