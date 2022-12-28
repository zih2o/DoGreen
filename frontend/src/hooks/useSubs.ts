import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../util/api';
import { useUserInfo } from './useUser';
export interface ISubscription {
  _id: string;
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
    onError: () => {
      queryClient.refetchQueries({ queryKey: ['userCategories'] });
    },
    enabled: !!existUser,
  });
  const subsMutation = useMutation<ISubscription>({
    mutationFn: async () => {
      return await api.post(`/subscribe/${catId}`).then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['userCategories'] }); //같은 페이지
    },
  });
  const delMutation = useMutation<ISubscription>({
    mutationFn: async () => {
      return await api.delete(`/subscribe/${catId}`).then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['userCategories'] });
    },
  });
  return { subsQuery, subsMutation, delMutation };
}
