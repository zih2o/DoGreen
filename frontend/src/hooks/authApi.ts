import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../util/api';
import { useNavigate } from 'react-router';
import { Navigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { alertStore } from '../store/alertStore';
export interface IAuthData {
  username?: string;
  email: string;
  password: string;
  role?: string;
}

export function useLogin() {
  const navigate = useNavigate();
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
      console.log('성공', token);
      window.sessionStorage.setItem('token', token);
      navigate('/');
    },
    onError: (error: AxiosError) => {
      console.log(error?.response?.data?.error);
      alertStore.setState({ errorMsg: error?.response?.data?.error });
    },
  });
}

export function useResiter() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const registerMutate = async (data: IAuthData) => {
    return await api.post('/auth/register', data);
  };
  return useMutation({
    mutationFn: registerMutate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      alertStore.setState({ confirmMsg: '회원가입 되셨습니다.' });
      console.log('성공');
    },
    onError: (error) => {
      alert(error?.response?.data?.error);
      alertStore.setState({ errorMsg: error?.response?.data?.error });
    },
  });
}
