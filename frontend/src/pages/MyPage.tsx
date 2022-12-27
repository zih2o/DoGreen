import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import MyPageTab from '../components/mypage/MyPageTab';
import MyPageTopBar from '../components/mypage/MyPageTopBar';
import { GlobalLayout } from '../components/layout/GlobalLayout';
import { MyPageLayout } from '../components/layout/MyPageLayout';
import { AuthStore } from '../hooks/useAuth';
import { DialogModal } from '../components/common/DialogModal';

export const MyPage = () => {
  const token = AuthStore((state) => state.token);

  return (
    <>
      {!token ? (
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
