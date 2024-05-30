import { titleFont } from '@/config/fonts';
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`${className}`}>
      <h1
        className={`${titleFont.className} antialiased text-4xl font-semibold mt-10`}>
        {title}
      </h1>
      {subtitle && <h3 className='mb-5 text-xl font-semibold uppercase mt-10'>{subtitle}</h3>}
    </div>
  );
};
