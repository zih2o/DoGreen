import { useMutation } from '@tanstack/react-query';
import { api } from '../util/api';

export default function usdDeleteUserData() {
  const deleteMutate = async () => {
    return await api.patch('/user/me/withdraw');
  };
  const mutation = useMutation({
    mutationFn: deleteMutate,
    onSuccess: () => {
      console.log('회원탈퇴');
    },
  });
  return { mutation };
}
