import create from 'zustand';

interface IAdminCategory {
  adminCategory: 'Mascot' | 'News';
  setMascotCategory: () => void;
  setNewsCategory: () => void;

  adminCreateCardBtn: boolean;
  toggleAdminCreateCardBtn: () => void;
  closeAdminCreateCardBtn: () => void;

  adminModal: boolean;
  toggleAdminModal: () => void;
  closeAdminModal: () => void;

  currentCategoryCard: { mascotName: string; categoryName: string };
}
export const useAdminCategoryStore = create<IAdminCategory>((set) => ({
  adminCategory: 'Mascot',
  setMascotCategory: () => set(() => ({ adminCategory: 'Mascot' })),
  setNewsCategory: () => set(() => ({ adminCategory: 'News' })),

  adminCreateCardBtn: false,
  toggleAdminCreateCardBtn: () => set((state) => ({ adminCreateCardBtn: !state.adminCreateCardBtn })),
  closeAdminCreateCardBtn: () => set(() => ({ adminCreateCardBtn: false })),

  adminModal: false,
  toggleAdminModal: () => set((state) => ({ adminModal: !state.adminModal })),
  closeAdminModal: () => set(() => ({ adminModal: false })),

  currentCategoryCard: { mascotName: '', categoryName: '' },
}));
