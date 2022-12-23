import { api } from '../util/api';
import { useQuery } from '@tanstack/react-query';

interface INews {
  _id: string;
  category: string;
  content: string;
  imageList: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default function useNews() {
  const catQuery = useQuery<INews[]>({
    queryKey: ['news'],
    queryFn: async () => {
      return api.get('/post').then((res) => res.data);
    },
    staleTime: 1000 * 60,
  });

  return { catQuery };
}
