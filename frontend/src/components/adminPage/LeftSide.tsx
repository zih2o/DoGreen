import React from 'react';
import { useAdminCategoryStore } from '../../hooks/useAdminCategory';
import useUserData from '../../hooks/useUser';

import Loading from '../loadings/Loading';

export default function LeftSide() {
  const { setMascotCategory, setNewsCategory, closeAdminCreateCardBtn } = useAdminCategoryStore();
  const {
    userQuery: { data: userData },
  } = useUserData();

  const clickCategory = () => {
    setMascotCategory();
    closeAdminCreateCardBtn();
  };
  const clickNews = () => {
    setNewsCategory();
    closeAdminCreateCardBtn();
  };
  return (
    <div className="grid col-span-3 row-span-full grid-cols-4 grid-rows-6 lg:col-span-2 bg-garden1">
      <div className="flex flex-wrap justify-between col-span-full p-6 pb-8 bg-leftSide text-garden2 ">
        {userData ? (
          <>
            <img className="m-1" src="" alt="profile_img" />
            <ul className="flex flex-col justify-center">
              <li className="text-l mb-2 md:text-xl font-semibold">{userData.username}</li>
              <li className="text-l md:text-xl font-semibold">Lv.{userData.role}</li>
            </ul>
          </>
        ) : (
          <Loading />
        )}
      </div>
      <div className="col-span-full row-start-2 row-span-full p-6 bg-leftSide text-garden2 ">
        <div className="flex flex-col">
          <button className="flex text-l mt-5 md:text-xl font-bold hover:underline" onClick={() => clickCategory()}>
            Mascot 관리
          </button>
          <button className="flex text-l mt-5 md:text-xl font-bold hover:underline" onClick={() => clickNews()}>
            News 관리
          </button>
        </div>
      </div>
    </div>
  );
}
