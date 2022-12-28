import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import MyPageTab from '../components/mypage/MyPageTab';
import MyPageTopBar from '../components/mypage/MyPageTopBar';
import { GlobalLayout } from '../components/layout/GlobalLayout';
import { MyPageLayout } from '../components/layout/MyPageLayout';
import { useUserInfo } from '../hooks/useUser';
import { DialogModal } from '../components/common/DialogModal';
import { useModalState } from '../hooks/useModalState';

export const MyPage = () => {
  const { existUser, getUserInfo } = useUserInfo();
  const { handleClose } = useModalState();
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      {!existUser ? (
        <DialogModal
          type="alert"
          navigate="/login"
          title="로그인 안내"
          message="로그인 시 이용 가능합니다."
          onClose={handleClose}
        />
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
