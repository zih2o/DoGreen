import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import MyPageTab from '../components/mypage/MyPageTab';
import MyPageTopBar from '../components/mypage/MyPageTopBar';
import { GlobalLayout } from '../components/layout/GlobalLayout';
import { MyPageLayout } from '../components/layout/MyPageLayout';
import { AlertModal } from '../components/common/AlertModal';
import { useUserLoginStore } from '../hooks/store';
export const MyPage = () => {
  const [isLogined, setIsLogined] = useState<boolean>(true);
  const token = useUserLoginStore((state) => state.token);

  useEffect(() => {
    if (!token) {
      setIsLogined(false);
    }
  }, []);

  return (
    <>
      {!isLogined ? (
        <AlertModal title="로그인 안내" message=" 로그인 후 이용해주세요" />
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
