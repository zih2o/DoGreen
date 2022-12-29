import React from 'react';
import { ISkeleton } from './NewsSkeleton';
export default function Loading(props: ISkeleton) {
  return (
    <div ref={props && props.instance} className="flex justify-center items-center mt-10">
      <div className="w-4 h-4 mr-2 rounded-full bg-gradient-to-br from-garden2 to-garden1 animate-[bounce_1s_infinite]"></div>
      <div className="w-4 h-4 mr-2 rounded-full bg-gradient-to-br from-garden2 to-garden1 animate-[bounce_1s_infinite_.1s]"></div>
      <div className="w-4 h-4 mr-2 rounded-full bg-gradient-to-br from-garden2 to-garden1 animate-[bounce_1s_infinite_.2s]"></div>
      <div className="w-4 h-4 mr-2 rounded-full bg-gradient-to-br from-garden2 to-garden1 animate-[bounce_1s_infinite_.3s]"></div>
    </div>
  );
}
