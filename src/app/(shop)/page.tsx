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
	const page = searchParams.page ? parseInt(searchParams.page) : 1;
	const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page });

	if (products.length === 0 || currentPage > totalPages) {
		redirect('/');
	}

	return (
		<>
			<Title title='Tienda' subtitle='Todos los productos' />
			<ProductGrid products={products} />
			<Pagination />
		</>
	);
}
