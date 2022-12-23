import { useMutation } from '@tanstack/react-query';
import { api } from '../util/api';
import { useNavigate } from 'react-router';

export default function useWithDrawData() {
  const navigate = useNavigate();
  const withdrawMutate = async (currentPassword: string) => {
    return await api.patch('/user/me/withdraw', currentPassword);
  };
  const mutation = useMutation({
    mutationFn: withdrawMutate,
    onSuccess: () => {
      console.log('회원탈퇴');
      alert('회원탈퇴 되었습니다.');
      navigate('/');
    },
  });
  return { mutation };
}
