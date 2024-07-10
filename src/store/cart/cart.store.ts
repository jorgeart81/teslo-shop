import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { CartProduct } from '@/interfaces';

interface State {
	cart: CartProduct[];
}

interface Actions {
	addProductToCart: (product: CartProduct) => void;
}

const storeApi: StateCreator<State & Actions, [['zustand/devtools', never]]> = (set, get) => ({
	cart: [],

	// Actions
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
});

export const useCartStore = create<State & Actions>()(devtools(persist(storeApi, { name: 'shopping-cart' })));
