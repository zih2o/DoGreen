import React from 'react';
import MyPageTab from './MyPageTab';
import { FormEditUserInfo } from './EditUserInfo';
import MyPageTopBar from '../components/MyPageTopBar';

const MyInfoEditTab = () => {
  return (
    <div className="mx-auto w-full min-h-screen">
      <MyPageTopBar />
      <div className="container flex px-5 lg:mt-[113.99px] lg:w-full mx-auto">
        <MyPageTab />
        <FormEditUserInfo />
      </div>
    </div>
  );
};

export default MyInfoEditTab;
