import { api } from '../util/api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { AxiosError } from 'axios';
import { alertStore } from '../store/alertStore';

interface IUserData {
  role: string;
  email: string;
  username: string;
  bio: string;
  imgUrl: string;
}
interface IEditData {
  username?: string;
  oldPassword: string;
  password?: string;
  imgUrl?: string;
  bio?: string;
}
interface IAuthData {
  currentPassword: string;
}
export default function useUserData() {
  const queryClient = useQueryClient();

  const userQuery = useQuery<IUserData>({
    queryKey: ['user'],
    queryFn: async () => {
      return api.get('/user/me').then((res) => res.data);
    },
    staleTime: 1000 * 60,
  });

  const editMutate = async (newData: IEditData) => {
    return await api.patch('/user/me', newData);
  };
  const userMutation = useMutation({
    mutationFn: editMutate,
    onMutate: () => {
      alert('수정하시겠습니까?');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      alertStore.setState({ confirmMsg: '정보가 수정 되었습니다.' });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        alertStore.setState({ errorMsg: error?.response?.data?.error });
      }
    },
  });

  const withdrawMutate = async (currentPassword: IAuthData) => {
    return await api.patch('/user/me/withdraw', currentPassword);
  };
  const withdrawMutaiton = useMutation({
    mutationFn: withdrawMutate,
    onSuccess: () => {
      alertStore.setState({ confirmMsg: '회원탈퇴 되었습니다.' });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        alertStore.setState({ errorMsg: error?.response?.data?.error });
      }
    },
  });
  return { userQuery, userMutation, withdrawMutaiton };
}
