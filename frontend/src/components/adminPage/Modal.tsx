import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { useAdminCategoryStore } from '../../hooks/useAdminCategory';
import useCategory from '../../hooks/useCategory';

export default function Modal() {
  const { closeAdminModal, currentCategoryCard } = useAdminCategoryStore();
  console.log(currentCategoryCard);
  
  return (
    <>
      <div id="authentication-modal" aria-hidden="true" className="fixed z-50 mx-auto inset-auto w-full p-4 md:h-full">
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
              <form className="space-y-6" action="#">
                <div>
                  <label htmlFor="mascotName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Mascot Name
                  </label>
                  <input
                    type="text"
                    name="mascotName"
                    id="mascotName"
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
            </div>
          </div>
        </div>
      </div>
      <div id="modalBackground" className="fixed bg-gray-500/70 inset-auto w-full p-4 overflow-y-auto h-full" />
    </>
  );
}
