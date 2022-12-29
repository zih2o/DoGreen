import { useParams } from 'react-router-dom';
import { useQuery, useInfiniteQuery, useQueryClient, useMutation, InfiniteData } from '@tanstack/react-query';
import { api } from '../util/api';

export interface IPost {
  _id: string;
  content: string;
  imageList: string[];
  createdAt: string;
  updatedAt: string;
  likesNum: number;
  isLiked: boolean;
}
interface IPage {
  nextPage: number;
  result: IPost[];
  totalPage: number;
}

export default function usePost() {
  const queryClient = useQueryClient();
  const { catId } = useParams();
  const postQuery = useInfiniteQuery({
    queryKey: ['posts', catId],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await api.get(`/post/?categoryId=${catId}&page=${pageParam}&perPage=5`);
      const { result, totalPage } = res.data;
      return { nextPage: pageParam + 1, result, totalPage };
    },
    getNextPageParam: (lastPage) => (lastPage.nextPage <= lastPage.totalPage ? lastPage.nextPage : undefined),
    retry: true,
    retryDelay: 3000,
  });

  const addLike = useMutation({
    mutationFn: async (newPost: IPost) => {
      await api.patch(`/post/like/${newPost._id}`);
    },
    onMutate: async (newPost: IPost) => {
      await queryClient.cancelQueries({ queryKey: ['posts', catId] });
      const previousData = queryClient.getQueryData(['posts', catId]);
      queryClient.setQueryData<InfiniteData<IPage>>(['posts', catId], (oldData) => ({
        pageParams: oldData?.pageParams ?? [],
        pages:
          oldData?.pages.map((page) => ({
            ...page,
            result: page.result.map((post) => (post._id === newPost._id ? newPost : post)),
          })) ?? [],
      }));
      return { previousData };
    },
    onError: (err, newPost, context) => {
      queryClient.setQueryData(['posts'], context?.previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos', catId] });
    },
  });

  // const addPost = useMutation~~~~

  return { postQuery, addLike };
}
