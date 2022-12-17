import React, { useState, useCallback } from 'react';
// import styled from "styled-components";
import Modal from '../components/Modal';
import Login from '../components/Login';
import Register from '../components/Register';

function LoginRgisterModalPage() {
  const [handleModal, setHandleModal] = useState<boolean>(false);
  const [status, setStatus] = useState<'login' | 'register' | null>(null);

  const onClose = useCallback(() => {
    setHandleModal(!handleModal);
  }, [handleModal]);
  const handleBybutton = () => {
    setHandleModal(!handleModal);
  };

  return (
    <main className="w-full h-screen flex flex-col items-center">
      <h3 className="text-center">버튼이 있는 곳에 연결할 것</h3>
      {handleModal && (
        <Modal onClose={onClose} handleBybutton={handleBybutton}>
          {status === 'login' ? <Login /> : ''}
          {status === 'register' ? <Register /> : ''}
        </Modal>
      )}
      <button
        className="w-[160px] h-[48px] bg-[#65D26D] text-white	text-sm font-normal rounded border-none cursor-pointer"
        onClick={() => {
          setStatus('login');
          onClose();
        }}
      >
        로그인
      </button>
      <button
        className="w-[160px] h-[48px] bg-[#65D26D] text-white	text-sm font-normal rounded border-none cursor-pointer"
        onClick={() => {
          setStatus('register');
          onClose();
        }}
      >
        회원가입
      </button>
    </main>
  );
}

export default LoginRgisterModalPage;
