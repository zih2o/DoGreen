import React from 'react';
import MyPageTab from './MyPageTab';
import ChallengeInfo from './ChallengeInfo';
import Header from './Header';

const MyChallenge = () => {
  return (
    <div>
      <div className="w-full min-h-screen">
        <Header />
        <div className="flex min-h-screen w-full">
          <div className="MyPage_Tab_Wrapper w-1/4 bg-gray-200">
            <MyPageTab />
          </div>
          <div className="MyPage_Content_Wrapper w-3/4 bg-slate-100">
            <ChallengeInfo />
            <ChallengeInfo />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyChallenge;
