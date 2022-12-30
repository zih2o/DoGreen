import React, { useEffect, useState, useRef } from 'react';
import { api } from '../../util/api';
import { GrClose } from 'react-icons/gr';
import { useAdminCategoryStore } from '../../hooks/useAdminCategory';
import { useMutation } from '@tanstack/react-query';
import createUrl from '../../hooks/useImage';

export default function Modal({ modalType }) {
  const { closeAdminModal, currentCategoryCard, currentNewsCard } = useAdminCategoryStore();
  const topInputRef = useRef(null);
  const bottomInputRef = useRef(null);

  const [convertImgUrl, setConvertImgUrl] = useState('');
  const [priewImg, setPriewImg] = useState(
    modalType === 'Mascot' ? currentCategoryCard.mascotImage : currentNewsCard.imageList,
  );
  const patchCategory = useMutation((data) => api.patch(`/category/${currentCategoryCard._id}`, data));
  const patchNews = useMutation((data) => api.patch(`/post/${currentNewsCard._id}`, data));

  const {
    mutate: imgUrlMutation,
    data: imgUrlData,
    isError: imgUrlError,
    isSuccess: imgSuccess,
    error: imgError,
  } = createUrl();

  useEffect(() => {
    setConvertImgUrl(imgUrlData);
  }, [imgUrlData]);

  const setConvertImage = async (imgUrl: FileList) => {
    if (imgUrl && imgUrl.length > 0) {
      const file = imgUrl?.[0];
      setPriewImg(URL.createObjectURL(file));
      imgUrlMutation(file);
    }
  };

  const handleSubmitCategory = (event) => {
    setConvertImgUrl(imgUrlData);
    const formData = {
      mascotName: topInputRef.current.value,
      categoryName: bottomInputRef.current.value,
      mascotImage: convertImgUrl,
    };
    if (confirm(`${formData.mascotName}으로 수정하시겠습니까?`)) {
      patchCategory.mutate(formData);
      window.location.replace('/admin/category');
    } else {
      event.preventDefault();
    }
  };

  const handleSubmitNews = (event) => {
    const formData = {
      category: '',
      content: bottomInputRef.current.value,
      imageList: [],
    };
    if (confirm(`${topInputRef} 뉴스를 수정하시겠습니까?`)) {
      patchNews.mutate(formData);
      window.location.replace('/admin/news');
    } else {
      event.preventDefault();
    }
  };
  return (
    <>
      <div
        id="modal"
        aria-hidden="true"
        className="flex justify-center fixed z-50 mx-auto inset-auto w-full p-4 md:h-full"
      >
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex flex-col px-6 py-6 lg:px-8">
              <div className="flex">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">수정하기</h3>
                <button
                  type="button"
                  onClick={() => closeAdminModal()}
                  className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="authentication-modal"
                >
                  <GrClose className="w-5 h-5" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {modalType === 'Mascot' ? (
                <form onSubmit={handleSubmitCategory} className="space-y-6" action="#">
                  <div className="flex flex-col justify-center items-center">
                    <label className="w-[40%]" htmlFor="categoryImg">
                      <img className="cursor-pointer" alt="categoryImage" src={priewImg} />
                    </label>
                    <input
                      id="categoryImg"
                      type="file"
                      onChange={(e) => setConvertImage(e.target.files)}
                      placeholder="마스코트 이미지를 넣어주세요"
                      required
                      className="w-[70%] cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mascotName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Mascot Name
                    </label>
                    <input
                      type="text"
                      name="mascotName"
                      id="mascotName"
                      ref={topInputRef}
                      defaultValue={currentCategoryCard.mascotName}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="categoryName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Category Name
                    </label>
                    <input
                      type="text"
                      name="categoryName"
                      id="categoryName"
                      ref={bottomInputRef}
                      defaultValue={currentCategoryCard.categoryName}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSubmitNews} className="space-y-6" action="#">
                  <div className="flex flex-col justify-center items-center">
                    <label className="w-[40%]" htmlFor="categoryImg">
                      <img className="cursor-pointer" alt="categoryImage" src={priewImg} />
                    </label>
                    <input
                      id="categoryImg"
                      type="file"
                      onChange={(e) => setConvertImage(e.target.files)}
                      placeholder="마스코트 이미지를 넣어주세요"
                      required
                      className="w-[70%] cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <label className="w-[40%]" htmlFor="categoryImg">
                      <img className="cursor-pointer" alt="categoryImage" src={priewImg} />
                    </label>
                    <input
                      id="categoryImg"
                      type="file"
                      onChange={(e) => setConvertImage(e.target.files)}
                      placeholder="마스코트 이미지를 넣어주세요"
                      required
                      className="w-[70%] cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="categoryName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Category Name
                    </label>
                    <input
                      type="text"
                      name="categoryName"
                      id="categoryName"
                      ref={topInputRef}
                      defaultValue={currentNewsCard.category}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Content
                    </label>
                    <textarea
                      type="text"
                      name="content"
                      id="content"
                      rows={4}
                      ref={bottomInputRef}
                      defaultValue={currentNewsCard.content}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        id="modalBackground"
        role="presentation"
        onClick={() => closeAdminModal()}
        className="fixed bg-gray-500/70 inset-auto w-full p-4 overflow-y-auto h-full"
      />
    </>
  );
}
