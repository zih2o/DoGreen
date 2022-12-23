import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { AuthStore } from '../hooks/useAuth';

interface ISubscription {
  _id: string | undefined;
}

export default function useSubscription(catId: string) {
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
