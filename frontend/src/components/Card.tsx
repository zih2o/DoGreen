import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Card(props) {
  const [clickCard, setClickCard] = useState(false);
  return (
    <div className="m-3 p-3 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="relative flex justify-end ">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          onClick={() => setClickCard(!clickCard)}
          className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
          type="button"
        >
          <span className="sr-only">Open dropdown</span>
          <svg
            className="w-7 h-8"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
        </button>
        {clickCard ? (
          <div
            id="dropdown"
            className="absolute top-11 w-36 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700"
          >
            <ul className="py-1" aria-labelledby="dropdownButton">
              <Link
                to="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                <li>Edit</li>
              </Link>

              <Link
                to="#"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                <li>Delete</li>
              </Link>
            </ul>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col items-center ">
        <img className="w-24 h-24 mb-4 rounded-full shadow-lg" src="/src/assets/profile.png" alt="default card" />
        <h5 className="mb-3 text-xl font-medium text-gray-900 dark:text-white">카드1</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">카드내용_몇글자??</span>
      </div>
    </div>
  );
}
