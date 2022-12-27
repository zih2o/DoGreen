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

  currentCategoryCard: { _id: string; mascotName: string; categoryName: string };
  setCurrentCategoryCard: (_id: string, mascotName: string, categoryName: string) => void;

  currentNewsCard: { _id: string; category: string; content: string };
  setCurrentNewsCard: (_id: string, category: string, content: string) => void;
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

  currentCategoryCard: { _id: '', mascotName: '', categoryName: '' },
  setCurrentCategoryCard: (_id, mascotName, categoryName) =>
    set(() => ({ currentCategoryCard: { _id: _id, mascotName: mascotName, categoryName: categoryName } })),

  currentNewsCard: { _id: '', category: '', content: '' },
  setCurrentNewsCard: (_id, category, content) =>
    set(() => ({ currentNewsCard: { _id: _id, category: category, content: content } })),
}));
