import React, { useState } from 'react';
import useCategory from '../../hooks/useCategory';

export default function NewsCardForm() {
  const {
    catQuery: { data: categories },
  } = useCategory();

  const [formValue, setformValue] = useState({
    category: '',
    content: '',
  });
  const handleSubmit = (event) => {
    // we will fill this in the coming paragraph
  };

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        id="countries"
        className="my-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      >
        {categories?.map((category) => (
          <option key={category.categoryName}>{category.categoryName}</option>
        ))}
      </select>

      <label htmlFor="message" className="hidden">
        Your message
      </label>
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 my-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="카드의 내용을 적어주세요"
        required
      />
      <button type="submit" className="p-2.5 rounded-md justify-center border-2 border-garden4">
        Submit
      </button>
    </form>
  );
}
