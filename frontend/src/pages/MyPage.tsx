import React from 'react';
import MyPageTab from '../components/MyPageTab';
import MyPageMain from '../components/MyPageMain';
import MyPageTopBar from '../components/MyPageTopBar';
import GlobalLayout from '../components/layout/GlobalLayout';
import { MyPageLayout } from '../components/layout/MyPageLayout';

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
