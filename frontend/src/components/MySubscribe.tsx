import React from 'react';
import MyPageTab from './MyPageTab';
import SubscribeTab from './SubscribeTab';
import MyPageTopBar from '../components/MyPageTopBar';
const MySubscribe = () => {
  return (
    <div className="mx-auto w-full min-h-screen">
      <MyPageTopBar />
      <div className="container flex lg:flex px-5 lg:w-full mx-auto">
        <MyPageTab />
        <SubscribeTab />
      </div>
    </div>
  );
};
export default MySubscribe;
