import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../util/api';
import { useNavigate } from 'react-router';

interface IuserInfo {
  username?: string;
  oldPassword: string;
  password?: string;
  imgUrl?: FileList;
  bio?: string;
}

export default function useEditUserData() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const editMutate = async (newData: IuserInfo) => {
    return await api.patch('/user/me', newData);
  };
  const mutation = useMutation({
    mutationFn: editMutate,
    onMutate: () => {
      alert('수정하시겠습니까?');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      console.log('성공');
      navigate('/');
    },
    onError: (error) => {
      console.error('에러 발생했지롱');
      alert(error?.response?.data?.error);
    },
  });
  return { mutation };
}
