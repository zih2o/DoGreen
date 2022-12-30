import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function AdminUserManagement() {
  let navigate = useNavigate();
  const handleChange = (value:string) => {
    navigate(`/admin/userManage/${value}`);
    value = '';
  };

  return (
    <div className="flex flex-col p-6 col-start-4 col-span-full row-span-full bg-garden2 lg:col-start-3">
      <div className="flex flex-row justify-between p-4 item-bottom">
        <h2 className="flex text-4xl font-bold mb-5">User 관리</h2>
      </div>
      <ul className="max-w px-10 divide-y divide-gray-200 dark:divide-gray-700">
        <li className="items-center align-middle text-center">
          <div className="flex items-center space-x-6 border-b-2 border-garden4/50 px-3 py-1">
            <div className="flex-shrink-0">
              <p className="text-xl w-16 font-medium text-gray-900 truncate dark:text-white">Image</p>
            </div>
            <div className="flex-1 min-w-1">
              <p className="text-[1.2rem] text-gray-500 truncate dark:text-gray-400">User Info</p>
            </div>
            <div className="inline-flex items-center text-xl font-semibold text-garden4 dark:text-white">Comment</div>

            <select
              id="countries"
              onChange={(e) => handleChange(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 font-bold text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="allUser">Filter</option>
              <option value="actUser">활성화</option>
              <option value="inaUser">비활성화</option>
            </select>
          </div>
        </li>
        <Outlet />
      </ul>
    </div>
  );
}
