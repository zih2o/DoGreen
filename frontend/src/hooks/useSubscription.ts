import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { AuthStore } from '../hooks/useAuth';

export interface ISubscription {
  _id: string | undefined;
  categoryName: string;
  mascotName: string;
  mascotImage: string;
  posts: [];
}

export function useSubscription(catId: string) {
  const queryClient = useQueryClient();
  const accessToken = AuthStore((state) => state.token);
  const subMutation = useMutation<ISubscription>({
    mutationFn: async () => {
      return axios
        .post(
          `/subscribe/${catId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        )
        .then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['subscription'] });
      console.log('구독 성공');
    },
  });

  return { subMutation };
}

export function useSubquery() {
  const accessToken = AuthStore((state) => state.token);
  const subQuery = useQuery<ISubscription[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      return axios
        .get('/subscribe', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => res.data);
    },
    staleTime: 1000 * 60,
  });

  return { subQuery };
}

export function useDelSubscription(catId: string) {
  const queryClient = useQueryClient();
  const accessToken = AuthStore((state) => state.token);
  const delMutation = useMutation<ISubscription>({
    mutationFn: async () => {
      return axios
        .delete(`/subscribe/${catId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cancelSub'] });
      console.log('구독 취소');
    },
  });

  return { delMutation };
}
