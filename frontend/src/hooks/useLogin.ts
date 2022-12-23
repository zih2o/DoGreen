import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../util/api';
import { useNavigate } from 'react-router';

interface IRegisterInput {
  email: string;
  password: string;
}

export default function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const registerMutate = async (data: IRegisterInput) => {
    const res = await api.post('/auth/login', data);
    const token = res.data;
    return token;
  };
  const mutation = useMutation({
    mutationFn: registerMutate,
    onSuccess: (token) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['user'] });
      console.log('성공', token);
      window.sessionStorage.setItem('token', token);
      navigate('/');
    },
    onError: () => {
      console.error('에러 발생했지롱');
      alert('비밀번호 틀렸다!!!');
    },
  });
  return { mutation };
}
