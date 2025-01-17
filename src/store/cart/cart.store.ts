import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { CartProduct } from '@/interfaces';

interface SumaryInformation {
	subTotal: number;
	tax: number;
	total: number;
	itemsInCart: number;
}

interface State {
	cart: CartProduct[];
}

interface Actions {
	getTotalItems: () => number;
	getSumaryInformation: () => SumaryInformation;
	addProductToCart: (product: CartProduct) => void;
	updateProductQuantity: (product: CartProduct, quantity: number) => void;
	removeProductInCart: (product: CartProduct) => void;
}

const storeApi: StateCreator<State & Actions, [['zustand/devtools', never]]> = (set, get) => ({
	cart: [],

	// Actions
	getTotalItems: () => {
		const { cart } = get();
		return cart.reduce((total, product) => total + product.quantity, 0);
	},

	getSumaryInformation: () => {
		const { cart } = get();
		const itemsInCart = cart.reduce((total, product) => total + product.quantity, 0);
		const subTotal = cart.reduce((total, product) => total + product.quantity * product.price, 0);
		const total = subTotal * 1.15; // 0.15 (15% taxes)
		const tax = total - subTotal;

		return {
			subTotal,
			tax,
			total,
			itemsInCart,
		};
	},

	addProductToCart: (product: CartProduct) => {
		const { cart } = get();

		// const productInCart = cart.some(({ id, size }) => id === product.id && size === product.size);
		const productInCartIndex = cart.findIndex(({ id, size }) => id === product.id && size === product.size);
		if (productInCartIndex < 0) {
			set({ cart: [...cart, product] });
			return;
		}

		const copyCart = [...cart];
		copyCart[productInCartIndex].quantity += product.quantity;
		set({ cart: copyCart });
	},

	updateProductQuantity: (product: CartProduct, quantity: number) => {
		const { cart } = get();

		const updatedProductInCart = cart.map((item) => {
			if (item.id === product.id && item.size === product.size) {
				return { ...item, quantity };
			}
			return item;
		});

		set({ cart: updatedProductInCart });
	},

	removeProductInCart: (product: CartProduct) => {
		const { cart } = get();

		const updatedProductInCart = cart.filter(({ id, size }) => !(id === product.id && size === product.size));
		set({ cart: updatedProductInCart });
	},
});

export const useCartStore = create<State & Actions>()(devtools(persist(storeApi, { name: 'shopping-cart' })));
