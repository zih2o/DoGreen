import React from 'react';
import TotalProgressBar from './Progressbar';
import ChallengeInfo from './ChallengeInfo';
import { UserMessage } from './UserMessage';
import { MyPageContentsLayout } from '../layout/MyPageLayout';

const MyPageMain = () => {
  return (
    <MyPageContentsLayout>
      <TotalProgressBar value={60} />
      <UserMessage />
      <ChallengeInfo />
    </MyPageContentsLayout>
  );
};
export default MyPageMain;
