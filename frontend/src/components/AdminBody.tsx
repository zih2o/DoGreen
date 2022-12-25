import React, { useState } from 'react';
import { AuthStore } from '../hooks/useAuth';
import { useAdminCategoryStore } from '../hooks/useAdminCategory';

import useUserData from '../hooks/useUserData';
import NewsCategory from './adminPage/NewsCategory';

import RightBody from './adminPage/RightBody';
import LeftSide from './adminPage/LeftSide';
import Modal from './adminPage/Modal';

function AdminBody() {
  const { adminCategory, adminModal } = useAdminCategoryStore();
  return (
    <>
      <LeftSide />
      <RightBody name={adminCategory} />
      {adminModal && <Modal />}
    </>
  );
}
export default AdminBody;
