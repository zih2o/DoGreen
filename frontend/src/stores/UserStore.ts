import create from 'zustand';
import axios from 'axios';

interface IStore {
  token: string | null;
}

interface IUserData {
  role: string;
  email: string;
  username: string;
  bio: string;
  imgUrl: string;
}
export const InitialData: IUserData = {
  role: '',
  email: '',
  username: '',
  bio: '',
  imgUrl: '',
};

export const store = create<IStore>(() => ({
  token: sessionStorage.getItem('token'),
}));

// const getUser = async (accessToken: string | null) => {
//   const response = await axios.get(`${serverURL}/user/me`, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });
//   return response.data;
// };

// const userStore = create<IUserData>(InitialData)( {
//     getUserData: async (token: string) => {
//         const response = await axios.get(`${serverURL}/user/me`, {
//             headers: {
//               Authorization: `Bearer ${accessToken}`,
//             },
//           });
//           return response.data;
//         },
//     }
// )
