import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ImageType, TextType, WrapperType } from '../common/theme';
import { MyPageMessageLayout } from '../layout/MyPageLayout';

interface IMyPageTopBarProps {
  modal?: boolean;
}
export interface IUserData {
  role: string;
  email: string;
  username: string;
  bio: string;
  imgUrl: string;
}
export const InitialData: IUserData = {
  role: '',
  email: '',
  username: '',
  bio: '',
  imgUrl: '',
};

export const getUser = async () => {
  const response = await axios
    .get('localhost:3000/user/me')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
    });
  return response;
};
// const [userInfo, setUserInfo] = useState(InitialData);

// const data = getUser();
// data.then((res) => {
//   setUserInfo(res.);
// });
// console.log(userInfo);

export const UserMessage = () => {
  return (
    <MyPageMessageLayout>
      <span className={TextType.messageText}>{InitialData.username}</span>님, 상위 60%의
      <span className={TextType.messageText}> Earth Guardian</span>
      이군요!
      <br></br> 현재까지 <span className={TextType.messageText}>60마리</span>의 아델리펭귄을 구하셨어요.
    </MyPageMessageLayout>
  );
};

export const ProfileInfo = (props: IMyPageTopBarProps) => {
  return (
    <section className={WrapperType.profileTotalWrapper + (props.modal ? 'my-5' : 'my-12')}>
      <div className={WrapperType.profileWrapper}>
        <img className={ImageType.profileImg} src="/src/assets/profile.png" alt="profile_img" />
      </div>
      <div className={WrapperType.textWrapper + (props.modal ? 'text-md' : 'text-xl')}>
        <p>{InitialData.username}</p>
        <p>{InitialData.bio}</p>
      </div>
    </section>
  );
};
