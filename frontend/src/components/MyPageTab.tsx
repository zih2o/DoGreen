import React from 'react';
import { Link } from 'react-router-dom';
import ProfileInfo from './ProfileInfo';
import MyPageTabBar from './MyPageTabBar';

const MyPageTab = () => {
  return (
    <div className="lg:flex-col md:flex bg-stone-100 mt-20 rounded-lg">
      <ProfileInfo />
      <MyPageTabBar />
    </div>
  );
};
export default MyPageTab;
