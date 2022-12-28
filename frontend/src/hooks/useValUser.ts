import { useQuery } from '@tanstack/react-query';
import { api } from '../util/api';

export interface IvalUserIfon {
  username?: string;
  email?: string;
}

//유저네임
export function useValUserName(username: string) {
  return useQuery<IvalUserIfon>({
    queryKey: ['user', username],
    queryFn: async () => {
      return api
        .get('/auth/exists', {
          params: { username: username },
        })
        .then((res) => res.data);
    },
    staleTime: 1000 * 60,
  });
}

//이메일
export function useValEmail(email: string) {
  return useQuery<IvalUserIfon>({
    queryKey: ['user', email],
    queryFn: async () => {
      return api
        .get('/auth/exists', {
          params: { email: email },
        })
        .then((res) => res.data);
    },
    staleTime: 1000 * 60,
  });
}
