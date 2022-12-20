import React from 'react';

export default function Loading() {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-4 h-4 mr-2 rounded-full bg-gradient-to-r from-zinc-300 to-zinc-400 animate-[bounce_1s_infinite]"></div>
      <div className="w-4 h-4 mr-2 rounded-full bg-gradient-to-r  from-zinc-300 to-zinc-400 animate-[bounce_1s_infinite_.1s]"></div>
      <div className="w-4 h-4 mr-2 rounded-full bg-gradient-to-r  from-zinc-300 to-zinc-400 animate-[bounce_1s_infinite_.2s]"></div>
      <div className="w-4 h-4 mr-2 rounded-full bg-gradient-to-r  from-zinc-300 to-zinc-400 animate-[bounce_1s_infinite_.3s]"></div>
    </div>
  );
}
