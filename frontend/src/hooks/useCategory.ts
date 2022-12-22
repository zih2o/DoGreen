import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useCategory() {
  const catQuery = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      return axios.get('/category').then((reponse) => reponse.data);
    },
  });

  return { catQuery };
}
