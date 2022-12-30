import { useParams } from 'react-router-dom';
import { api } from '../util/api';
import { useQuery, useMutation } from '@tanstack/react-query';

export interface IUsers {
  role: string;
  email: string;
  username: string;
  bio: string;
  imgUrl: string;
}

export default function useAdminUser() {
  const allUserQuery = useQuery<IUsers[]>({
    queryKey: ['allUser'],
    queryFn: async () => {
      return api.get('/admin').then((res) => res.data);
    },
    staleTime: 1000 * 60 * 5,
  });

  const inactiveUserQuery = useQuery<IUsers>({
    queryKey: ['inactiveUsers'],
    queryFn: async () => {
      return api.get('/admin/inactive').then((res) => res.data);
    },
    staleTime: 1000 * 60 * 5,
    onError: (error) => {
      return error;
    },
  });

  const activeUserQuery = useQuery<IUsers>({
    queryKey: ['activeUsers'],
    queryFn: async () => {
      return api.get('/admin/active').then((res) => res.data);
    },
    staleTime: 1000 * 60 * 5,
    onError: (error) => {
      return error;
    },
  });

  const banUserQuery = async (userInfo: string[]) => {
    //["라이언4"]

    return await api.patch('/admin/ban', userInfo);
  };

  const cancleUserQuery = async (userInfo: string[]) => {
    console.log(userInfo);
    return await api.patch('/admin/cancle', userInfo);
  };

  return { allUserQuery, inactiveUserQuery, activeUserQuery, banUserQuery, cancleUserQuery };
}
