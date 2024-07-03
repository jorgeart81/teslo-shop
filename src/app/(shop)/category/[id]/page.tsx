import { ProductGrid } from '@/components/products';
import { Title } from '@/components/ui';
import { Category } from '@/interfaces';
import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';

const titles: Record<Category, string> = {
	men: 'para hombres',
	women: 'para mujeres',
	kid: 'para niños',
	unisex: 'unisex',
};

const products = initialData.products;

interface Props {
	params: { id: Category };
}

export default function Page({ params }: Props) {
	const { id } = params;

	if (!Object.keys(titles).includes(id)) {
		notFound();
	}

	return (
		<>
			<Title title='Tienda' subtitle={`Artículos ${titles[id]}`} />
			<ProductGrid products={products.filter((p) => p.gender == id)} />
		</>
	);
}
