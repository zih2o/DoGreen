import { useQuery } from '@tanstack/react-query';
import { api } from '../util/api';
import create from 'zustand';

export interface IUserData {
  email?: string;
  username?: string;
}

export default function useValUserData() {
  const validateQuery = api.get('/auth/exists', { params: data }).then((res) => res.data);
  const userQuery = useQuery<IUserData>({
    queryKey: ['user'],
    queryFn: async ({ username, email }) => {
      return api
        .get('/auth/exists', {
          params: { username, email },
        })
        .then((res) => res.data);
    },
    staleTime: 1000 * 60,
  });
  return { userQuery };
}
