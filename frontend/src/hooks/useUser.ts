import create from 'zustand';
import { persist } from 'zustand/middleware';
import { api } from '../util/api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { alertStore } from '../store/alertStore';

interface IUserInfo {
  role: string;
  email: string;
  username: string;
  bio: string;
  imgUrl: string;
}

interface IGetUserInfo {
  existUser: boolean | Error;
  userInfo: IUserInfo;
  getUserInfo: () => void;
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

export const useUserInfo = create<IGetUserInfo, [['zustand/persist', IGetUserInfo]]>(
  persist(
    (set) => ({
      existUser: false,
      userInfo: { role: '', email: '', username: '', bio: '', imgUrl: '' },
      getUserInfo: async () => {
        try {
          const { data } = await api('/user/me');
          set(() => ({ existUser: true }));
          set(() => ({ userInfo: { ...data } }));
        } catch (err) {
          set(() => ({ existUser: false }));
          set(() => ({ userInfo: { role: '', email: '', username: '', bio: '', imgUrl: '' } }));
        }
      },
    }),
    { name: 'user-login-store', getStorage: () => sessionStorage },
  ),
);

export default function useUserData() {
  const queryClient = useQueryClient();

  const userQuery = useQuery<IUserInfo>({
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
      window.sessionStorage.clear();
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        alertStore.setState({ errorMsg: error?.response?.data?.error });
      }
    },
  });
  return { userQuery, userMutation, withdrawMutaiton };
}
