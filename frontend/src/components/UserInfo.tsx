import React, { useState } from 'react';
import { InitialData, userData } from '../pages/MyPage';

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState<userData>(InitialData);
  return (
    <div>
      <p>
        {userInfo.name}님, 상위 {userInfo.rank}%의 {userInfo.status}이군요!
        <br></br> 현재까지 {userInfo.saveNumber}마리의 {userInfo.userAnimal}을 구하셨어요.
      </p>
    </div>
  );
};
export default UserInfo;
