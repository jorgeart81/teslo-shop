'use server';

import prisma from '@/lib/prisma';

export const getProductBySlug = async (slug: string) => {
	try {
		const product = await prisma.product.findFirst({
			include: {
				ProducImage: {
					select: { url: true },
				},
			},
			where: { slug },
		});

		if (!product) return null;

		return {
			...product,
			images: product.ProducImage.map((image) => image.url),
		};
	} catch (error) {
		console.log(error);
		throw new Error('Error al obtener producto por slug');
	}
};
