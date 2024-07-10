'use client';

import { useState } from 'react';

import { QuantitySelector, SizeSelector } from '@/components/product';
import type { Product, Size } from '@/interfaces';

interface Props {
	product: Product;
}

export const AddToCart = ({ product }: Props) => {
	const [selectedSize, setSelectedSize] = useState<Size>();

	return (
		<>
			<SizeSelector selectedSize={selectedSize} availableSizes={product.sizes} handleSizeSelector={setSelectedSize} />
			<QuantitySelector quantity={2} />
		</>
	);
};
