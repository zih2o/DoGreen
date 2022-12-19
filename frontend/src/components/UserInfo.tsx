import React from 'react';

interface IMyPageTopBarProps {
  modal?: boolean;
}
export interface IUserData {
  id: number;
  name: string;
  rank: number;
  bio: string;
  saveNumber: number;
}
export const InitialData: IUserData = {
  id: 0,
  name: '엘리스',
  rank: 60,
  bio: 'Hi there!',
  saveNumber: 50,
};

export const UserMessage = () => {
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

export const ProfileInfo = (props: IMyPageTopBarProps) => {
  return (
    <div>
      <section className={'flex mx-3 items-center justify-content-center ' + (props.modal ? 'my-5' : 'my-20')}>
        <div className="profile_wrapper w-1/3">
          <img className="p-3" src="/src/assets/profile.png" alt="profile_img" />
        </div>
        <div className={'info_wrapper font-bold flex flex-col w-2/3  ml-5  ' + (props.modal ? 'text-md' : 'text-xl')}>
          <p>{InitialData.name}</p>
          <p>{InitialData.bio}</p>
        </div>
      </section>
    </div>
  );
};
