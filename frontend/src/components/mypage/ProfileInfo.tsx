import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ImageType, WrapperType } from '../common/theme';
import { AuthStore, InitialData } from '../../hooks/UserStore';
interface IMyPageTopBarProps {
  modal?: boolean;
}
const serverURL = 'http://localhost:3000';

const getUser = async (accessToken: string | null) => {
  const response = await axios.get(`${serverURL}/user/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export const ProfileInfo = (props: IMyPageTopBarProps) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(InitialData);
  const accessToken = AuthStore((state) => state.token);

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    }
    const data2 = getUser(accessToken);
    data2.then((res) => {
      setUserData(res);
    });
  }, []);

  return (
    <section className={WrapperType.profileTotalWrapper + (props.modal ? 'my-5' : 'my-12')}>
      <div className={WrapperType.profileWrapper}>
        <img className={ImageType.profileImg} src={userData.imgUrl} alt="profile_img" />
      </div>
      <div className={WrapperType.textWrapper + (props.modal ? 'text-md' : 'text-xl')}>
        <p className="text-garden1 text-2xl">{userData.username}</p>
        <p>{userData.bio}</p>
      </div>
    </section>
  );
};
