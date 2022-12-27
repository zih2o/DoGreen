import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../util/api';
<<<<<<< HEAD
import { useUserLoginStore } from '../components/wastebasket/store';
=======
import { AuthStore } from './useAuth';
>>>>>>> 73462ce5314ee0f4ba1f75c25a7cec6a1e34931f

export interface ISubscription {
  _id: string | undefined;
  categoryName: string;
  mascotName: string;
  mascotImage: string;
  posts: [];
}

export function useSubscription(catId: string) {
  const queryClient = useQueryClient();
  const token = AuthStore((state) => state.token);
  const subsQuery = useQuery<ISubscription[]>({
    queryKey: ['userCategories'],
    queryFn: async () => {
      return await api.get('/subscribe').then((res) => res.data);
    },
    staleTime: 1000 * 60,
    enabled: !!token,
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
