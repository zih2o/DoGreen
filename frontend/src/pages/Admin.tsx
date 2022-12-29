import React, { useEffect } from 'react';
import NotFound from './NotFound';
import { useUserInfo } from '../hooks/useUser';
import { Outlet } from 'react-router-dom';
import { useAdminCategoryStore } from '../hooks/useAdminCategory';
import LeftSide from '../components/adminPage/LeftSide';
import Modal from '../components/adminPage/Modal';

function Admin() {
  const { existUser, userInfo, getUserInfo } = useUserInfo();
  const { adminCategory, adminModal } = useAdminCategoryStore();
  useEffect(() => {
    getUserInfo();
  }, []);

  return existUser && userInfo.role === 'ADMIN' ? (
    <div className="w-full min-h-screen grid grid-cols-10 grid-rows-6">
      <div className="grid grid-cols-10 grid-rows-6 mt-[113.99px] mb-[92px] col-span-full row-span-6 sm:mb-[72px]">
        <LeftSide />
        <Outlet />
        {adminModal && <Modal modalType={adminCategory} />}
      </div>
    </div>
  ) : (
    <NotFound />
  );
}

export default Admin;
