import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../util/api';
import { AxiosError } from 'axios';
import { alertStore } from '../store/alertStore';

export interface IAuthData {
  username?: string;
  email: string;
  password: string;
  role?: string;
}

export function useLogin() {
  const queryClient = useQueryClient();
  const registerMutate = async (data: IAuthData) => {
    const res = await api.post('/auth/login', data);
    const token = res.data;
    return token;
  };
  return useMutation({
    mutationFn: registerMutate,
    onMutate: () => {
      console.log('test');
    },
    onSuccess: (token) => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      window.sessionStorage.setItem('token', token);
      alertStore.setState({ confirmMsg: '로그인 되었습니다.' });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        alertStore.setState({ errorMsg: error?.response?.data?.error });
      }
    },
  });
}

export function useResiter() {
  const queryClient = useQueryClient();
  const registerMutate = async (data: IAuthData) => {
    return await api.post('/auth/register', data);
  };
  return useMutation({
    mutationFn: registerMutate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      alertStore.setState({ confirmMsg: '회원가입 되었습니다.' });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        alertStore.setState({ errorMsg: error?.response?.data?.error });
      }
    },
  });
}
