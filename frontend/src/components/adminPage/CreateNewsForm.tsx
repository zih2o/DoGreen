import React, { useRef } from 'react';
import { api } from '../../util/api';
import { useMutation } from '@tanstack/react-query';
import useCategory from '../../hooks/useCategory';

export default function CreateNewsForm() {
  const mascotNameRef = useRef();
  const contentRef = useRef();
  const mutation = useMutation((data) => api.post('/post/create', data));

  const {
    catQuery: { data: categories },
  } = useCategory();

  const handleSubmit = (event) => {
    const formData = {
      category: mascotNameRef.current.value,
      content: contentRef.current.value,
    };
    confirm(`${formData.category} 카드를 저장하시겠습니까?`) ? mutation.mutate(formData) : event.preventDefault();
  };

  return (
    <form className="px-7" onSubmit={handleSubmit}>
      <label className="flex text-sm" htmlFor="mascotNameInput">
        Mascot name
      </label>
      <select
        id="mascotNameInput"
        className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
        ref={mascotNameRef}
      >
        {categories?.map((category) => (
          <option key={category.categoryName}>{category.categoryName}</option>
        ))}
      </select>
      <label className="flex text-sm" htmlFor="newsContentInput">
        News Content
      </label>
      <textarea
        id="newsContentInput"
        ref={contentRef}
        rows="4"
        className="block p-2.5 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="카드의 내용을 적어주세요"
        required
      />
      <button type="submit" className="p-2.5 rounded-md justify-center border-2 border-garden4">
        Submit
      </button>
    </form>
  );
}
