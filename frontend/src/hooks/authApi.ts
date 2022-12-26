import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../util/api';
import { useNavigate } from 'react-router';
import { AlertModal } from '../components/common/AlertModal';

export interface IAuthData {
  username?: string;
  email: string;
  password: string;
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
    onError: (error) => {
      console.error('에러 발생했지롱');
      //error 에서 메시지 가져오는 법.....어떻게 타입오류 제거하지??
      alert(error?.response?.data?.error);
      console.log('test');
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
      console.log('성공');
    },
    onError: (error) => {
      console.error('에러 발생했지롱');
      alert(error?.response?.data?.error);
    },
  });
}
