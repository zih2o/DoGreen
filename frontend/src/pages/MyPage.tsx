import React from 'react';
import MyPageTab from '../components/mypage/MyPageTab';
import MyPageMain from '../components/mypage/MyPageMain';
import MyPageTopBar from '../components/mypage/MyPageTopBar';
import { GlobalLayout } from '../components/layout/GlobalLayout';
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
