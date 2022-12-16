import React, { useState } from 'react';
import { InitialData, userData } from '../pages/MyPage';

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState<userData>(InitialData);
  return (
    <div className="message_wrapper mb-48">
      <p className="text-3xl text-center leading-10 font-bold">
        <span className="text-emerald-600">{userInfo.name}</span>님, 상위 {userInfo.rank}%의
        <span className="text-emerald-600"> {userInfo.status}</span>
        이군요!
        <br></br> 현재까지 <span className="text-emerald-600">{userInfo.saveNumber}마리</span>의 {userInfo.userAnimal}을
        구하셨어요.
      </p>
    </div>
  );
};
export default UserInfo;
