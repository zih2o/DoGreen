import { api } from '../util/api';
import { useQuery } from '@tanstack/react-query';
export interface IUserData {
  role: string;
  email: string;
  username: string;
  bio: string;
  imgUrl: string;
}

export default function useUserData() {
  return useQuery<IUserData>({
    queryKey: ['user'],
    queryFn: async () => {
      return api.get('/user/me').then((res) => res.data);
    },
    staleTime: 1000 * 60,
  });
}
