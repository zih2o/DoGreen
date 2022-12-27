import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../util/api';
import { AxiosError } from 'axios';

export default function createUrl() {
  const queryClient = useQueryClient();
  const imageUrlMutate = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    const res = await api.post('/image/', formData);
    const createdImgUrl = res.data;
    console.log(createdImgUrl);
    return createdImgUrl;
  };
  return useMutation({
    mutationFn: imageUrlMutate,
    onSuccess: (fileUrl: string) => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      console.log(fileUrl);
    },
    onError: (error) => {
      console.log('이미지에러');
      if (error instanceof AxiosError) {
        alert(error?.response?.data?.error);
      }
    },
  });
}
