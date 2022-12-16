import React, { useState } from 'react';
import { InitialData, userData } from '../pages/MyPage';
import TotalProgressBar from './Progressbar';
import ChallengeInfo from './ChallengeInfo';
import UserInfo from './UserInfo';

const MyPageMain = () => {
  const [userInfo, setUserInfo] = useState<userData>(InitialData);
  return (
    <div className="MyPage_Content_Wrapper w-full py-5">
      <TotalProgressBar value={userInfo.rank} />
      <UserInfo />
      <ChallengeInfo />
    </div>
  );
};
export default MyPageMain;
