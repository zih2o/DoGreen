import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../util/api';

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
      alert(error?.response?.data?.error);
    },
  });
}
