import React from 'react';

export const MessageSkeleton = () => {
  return (
    <div className="mb-24 px-10 lg:px-20">
      <p className=" w-[500px] h-5 mx-auto mb-8 rounded-sm text-center bg-zinc-300 dark:bg-gray-600/10 animate-pulse"></p>
      <p className=" w-[500px] h-5 mx-auto mb-3 rounded-sm text-center bg-zinc-300 dark:bg-gray-600/10 animate-pulse"></p>
    </div>
  );
};
