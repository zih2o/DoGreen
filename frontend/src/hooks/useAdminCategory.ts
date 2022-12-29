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

  currentCategoryCard: { _id: string; mascotName: string; categoryName: string, mascotImage: string };
  setCurrentCategoryCard: (_id: string, mascotName: string, categoryName: string, mascotImage:string) => void;

  currentNewsCard: { _id: string; category: string; content: string, imageList:string[] };
  setCurrentNewsCard: (_id: string, category: string, content: string, imageList:string[]) => void;
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

  currentCategoryCard: { _id: '', mascotName: '', categoryName: '', mascotImage: '' },
  setCurrentCategoryCard: (_id, mascotName, categoryName, mascotImage) =>
    set(() => ({
      currentCategoryCard: { _id: _id, mascotName: mascotName, categoryName: categoryName, mascotImage: mascotImage },
    })),

  currentNewsCard: { _id: '', category: '', content: '', imageList:[""] },
  setCurrentNewsCard: (_id, category, content, imageList) =>
    set(() => ({ currentNewsCard: { _id: _id, category: category, content: content, imageList:imageList } })),
}));
