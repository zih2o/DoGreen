import React from 'react';
import { api } from '../../util/api';
import { useMutation } from '@tanstack/react-query';
import { useAdminCategoryStore } from '../../hooks/useAdminCategory';
import useCategory from '../../hooks/useCategory';

export default function EditButton({ id }) {
  const { toggleAdminModal, currentCategoryCard } = useAdminCategoryStore();
  const {
    catQuery: { data: categories },
  } = useCategory();
  const clickEditBtn = () => {
    toggleAdminModal();
    const currentCard = categories.filter((category) => category._id === id);
    useAdminCategoryStore.setState({
      currentCategoryCard: {
        mascotName: "아니이렇게 문자열은되는데",
        categoryName: currentCard.categoryName,
      },
    });
    console.log(currentCategoryCard);
  };

  const deleteMutation = useMutation(() => api.delete(`/category${id}`));
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
