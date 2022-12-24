import React, { useState } from 'react';
import Modal from '../../components/Modal';
import { AiOutlineClose } from 'react-icons/ai';

interface IAlertModal {
  title: string;
  message: string;
}
export const alertModal = (props: IAlertModal) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  return (
    <Modal
      onClose={() => {
        setIsModal(!isModal);
      }}
    >
      <div className="relative w-full h-full max-w-md md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="popup-modal"
            onClick={() => {
              false;
            }}
          >
            <AiOutlineClose size="24" />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-16 py-8 text-center">
            <h3 className="mt-5 mb-8 text-xl font-bold text-gray-500 dark:text-gray-400">{props.title}</h3>
            <h3 className="mt-5 mb-8 text-xl font-bold text-gray-500 dark:text-gray-400">{props.message}</h3>

            <button
              data-modal-toggle="popup-modal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-lg font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              onClick={() => {
                false;
              }}
            >
              아니요
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
