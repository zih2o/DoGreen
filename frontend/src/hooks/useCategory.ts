import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface ICategory {
  _id: string;
  categoryName: string;
  mascotName: string;
  mascotImage: string;
  posts: any[];
  __v: number;
}

export default function useCategory() {
  const catQuery = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      return axios.get('/category').then((res) => res.data);
    },
    staleTime: 1000 * 60,
  });

  return { catQuery };
}
