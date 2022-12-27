import React from 'react';
import { IComment } from '../../hooks/useComment';

export default function Comment(props: IComment) {
  return (
    <div className="flex mx-4 my-4">
      <img src={props.userId.imgUrl} alt="엘리스" className="w-7 h-7 rounded-full bg-garden4" />
      <div className="flex flex-col ml-2">
        <span className="text-sm font-semibold text-gray-400">{props.userId.username}</span>
        <span className="text-md text-gray-400">{props.comment}</span>
      </div>
    </div>
  );
}
