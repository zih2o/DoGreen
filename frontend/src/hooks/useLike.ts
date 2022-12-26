import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../util/api';

const queryClient = useQueryClient();

export default function useLike(postId: string) {
  const addHeart = useMutation({
    mutationFn: async () => {
      await api.get(`/post/like/${postId}`);
    },
    // When mutate is called:
    onMutate: async (newTodo) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ['posts'] });

      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData(['todos']);

      // Optimistically update to the new value
      queryClient.setQueryData(['todos'], (old) => [...old, newTodo]);

      // Return a context object with the snapshotted value
      return { previousTodos };
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(['todos'], context.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
  return { addHeart };
}
