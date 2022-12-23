import React, { useState } from 'react';
import { useAdminCategoryStore } from '../../hooks/useAdminCategory';
import CreateCategoryForm from './CreateCategoryForm';
import NewsCardForm from './NewsCardForm';

export default function CreatCard() {
  const { adminCategory } = useAdminCategoryStore();
  const [createCardHandle, setCreateCardHandle] = useState(false);
  return (
    <div className="text-center m-3 p-3 w-full font-bold text-xl bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#292524] dark:border-[#292524]">
      <button onClick={() => setCreateCardHandle(!createCardHandle)}>카드생성하기</button>
      {createCardHandle && (adminCategory === 'mascotCategory' ? <CreateCategoryForm /> : <NewsCardForm />)}
    </div>
  );
}
