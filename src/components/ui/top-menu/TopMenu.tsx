'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';

import { titleFont } from '@/config/fonts';
import { useCartStore, useUIStore } from '@/store';

const linkList = [
	{
		to: '/gender/men',
		label: 'Hombres',
	},
	{
		to: '/gender/women',
		label: 'Mujeres',
	},
	{
		to: '/gender/kid',
		label: 'Niños',
	},
];

export const TopMenu = () => {
	const { openSideMenu } = useUIStore((state) => ({
		openSideMenu: state.openSideMenu,
	}));
	const totalItemsInCart = useCartStore((state) => state.getTotalItems());

	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<>
			<div className='invisible h-14 w-full'></div>
			<nav className='flex px-5 h-14 justify-between items-center w-full fixed top-0 z-10 bg-white'>
				<Link href={'/'}>
					<span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
					<span> | Shop</span>
				</Link>

				{/* Center menu */}
				<div className='hidden sm:block'>
					{linkList.map((link) => (
						<Link key={link.label} href={link.to} className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>
							{link.label}
						</Link>
					))}
				</div>

				{/* Searc, Cart, Menu */}
				<div className='flex gap-4 items-center'>
					<Link href={'/search'}>
						<IoSearchOutline className='size-5' />
					</Link>
					<Link href={'/cart'} className='relative z-0'>
						{loaded && totalItemsInCart > 0 && (
							<span className='absolute text-white text-xs font-bold rounded-full px-1 bg-blue-700 z-10 -top-2 -right-2'>
								{totalItemsInCart}
							</span>
						)}
						<div className='relative z-0'>
							<IoCartOutline className='size-5' />
						</div>
					</Link>
					<button onClick={openSideMenu} className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>
						Menu
					</button>
				</div>
			</nav>
		</>
	);
};
