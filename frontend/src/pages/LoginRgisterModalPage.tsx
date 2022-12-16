import React, { useState, useCallback } from 'react';
// import styled from "styled-components";
import Modal from '../components/Modal';
import Login from '../components/Login';
import Register from '../components/Register';

function LoginPage() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [isStatus, setIsStatus] = useState('');

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <main className="w-full h-screen flex flex-col items-center">
      <h3 className="text-center">버튼이 있는 곳에 연결할 것</h3>
      {isOpenModal && (
        <Modal onClickToggleModal={onClickToggleModal}>
          {isStatus === 'Login' ? <Login /> : ''}
          {isStatus === 'Register' ? <Register /> : ''}
        </Modal>
      )}
      <button
        className="w-[160px] h-[48px] bg-[#65D26D] text-white	text-sm font-normal rounded border-none cursor-pointer"
        onClick={() => {
          setIsStatus('Login');
          onClickToggleModal();
        }}
      >
        로그인
      </button>
      <button
        className="w-[160px] h-[48px] bg-[#65D26D] text-white	text-sm font-normal rounded border-none cursor-pointer"
        onClick={() => {
          setIsStatus('Register');
          onClickToggleModal();
        }}
      >
        회원가입
      </button>
    </main>
  );
}

export default LoginPage;
