import React from 'react';
import { InitialData } from '../pages/MyPage';
interface IMyPageTopBarProps {
  modal?: boolean;
}
const ProfileInfo = (props: IMyPageTopBarProps) => {
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
export default ProfileInfo;
