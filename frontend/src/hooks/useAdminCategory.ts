import create from 'zustand';
//삭제예정인 필요없는 Hook
interface IAdminCategory {
  adminCategory: 'mascotCategory' | 'newsCategory';
  setMascotCategory: () => void;
  setNewsCategory: () => void;
}
export const useAdminCategoryStore = create<IAdminCategory>((set) => ({
  adminCategory: 'mascotCategory',
  setMascotCategory: () => set(() => ({ adminCategory: 'mascotCategory' })),
  setNewsCategory: () => set(() => ({ adminCategory: 'newsCategory' })),
}));
