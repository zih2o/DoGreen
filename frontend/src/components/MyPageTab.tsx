import React, { useState } from 'react';
import { InitialData, userData } from '../pages/MyPage';

const MyPageTab = () => {
  const [userInfo, setUserInfo] = useState<userData>(InitialData);
  return (
    <div>
      <h3>마이페이지 탭바</h3>
      <img src="./src/assets/profile.png" alt="profile_img" />
      <p>{userInfo.name}</p>
      <p>Lv.{userInfo.status}</p>
    </div>
  );
};
export default MyPageTab;
