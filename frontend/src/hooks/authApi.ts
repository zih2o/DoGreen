import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../util/api';
import { useNavigate } from 'react-router';

export interface IAuthInput {
  username?: string;
  email: string;
  password: string;
}

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const registerMutate = async (data: IAuthInput) => {
    const res = await api.post('/auth/login', data);
    const token = res.data;
    return token;
  };
  const mutation = useMutation({
    mutationFn: registerMutate,
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
    },
  });
  return { mutation };
}

export function useResiter() {
  const queryClient = useQueryClient();
  const registerMutate = async (data: IAuthInput) => {
    return await api.post('/auth/register', data);
  };
  const mutation = useMutation({
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
  return { mutation };
}

export function useWithDrawData() {
  const navigate = useNavigate();
  const withdrawMutate = async (currentPassword: string) => {
    return await api.patch('/user/me/withdraw', currentPassword);
  };
  const mutation = useMutation({
    mutationFn: withdrawMutate,
    onMutate: () => {
      alert('탈퇴하시겠습니까?');
    },
    onSuccess: () => {
      console.log('회원탈퇴');
      alert('회원탈퇴 되었습니다.');
      navigate('/');
    },
    onError: (error) => {
      console.error('에러 발생했지롱');
      alert(error?.response?.data?.error);
    },
  });
  return { mutation };
}
