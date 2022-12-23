import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../util/api';

interface IRegisterInput {
  username: string;
  email: string;
  password: string;
}

export default function useResiter() {
  const queryClient = useQueryClient();
  const registerMutate = async (data: IRegisterInput) => {
    return await api.post('/auth/register', data);
  };
  const mutation = useMutation({
    mutationFn: registerMutate,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['user'] });
      console.log('성공');
    },
  });
  return { mutation };
}
