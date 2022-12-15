import React from 'react';
import { Link } from 'react-router-dom';
import ProfileInfo from './ProfileInfo';
import MyPageTabBar from './MyPageTabBar';

const MyPageTab = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPageTabBar />
    </div>
  );
};
export default MyPageTab;
