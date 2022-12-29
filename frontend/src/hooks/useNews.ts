import { api } from '../util/api';
import { useQuery } from '@tanstack/react-query';

interface INews {
  _id: string;
  category: string;
  content: string;
  imageList: any[];
  comments: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  likeUserList: any[];
  likesNum: number;
  authId: string;
}

export default function useNews() {
  const newsQuery = useQuery<INews[]>({
    queryKey: ['news'],
    queryFn: async () => {
      return api.get('/post/admin/all').then((res) => res.data);
    },
    staleTime: 1000 * 60,
  });

  return { newsQuery };
}
