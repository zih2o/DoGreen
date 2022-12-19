import React from 'react';
import TotalProgressBar from './Progressbar';
import ChallengeInfo from './ChallengeInfo';
import { InitialData, UserMessage } from './UserInfo';
import { MyPageContentsLayout } from './layout/MyPageLayout';

const MyPageMain = () => {
  return (
    <MyPageContentsLayout>
      <TotalProgressBar value={InitialData.rank} />
      <UserMessage />
      <ChallengeInfo />
    </MyPageContentsLayout>
  );
};
export default MyPageMain;
