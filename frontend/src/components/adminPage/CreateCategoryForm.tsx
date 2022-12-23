import React, { useState } from 'react';

export default function CreateCategoryForm() {
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
      <input placeholder="동물이름을 적어주세요" required />
      <input placeholder="카테고리 이름을 적어주세요" required />
      <button type="submit" className="p-2.5 rounded-md justify-center border-2 border-garden4" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
