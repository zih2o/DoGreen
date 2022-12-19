import React from 'react';
import MyPageTab from './MyPageTab';
import EditUserInfo from './EditUserInfo';
import MyPageTopBar from '../components/MyPageTopBar';

const MyInfoEditTab = () => {
  return (
    <div className="mx-auto w-full min-h-screen">
      <MyPageTopBar />
      <div className="container flex px-5 lg:w-full mx-auto">
        <MyPageTab />
        <EditUserInfo />
      </div>
    </div>
  );
};

export default MyInfoEditTab;
