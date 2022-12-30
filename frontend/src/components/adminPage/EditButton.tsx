import React, { useEffect } from 'react';
import { api } from '../../util/api';
import { useMutation } from '@tanstack/react-query';
import { useAdminCategoryStore } from '../../hooks/useAdminCategory';

export default function EditButton({ id, cardtype, setEditBtnHandler }) {
  const { toggleAdminModal, setCurrentCategoryCard, setCurrentNewsCard } = useAdminCategoryStore();
  useEffect(() => {
    const resData = async () =>
      await api(`/${cardtype}/${id}`)
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          cardtype === 'category'
            ? setCurrentCategoryCard(data._id, data.mascotName, data.categoryName, data.mascotImage)
            : setCurrentNewsCard(data._id, data.category, data.content, data.imageList);
        });
    resData();
  }, []);

  const clickEditBtn = async () => {
    toggleAdminModal();
    setEditBtnHandler(false);
  };

  const deleteMutation = useMutation(async() => api.delete(`/${cardtype}/${id}`));
  const deleteHandler = (event) => {
    setEditBtnHandler(false);
    const title = cardtype === 'category' ? '카테고리' : '카드';
    console.log(cardtype, id);
    if (confirm(`해당 ${title}를 삭제하시겠습니까?`)) {
      
      deleteMutation.mutate();
      title === '카테고리' ? window.location.replace('/admin/mascot') : window.location.replace('/admin/news')
    } else {
      event.preventDefault();
    }
  };
  return (
    <div id="dropdown" className="absolute mt-8 w-36 text-base bg-white divide-gray-100 rounded shadow">
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
