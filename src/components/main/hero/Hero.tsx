import { ContentBoxPosition } from "@/constants/constant";
import { Button } from "@nextui-org/button";
import { Spacer } from "@nextui-org/spacer";
import { ComponentPropsWithoutRef } from "react";
import { MdOutlinePersonOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import ClientAutoComplete from "./ClientAutoComplete";
const autoOne = [
  {
    sectionTitle: "서울",
    items: [
      { label: "서울전체", value: "seoul" },
      { label: "강남구", value: "gangnam" },
      { label: "마포구", value: "mapo" },
    ],
  },
  {
    sectionTitle: "부산",
    items: [
      { label: "부산전체", value: "busan" },
      { label: "부산진구", value: "busanjin" },
      { label: "해운대구", value: "haeundae" },
    ],
  },
];

const autTwo = [
  {
    sectionTitle: "인원",
    items: [
      { label: "5~10명", value: "5~10" },
      { label: "10~15명", value: "10~15" },
      { label: "15~20명", value: "15~20" },
      { label: "20~25명", value: "20~25" },
      { label: "25~30명", value: "25~30" },
    ],
  },
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
            startContent={<SlLocationPin className="text-4xl font-bold" />}
            radius="none"
            popoverProps={{
              radius: "none",
              offset: 0,
            }}
            selectorButtonProps={{
              color: "primary",
            }}
            aria-labelledby="party-area 지역"
            inputProps={{
              classNames: {
                inputWrapper: "w-[134px] h-[44px]",
                input: "text-xs",
              },
            }}
            listboxProps={{
              classNames: {
                base: "p-2",
              },
            }}
          />

          <ClientAutoComplete
            items={autTwo}
            className="w-[134px] h-full"
            labelPlacement="outside"
            placeholder="인원"
            startContent={
              <MdOutlinePersonOutline className="text-5xl font-bold" />
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
            inputProps={{
              classNames: {
                inputWrapper: "w-[134px] h-[44px]",
                input: "text-xs",
              },
            }}
            listboxProps={{
              classNames: {
                base: "p-2",
              },
            }}
          />

          <Spacer x={5} />

          {/* buttons */}
          <Button
            radius="none"
            className="w-[134px] h-[44px] bg-white font-bold text-black text-sm"
            color="primary"
          >
            <p>
              # 1차<span className="font-normal">로</span> 든든하게
            </p>
          </Button>
          <Button
            radius="none"
            className="w-[134px] h-[44px] bg-white font-bold text-black text-sm"
            color="primary"
          >
            <p>
              # 2차<span className="font-normal">로</span> 가볍게
            </p>
          </Button>
          <Spacer x={5} />
          <Button
            radius="none"
            className="text-white font-bold w-[127px] h-[44px] text-sm"
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
