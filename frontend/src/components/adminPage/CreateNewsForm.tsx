import React, { useState, useRef } from 'react';
import { api } from '../../util/api';
import { useMutation } from '@tanstack/react-query';
import useCategory from '../../hooks/useCategory';
import createUrl from '../../hooks/useImage';

export default function CreateNewsForm() {
  const mascotNameRef = useRef(null);
  const contentRef = useRef(null);
  const newsImgRef = useRef(null);
  const mutation = useMutation((data) => api.post('/post/create', data));

  const {
    catQuery: { data: categories },
  } = useCategory();

  const handleSubmit = (event) => {
    if (convertImgUrl === '')
      setConvertImgUrl(
        'https://user-images.githubusercontent.com/91370858/208048148-47028f2f-d283-4ab1-a43e-3c073543161e.png',
      );
    const formData = {
      mascotName: mascotNameRef.current.value,
      categoryName: categoryRef.current.value,
      mascotImage: convertImgUrl,
    };
    console.log(formData);
    confirm(`${formData.category} 카드를 저장하시겠습니까?`) ? mutation.mutate(formData) : event.preventDefault();
  };
  const [priewImg, setPriewImg] = useState(
    'https://user-images.githubusercontent.com/91370858/208048148-47028f2f-d283-4ab1-a43e-3c073543161e.png',
  );
  const {
    mutate: imgUrlMutation,
    data: imgUrlData,
    isError: imgUrlError,
    isSuccess: imgSuccess,
    error: imgError,
  } = createUrl();
  const setConvertImage = (imgUrl: FileList) => {
    if (imgUrl && imgUrl.length > 0) {
      const file = imgUrl?.[0];
      setPriewImg(URL.createObjectURL(file));
      imgUrlMutation(file);
      imgSuccess && setConvertImgUrl(imgUrlData);
    }
  };

  return (
    <form className="flex flex-col px-7 py-3" onSubmit={handleSubmit}>
      <div className="flex items-center flex-row flex-wrap justify-around">
        <div className='w-[30%]'>
          <label htmlFor="categoryImg">
            <img className="cursor-pointer" alt="categoryImage" src={priewImg} />
          </label>
          <input
            id="categoryImg"
            onChange={(event) => {
              setConvertImage(event.target.files);
            }}
            type="file"
            placeholder="마스코트 이미지를 넣어주세요"
            className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
          />
        </div>
        <div className='w-[30%]'>
          <label htmlFor="categoryImg">
            <img className="cursor-pointer" alt="categoryImage" src={priewImg} />
          </label>
          <input
            id="categoryImg"
            onChange={(event) => {
              setConvertImage(event.target.files);
            }}
            type="file"
            placeholder="마스코트 이미지를 넣어주세요"
            className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
          />
        </div>
      </div>
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
        rows={4}
        className="block p-2.5 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="카드의 내용을 적어주세요"
        required
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
