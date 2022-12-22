import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useCategory() {
  const catQuery = useQuery(['categories'], async () => {
    return axios.get('/category');
  });
  return { catQuery };
}
