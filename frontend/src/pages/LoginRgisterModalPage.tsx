import React, { useState, useCallback } from 'react';
// import styled from "styled-components";
import Modal from '../components/Modal';
import { FormLogin } from '../components/FormLogin';

function LoginModalPage() {
  const [handleModal, setHandleModal] = useState<boolean>(false);

  const onClose = useCallback(() => {
    setHandleModal(!handleModal);
  }, [handleModal]);
  const handleBybutton = () => {
    setHandleModal(!handleModal);
  };

  return (
    <main className="w-full h-screen flex flex-col items-center p-[300px]">
      <h3 className="text-center">버튼이 있는 곳에 연결할 것</h3>
      {handleModal && (
        <Modal onClose={onClose} handleBybutton={handleBybutton}>
          <FormLogin />
        </Modal>
      )}
      <button
        className="w-[160px] h-[48px] bg-[#65D26D] text-white	text-sm font-normal rounded border-none cursor-pointer"
        onClick={() => {
          onClose();
        }}
      >
        로그인
      </button>
    </main>
  );
}

export default LoginModalPage;
