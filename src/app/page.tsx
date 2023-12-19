import BackgroundCard from '@/components/BackgroundCard';
import LoginRequest from '@/components/main/LoginRequest';
import Hero from '@/components/main/hero/Hero';
import { Spacer } from '@nextui-org/spacer';
import MainCarousel from '@/components/main/MainCarousel';
import FamousPlace from '@/components/main/famous/FamousPlace';
import Link from 'next/link';
import Image from 'next/image';
import { GrSearch } from 'react-icons/gr';
import { MdOutlinePersonOutline } from 'react-icons/md';

export const mokStores = [
  {
    storeId: 1,
    location_id: '서울시 마포구 서교동 123-1',
    //
    name: '청기와 부산 갈매ddddsfdsfdsfsdfdsfdsfdsssssssssddd기',
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

type HomePageProps = {
  searchParams: { [key: string]: string | undefined };
};

export default async function Home({ searchParams }: HomePageProps) {
  const isLogin = false;

  return (
    <>
      <nav className="flex h-14 items-center px-4 text-xl font-bold leading-normal text-black sm:hidden">
        <Link href="/" className="">
          <Image src="/brand.png" alt="brand logo" width={44} height={30} />
        </Link>
        <GrSearch className="ml-auto cursor-pointer text-xl font-extrabold text-secondary" />
        <MdOutlinePersonOutline className="ml-4 cursor-pointer text-2xl font-extrabold text-secondary" />
      </nav>
      <section className="h-[346px] w-full sm:h-[630px]">
        <Hero imgUrl="url(/hero.jfif)" />
      </section>
      {!isLogin && (
        <section className="items-center bg-[#FFFAEA]  py-4">
          <LoginRequest />
        </section>
      )}
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
      <section className="h-fit bg-[#FFFAEA] py-10 sm:py-20">
        <div className={`mx-auto h-full px-4 sm:w-[1180px] sm:px-10`}>
          <h2 className="mb-6 text-xl font-bold leading-[32px] text-black sm:mb-8 sm:text-3xl">
            많이 찾는 회식 장소
          </h2>
          <FamousPlace stores={mokStores} />
        </div>
      </section>
    </>
  );
}
