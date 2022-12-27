import { api } from '../util/api';
import { useQuery } from '@tanstack/react-query';
import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface ICategory {
  _id: string;
  categoryName: string;
  mascotName: string;
  mascotImage: string;
  posts: string[];
}

interface ICategoryStore extends ICategory {
  setCategory: (category: ICategory) => void;
}

export default function useCategory() {
  const catQuery = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      return api.get('/category').then((res) => res.data);
    },
    staleTime: 1000 * 60 * 5,
  });

  return { catQuery };
}

export const useSelectedCategory = create<ICategoryStore, [['zustand/persist', ICategoryStore]]>(
  persist(
    (set) => ({
      _id: '',
      categoryName: '',
      mascotName: '',
      mascotImage: '',
      posts: [],
      setCategory: (category: ICategory) => set(category),
    }),
    { name: 'category-store', getStorage: () => sessionStorage },
  ),
);
