import { api } from '../util/api';
import { useQuery } from '@tanstack/react-query';
import create from 'zustand';
interface IAuthState {
  token: string | null;
}
export interface IUserData {
  role: string;
  email: string;
  username: string;
  bio: string;
  imgUrl: string;
}

export default function useUserData() {
  const AuthStore = create<IAuthState>(() => ({
    token: sessionStorage.getItem('token'),
  }));
  const accessToken = AuthStore((state) => state.token);

  const userQuery = useQuery<IUserData>({
    queryKey: ['user'],
    queryFn: async () => {
      return api
        .get('/user/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => res.data);
    },
    staleTime: 1000 * 60,
  });
  return { userQuery };
}
