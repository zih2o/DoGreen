import create from 'zustand';

interface IDrawer {
  drawerOpen: boolean;
  toggleDrawer: () => void;
}

interface IDarkMode {
  darkMode: boolean | null;
  toggleDarkMode: () => void;
}

export const useDrawerStore = create<IDrawer>((set) => ({
  drawerOpen: false,
  toggleDrawer: () => set((state) => ({ drawerOpen: !state.drawerOpen })),
}));

export const useDarkModeStore = create<IDarkMode>((set) => ({
  darkMode: localStorage.getItem('darkMode') === 'true' ? true : false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
