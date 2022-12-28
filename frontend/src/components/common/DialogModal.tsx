import React from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

export interface IModalType {
  title: string;
  message: string;
  type: string;
  navigate?: string;
  refresh?: string;
  removeBg?: boolean;
  setConfirm?: (data: boolean) => void;
  onClose: () => void;
}
export const DialogModal = ({ title, message, type, navigate, refresh, setConfirm, onClose, removeBg }: IModalType) => {
  const nav = useNavigate();
  const handleModalClose = () => {
    !refresh ? onClose() : window.location.replace(refresh);
    navigate && nav(navigate);
  };
  const handleModalConfirm = () => {
    !refresh ? onClose() : window.location.replace(refresh);
    setConfirm && setConfirm(true);
  };
  const handleModalCancle = () => {
    onClose();
    setConfirm && setConfirm(false);
  };
  console.log(refresh);
  return (
    <Modal onClose={type === 'confirm' ? handleModalConfirm : handleModalClose} removeBg={removeBg}>
      <div className="relative w-full h-full max-w-xl w-xl md:h-auto ">
        <div className="relative max-[480px]:w-[370px] bg-white rounded-lg shadow dark:bg-gray-700 ">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600 ">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            ></button>
          </div>

          <div className="py-12 px-[80px] max-[480px]:px-2 max-[480px]:px-[30px] space-y-6  ">
            <p className="text-xl leading-relaxed text-center text-gray-500 max-[480px]:text-[17px] dark:text-gray-400">
              {message}
            </p>
          </div>

          <div className="py-5 flex justify-end border-t border-gray-200 rounded-b dark:border-gray-600">
            {type === 'alert' && (
              <button
                type="button"
                className="mr-4 text-gray-500 bg-white hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-gray-300 rounded-lg border border-gray-200 text-md font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={handleModalClose}
              >
                확인
              </button>
            )}
            {type === 'confirm' && (
              <>
                <button
                  type="button"
                  className="mr-4 text-gray-500 bg-white hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-gray-300 rounded-lg border border-gray-200 text-md font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  onClick={handleModalConfirm}
                >
                  확인
                </button>
                <button
                  data-modal-toggle="popup-modal"
                  type="button"
                  className="mr-4 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-lg font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  onClick={handleModalCancle}
                >
                  취소
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};
