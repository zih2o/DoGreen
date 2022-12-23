import create from 'zustand';

interface IUserLogin {
  token: null | string;
  isLogined: boolean;
  what: () => void;
}

interface IAdminLogin {
  token: null | string;
  isLogined: boolean;
  what: () => void;
}

export const useUserLoginStore = create<IUserLogin>((set) => ({
  token: window.sessionStorage.getItem('token'),
  isLogined: false,
  what: () => set((state) => ({ isLogined: !state.isLogined })),
}));

export const useAdminLoginStore = create<IAdminLogin>((set) => ({
  token: window.sessionStorage.getItem('token'),
  isLogined: false,
  what: () => set((state) => ({ isLogined: !state.isLogined })),
}));
