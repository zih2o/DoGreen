import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import create from 'zustand/react';
import { api } from '../util/api';

export interface IPost {
  _id: string;
  category: string;
  content: string;
  imageList: string[];
  comments: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
interface IPage {
  page: number;
  perPage: number;
  result: IPost[];
  totalPage: number;
}

// interface IPage {
//   page: number;
//   perPage: number;
//   addPage: () => void;
//   setPage: () => void;
// }

// export const usePage = create<IPage>((set) => ({
//   page: 1,
//   perPage: 10,
//   addPage: () => set((state) => ({ page: state.page + 1 })),
//   setPage: () => set(() => ({ page: 1 })),
// }));

export default function usePost(catId: string) {
  const postQuery = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await api.get(`/post/posts?categoryId=${catId}&page=${pageParam}&perPage=5`);
      const { result, totalPage } = res.data;
      return { nextPage: pageParam + 1, result, totalPage };
    },
    getNextPageParam: (lastPage) => (lastPage.nextPage <= lastPage.totalPage ? lastPage.nextPage : undefined),
  });
  return { postQuery };
}
