import { Card } from '@nextui-org/react';
import { ComponentPropsWithoutRef } from 'react';

type BackgroundCardProps = {
  imgUrl: string;
} & ComponentPropsWithoutRef<typeof Card>;

export default function BackgroundCard({ imgUrl, ...rest }: BackgroundCardProps) {
  const { style, children, className } = rest;

  return (
    <Card {...rest} className={className} style={{ ...style, backgroundImage: `${imgUrl}` }}>
      {children}
    </Card>
  );
}
