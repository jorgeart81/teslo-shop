'use client';

import { useEffect, useState } from 'react';

import { getStockBySlug } from '@/actions/product/get-stock-by-slug';
import { titleFont } from '@/config/fonts';

interface Props {
	slug: string;
}

export const StockLabel = ({ slug }: Props) => {
	const [stock, setStock] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getStock();
	}, [slug]);

	const getStock = async () => {
		const inStock = await getStockBySlug(slug);
		setStock(inStock);
		setIsLoading(false);
	};

	return (
		<>
			{isLoading ? (
				<p className={`${titleFont.className} antialiased font-bold text-lg rounded-none bg-gray-200 animate-pulse`}>
					&nbsp;
				</p>
			) : (
				<p className={`${titleFont.className} antialiased font-bold text-lg`}>Stock: {stock}</p>
			)}
		</>
	);
};
