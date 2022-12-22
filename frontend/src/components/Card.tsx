import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import EditButton from './adminPage/EditButton';

export default function Card(props) {
  const [clickCard, setClickCard] = useState(false);
  return (
    <div className=" static m-3 p-3 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#292524] dark:border-[#292524]">
      <div className="flex justify-end ">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          onClick={() => setClickCard(!clickCard)}
          className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-gray-100 hover:text-[#D7CCCC] rounded-r-md hover:[#292524]"
          type="button"
        >
          <BiDotsHorizontalRounded className="w-7 h-8 dark:hoverr:fill-white" />
        </button>
        {clickCard ? <EditButton /> : null}
      </div>
      <div className="flex flex-col items-center ">
        <img className="w-24 h-24 mb-4 rounded-full shadow-lg" src="/src/assets/profile.png" alt="default card" />
        <h5 className="mb-3 text-xl font-medium text-gray-900 dark:text-white">카드1</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">카드내용_몇글자??</span>
      </div>
    </div>
  );
}
