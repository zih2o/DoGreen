import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { api } from '../util/api';

export interface IPost {
  _id: string;
  category: string;
  content: string;
  imageList: URL[];
  comments: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export default function usePost() {
  const postQuery = useQuery<IPost[]>({
    queryKey: [],
    queryFn: async () => {
      const { catId } = useParams();
      return api.get(`/post/${catId}`);
    },
  });
  return { postQuery };
}
