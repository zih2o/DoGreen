import React, { useState } from 'react';
import { useAdminCategoryStore } from '../../hooks/useAdminCategory';

import RightBody from './RightBody';
import LeftSide from './LeftSide';
import Modal from './Modal';

function AdminBody() {
  const { adminCategory, adminModal } = useAdminCategoryStore();
  return (
    <>
      <LeftSide />
      <RightBody name={adminCategory} />
      {adminModal && <Modal modalType={adminCategory} />}
    </>
  );
}
export default AdminBody;
