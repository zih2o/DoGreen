import React from 'react';
import { useAdminCategoryStore } from '../../hooks/useAdminCategory';

import CreateCategoryForm from './CategoryForm';
import CategoryCards from './CategoryCards';

export default function AdminMascot() {
  const { adminCategory, adminCreateCardBtn, toggleAdminCreateCardBtn } = useAdminCategoryStore();
  return (
    <>
      <div className="flex flex-col p-6 col-start-4 col-span-full row-span-full bg-garden2 lg:col-start-3">
        <div className="flex flex-row justify-between p-4 item-bottom">
          <h2 className="flex text-4xl font-bold mb-5">Mascot 관리</h2>
        </div>
        <div className="flex flex-wrap">
          <div className="flex flex-col text-center m-3 p-3 w-full font-bold text-xl bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#292524] dark:border-[#292524]">
            <button className="w-full" onClick={() => toggleAdminCreateCardBtn()}>
              Mascot 카드생성하기
            </button>
            {adminCreateCardBtn && <CreateCategoryForm />}
          </div>
        </div>
        <CategoryCards />
      </div>
    </>
  );
}
