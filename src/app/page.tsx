import HeroBackground from "@/components/hero/HeroBackground";
import { Spacer } from "@nextui-org/spacer";

export default function Home() {
  return (
    <>
      <section className="border h-[640px] w-full">
        <HeroBackground
          imgUrl="url(/spagetti-1008867_640.jpg)"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <p className="text-5xl font-bold text-white">다수가 모이는</p>
            <Spacer y={10} />
            <p className="text-5xl font-bold text-white">
              회식 장소를 <span className="text-primary">한 번에</span>
            </p>
            <Spacer y={10} />
            <p className="text-[#FFFAEA]">
              맞춤형 회식 장소를 3초만에 찾아보세요!
            </p>
          </div>
        </HeroBackground>
      </section>
    </>
  );
}
