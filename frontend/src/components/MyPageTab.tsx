import React, { useState } from 'react';
import { InitialData, userData } from '../pages/MyPage';
import { Routes, Route, Link } from 'react-router-dom';

const MyPageTab = () => {
  const [userInfo, setUserInfo] = useState<userData>(InitialData);
  return (
    <div>
      <section className="flex mx-3 my-20 items-center justify-content-center">
        <div className="profile_wrapper w-1/3">
          <img className="p-3" src="./src/assets/profile.png" alt="profile_img" />
        </div>
        <div className="info_wrapper font-bold flex flex-col w-2/3 text-2xl ml-5">
          <p>{userInfo.name}</p>
          <p>Lv. {userInfo.status}</p>
        </div>
      </section>
      <section className="flex flex-col font-bold text-2xl">
        <Link to="/" className="mb-10 pl-8">
          내 정보 수정
        </Link>
        <Link to="/" className="mb-10 pl-8">
          내 구독 정보
        </Link>
        <Link to="/" className="mb-10 pl-8">
          내 챌린지 정보
        </Link>
      </section>
    </div>
  );
};
export default MyPageTab;
