import { api } from '../util/api';
import { useQuery } from '@tanstack/react-query';

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

export default function useUserData(accessToken: string | null) {
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
