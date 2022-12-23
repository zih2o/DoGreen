import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../util/api';

interface IuserInfo {
  username?: string;
  oldPassword: string;
  password?: string;
  imgUrl?: FileList;
  bio?: string;
}

export default function editUserData() {
  // const queryClient = useQueryClient();
  const editMutate = async (newData: IuserInfo) => {
    return await api.patch('/user/me', newData);
  };
  const mutation = useMutation({
    mutationFn: editMutate,
    onSuccess: () => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({ queryKey: ['user'] });
      console.log('성공');
    },
  });
  return { mutation };
}
