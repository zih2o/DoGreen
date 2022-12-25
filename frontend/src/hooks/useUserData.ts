import { api } from '../util/api';
import { useQuery } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

export interface IUserData {
  role: string;
  email: string;
  username: string;
  bio: string;
  imgUrl: string;
}

export default function useUserData() {
  const userQuery = useQuery<IUserData>({
    queryKey: ['user'],
    queryFn: async () => {
      return api.get('/user/me').then((res) => res.data);
    },
    staleTime: 1000 * 60,
  });
  return { userQuery };
}
interface IuserInfo {
  username?: string;
  oldPassword: string;
  password?: string;
  imgUrl?: FileList;
  bio?: string;
}
export function useEditUserData() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const editMutate = async (newData: IuserInfo) => {
    return await api.patch('/user/me', newData);
  };
  return useMutation({
    mutationFn: editMutate,
    onMutate: () => {
      alert('수정하시겠습니까?');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      console.log('성공');
      navigate('/');
    },
    onError: (error) => {
      console.error('에러 발생했지롱');
      alert(error?.response?.data?.error);
    },
  });
}

export function useWithDrawData() {
  const navigate = useNavigate();
  const withdrawMutate = async (currentPassword: string) => {
    return await api.patch('/user/me/withdraw', currentPassword);
  };
  return useMutation({
    mutationFn: withdrawMutate,
    onMutate: () => {
      alert('탈퇴하시겠습니까?');
    },
    onSuccess: () => {
      console.log('회원탈퇴');
      alert('회원탈퇴 되었습니다.');
      navigate('/');
    },
    onError: (error) => {
      console.error('에러 발생했지롱');
      alert(error?.response?.data?.error);
    },
  });
}
