import LoginRequest from "@/components/LoginRequest";
import Hero from "@/components/hero/Hero";

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
    </>
  );
}
