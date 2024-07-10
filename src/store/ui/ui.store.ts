import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UIStore {
	isSideMenuOpen: boolean;
}

interface Actions {
	closeSideMenu: () => void;
	openSideMenu: () => void;
}

const storeApi: StateCreator<UIStore & Actions, [['zustand/devtools', never]]> = (set) => ({
	isSideMenuOpen: false,

	// Actions
	closeSideMenu: () => {
		set({ isSideMenuOpen: false });
	},
	openSideMenu: () => {
		set({ isSideMenuOpen: true });
	},
});

export const useUIStore = create<UIStore & Actions>()(devtools(storeApi));
