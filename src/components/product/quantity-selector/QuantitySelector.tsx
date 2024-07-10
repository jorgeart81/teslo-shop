import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

interface Props {
	limit?: number;
	quantity: number;
	onQuantityChanged: (value: number) => void;
}

export const QuantitySelector = ({ limit = 10, quantity, onQuantityChanged }: Props) => {
	const onValueChanged = (value: number) => {
		if (quantity + value < 1 || quantity + value > limit) return;
		onQuantityChanged(quantity + value);
	};

	return (
		<div className='flex items-center'>
			<button disabled={quantity < 2} onClick={() => onValueChanged(-1)} className='disabled:opacity-50'>
				<IoRemoveCircleOutline size={30} />
			</button>
			<span className='w-16 md:w-20 mx-3 px-5 py-1 bg-gray-100 text-center rounded'>{quantity}</span>
			<button disabled={quantity === limit} onClick={() => onValueChanged(1)} className='disabled:opacity-50'>
				<IoAddCircleOutline size={30} />
			</button>
		</div>
	);
};
