import { api } from '../util/api';
import { useQuery } from '@tanstack/react-query';

export interface ICategory {
  _id: string;
  categoryName: string;
  mascotName: string;
  mascotImage: string;
  posts: string[];
  __v: number;
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

export function useOneCategory(catId?: string) {
  const categoryQuery = useQuery<ICategory>({
    queryKey: [catId],
    queryFn: async () => {
      return api.get(`category/${catId}`).then((res) => res.data);
    },
    staleTime: 1000 * 60 * 5,
  });
  return { categoryQuery };
}
