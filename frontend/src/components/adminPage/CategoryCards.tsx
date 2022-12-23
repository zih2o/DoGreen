import React from 'react';
import Card from '../Card';
import CreatCard from './CreatCard';
import useCategory from '../../hooks/useCategory';

export default function CategoryCards({ name }) {
  return (
    <div className="flex flex-col p-6 col-start-4 col-span-full row-span-full bg-garden2 lg:col-start-3">
      <div className="flex flex-row justify-between p-4 item-bottom">
        <h2 className="flex text-4xl font-bold mb-5">{name} 카테고리</h2>
      </div>
      <div className="flex flex-wrap flex-row">
        <CreatCard />
      </div>
    </div>
  );
}
