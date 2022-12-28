import create from 'zustand';
import { persist } from 'zustand/middleware';
import { api } from '../util/api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
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
    },
  });

  const withdrawMutate = async (currentPassword: IAuthData) => {
    return await api.patch('/user/me/withdraw', currentPassword);
  };
  const withdrawMutaiton = useMutation({
    mutationFn: withdrawMutate,
    onSuccess: () => {
      window.sessionStorage.clear();
    },
  });
  return { userQuery, userMutation, withdrawMutaiton };
}
