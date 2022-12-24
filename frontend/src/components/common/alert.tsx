import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal';

interface IAlertModal {
  title: string;
  message: string;
}
export const AlertModal = (props: IAlertModal) => {
  const [handleModal, setHandleModal] = useState<boolean>(true);
  const navigate = useNavigate();
  const onClose = () => {
    setHandleModal(!handleModal);
  };
  const pageMove = () => {
    navigate('/login');
  };
  console.log('모달 실행', handleModal);
  return (
    <>
      {handleModal && (
        <Modal onClose={onClose}>
          <div className="relative w-full h-full max-w-xl w-xl md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{props.title}</h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="defaultModal"
                ></button>
              </div>

              <div className="py-12 px-[80px] space-y-6">
                <p className="text-xl leading-relaxed text-gray-500 dark:text-gray-400">{props.message}</p>
              </div>

              <div className="py-5 flex justify-end border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="mr-6 text-gray-500 bg-white hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-gray-300 rounded-lg border border-gray-200 text-md font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  onClick={() => pageMove()}
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
