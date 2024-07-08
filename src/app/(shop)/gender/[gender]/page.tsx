export const revalidate = 60; //60 seg.

import { notFound, redirect } from 'next/navigation';

import { getPaginatedProductsWithImages } from '@/actions';
import { ProductGrid } from '@/components/products';
import { Pagination, Title } from '@/components/ui';
import { Gender } from '@prisma/client';

const titles: Record<string, string> = {
	men: 'para hombres',
	women: 'para mujeres',
	kid: 'para niños',
	unisex: 'unisex',
};

interface Props {
	params: { gender: Gender };
	searchParams: {
		page?: string;
	};
}

export default async function Page({ params, searchParams }: Props) {
	const { gender } = params;
	const pageParam = searchParams.page ? Number(searchParams.page) : 1;
	const page = isNaN(pageParam) ? 1 : pageParam;

	if (!Object.keys(titles).includes(gender)) {
		notFound();
	}
	const { products, totalPages } = await getPaginatedProductsWithImages({ page, gender });

	if (products.length === 0 || pageParam < 0 || isNaN(pageParam)) {
		redirect(`/gender/${gender}`);
	}

	return (
		<>
			<Title title='Tienda' subtitle={`Artículos ${titles[gender]}`} />
			<ProductGrid products={products} />
			<Pagination totalPages={totalPages} />
		</>
	);
}
