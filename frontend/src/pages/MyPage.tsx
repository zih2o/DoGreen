import React from 'react';
import MyPageTab from '../components/MyPageTab';
import MyPageMain from '../components/MyPageMain';
import MyPageTopBar from '../components/MyPageTopBar';
// import axios from 'axios';

export interface UserData {
  id: number;
  name: string;
  rank: number;
  status: string;
  saveNumber: number;
  userAnimal: string;
}
export const InitialData: UserData = {
  id: 0,
  name: '엘리스',
  rank: 60,
  status: 'Earth Gardian',
  saveNumber: 50,
  userAnimal: '아델리펭귄',
};

const MyPage = () => {
  return (
    <div className="mx-auto w-full min-h-screen">
      <MyPageTopBar />
      <div className="container flex px-5 w-full mx-auto">
        <MyPageTab />
        <MyPageMain />
      </div>
    </div>
  );
};
export default MyPage;
