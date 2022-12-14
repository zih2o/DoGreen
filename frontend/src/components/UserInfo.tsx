// import './MyPage.css';
import React, { useState } from 'react';
import { InitialData, userData } from '../pages/MyPage';
import TotalProgressBar from './Progressbar';
import ChallengeInfo from './ChallengeInfo';

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState<userData>(InitialData);
  return (
    <div>
      <div className="progressbar_wrapper mt-24 mb-24 w-10/12 mx-auto">
        <TotalProgressBar value={userInfo.rank} />
      </div>
      <div className="message_wrapper mb-24">
        <p className="text-4xl text-center font-bold">
          <span className="text-emerald-600">{userInfo.name}</span>님, 상위 {userInfo.rank}%의
          <span className="text-emerald-600"> {userInfo.status}</span>
          이군요!
          <br></br> 현재까지 <span className="text-emerald-600">{userInfo.saveNumber}마리</span>의 {userInfo.userAnimal}
          을 구하셨어요.
        </p>
      </div>
      <div>
        <ChallengeInfo />
      </div>
    </div>
  );
};
export default UserInfo;
