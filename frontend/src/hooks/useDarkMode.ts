import create from 'zustand';

interface IDarkMode {
  darkMode: boolean | null;
  toggleDarkMode: () => void;
}
export const useDarkModeStore = create<IDarkMode>((set) => ({
  darkMode: localStorage.getItem('darkMode') === 'true' ? true : false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
