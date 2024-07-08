'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { generatePaginationNumbers } from '@/utils';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import clsx from 'clsx';

interface Props {
	totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const pageString = searchParams.get('page') ?? 1;
	const currentPage = isNaN(Number(pageString)) ? 1 : Number(pageString);
	const allPages = generatePaginationNumbers(currentPage, totalPages);

	const createPageUrl = (pageNumber: number | string) => {
		const params = new URLSearchParams(searchParams);

		if (pageNumber === '...') {
			return `${pathname}?${params.toString()}`;
		}

		if (Number(pageNumber) <= 0) return `${pathname}`;

		if (Number(pageNumber) > totalPages) return `${pathname}?${params.toString()}`;

		params.set('page', pageNumber.toString());
		return `${pathname}?${params.toString()}`;
	};

	return (
		<div className='flex text-center justify-center mt-10 mb-32'>
			<nav aria-label='Page navigation example'>
				<ul className='flex list-style-none'>
					<li className='page-item'>
						<Link
							className={clsx(
								'page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none',
								{ 'text-gray-500': currentPage <= 1 }
							)}
							href={createPageUrl(currentPage - 1)}>
							<IoChevronBackOutline size={30} />
						</Link>
					</li>

					{allPages.map((page, i) => (
						<li key={page + '-' + i} className='page-item'>
							<Link
								className={clsx(
									'page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none',
									{
										'bg-blue-500 text-white hover:bg-blue-600 hover:text-white': currentPage == page,
									}
								)}
								href={createPageUrl(page)}>
								{page}
							</Link>
						</li>
					))}

					<li className='page-item'>
						<Link
							className={clsx(
								'page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none',
								{ 'text-gray-500': currentPage == totalPages }
							)}
							href={createPageUrl(currentPage + 1)}>
							<IoChevronForwardOutline size={30} />
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};
