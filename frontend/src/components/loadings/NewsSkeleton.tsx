import React, { Dispatch, RefObject, SetStateAction } from 'react';

export default function NewsSkeleton(props?: Record<'instance', () => void>) {
  return (
    <div ref={props && props.instance} className="flex justify-center w-full h-full py-6 bg-gardenBG">
      <div className="flex flex-col items-center mr-4">
        <div className={'w-12 h-12 rounded-full bg-zinc-300 shadow-xl animate-pulse'} />
      </div>
      <div className="flex flex-col z-0 w-10/12 rounded-lg shadow-2xl  md:w-9/12 lg:w-8/12">
        <div className="w-full p-6 rounded-t-lg bg-slate-50 dark:bg-zinc-800 text-md sm:">
          <div className="w-10/12 h-4 rounded-sm bg-zinc-300 animate-pulse" />
          <div className="w-full h-4 mt-8 rounded-sm bg-zinc-300 animate-pulse" />
          <div className="w-full h-4 mt-6 rounded-sm bg-zinc-300 animate-pulse" />
          <div className="w-full h-4 mt-6 rounded-sm bg-zinc-300 animate-pulse" />
        </div>
        <div className="flex justify-between h-10 items-center px-6 py-2 rounded-b-lg bg-slate-400  bg-gradient-to-r from-gardenBG to-garden4 dark:from-forest4' animate-pulse"></div>
      </div>
    </div>
  );
}
