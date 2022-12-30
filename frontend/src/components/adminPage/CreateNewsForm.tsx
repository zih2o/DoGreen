import React, { useState, useRef, useEffect } from 'react';
import { api } from '../../util/api';
import { useMutation } from '@tanstack/react-query';
import createUrl from '../../hooks/useImage';
import useCategory from '../../hooks/useCategory';

export default function CreateNewsForm() {
  const mascotNameRef = useRef(null);
  const contentRef = useRef(null);
  const [convertImgUrl, setConvertImgUrl] = useState([]);
  const {
    catQuery: { data: categories },
  } = useCategory();

  const mutation = useMutation((data) => api.post('/post/create', data));

  const handleSubmit = (event) => {
    const formData = {
      category: mascotNameRef.current.value,
      content: contentRef.current.value,
      imageList: convertImgUrl,
    };

    confirm(`${formData.category} 카드를 저장하시겠습니까?`) ? mutation.mutate(formData) : event.preventDefault();
  };
  const [priewImg, setPriewImg] = useState([]);
  const {
    mutate: imgUrlMutation,
    data: imgUrlData,
    isError: imgUrlError,
    isSuccess: imgSuccess,
    error: imgError,
  } = createUrl();

  useEffect(() => {
    setConvertImgUrl([imgUrlData]);
  }, [imgUrlData]);

  const setConvertImage = async (imgUrl: FileList) => {
    if (imgUrl && imgUrl.length > 0) {
      const file = imgUrl?.[0];
      setPriewImg(URL.createObjectURL(file));
      imgUrlMutation(file);
    }
  };

  return (
    <form className="flex px-7 py-3 justify-center align-middle" onSubmit={handleSubmit}>
      <div className="flex items-center flex-row flex-wrap justify-around">
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {priewImg.length > 0 ? (
                <img className="flex w-10/12" src={priewImg} />
              ) : (
                <>
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </>
              )}
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              multiple
              onChange={(event) => {
                setConvertImage(event.target.files);
              }}
              placeholder="카드 이미지를 넣어주세요"
            />
          </label>
        </div>
      </div>
      <div className="flex-col w-full p-3">
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
          className="block p-2.5 mb-1 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="카드의 내용을 적어주세요"
          required
        />
        <button
          type="submit"
          className="p-2.5 rounded-md justify-center border-2 border-garden4 hover:bg-garden4 hover:text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
