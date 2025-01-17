export const revalidate = 60; //60 seg.

import { getPaginatedProductsWithImages } from '@/actions';
import { ProductGrid } from '@/components/products';
import { Pagination, Title } from '@/components/ui';
import { redirect } from 'next/navigation';

interface Props {
	searchParams: {
		page?: string;
	};
}

export default async function Home({ searchParams }: Props) {
	const pageParam = searchParams.page ? Number(searchParams.page) : 1;
	const page = isNaN(pageParam) ? 1 : pageParam;

	const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page });

	if (products.length === 0 || pageParam < 0 || isNaN(pageParam)) {
		redirect('/');
	}

	return (
		<>
			<Title title='Tienda' subtitle='Todos los productos' />
			<ProductGrid products={products} />
			<Pagination totalPages={totalPages} />
		</>
	);
}
