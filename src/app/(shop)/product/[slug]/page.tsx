import { notFound } from 'next/navigation';

import { initialData } from '@/seed/seed';
import { titleFont } from '@/config/fonts';
import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector } from '@/components/product';

interface Props {
	params: {
		slug: string;
	};
}

export default function Page({ params }: Props) {
	const { slug } = params;
	const product = initialData.products.find((p) => p.slug === slug);

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
				<h1 className={`${titleFont.className} antialiased font-bold text-xl`}>{product.title}</h1>
				<p className='text-lg mb-5'>{product.price}</p>

				<SizeSelector selectedSize={product.sizes[0]} availableSizes={product.sizes} />
				<QuantitySelector quantity={2} />

				<button className='btn-primary my-5'>Agregar al carrito</button>

				{/* Description */}
				<h3 className='font-bold text-sm'>Descripción</h3>
				<p className='font-light'>{product.description}</p>
			</div>
		</div>
	);
}
