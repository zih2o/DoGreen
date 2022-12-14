import React from 'react';
import UserInfo from '../components/UserInfo';
import MyPageTab from '../components/MyPageTab';
// import axios from 'axios';

export interface userData {
  id: number;
  name: string;
  rank: number;
  status: string;
  saveNumber: number;
  userAnimal: string;
}
export const InitialData: userData = {
  id: 0,
  name: '엘리스',
  rank: 60,
  status: 'Earth Gardian',
  saveNumber: 50,
  userAnimal: '아델리펭귄',
};

const MyPage = () => {
  return (
    <div>
      <h2>마이페이지</h2>
      <MyPageTab />
      <UserInfo />
    </div>
  );
};
export default MyPage;
