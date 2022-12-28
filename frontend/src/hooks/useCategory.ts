import { useParams } from 'react-router-dom';
import { api } from '../util/api';
import { useQuery } from '@tanstack/react-query';

export interface ICategory {
  _id: string;
  categoryName: string;
  mascotName: string;
  mascotImage: string;
  posts: string[];
}

export default function useCategory() {
  const { catId } = useParams();

  const catQuery = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      return api.get('/category').then((res) => res.data);
    },
    staleTime: 1000 * 60 * 5,
  });

  const selectedCatQuery = useQuery<ICategory>({
    queryKey: ['categories', catId],
    queryFn: async () => {
      return api.get(`/category/${catId}`).then((res) => res.data);
    },
    staleTime: 1000 * 60 * 5,
    onError: (error) => {
      return error;
    },
  });
  return { catQuery, selectedCatQuery };
}
