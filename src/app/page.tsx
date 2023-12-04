import LoginRequest from "@/components/LoginRequest";
import Hero from "@/components/main/hero/Hero";
import { ContentBoxPosition } from "@/constants/constant";

export default function Home() {
  const isLogin = false;
  return (
    <>
      <section className="h-[640px] w-full">
        <Hero imgUrl="url(/spagetti-1008867_640.jpg)" />
      </section>
      {!isLogin && (
        <section className="bg-[#FFFAEA] py-4  items-center">
          <LoginRequest />
        </section>
      )}
      <section className="py-12 h-[680px]">
        <div
          className={`max-w-[${ContentBoxPosition.desktopWidth}] mx-auto ${ContentBoxPosition.desktopPaddingXClassName}`}
        >
          <h2 className="text-3xl font-bold">이런 장소를 찾고 있나요</h2>
          <div className="w-full h-full">백그라운드가 필요해</div>
        </div>
      </section>
    </>
  );
}
