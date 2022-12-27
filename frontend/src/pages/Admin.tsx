import React, { useEffect } from 'react';
import AdminBody from '../components/AdminBody';
import Loading from '../components/loadings/Loading';
import NotFound from './NotFound';
import { useUserInfo } from '../components/wastebasket/store';

function Admin() {
  const { existUser, userInfo, getUserInfo } = useUserInfo();
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <div className="w-full min-h-screen grid grid-cols-10 grid-rows-6">
      <div className="grid grid-cols-10 grid-rows-6 mt-[113.99px] mb-[92px] col-span-full row-span-6 sm:mb-[72px]">
        {!existUser ? <Loading /> : userInfo.role === 'ADMIN' ? <AdminBody /> : <NotFound />}
      </div>
    </div>
  );
}
export default Admin;
