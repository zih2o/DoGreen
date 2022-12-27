import { AxiosError, AxiosResponse } from 'axios';
import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../util/api';

export interface IComment {
  _id: string;
  refPost: string;
  userId: {
    _id: string;
    username: string;
    imgUrl: string;
  };
  comment: string;
  createdAt: string;
  updatedAt: string;
}

export default function useComment(postId?: string) {
  const queryClient = useQueryClient();

  const commentQuery = useInfiniteQuery({
    queryKey: ['comments', postId],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await api.get(`/comment/?postId=${postId}&page=${pageParam}&perPage=8`);
      const { result, totalPage } = res.data;
      return { nextPage: pageParam + 1, result, totalPage };
    },
    getNextPageParam: (lastPage) => (lastPage.nextPage <= lastPage.totalPage ? lastPage.nextPage : undefined),
  });

  const addComment = useMutation<AxiosResponse, AxiosError, Record<'postId' | 'comment', string>>({
    mutationFn: async (data) => {
      return await api.post(`/comment`, data).then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', postId] });
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        const {
          response: {
            data: { error },
          },
        } = err;
        console.log(error);
      }
    },
  });
  return { commentQuery, addComment };
}
