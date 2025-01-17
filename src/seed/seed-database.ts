import { initialData } from './seed';
import prisma from '../lib/prisma';

async function main() {
	// delete previous records
	await prisma.productImage.deleteMany();
	await prisma.product.deleteMany();
	await prisma.category.deleteMany();

	const { categories, products } = initialData;

	// insert categories
	const categoriesData = categories.map((name) => ({ name }));

	await prisma.category.createMany({
		data: categoriesData,
	});

	const categoriesDB = await prisma.category.findMany();
	const categoriesMap = categoriesDB.reduce((map, category) => {
		map[category.name.toLowerCase()] = category.id;
		return map;
	}, {} as Record<string, string>);

	// insert products
	products.forEach(async (product) => {
		const { type, images, ...rest } = product;

		const dbProduct = await prisma.product.create({
			data: {
				...rest,
				categoryId: categoriesMap[type],
			},
		});

		// Images
		const imagesData = images.map((image) => ({
			url: image,
			productId: dbProduct.id,
		}));

		await prisma.productImage.createMany({
			data: imagesData,
		});
	});

	console.log('The seed was executed successfully');
}

(() => {
	if (process.env.NODE_ENV === 'production') return;

	main();
})();
