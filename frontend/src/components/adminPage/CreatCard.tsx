import React, { useState } from 'react';
import axios from 'axios';
import CardForm from './CardForm';

export default function CreatCard({ name }) {
  const [createCardHandle, setCreateCardHandle] = useState(false);
  return (
    <button
      className=" m-3 p-3 w-full font-bold text-xl bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#292524] dark:border-[#292524]"
      onClick={() => setCreateCardHandle(!createCardHandle)}
    >
      {name} 카드생성하기
      {createCardHandle && <CardForm />}
    </button>
  );
}
