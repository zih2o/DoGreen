import React, { Dispatch, RefObject, SetStateAction } from 'react';

export default function NewsSkeleton(props?: Record<'instance', () => void>) {
  return (
    <div ref={props && props.instance} className="flex justify-center w-full h-full py-6 bg-gardenBG">
      <div className="flex flex-col items-center mr-4">
        <div className={'w-12 h-12 rounded-full bg-zinc-300 shadow-xl animate-pulse'} />
      </div>
      <div className="flex flex-col z-0 w-10/12 rounded-lg shadow-2xl  md:w-9/12 lg:w-8/12">
        <div className="w-full p-6 rounded-t-lg bg-slate-50 text-md sm:">
          <div className="w-10/12 h-3 rounded-sm bg-zinc-300 animate-pulse" />
          <div className="w-full h-3 mt-2 rounded-sm bg-zinc-300 animate-pulse" />
          <div className="w-full h-3 mt-2 rounded-sm bg-zinc-300 animate-pulse" />
        </div>
        <div className="flex justify-between h-10 items-center px-6 py-2 rounded-b-lg bg-slate-400  bg-gradient-to-r from-zinc-50 to-zinc-400 animate-pulse"></div>
      </div>
    </div>
  );
}
