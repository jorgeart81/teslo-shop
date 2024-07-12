'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { QuantitySelector } from '@/components/product';
import { useCartStore } from '@/store';
import Link from 'next/link';

export const ProductsInCart = () => {
	const { productsInCart } = useCartStore((state) => ({
		productsInCart: state.cart,
	}));

	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	if (!loaded) {
		return <p>Loading...</p>;
	}

	return (
		<div className='flex flex-col gap-2'>
			{productsInCart.map((product) => (
				<div key={product.slug + product.size} className='flex'>
					<Image
						src={`/products/${product.image}`}
						width={100}
						height={100}
						alt={product.title}
						className='mr-5 rounded object-cover'
					/>

					<div className='flex flex-col items-start'>
						<Link href={`/product/${product.slug}`}>
							{product.size} - {product.title}
						</Link>
						<div>${product.price}</div>

						<div className='my-2'>
							<QuantitySelector quantity={product.quantity} onQuantityChanged={() => {}} />
						</div>
						<button className='underline'>Remover</button>
					</div>
				</div>
			))}
		</div>
	);
};
