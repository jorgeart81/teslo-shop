'use client';

import Image from 'next/image';

import { Autoplay, FreeMode, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import './slideshow.css';

interface Props {
	images: string[];
	title: string;
	className?: string;
}

export const ProductMobileSlideshow = ({ images, title, className }: Props) => {
	return (
		<div className={className}>
			<>
				<Swiper
					style={{ width: '95vw' }}
					pagination
					autoplay={{ delay: 8000 }}
					modules={[FreeMode, Thumbs, Autoplay, Pagination]}
					className='mySwiper2'>
					{images.map((image) => (
						<SwiperSlide key={image}>
							<Image width={600} height={500} src={`/products/${image}`} alt={title} className='object-fill' />
						</SwiperSlide>
					))}
				</Swiper>
			</>
		</div>
	);
};
