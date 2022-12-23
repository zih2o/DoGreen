import { useQuery } from '@tanstack/react-query';
import create from 'zustand';
import axios from 'axios';
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
      return axios
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
