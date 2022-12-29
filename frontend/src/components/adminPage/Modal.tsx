import React, { useEffect, useState, useRef } from 'react';
import { api } from '../../util/api';
import { GrClose } from 'react-icons/gr';
import { useAdminCategoryStore } from '../../hooks/useAdminCategory';
import { useMutation } from '@tanstack/react-query';

export default function Modal({ modalType }) {
  const { closeAdminModal, currentCategoryCard, currentNewsCard } = useAdminCategoryStore();
  const topInputRef = useRef(null);
  const bottomInputRef = useRef(null);

  const patchCategory = useMutation((data) => api.patch(`/category/${currentCategoryCard._id}`, data));
  const patchNews = useMutation((data) => api.patch(`/post/${currentNewsCard._id}`, data));

  const handleSubmitCategory = (event) => {
    const formData = {
      mascotName: topInputRef.current.value,
      categoryName: bottomInputRef.current.value,
    };
    confirm(`${formData.mascotName}으로 수정하시겠습니까?`) ? patchCategory.mutate(formData) : event.preventDefault();
  };

  const handleSubmitNews = (event) => {
    const formData = {
      content: bottomInputRef.current.value,
    };
    confirm(`${topInputRef} 뉴스를 수정하시겠습니까?`) ? patchNews.mutate(formData) : event.preventDefault();
  };

  const [inputType, setInputType] = useState({});
  useEffect(() => {
    modalType === 'Mascot'
      ? setInputType({ topInput: 'Mascot Name', bottomInput: 'Category Name' })
      : setInputType({ topInput: 'Category Name', bottomInput: 'Content' });
  }, []);
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
                  <div>
                    <label
                      htmlFor="mascotName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {inputType.topInput}
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
                      {inputType.bottomInput}
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
                  <div>
                    <label
                      htmlFor="categoryName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {inputType.topInput}
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
                      {inputType.bottomInput}
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
