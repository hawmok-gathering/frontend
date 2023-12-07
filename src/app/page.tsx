import BackgroundCard from '@/components/BackgroundCard';
import LoginRequest from '@/components/main/LoginRequest';
import Carousel from '@/components/main/Carousel';
import Hero from '@/components/main/hero/Hero';
import { CardSize, ContentBoxPosition } from '@/constants/constant';
import { Spacer } from '@nextui-org/spacer';
import { Button } from '@nextui-org/button';
import { CardBody } from '@nextui-org/card';

export type Carousel = {
  title: string;
  tag: string;
  imgUrl: string;
};

const sliderItems: Carousel[] = [
  {
    title: '1차로 가기좋은',
    tag: '# 맛  # 든든한 한끼',
    imgUrl: 'url(/steak.jpg)',
  },
  {
    title: '2차에 딱맞는',
    tag: '# 1차로 끝내긴 아쉬울 때',
    imgUrl: 'url(/beer.webp)',
  },
  {
    title: '프라이빗 하게',
    tag: '# 조용한  # 분위기 좋은',
    imgUrl: 'url(/wine.jpg)',
  },
  {
    title: '테스트용 카드4',
    tag: '# 3번인덱스  # 태그 구분은 빈칸 두개',
    imgUrl: 'url(/soju.jpg)',
  },
];

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
        <div
          className={`${ContentBoxPosition.desktopMaxWidthClassName} mx-auto ${ContentBoxPosition.desktopPaddingXClassName} `}
        >
          <h2 className={`inline-flex h-[43px] items-center text-3xl font-bold`}>
            이런 장소를 찾고 있나요
          </h2>
          <Spacer y={6} />
          <BackgroundCard
            imgUrl="url(/table.jpg)"
            className="h-[498px] w-full bg-cover bg-center"
            radius="none"
          >
            <Carousel items={sliderItems}>
              {sliderItems.map((item, index) => (
                <BackgroundCard
                  key={index}
                  imgUrl={item.imgUrl}
                  className={`bg-cover bg-center bg-origin-border ${CardSize.CarouselWidthClassName} ${CardSize.CarouselHeightClassName} shrink-0 overflow-hidden font-bold text-white`}
                >
                  {/**gradient image*/}
                  <div className="absolute h-full w-3/4 -translate-x-10 bg-opacity-20 bg-gradient-to-r from-black from-0% to-transparent to-90%"></div>
                  <CardBody className="flex h-full flex-col py-12">
                    <Button
                      radius="full"
                      className="mt-auto h-[26px] w-16 bg-white text-xs font-bold text-primary"
                    >
                      둘러보기
                    </Button>
                    <Spacer y={3} />
                    <h3 className="text-2xl">{item.title}</h3>
                    <Spacer y={6} />
                    <span className="text-xs">{item.tag}</span>
                  </CardBody>
                </BackgroundCard>
              ))}
            </Carousel>
          </BackgroundCard>
        </div>
      </section>
    </>
  );
}
