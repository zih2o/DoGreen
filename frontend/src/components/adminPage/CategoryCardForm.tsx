import React, { useState } from 'react';
import axios from 'axios';
export default function CategoryCardForm() {
  const [formValue, setFormValue] = useState({
    category: '',
    content: '',
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
  }

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="category"
        type="text"
        value={formValue.category}
        placeholder="mascot name을 입력해주세요"
        className="my-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={handleChange}
      />
      <input
        name="content"
        type="text"
        value={formValue.content}
        placeholder="content category를 입력해주세요"
        className="my-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <button type="submit" className="p-2.5 rounded-md justify-center border-2 border-garden4">
        Submit
      </button>
    </form>
  );
}
