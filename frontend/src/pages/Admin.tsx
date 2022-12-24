import React from 'react';
import AdminBody from '../components/AdminBody';
import useUserData from '../hooks/useUserData';
import { AuthStore } from '../hooks/useAuth';
import Loading from '../components/loadings/Loading';
import NotFound from './NotFound';

function Admin() {
  const accessToken = AuthStore((state) => state.token);
  const {
    userQuery: { isLoading, data: userData },
  } = useUserData(accessToken);

  return (
    <div className="w-full min-h-screen grid grid-cols-10 grid-rows-6">
      <div className="grid grid-cols-10 grid-rows-6 mt-[113.99px] mb-[92px] col-span-full row-span-6 sm:mb-[72px]">
        {isLoading ? <Loading /> : userData?.role === 'ADMIN' ? <AdminBody /> : <NotFound />}
      </div>
    </div>
  );
}
export default Admin;
