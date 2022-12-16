import React from 'react';
import MyPageTab from '../components/MyPageTab';
import MyPageMain from '../components/MyPageMain';
import Header from '../components/Header';
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
    <div className="w-full min-h-screen">
      <Header/>
      <div className="flex min-h-screen w-full">
        <div className="MyPage_Tab_Wrapper w-1/4 bg-gray-200">
          <MyPageTab />
        </div>
        <div className="MyPage_Content_Wrapper w-3/4 bg-slate-100">
          <MyPageMain />
        </div>
      </div>
    </div>
  );
};
export default MyPage;
