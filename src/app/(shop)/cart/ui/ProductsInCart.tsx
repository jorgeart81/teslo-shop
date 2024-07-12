'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { QuantitySelector } from '@/components/product';
import { useCartStore } from '@/store';

export const ProductsInCart = () => {
	const { productsInCart, updateProductQuantity, removeProductInCart } = useCartStore((state) => ({
		productsInCart: state.cart,
		updateProductQuantity: state.updateProductQuantity,
		removeProductInCart: state.removeProductInCart,
	}));

	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	if (!loaded) {
		return <p>Loading...</p>;
	}

	return (
		<div className='flex flex-col gap-5'>
			{productsInCart.map((product) => (
				<div key={product.slug + product.size} className='flex h-36'>
					<Image
						src={`/products/${product.image}`}
						width={100}
						height={100}
						alt={product.title}
						className='mr-5 rounded object-cover'
					/>

					<div className='flex flex-col items-start justify-between'>
						<Link href={`/product/${product.slug}`}>
							{product.size} - {product.title}
						</Link>
						<div>${product.price}</div>

						<div className='my-2'>
							<QuantitySelector
								quantity={product.quantity}
								onQuantityChanged={(quantity) => {
									updateProductQuantity(product, quantity);
								}}
							/>
						</div>
						<button onClick={() => removeProductInCart(product)} className='underline bottom-0'>
							Remover
						</button>
					</div>
				</div>
			))}
		</div>
	);
};
