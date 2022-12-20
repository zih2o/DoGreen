import React from 'react';
import MyPageTopBar from './MyPageTopBar';
import MyPageTab from './MyPageTab';
import EditUserInfo from '../EditUserInfo';
import { GlobalLayout } from '../layout/GlobalLayout';
import { MyPageLayout } from '../layout/MyPageLayout';

const MyInfoEditTab = () => {
  return (
    <GlobalLayout>
      <MyPageTopBar />
      <MyPageLayout>
        <MyPageTab />
        <EditUserInfo />
      </MyPageLayout>
    </GlobalLayout>
  );
};

export default MyInfoEditTab;
