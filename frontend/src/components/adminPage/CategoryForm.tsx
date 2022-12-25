import React, { useRef } from 'react';
import { api } from '../../util/api';
import { useMutation } from '@tanstack/react-query';

export default function CategoryForm() {
  const mascotNameRef = useRef();
  const categoryRef = useRef();
  const mutation = useMutation((data) => api.post('/category/create', data));

  const handleSubmit = (event) => {
    const formData = {
      mascotName: mascotNameRef.current.value,
      categoryName: categoryRef.current.value,
    };
    confirm(`${formData.mascotName} 카테고리를 저장하시겠습니까?`) ? mutation.mutate(formData) : event.preventDefault();
  };

  return (
    <form className="px-7" onSubmit={handleSubmit}>
      <label className="flex text-sm" htmlFor="categoryMascotNameInput">
        Mascot Name
      </label>
      <input
        ref={mascotNameRef}
        id="categoryMascotNameInput"
        type="text"
        placeholder="동물이름을 적어주세요"
        required
        className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <label className="flex text-sm" htmlFor="categoryNameInput">
        Category Name
      </label>
      <input
        ref={categoryRef}
        id="categoryNameInput"
        type="text"
        placeholder="카테고리 이름을 적어주세요"
        required
        className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <button
        type="submit"
        className="p-2.5 rounded-md justify-center border-2 border-garden4 hover:bg-garden4 hover:text-white"
      >
        Submit
      </button>
    </form>
  );
}
