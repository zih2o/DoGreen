import create from 'zustand';
import { persist } from 'zustand/middleware';
import { api } from '../util/api';

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
