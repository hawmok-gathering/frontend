import { ContentBoxPosition } from "@/constants/constant";
import { Button } from "@nextui-org/button";
import { Spacer } from "@nextui-org/spacer";
import { ComponentPropsWithoutRef } from "react";
import { MdOutlinePersonOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import ClientAutoComplete from "./ClientAutoComplete";

const autoOne = [
  { label: "서울", value: "서울" },
  { label: "경기", value: "경기" },
  { label: "인천", value: "인천" },
  { label: "대전", value: "대전" },
  { label: "세종", value: "세종" },
  { label: "충북", value: "충북" },
  { label: "충남", value: "충남" },
  { label: "강원", value: "강원" },
  { label: "경북", value: "경북" },
  { label: "경남", value: "경남" },
  { label: "전북", value: "전북" },
  { label: "전남", value: "전남" },
  { label: "제주", value: "제주" },
];

type BackgroundPosition = "top" | "bottom" | "center" | "left" | "right";

type HeroBackgroundProps = {
  imgUrl: string;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  backgroundPosition?: BackgroundPosition;
  innerWidth?: string;
} & ComponentPropsWithoutRef<"div">;

export default function Hero({
  children,
  imgUrl,
  width = "100%",
  height = "100%",
  innerWidth = ContentBoxPosition.desktopWidth,
  ...rest
}: HeroBackgroundProps) {
  const { style } = rest;
  return (
    // background Div
    <div
      className="bg-origin-border bg-cover"
      {...rest}
      style={{
        backgroundImage: `${imgUrl}`,
        width: `${width}`,
        height: `${height}`,
        ...style,
      }}
    >
      {/* inner div for fixed with. */}
      <div
        className={`flex flex-col justify-center items-start m-auto ${ContentBoxPosition.desktopPaddingXClassName}`}
        style={{
          width: `${innerWidth}`,
          height: `${height}`,
        }}
      >
        {children}

        {/* Hero TextField */}
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
        <Spacer y={32} />

        {/* auto complete for selecting area and portion of party */}
        <div style={{ display: "flex", gap: "10px" }}>
          <ClientAutoComplete
            items={autoOne}
            className="w-[138px] h-[44px]"
            labelPlacement="outside"
            placeholder="지역"
            startContent={<SlLocationPin className="text-6xl font-bold" />}
            radius="none"
            popoverProps={{
              radius: "none",
              offset: 0,
            }}
            selectorButtonProps={{
              color: "primary",
            }}
            aria-labelledby="party-area 지역"
          />

          <ClientAutoComplete
            items={autoOne}
            className="w-[138px] h-[44px]"
            labelPlacement="outside"
            placeholder="인원"
            startContent={
              <MdOutlinePersonOutline className="text-6xl font-bold" />
            }
            radius="none"
            popoverProps={{
              radius: "none",
              offset: 0,
            }}
            selectorButtonProps={{
              color: "primary",
            }}
            aria-labelledby="party-portion 인원"
            role="party"
          />

          <Spacer x={5} />

          {/* buttons */}
          <Button
            radius="none"
            className="w-[138px] bg-white font-bold text-black"
            variant="bordered"
            color="primary"
          >
            <p>
              <span className="text-primary font-normal"># 1차</span>로 든든하게
            </p>
          </Button>
          <Button
            radius="none"
            className="w-[138px] bg-white font-bold text-black"
            variant="bordered"
            color="primary"
          >
            <p>
              <span className="text-primary font-normal"># 2차</span>로 가볍게
            </p>
          </Button>
          <Spacer x={5} />
          <Button
            radius="none"
            className="text-white font bold"
            variant="solid"
            color="primary"
          >
            회식 장소 선택
          </Button>
        </div>
      </div>
    </div>
  );
}
