import React from 'react';
import MyPageTab from '../components/MyPageTab';
import MyPageMain from '../components/MyPageMain';
import MyPageTopBar from '../components/MyPageTopBar';
import GlobalLayout from '../components/layout/GlobalLayout';
import MyPageLayout from '../components/layout/MyPageLayout';
export interface IUserData {
  id: number;
  name: string;
  rank: number;
  bio: string;
  saveNumber: number;
}
export const InitialData: IUserData = {
  id: 0,
  name: '엘리스',
  rank: 60,
  bio: 'Hi there!',
  saveNumber: 50,
};
const MyPage = () => {
  return (
    <GlobalLayout>
      <MyPageTopBar />
      <MyPageLayout>
        <MyPageTab />
        <MyPageMain />
      </MyPageLayout>
    </GlobalLayout>
  );
};
export default MyPage;
