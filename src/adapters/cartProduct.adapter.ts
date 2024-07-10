import type { CartProduct, Product } from '@/interfaces';

export const cartProductAdapter = (product: any): CartProduct => {
	return {
		id: product.id,
		slug: product.slug,
		title: product.title,
		price: product.price,
		quantity: product.quantity,
		size: product.size,
		image: product.images[0],
	};
};
