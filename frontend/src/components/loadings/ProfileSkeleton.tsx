import React from 'react';
import { WrapperType } from '../common/theme';
export const ProfileSkeleton = () => {
  return (
    <>
      <section className={WrapperType.profileTotalWrapper + 'my-12'}>
        <div className={WrapperType.profileWrapper}>
          <div
            className={'w-20 h-20 xl:w-28 xl:h-28 rounded-full p-2 m-4 bg-zinc-300 dark:bg-[#292524] animate-pulse'}
          ></div>
        </div>
        <div className={WrapperType.textWrapper + 'px-3'}>
          <p className="w-full h-4 mb-2 rounded-sm bg-zinc-300 dark:bg-[#292524] animate-pulse"></p>
          <p className="w-full h-4 rounded-sm bg-zinc-300 dark:bg-[#292524] animate-pulse"></p>
        </div>
      </section>
    </>
  );
};
