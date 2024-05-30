import { titleFont } from '@/config/fonts';
import Link from 'next/link';
import React from 'react';
import { IoCarOutline, IoCartOutline, IoSearchOutline } from 'react-icons/io5';

const linkList = [
  {
    to: '/category/men',
    label: 'Hombres',
  },
  {
    to: '/category/women',
    label: 'Mujeres',
  },
  {
    to: '/category/kids',
    label: 'Niños',
  },
];

export const TopMenu = () => {
  return (
    <nav className='flex px-5 h-14 justify-between items-center w-full'>
      <Link href={'/'}>
        <span className={`${titleFont.className} antialiased font-bold`}>
          Teslo
        </span>
        <span> | Shop</span>
      </Link>

      {/* Center menu */}
      <div className='hidden sm:block'>
        {linkList.map(link => (
          <Link
            key={link.label}
            href={link.to}
            className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>
            {link.label}
          </Link>
        ))}
      </div>

      {/* Searc, Cart, Menu */}
      <div className='flex gap-4 items-center'>
        <Link href={'/search'}>
          <IoSearchOutline className='size-5' />
        </Link>
        <Link href={'/search'} className='relative z-0'>
          <span className='absolute text-white text-xs font-bold rounded-full px-1 bg-blue-700 z-10 -top-2 -right-2'>
            3
          </span>
          <div className='relative z-0'>
            <IoCartOutline className='size-5' />
          </div>
        </Link>
        <button className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>
          Menu
        </button>
      </div>
    </nav>
  );
};
