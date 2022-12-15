import React, { useState } from 'react';
import { InitialData, userData } from '../pages/MyPage';
import TotalProgressBar from './Progressbar';
import ChallengeInfo from './ChallengeInfo';
import UserInfo from './UserInfo';

const MyPageMain = () => {
  const [userInfo, setUserInfo] = useState<userData>(InitialData);
  return (
    <div>
      <div className="progressbar_wrapper mt-24 mb-24 w-10/12 mx-auto">
        <TotalProgressBar value={userInfo.rank} />
      </div>
      <div className="message_wrapper mb-48">
        <UserInfo />
      </div>
      <div>
        <ChallengeInfo />
      </div>
    </div>
  );
};
export default MyPageMain;
