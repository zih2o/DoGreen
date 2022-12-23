import create from 'zustand';
//삭제예정인 필요없는 Hook
interface IAdminCategory {
  adminCategory: 'Mascot' | 'News';
  setMascotCategory: () => void;
  setNewsCategory: () => void;

  adminCreateCardBtn: boolean;
  toggleAdminCreateCardBtn: () => void;
  closeAdminCreateCardBtn:() => void;
}
export const useAdminCategoryStore = create<IAdminCategory>((set) => ({
  adminCategory: 'Mascot',
  setMascotCategory: () => set(() => ({ adminCategory: 'Mascot' })),
  setNewsCategory: () => set(() => ({ adminCategory: 'News' })),
  
  adminCreateCardBtn: false,
  toggleAdminCreateCardBtn: () => set((state) => ({ adminCreateCardBtn: !state.adminCreateCardBtn })),
  closeAdminCreateCardBtn: () => set(() => ({ adminCreateCardBtn: false })),
}));
