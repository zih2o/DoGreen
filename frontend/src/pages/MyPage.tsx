import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import MyPageTab from '../components/mypage/MyPageTab';
import MyPageTopBar from '../components/mypage/MyPageTopBar';
import { GlobalLayout } from '../components/layout/GlobalLayout';
import { MyPageLayout } from '../components/layout/MyPageLayout';

export const MyPage = () => {
  const navigate = useNavigate();

  const token = sessionStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);

  return (
    <GlobalLayout>
      <MyPageTopBar />
      <MyPageLayout>
        <MyPageTab />
        <Outlet />
      </MyPageLayout>
    </GlobalLayout>
  );
};
