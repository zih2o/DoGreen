import create from 'zustand';

interface IAuthState {
  token: string | null;
}

export const AuthStore = create<IAuthState>(() => ({
  token: sessionStorage.getItem('token'),
}));
