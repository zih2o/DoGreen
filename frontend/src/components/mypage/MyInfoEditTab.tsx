import React from 'react';
import MyPageTopBar from './MyPageTopBar';
import MyPageTab from './MyPageTab';
import { FormEditUserInfo } from '../EditUserInfo';
import { GlobalLayout } from '../layout/GlobalLayout';
import { MyPageLayout } from '../layout/MyPageLayout';

const MyInfoEditTab = () => {
  return (
    <GlobalLayout>
      <MyPageTopBar />
      <MyPageLayout>
        <MyPageTab />
        <FormEditUserInfo />
      </MyPageLayout>
    </GlobalLayout>
  );
};

export default MyInfoEditTab;
