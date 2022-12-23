import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

// export interface IEditInputData {
//   role: string;
//   email: string;
//   username: string;
//   password: string;
//   currentPassword: string;
//   confimrPassword: string;
//   imgUrl: FileList;
//   bio: string;
// }

// export const editMutation = useMutation<
//   void,
//   unknown,
//   IEditInputData,
//   unknown
// >(
//   (data: IEditInputData) => axios.patch('/user/me', data),
//   {
//     onMutate: (variable) => {
//       console.log('onMutate', variable);
//       // variable : {loginId: 'xxx', password; 'xxx'}
//       alert('수정하시겠습니까');
//     },
//     onError: (error, variable, context) => {
//       // error
//       console.log('error', error, variable, context);
//     },
//     onSuccess: (data, variables, context) => {
//       console.log('success', data, variables, context);
//       alert('수정되었습니다.');
//     },
//     onSettled: () => {
//       console.log('end');
//     },
//   },
// );

// // export const editMutation = useMutation((newData: IEditInputData) => axios.patch('/user/me', newData));

interface IuserInfo {
  username?: string;
  oldPassword: string;
  password?: string;
  imgUrl?: FileList;
  bio?: string;
}

// const addTodo = async (newTodo: TodoType): Promise<TodoType> => {
//   const { data } = await axios.patch<TodoType>(`/user/me`, newTodo);
//   return data;
// };

// // api 요청하는 함수(addTodo) 를 작성하지 않았을 경우
// export const editMutate = useMutation((newData) => {
//   return axios.patch<IuserInfo>('/user/me', newData);
// });
// // api 요청하는 함수(addTodo) 를 작성했을 경우
// export const editMutate1 = useMutation(addTodo);

// export const editMutate1 = () => {
//   return useMutation(editMutate2);
// };

// export const useUpdateUserData1 = (userData: IuserInfo) =>
//   useMutation(async () => await axios.patch(`/use/me`, userData).then((response) => response.data), {
//     onSuccess: () => {
//       console.log('success');
//     },
//   });

// export const useUpdateUserData = (userData: IuserInfo) =>
//   useMutation(async () => await axios.patch(`/use/me`, userData).then((response) => response.data), {
//     onSuccess: () => {
//       console.log('success');
//     },
//   });

// export const useUpdateUserData = useMutation(
//   async (userData: IuserInfo) => await axios.patch(`/use/me`, userData).then((response) => response.data),
//   {
//     onSuccess: () => {
//       console.log('success');
//     },
//   },
// );

export default function useUserInfo() {
  // const queryClient = useQueryClient();
  const editMutate = async (newData: IuserInfo) => {
    return await axios.patch('/user/me', newData);
  };
  const mutation = useMutation({
    mutationFn: editMutate,
    onSuccess: () => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({ queryKey: ['user'] });
      console.log('성공');
    },
  });
  return { mutation };
}
