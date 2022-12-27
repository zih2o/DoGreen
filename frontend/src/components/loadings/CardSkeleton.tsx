import React from 'react';
import { CardType } from '../common/theme';

export default function CardSkeleton() {
  return (
    <div className={CardType.layout}>
      <div className={CardType.imgWrapper}>
        <div className={CardType.img + ' bg-zinc-300 animate-pulse'} />
      </div>
      <div className=" h-1/3 p-5">
        <div className="w-40 h-6 mb-2 rounded-sm bg-zinc-300 animate-pulse" />
        <div className="w-40 h-6 mb-2 rounded-sm bg-zinc-300 animate-pulse" />
      </div>
    </div>
  );
}
