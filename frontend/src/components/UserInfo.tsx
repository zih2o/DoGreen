import React from 'react';
import { InitialData } from '../pages/MyPage';

const UserInfo = () => {
  return (
    <div className="message_wrapper px-10 lg:px-20 mb-24">
      <p className="text-2xl text-center leading-10 font-bold">
        <span className="text-emerald-600">{InitialData.name}</span>님, 상위 {InitialData.rank}%의
        <span className="text-emerald-600"> Earth Guardian</span>
        이군요!
        <br></br> 현재까지 <span className="text-emerald-600">{InitialData.saveNumber}마리</span>의 아델리펭귄을
        구하셨어요.
      </p>
    </div>
  );
};
export default UserInfo;
