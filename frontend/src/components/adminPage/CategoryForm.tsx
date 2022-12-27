import React, { useState } from 'react';

export default function CategoryForm() {
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
      <input placeholder="동물이름을 적어주세요" required className="my-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
      <input placeholder="카테고리 이름을 적어주세요" required className="my-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
      <button type="submit" className="p-2.5 rounded-md justify-center border-2 border-garden4 hover:bg-garden4 hover:text-white" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
