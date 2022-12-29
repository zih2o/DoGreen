import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../util/api';

export default function createUrl() {
  const queryClient = useQueryClient();
  const imageUrlMutation = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    const res = await api.post('/image/', formData)
    const createdImgUrl = res.data;
    return createdImgUrl;
  };
  return useMutation({
    mutationFn: imageUrlMutation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
}
