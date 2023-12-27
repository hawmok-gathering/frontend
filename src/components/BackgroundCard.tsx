import { Card } from '@nextui-org/card';
import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@nextui-org/react';

type BackgroundCardProps = {
  imgUrl: string;
  overlay?: boolean;
  overlayColor?: string;
} & ComponentPropsWithoutRef<typeof Card>;

export default function BackgroundCard(props: BackgroundCardProps) {
  const { style, children, className, imgUrl, overlay, overlayColor, ...rest } = props;

  return (
    <Card {...rest} className={className} style={{ ...style, backgroundImage: `${imgUrl}` }}>
      {/* overlay */}
      {overlay && (
        <div className={cn('absolute h-full w-full bg-black bg-opacity-40', overlayColor)}></div>
      )}
      {children}
    </Card>
  );
}
