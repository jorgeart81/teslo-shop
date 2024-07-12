'use client';

import { useCartStore } from '@/store';
import { currencyFormat } from '@/utils';
import { useEffect, useState } from 'react';

export const OrderSumary = () => {
	const { itemsInCart, subTotal, tax, total } = useCartStore((state) => state.getSumaryInformation());

	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	if (!loaded) return <p>Loading...</p>;

	return (
		<>
			<span>No. Productos</span>
			<span className='text-right'>
				{itemsInCart} {itemsInCart === 1 ? 'artículo' : 'artículos'}
			</span>
			<span>Subtotal</span>
			<span className='text-right'>{currencyFormat(subTotal)}</span>
			<span>Impuestos (15%)</span>
			<span className='text-right'>{currencyFormat(tax)}</span>
			<span className='mt-5 text-2xl'>Total:</span>
			<span className='mt-5 text-2xl text-right'>{currencyFormat(total)}</span>
		</>
	);
};
