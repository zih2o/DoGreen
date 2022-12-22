import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextType } from '../common/theme';
import { MyPageMessageLayout } from '../layout/MyPageLayout';
import { AuthStore, InitialData } from '../../stores/UserStore';

const serverURL = 'http://localhost:3000';

const getUser = async (accessToken: string | null) => {
  const response = await axios.get(`${serverURL}/user/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export const UserMessage = () => {
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
    <MyPageMessageLayout>
      <span className={TextType.messageText}>{userData.username}</span>님, 상위 60%의
      <span className={TextType.messageText}> Earth Guardian</span>
      이군요!
      <br></br> 현재까지 <span className={TextType.messageText}>60마리</span>의 아델리펭귄을 구하셨어요.
    </MyPageMessageLayout>
  );
};
