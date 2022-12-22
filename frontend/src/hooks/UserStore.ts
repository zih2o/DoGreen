import create from 'zustand';

interface IAuthState {
  token: string | null;
}

interface IUserData {
  role: string;
  email: string;
  username: string;
  bio: string;
  imgUrl: string;
}
export const InitialData: IUserData = {
  role: '',
  email: '',
  username: '',
  bio: '',
  imgUrl: '',
};

export const AuthStore = create<IAuthState>(() => ({
  token: sessionStorage.getItem('token'),
}));
