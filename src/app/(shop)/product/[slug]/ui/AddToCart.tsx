'use client';

import { useEffect, useState } from 'react';

import { QuantitySelector, SizeSelector } from '@/components/product';
import type { Product, Size } from '@/interfaces';
import { useCartStore } from '@/store';
import { cartProductAdapter } from '@/adapters';

interface Props {
	product: Product;
}

export const AddToCart = ({ product }: Props) => {
	const [size, setSize] = useState<Size>();
	const [quantity, setQuantity] = useState<number>(1);
	const [showError, setShowError] = useState(false);
	const cantAddToCart = quantity && size;
	const { addProductToCart } = useCartStore((state) => ({
		addProductToCart: state.addProductToCart,
	}));

	const handleAddToCart = () => {
		if (!cantAddToCart) {
			setShowError(true);
			return;
		}

		addProductToCart(cartProductAdapter({ ...product, quantity, size }));
	};

	useEffect(() => {
		if (cantAddToCart) setShowError(false);
	}, [cantAddToCart]);

	return (
		<>
			{showError && <span className='mt-2 text-red-500 fade-in'>Debe seleccionar una talla*</span>}
			<SizeSelector selectedSize={size} availableSizes={product.sizes} handleSizeSelector={setSize} />
			<QuantitySelector quantity={quantity} limit={product.inStock} onQuantityChanged={setQuantity} />
			<button disabled={showError && !cantAddToCart} onClick={handleAddToCart} className='btn-primary my-5'>
				Agregar al carrito
			</button>
		</>
	);
};
