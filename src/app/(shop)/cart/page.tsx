import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { QuantitySelector } from '@/components/product';
import { Title } from '@/components/ui';
import { initialData } from '@/seed/seed';

const productsInCart = [initialData.products[0], initialData.products[1], initialData.products[2]];

export default function CartPage() {
	// redirect('/empty');

	return (
		<div className='flex justify-center items-center mb-72 px-8 sm:px-0'>
			<div className='flex flex-col w-[1000px]'>
				<Title title='Carrito' />

				<div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
					{/* Cart */}
					<div className='flex flex-col mt-5 gap-5'>
						<span className='text-xl'>Agregar más items</span>
						<Link href='/' className='underline mb-5'>
							Continúa comprando
						</Link>

						{/* Items */}
						{productsInCart.map((product) => (
							<div key={product.slug} className='flex'>
								<Image
									src={`/products/${product.images[0]}`}
									width={100}
									height={100}
									alt={product.title}
									className='mr-5 rounded object-cover'
								/>

								<div className='flex flex-col items-start'>
									<div>{product.title}</div>
									<div>{product.price}</div>

									<div className='my-4'>
										<QuantitySelector quantity={3} />
									</div>

									<button className='underline'>Remover</button>
								</div>
							</div>
						))}
					</div>

					{/* Checkout */}
					<div className='bg-white rounded-xl shadow-xl p-7'>
						<h2 className='text-2xl mb-2'>Resumen de orden</h2>

						<div className='grid grid-cols-2'>
							<span>No. Productos</span>
							<span className='text-right'>3 artículos</span>

							<span>Subtotal</span>
							<span className='text-right'>$ 85</span>

							<span>Impuestos (15%)</span>
							<span className='text-right'>$ 15</span>

							<span className='mt-5 text-2xl'>Total:</span>
							<span className='mt-5 text-2xl text-right'>3 artículos</span>
						</div>

						<div className='mt-5 mb-2 w-full'>
							<Link href='/checkout/address' className='flex btn-primary justify-center'>
								Checkout
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
