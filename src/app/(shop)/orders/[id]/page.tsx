/* eslint-disable react/no-unescaped-entities */
import { Title } from '@/components/ui';
import { initialData } from '@/seed/seed';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';

const productsInCart = [initialData.products[0], initialData.products[1], initialData.products[2]];

interface Props {
	params: {
		id: string;
	};
}

export default function OrderPage({ params }: Props) {
	const { id } = params;

	return (
		<div className='flex justify-center items-center mb-72 px-8 sm:px-0'>
			<div className='flex flex-col w-[1000px]'>
				<Title title={`Ordern #${id}`} />

				<div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
					{/* Cart */}
					<div className='flex flex-col gap-5'>
						<div
							className={clsx('flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5', {
								'bg-red-500': false,
								'bg-green-600': true,
							})}>
							<IoCartOutline size={30} />
							{/* <span className='mx-2'>Pendiente de pago</span> */}
							<span className='mx-2'>Orden pagada</span>
						</div>

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
									<div>{product.price} x3</div>
									<div className='font-bold'>Subtotal: {product.price * 3}</div>
								</div>
							</div>
						))}
					</div>

					{/* Checkout */}
					<div className='bg-white rounded-xl shadow-xl p-7'>
						<h2 className='text-2xl font-bold mb-2'>Datos de entrega</h2>
						<div>
							<p className='text-xl font-semibold'>Fernando Herrera</p>
							<p>Av. Siempre viva 123</p>
							<p>Col. Centro</p>
							<p>Alcaldia Cuauhtémoc</p>
							<p>Ciudad de México</p>
							<p>CP 1212121</p>
							<p>123.123.123.123</p>
						</div>

						{/* Divider */}
						<div className='w-full h-0.5 rounded bg-gray-200 my-10' />

						<h2 className='text-2xl font-bold mb-2'>Resumen de orden</h2>

						<div className='grid grid-cols-2'>
							<span>No. Productos</span>
							<span className='text-right'>3 artículos</span>

							<span>Subtotal</span>
							<span className='text-right'>$ 85</span>

							<span>Impuestos (15%)</span>
							<span className='text-right'>$ 15</span>

							<span className='mt-5 text-2xl'>Total:</span>
							<span className='mt-5 text-2xl text-right'>$ 100</span>
						</div>

						<div className='mt-5 mb-2 w-full'>
							<div
								className={clsx('flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5', {
									'bg-red-500': false,
									'bg-green-600': true,
								})}>
								<IoCartOutline size={30} />
								{/* <span className='mx-2'>Pendiente de pago</span> */}
								<span className='mx-2'>Orden pagada</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
