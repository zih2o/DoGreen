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
    queryKey: ['comments'],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await api.get(`comment/comments?postId=${postId}&page=${pageParam}&perPage=6`);
      const { result, totalPage } = res.data;
      return { nextPage: pageParam + 1, result, totalPage };
    },
    getNextPageParam: (lastPage) => (lastPage.nextPage <= lastPage.totalPage ? lastPage.nextPage : undefined),
  });

  const addComment = useMutation({
    mutationFn: async () => {
      return await api.post(`/comment`).then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
      console.log('댓글 성공');
    },
    onError: (err: any) => {
      console.log(err.response.data.error);
    },
  });
  return { commentQuery, addComment };
}
