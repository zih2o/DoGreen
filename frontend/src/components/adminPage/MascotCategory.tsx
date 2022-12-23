import React, { useState } from 'react';
import useCategory from '../../hooks/useCategory';
import CategoryCards from './CategoryCards';
import CreatCard from './CreatCard';
import Card from '../Card';

export default function MascotCategory({ name }) {
  const [createCardHandle, setCreateCardHandle] = useState(false);
  const {
    catQuery: { data: categories },
  } = useCategory();
  return (
    <>
      <div className="flex flex-col p-6 col-start-4 col-span-full row-span-full bg-garden2 lg:col-start-3">
        <div className="flex flex-row justify-between p-4 item-bottom">
          <h2 className="flex text-4xl font-bold mb-5">{name} 관리</h2>
        </div>
        <div className="flex flex-wrap flex-row">
          <CreatCard />
        </div>
      </div>
      {/* <CategoryCards name="" />
      <div className="text-center m-3 p-3 w-full font-bold text-xl bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#292524] dark:border-[#292524]">
        <button className="" onClick={() => setCreateCardHandle(!createCardHandle)}>
          카드생성하기
        </button>
      </div> */}
    </>
  );
}
