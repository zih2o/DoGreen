import React from 'react';
import { useAdminCategoryStore } from '../../hooks/useAdminCategory';

export default function LeftSide() {
  const { setMascotCategory, setNewsCategory } = useAdminCategoryStore();
  return (
    <div className="grid col-span-3 row-span-full grid-cols-4 grid-rows-6 lg:col-span-2 bg-garden1">
      <div className="flex flex-wrap justify-between col-span-full p-6 pb-8 bg-leftSide text-garden2 ">
        <image className="m-1" src="" alt="profile_img" />
        <ul className="flex flex-col justify-center">
          <li className="text-l mb-2 md:text-xl font-semibold">Admin</li>
          <li className="text-l md:text-xl font-semibold">Lv.Admin</li>
        </ul>
      </div>
      <div className="col-span-full row-start-2 row-span-full p-6 bg-leftSide text-garden2 ">
        <ul className="flex flex-col">
          <li className="text-l mt-5 md:text-xl font-bold hover:underline" key="mascot" onClick={setMascotCategory}>
            Mascot 관리
          </li>
          <li className="text-l mt-5 md:text-xl font-bold hover:underline" key="news " onClick={setNewsCategory}>
            News Letter 관리
          </li>
        </ul>
      </div>
    </div>
  );
}
