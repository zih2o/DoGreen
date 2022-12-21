import create from 'zustand';

export const useCatStore = create((set) => ({
  cat: 1,
  changeCat: (value: number) => set((state) => ({ cat: value })),
}));
