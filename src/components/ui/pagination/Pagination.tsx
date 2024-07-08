import React from 'react';

export const Pagination = () => {
	return (
		<div className='flex justify-center'>
			<nav aria-label='Page navigation example'>
				<ul className='flex list-style-none'>
					<li className='page-item disabled'>
						<a
							className='page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none'
							href='#'
							aria-disabled='true'>
							Previous
						</a>
					</li>
					<li className='page-item'>
						<a
							className='page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
							href='#'>
							1
						</a>
					</li>

					<li className='page-item'>
						<a
							className='page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
							href='#'>
							Next
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};
