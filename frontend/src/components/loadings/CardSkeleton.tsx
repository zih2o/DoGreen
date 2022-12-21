import React from 'react';

export default function CardSkeleton() {
  return (
    <div className="m-3 p-3 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="relative flex justify-end ">
        <svg
          className="w-7 h-8 text-zinc-400 animate-pulse"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
        </svg>
      </div>
      <div className="flex flex-col items-center ">
        <div className="w-24 h-24 mb-4 rounded-full bg-zinc-300 shadow-lg animate-pulse" />
        <div className="w-12 h-4 mb-3 rounded-sm bg-zinc-300 animate-pulse dark:text-white"></div>
        <div className="w-24 h-3 rounded-sm bg-zinc-300 animate-pulse dark:text-gray-400"></div>
        <div className="w-24 h-3 mt-1 mb-4 rounded-sm bg-zinc-300 animate-pulse dark:text-gray-400"></div>
      </div>
    </div>
  );
}
