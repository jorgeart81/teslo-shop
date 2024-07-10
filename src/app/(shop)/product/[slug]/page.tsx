export const revalidate = 604800; // 7 days

import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { getProductBySlug } from '@/actions';
import { ProductMobileSlideshow, ProductSlideshow, StockLabel } from '@/components/product';
import { titleFont } from '@/config/fonts';
import { AddToCart } from './ui/AddToCart';

interface Props {
	params: {
		slug: string;
	};
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
	const slug = params.slug;
	const product = await getProductBySlug(slug);

	// optionally access and extend (rather than replace) parent metadata
	// const previousImages = (await parent).openGraph?.images || [];
	return {
		title: product?.title ?? 'Producto no encontrado',
		description: product?.description ?? '',
		openGraph: {
			title: product?.title ?? 'Producto no encontrado',
			description: product?.description ?? '',
			// images: ['/some-specific-page-image.jpg', ...previousImages],
			images: [`/products/${product?.images[1]}`],
		},
	};
}

export default async function ProductBySlugPage({ params }: Props) {
	const { slug } = params;
	const product = await getProductBySlug(slug);

	if (!product) {
		notFound();
	}

	return (
		<div className='mt-5 mb-10 grid md:grid-cols-3 md:gap-3'>
			{/* Slideshow */}
			<div className='col-span-1 md:col-span-2'>
				{/* Mobile Slideshow */}
				<ProductMobileSlideshow title={product.title} images={product.images} className='block md:hidden' />
				{/* Desktop Slideshow */}
				<ProductSlideshow title={product.title} images={product.images} className='hidden md:block' />
			</div>

			{/* Details */}
			<div className='col-span-1 px-5'>
				<StockLabel slug={slug} />
				<h1 className={`${titleFont.className} antialiased font-bold text-xl`}>{product.title}</h1>
				<p className='text-lg mb-5'>{product.price}</p>

				<AddToCart product={product} />
				
				{/* Description */}
				<h3 className='font-bold text-sm'>Descripción</h3>
				<p className='font-light'>{product.description}</p>
			</div>
		</div>
	);
}
