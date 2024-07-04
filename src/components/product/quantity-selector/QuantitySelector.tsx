'use client';

import { useState } from 'react';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

interface Props {
	quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {
	const [count, setCount] = useState(0);
	const onQuatityChange = (value: number) => {
		if (count + value < 1) return;
		setCount((prev) => prev + value);
	};

  return (
		<div className='flex items-center'>
			<button onClick={() => onQuatityChange(-1)}>
				<IoRemoveCircleOutline size={30} />
			</button>
			<span className='w-16 md:w-20 mx-3 px-5 py-1 bg-gray-100 text-center rounded'>{count}</span>
			<button onClick={() => onQuatityChange(1)}>
				<IoAddCircleOutline size={30} />
			</button>
		</div>
	);
};
