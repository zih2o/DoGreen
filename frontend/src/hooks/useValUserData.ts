import { useQuery } from '@tanstack/react-query';
import { api } from '../util/api';

export interface IUsernameData {
  username?: string;
}

//유저네임
export function useValUserName(username: string) {
  const valQuery = useQuery<IUsernameData>({
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
  return { valQuery };
}

export interface IEmailData {
  email?: string;
}

//이메일
export function useValEmail(email: string) {
  const valQuery = useQuery<IEmailData>({
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
  return { valQuery };
}
