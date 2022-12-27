import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../util/api';
import { AxiosError } from 'axios';
import { alertStore } from '../store/alertStore';

interface IuserInfo {
  username?: string;
  oldPassword: string;
  password?: string;
  imgUrl?: FileList;
  bio?: string;
}

export default function useEditUserData() {
  const queryClient = useQueryClient();
  const editMutate = async (newData: IuserInfo) => {
    return await api.patch('/user/me', newData);
  };
  return useMutation({
    mutationFn: editMutate,
    onMutate: () => {
      alert('수정하시겠습니까?');
    },
    onSuccess: () => {
      alertStore.setState({ confirmMsg: '수정되었습니다.' });
      queryClient.invalidateQueries({ queryKey: ['user'] });
      console.log('성공');
      console.log(alertStore.getState().confirmMsg);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        alert(error?.response?.data?.error);
        alertStore.setState({ errorMsg: error?.response?.data?.error });
      }
    },
  });
}
