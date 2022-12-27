import React, { useState, useEffect } from 'react';
import { api } from '../../util/api';
import { useMutation } from '@tanstack/react-query';
import { useAdminCategoryStore } from '../../hooks/useAdminCategory';

export default function EditButton({ id, cardtype }) {
  const { toggleAdminModal, currentCategoryCard } = useAdminCategoryStore();
  const [currentData, setCurrentData] = useState();
  useEffect(() => {
    const { data } = async () => await api(`/${cardtype}/${id}`);
    setCurrentData(data);
    resData();
    console.log(resData());
  }, []);
  const clickEditBtn = async () => {
    toggleAdminModal();
  };

  const pathPost = { content: '' };
  const pathCategory = { categoryName: '괔캌뫀맄', mascotName: '홀리몰리ㅣㅣㅣ' };

  const patchMutation = useMutation(() => api.patch(`/${cardtype}/${id}`, ''));
  const patchHandler = (event) => {
    confirm('해당 카테고리를 삭제하시겠습니까?') ? patchMutation.mutate() : event.preventDefault();
  };

  const deleteMutation = useMutation(() => api.delete(`/${cardtype}/${id}`));
  const deleteHandler = (event) => {
    confirm('해당 카테고리를 삭제하시겠습니까?') ? deleteMutation.mutate() : event.preventDefault();
  };
  return (
    <div id="dropdown" className="w-36 text-base bg-white divide-gray-100 rounded shadow">
      <ul className="py-1" aria-labelledby="dropdownButton">
        <button className="container text-start text-gray-700 block px-4 py-2 hover:bg-gray-100" onClick={clickEditBtn}>
          <li>Edit</li>
        </button>
        <button className="container text-start text-red-500 block px-4 py-2 hover:bg-gray-100" onClick={deleteHandler}>
          <li>Delete</li>
        </button>
      </ul>
    </div>
  );
}
