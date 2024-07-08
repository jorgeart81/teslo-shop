'use server';

import prisma from '@/lib/prisma';

interface PaginationOptions {
	page?: number;
	take?: number;
}

export const getPaginatedProductsWithImages = async ({ page = 1, take = 12 }: PaginationOptions) => {
	if (isNaN(Number(page))) page = 1;
	if (page < 1) page = 1;
	try {
		const [products, totalCount] = await Promise.all([
			prisma.product.findMany({
				take: take,
				skip: (page - 1) * 12,
				include: { ProducImage: { take: 2, select: { url: true } } },
			}),
			prisma.product.count({}),
		]);

		const totalPages = Math.ceil(totalCount / take);

		return {
			currentPage: page,
			totalPages: totalPages,
			products: products.map((product) => ({
				...product,
				images: product.ProducImage.map((image) => image.url),
			})),
		};
	} catch (error) {
		throw new Error('No se pudo cargar los productos');
	}
};
