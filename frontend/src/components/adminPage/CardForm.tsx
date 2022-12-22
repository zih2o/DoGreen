import React from 'react';

export default function CardForm() {
  return (
    <>
      <label htmlFor="countries" className="hidden">
        Select your country
      </label>
      <select
        id="countries"
        className="my-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option>동물선택</option>
        <option>뱅갈호랑이</option>
        <option>펭귄</option>
        <option>판다</option>
        <option>물범</option>
        <option>바다거북</option>
        <option>북극곰</option>
      </select>

      <label htmlFor="message" className="hidden">
        Your message
      </label>
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="카드의 내용을 적어주세요"
      ></textarea>
    </>
  );
}
