import React from 'react';
import MyPageTopBar from './MyPageTopBar';
import MyPageTab from './MyPageTab';
import SubscribeTab from './SubscribeTab';
import { GlobalLayout } from '../layout/GlobalLayout';
import { MyPageLayout } from '../layout/MyPageLayout';

const MySubscribe = () => {
  return (
    <GlobalLayout>
      <MyPageTopBar />
      <MyPageLayout>
        <MyPageTab />
        <SubscribeTab />
      </MyPageLayout>
    </GlobalLayout>
  );
};
export default MySubscribe;
