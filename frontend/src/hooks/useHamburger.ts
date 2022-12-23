import create from 'zustand';

interface IHamburger {
  hamburgerOpen: boolean;
  toggleHamburger: () => void;
}
export const useHamburgerStore = create<IHamburger>((set) => ({
  hamburgerOpen: false,
  toggleHamburger: () => set((state) => ({ hamburgerOpen: !state.hamburgerOpen })),
}));
