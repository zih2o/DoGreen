import React from 'react';
import TotalProgressBar from './Progressbar';
import ChallengeInfo from './ChallengeInfo';
import UserInfo from './UserInfo';
import { InitialData } from '../pages/MyPage';

const MyPageMain = () => {
  return (
    <div className="MyPage_Content_Wrapper flex-1 lg:w-80 w-full py-5">
      <TotalProgressBar value={InitialData.rank} />
      <UserInfo />
      <ChallengeInfo />
    </div>
  );
};
export default MyPageMain;
