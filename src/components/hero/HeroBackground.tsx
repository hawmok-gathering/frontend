import { CSSProperties, ComponentPropsWithoutRef } from "react";


type BackgroundPosition = "top" | "bottom" | "center" | "left" | "right";

type HeroBackgroundProps = {
  imgUrl: string;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  backgroundPosition?: BackgroundPosition;
  innerWidth?: string;
} & ComponentPropsWithoutRef<"div">;

export default function HeroBackground({
  children,
  imgUrl,
  width = "100%",
  height = "100%",
  backgroundPosition = "center",
  innerWidth = "1280px",
  ...rest
}: HeroBackgroundProps) {
  const { style } = rest;
  return (
    <div
      {...rest}
      style={{
        backgroundImage: `${imgUrl}`,
        backgroundSize: "cover",
        width: `${width}`,
        height: `${height}`,
        backgroundPosition: `${backgroundPosition}`,
        ...style,
      }}
    >
      <div
        style={{
          width: `${innerWidth}`,
          height: `${height}`,
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        {children}
      </div>
    </div>
  );
}
