import create from 'zustand';
interface IDarkMode {
  darkMode: boolean | null;
  toggleDarkMode: () => void;
}

interface IHamburger {
  hamburgerOpen: boolean;
  toggleHamburger: () => void;
}

interface IUserLogin {
  token: null | string;
  isLogined: boolean;
  what: () => void;
}

export const useDarkModeStore = create<IDarkMode>((set) => ({
  darkMode: localStorage.getItem("darkMode") === "true" ? true : false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export const useHamburgerStore = create<IHamburger>((set) => ({
  hamburgerOpen: false,
  toggleHamburger: () => set((state) => ({ hamburgerOpen: !state.hamburgerOpen })),
}));

export const useUserLoginStore = create<IUserLogin>((set) => ({
  token : window.sessionStorage.getItem('token'),
  isLogined: false,
  what: () => set((state) => ({ isLogined: !state.isLogined })),
}));