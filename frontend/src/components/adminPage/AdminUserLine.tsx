import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import useAdminUser from '../../hooks/useAdminUser';
interface IUser {
  ban: string;
  role: string;
  email: string;
  username: string;
  bio: string;
  imgUrl: string;
}
export default function AdminUserLine(userInfo: IUser) {
  const { ban, role, email, username, bio, imgUrl } = userInfo;
  const { banUserQuery, cancleUserQuery } = useAdminUser();
  const [currentValue, setCurrentValue] = useState('');

  const userInfoHandel = async (value: string) => {
    setCurrentValue(value);
    value === 'actUser' ? cancleUserQuery([username]) : banUserQuery([username]);
  };
  const handleChange = async (event) => {
    if (confirm(`${username}을 ${event.target.selectedOptions[0].text} 하시겠습니까?`)) {
      await userInfoHandel(event.target.selectedOptions[0].value);
      return window.location.replace(`/admin/userManage/${currentValue}`);
    }
    event.preventDefault();
  };

  return (
    <li className="">
      <div className="flex items-center space-x-4 p-3 border-b-2 border-garden4/50">
        <div className="flex-shrink-0">
          <img className="w-16 h-16 rounded-full" src={imgUrl} alt="Neil image" />
        </div>
        <div className="flex-1 min-w-1">
          <p className="text-xl pb-2 font-medium text-gray-900 truncate dark:text-white">{username}</p>
          <p className="text-[1.2rem] text-gray-500 truncate dark:text-gray-400">{email}</p>
        </div>
        <div className="inline-flex items-center text-xl font-semibold text-garden4 dark:text-white">{bio}</div>
        <select
          id="countries"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 font-bold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {ban === 'true' ? (
            <>
              <option value="inaUser">비활성화</option>
              <option value="actUser">활성화</option>
            </>
          ) : (
            <>
              <option value="actUser">활성화</option>
              <option value="inaUser">비활성화</option>
            </>
          )}
        </select>
      </div>
    </li>
  );
}
