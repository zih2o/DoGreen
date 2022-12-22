import React from 'react';
import { ImageType, WrapperType } from '../common/theme';
import { AuthStore } from '../../hooks/useAuth';
import useUserData from '../../hooks/useUserData';
interface IMyPageTopBarProps {
  modal?: boolean;
}

export const ProfileInfo = (props: IMyPageTopBarProps) => {
  const accessToken = AuthStore((state) => state.token);
  const {
    userQuery: { data: userData },
  } = useUserData(accessToken);

  return (
    <section className={WrapperType.profileTotalWrapper + (props.modal ? 'my-5' : 'my-12')}>
      {userData && (
        <>
          <div className={WrapperType.profileWrapper}>
            <img className={ImageType.profileImg} src={userData.imgUrl} alt="profile_img" />
          </div>
          <div className={WrapperType.textWrapper + (props.modal ? 'text-md' : 'text-xl')}>
            <p className="text-garden1 text-2xl">{userData.username}</p>
            <p>{userData.bio}</p>
          </div>
        </>
      )}
    </section>
  );
};
