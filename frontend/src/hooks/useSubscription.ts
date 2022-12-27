import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../util/api';
import { AuthStore } from './useAuth';
import { useUserInfo } from '../hooks/store';
export interface ISubscription {
  _id: string | undefined;
  categoryName: string;
  mascotName: string;
  mascotImage: string;
  posts: [];
}

export function useSubscription(catId: string) {
  const queryClient = useQueryClient();
  const { existUser } = useUserInfo();
  const subsQuery = useQuery<ISubscription[]>({
    queryKey: ['userCategories'],
    queryFn: async () => {
      return await api.get('/subscribe').then((res) => res.data);
    },
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['userCategories'] });
      console.log('구독 조회');
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: ['userCategories'] });
      console.log('구독 에러');
    },
    enabled: !!existUser,
  });
  const subsMutation = useMutation<ISubscription>({
    mutationFn: async () => {
      return await api.post(`/subscribe/${catId}`).then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['subscription'] });
    },
  });
  const delMutation = useMutation<ISubscription>({
    mutationFn: async () => {
      return await api.delete(`/subscribe/${catId}`).then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cancelSub'] });
      console.log('구독 취소');
    },
  });
  return { subsQuery, subsMutation, delMutation };
}
