import create from 'zustand';
import { api } from '../util/api';

interface IUserLogin {
  token: null | string;
  isLogin: boolean;
  handleLogin: () => void;
}
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

export const useUserLoginStore = create<IUserLogin>((set) => ({
  token: window.sessionStorage.getItem('token'),
  isLogin: false,
  handleLogin: () => set((state) => ({ isLogin: !state.isLogin })),
}));

export const useUserInfo = create<IGetUserInfo>((set) => ({
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
}));