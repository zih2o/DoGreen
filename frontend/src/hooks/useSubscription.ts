import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../util/api';

export interface ISubscription {
  _id: string | undefined;
  categoryName: string;
  mascotName: string;
  mascotImage: string;
  posts: [];
}

export function useSubscription(catId: string) {
  const queryClient = useQueryClient();
  const subMutation = useMutation<ISubscription>({
    mutationFn: async () => {
      return await api.post(`/subscribe/${catId}`).then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['subscription'] });
    },
    // onError: (err: any) => {
    //   console.log(err.response.data.error);
    // },
  });

  return { subMutation };
}

export function useSubquery() {
  const token = sessionStorage.getItem('token');
  const subQuery = useQuery<ISubscription[]>({
    queryKey: ['userCategories'],
    queryFn: async () => {
      return await api.get('/subscribe').then((res) => res.data);
    },
    staleTime: 1000 * 60,
    enabled: !!token,
  });

  return { subQuery };
}

export function useDelSubscription(catId: string) {
  const queryClient = useQueryClient();

  const delMutation = useMutation<ISubscription>({
    mutationFn: async () => {
      return await api.delete(`/subscribe/${catId}`).then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cancelSub'] });
      console.log('구독 취소');
    },
  });

  return { delMutation };
}
