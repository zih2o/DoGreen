import React from 'react';

export default function EditButton({id}) {
  return (
    <div
      id="dropdown"
      className="relative top-11 w-36 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700"
    >
      <ul className="py-1" aria-labelledby="dropdownButton">
        <div className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
          <li>Edit</li>
        </div>

        <div className="cursor-pointer block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
          <li>Delete</li>
        </div>
      </ul>
    </div>
  );
}
