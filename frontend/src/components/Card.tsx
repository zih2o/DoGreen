import React, { useState, useRef, useEffect } from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { api } from '../util/api';
import { useMutation } from '@tanstack/react-query';
import EditButton from './adminPage/EditButton';

export default function Card({ id, img, name, description }) {
  const [clickCard, setClickCard] = useState(false);
  const editBtn = useRef(null);
  useEffect(() => {
    const handleClickOutside = ({ target }) => {
      if (editBtn.current && !editBtn.current.contains(e.target as Node)) setClickCard(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [editBtn]);
  const deleteMutation = useMutation(() => api.delete(`/category/${id}`));
  console.log(name, id);
  return (
    <div className=" static m-3 p-3 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#292524] dark:border-[#292524]">
      <div className="flex justify-end flex-column">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          onClick={() => setClickCard(!clickCard)}
          className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-gray-100 hover:text-[#D7CCCC] rounded-r-md hover:[#292524]"
          type="button"
        >
          <BiDotsHorizontalRounded className="w-7 h-8 dark:hoverr:fill-white" />
        </button>
        {clickCard && (
          <div
            id="dropdown"
            className="relative top-11 w-36 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700"
          >
            <ul className="py-1" aria-labelledby="dropdownButton">
              <div className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                <li>Edit</li>
              </div>

              <div
                onClick={() => deleteMutation()}
                className="cursor-pointer block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                <li>Delete</li>
              </div>
            </ul>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center">
        <img className="w-24 h-24 mb-4 rounded-full shadow-lg" src={img} alt="default card" />
        <h5 className="mb-3 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{description}</span>
      </div>
    </div>
  );
}
