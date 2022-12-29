import React from 'react';

import CreateNewsForm from './CreateNewsForm';
import NewsCards from './NewsCards';

import { useAdminCategoryStore } from '../../hooks/useAdminCategory';

export default function AdminNews() {
  const { adminCategory, adminCreateCardBtn, toggleAdminCreateCardBtn } = useAdminCategoryStore();
  return (
    <>
      <div className="flex flex-col p-6 col-start-4 col-span-full row-span-full bg-garden2 lg:col-start-3">
        <div className="flex flex-row justify-between p-4 item-bottom">
          <h2 className="flex text-4xl font-bold mb-5">{name} 관리</h2>
        </div>
        <div className="flex flex-wrap">
          <div className="flex flex-coltext-center m-3 p-3 w-full font-bold text-xl bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#292524] dark:border-[#292524]">
            <button className="w-full" onClick={() => toggleAdminCreateCardBtn()}>
              News 카드생성하기
            </button>
            {adminCreateCardBtn && <CreateNewsForm />}
          </div>
        </div>
        <NewsCards />
      </div>
    </>
  );
}
