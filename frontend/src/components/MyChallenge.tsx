import React from 'react';
import MyPageTopBar from './MyPageTopBar';
import MyPageTab from './MyPageTab';
import ChallengeInfo from './ChallengeInfo';
import GlobalLayout from './layout/GlobalLayout';
import MyPageLayout from './layout/MyPageLayout';

const MyChallenge = () => {
  return (
    <GlobalLayout>
      <MyPageTopBar />
      <MyPageLayout>
        <MyPageTab />
        <ChallengeInfo />
      </MyPageLayout>
    </GlobalLayout>
  );
};
export default MyChallenge;
