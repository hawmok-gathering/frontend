import { Card } from '@nextui-org/react';
import { ComponentPropsWithoutRef } from 'react';

type BackgroundCardProps = {
  imgUrl: string;
  overlay?: boolean;
} & ComponentPropsWithoutRef<typeof Card>;

export default function BackgroundCard(props: BackgroundCardProps) {
  const { style, children, className, imgUrl, overlay, ...rest } = props;

  return (
    <Card {...rest} className={className} style={{ ...style, backgroundImage: `${imgUrl}` }}>
      {/* overlay */}
      {overlay && <div className="absolute h-full w-full bg-black bg-opacity-40"></div>}
      {children}
    </Card>
  );
}
