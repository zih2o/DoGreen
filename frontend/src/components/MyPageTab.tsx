import React from 'react';
import ProfileInfo from './ProfileInfo';
import MyPageTabBar from './MyPageTabBar';

const MyPageTab = () => {
  return (
    <div className="MyPage_Tab_Wrapper hidden xl:w-80 lg:w-60 lg:block">
      <div className="lg:flex-col md:flex bg-garden4/5 mt-20 rounded-lg">
        <ProfileInfo />
        <MyPageTabBar />
      </div>
    </div>
  );
};
export default MyPageTab;
