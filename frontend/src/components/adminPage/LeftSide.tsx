import React from 'react';
import { Link } from 'react-router-dom';
import useUserData from '../../hooks/useUser';

export default function LeftSide() {
  const {
    userQuery: { data: userData },
  } = useUserData();

  return (
    <div className="grid col-span-3 row-span-full lg:col-span-2 bg-garden1 p-2">
      <div className="flex flex-col text-garden2">
        {userData && (
          <>
            <img className="flex mb-8 m-4" src={userData.imgUrl} alt="profile_img" />
            <ul className="flex flex-col justify-center mb-10">
              <li className="text-medium mb-2 md:text-lg font-semibold">{userData.username}</li>
              <li className="text-medium md:text-lg font-semibold">Lv.{userData.role}</li>
            </ul>
          </>
        )}
        <div className="flex flex-col">
          <Link to="/admin/mascot" className="flex text-l mt-5 md:text-xl font-bold hover:underline">
            Mascot 관리
          </Link>
          <Link to="/admin/news" className="flex text-l mt-5 md:text-xl font-bold hover:underline">
            News 관리
          </Link>
          <Link to="/admin/userManage" className="flex text-l mt-5 md:text-xl font-bold hover:underline">
            User 관리
          </Link>
        </div>
      </div>
    </div>
  );
}
