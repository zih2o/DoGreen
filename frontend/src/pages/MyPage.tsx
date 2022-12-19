import React from 'react';
import MyPageTab from '../components/MyPageTab';
import MyPageMain from '../components/MyPageMain';
import MyPageTopBar from '../components/MyPageTopBar';

export interface IUserData {
  id: number;
  name: string;
  rank: number;
  bio: string;
  saveNumber: number;
}
// {
//   "role": "USER",
//   "email": "lion3@kakao.com",
//   "username": "라이언",
//   "bio": "Hi there!",
//   "imgUrl": "https://user-images.githubusercontent.com/91370858/208048148-47028f2f-d283-4ab1-a43e-3c073543161e.png"
// }
export const InitialData: IUserData = {
  id: 0,
  name: '엘리스',
  rank: 60,
  bio: 'Hi there!',
  saveNumber: 50,
};

const MyPage = () => {
  return (
    <div className="mx-auto w-full min-h-screen">
      <MyPageTopBar />
      <div className="container lg:mt-[113.99px] flex px-5 w-full mx-auto">
        <MyPageTab />
        <MyPageMain />
      </div>
    </div>
  );
};
export default MyPage;
