import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import MyPageTab from '../components/mypage/MyPageTab';
import MyPageTopBar from '../components/mypage/MyPageTopBar';
import { GlobalLayout } from '../components/layout/GlobalLayout';
import { MyPageLayout } from '../components/layout/MyPageLayout';
import { useUserInfo } from '../hooks/store';
import { DialogModal } from '../components/common/DialogModal';

export const MyPage = () => {
  const { existUser, getUserInfo } = useUserInfo();
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      {!existUser ? (
        <DialogModal type="alert" title="로그인 안내" message="로그인 시 이용 가능합니다." />
      ) : (
        <GlobalLayout>
          <MyPageTopBar />
          <MyPageLayout>
            <MyPageTab />

            <Outlet />
          </MyPageLayout>
        </GlobalLayout>
      )}
    </>
  );
};
