import React, { useState } from 'react';
import { AuthStore } from '../hooks/useAuth';
import { useAdminCategoryStore } from '../hooks/useAdminCategory';

import useUserData from '../hooks/useUserData';
import NewsCategory from './adminPage/NewsCategory';
import MascotCategory from './adminPage/MascotCategory';

import LeftSide from './adminPage/LeftSide';

function AdminBody() {
  const { adminCategory } = useAdminCategoryStore();
  // const accessToken = AuthStore((state) => state.token);
  // const {
  //   userQuery: { data: user },
  // } = useUserData(accessToken);
  // console.log("=======================토큰, 유저=======================");
  // console.log(accessToken, user);
  // console.log("================================================");
  return (
    <>
      <LeftSide />
      <MascotCategory name={adminCategory} />
    </>
  );
}
export default AdminBody;
