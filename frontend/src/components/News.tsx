import React, { useEffect, useState, useCallback } from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import { ImBubble } from 'react-icons/im';
import Modal from './Modal';

export default function NewsCard() {
  const [clickHeart, setClickHeart] = useState<boolean>(false);
  const [clickComment, setClickComment] = useState<boolean>(false);

  return (
    <div className="flex w-full h-full justify-center py-6 bg-gardenBG-light">
      <div className="flex flex-col mr-4 items-center">
        <img className={'rounded-full w-12 h-12 shadow-xl'} src="/src/assets/penguin.jpeg" alt="펭귄" />
        <span className="font-semibold">펭귄</span>
      </div>
      <div className="flex flex-col w-10/12 shadow-2xl rounded-lg md:w-9/12 lg:w-8/12">
        <div className="w-full p-6 bg-slate-50  rounded-t-lg text-md sm:">펭귄이애오</div>
        <div className="flex justify-between bg-slate-400  px-6 py-2 rounded-b-lg bg-gradient-to-r from-zinc-50 to-garden4 items-center">
          <div className="flex">
            <BsFillHeartFill
              className={`${clickHeart ? 'text-red-400 mr-4 hover:cursor-pointer' : 'mr-4 hover:cursor-pointer'}`}
              onClick={() => setClickHeart(!clickHeart)}
            />
            <ImBubble className="mr-4 hover:cursor-pointer" onClick={() => setClickComment(!clickComment)} />
          </div>
          <span className=" text-slate-50 font-semibold text-sm">2022년 12월 16일 작성됨</span>
        </div>
      </div>
      {clickComment && (
        <Modal>
          <p>안녕하세요</p>
        </Modal>
      )}
    </div>
  );
}
