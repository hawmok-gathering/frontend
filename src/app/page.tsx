import BackgroundCard from '@/components/BackgroundCard';
import LoginRequest from '@/components/main/LoginRequest';

import Hero from '@/components/main/hero/Hero';
import { Spacer } from '@nextui-org/spacer';
import MainCarousel from '@/components/main/Carousel/MainCarousel';

export default function Home() {
  const isLogin = false;
  return (
    <>
      <section className="h-[640px] w-full">
        <Hero imgUrl="url(/spagetti-1008867_640.jpg)" />
      </section>
      {!isLogin && (
        <section className="items-center bg-[#FFFAEA]  py-4">
          <LoginRequest />
        </section>
      )}
      <section className="py-12">
        <div className={`mx-auto max-w-[1280px] p-6`}>
          <h2 className={`inline-flex h-[43px] items-center text-3xl font-bold`}>
            이런 장소를 찾고 있나요
          </h2>
          <Spacer y={6} />
          <BackgroundCard
            imgUrl="url(/table.jpg)"
            className="h-[498px] w-full bg-cover bg-center"
            radius="none"
          >
            <MainCarousel />
          </BackgroundCard>
        </div>
      </section>
    </>
  );
}
