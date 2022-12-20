import React from 'react';
import { ProfileInfo } from './UserInfo';
import MyPageTabBar from './MyPageTabBar';
import { MyPageTabLayout } from '../layout/MyPageLayout';

const MyPageTab = () => {
  return (
    <MyPageTabLayout>
      <ProfileInfo />
      <MyPageTabBar />
    </MyPageTabLayout>
  );
};
export default MyPageTab;
