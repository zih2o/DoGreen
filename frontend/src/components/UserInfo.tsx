import React from 'react';
import { ImageType, TextType } from './common/theme';
import { MyPageMessageLayout } from './layout/MyPageLayout';
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
    <MyPageMessageLayout>
      <span className={TextType.messageText}>{InitialData.name}</span>님, 상위 {InitialData.rank}%의
      <span className={TextType.messageText}>Earth Guardian</span>
      이군요!
      <br></br> 현재까지 <span className={TextType.messageText}>{InitialData.saveNumber}마리</span>의 아델리펭귄을
      구하셨어요.
    </MyPageMessageLayout>
  );
};

export const ProfileInfo = (props: IMyPageTopBarProps) => {
  return (
    <div>
      <section className={'flex mx-3 items-center justify-content-center ' + (props.modal ? 'my-5' : 'my-12')}>
        <div className="profile_wrapper w-2/5">
          <img className={ImageType.profileImg} src="/src/assets/profile.png" alt="profile_img" />
        </div>
        <div className={'info_wrapper font-bold flex flex-col w-3/5  ml-5  ' + (props.modal ? 'text-md' : 'text-xl')}>
          <p>{InitialData.name}</p>
          <p>{InitialData.bio}</p>
        </div>
      </section>
    </div>
  );
};
