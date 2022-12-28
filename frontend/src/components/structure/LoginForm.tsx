import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDrawerStore } from '../../hooks/useDrawer';
import { Login } from '../auth/Login';
import Modal from '../common/Modal';
import { AiOutlineClose } from 'react-icons/ai';

export default function LoginForm() {
  const { toggleDrawer } = useDrawerStore();
  const [handleLoginModal, setHandleLoginModal] = useState<boolean>(false);
  function onClose() {
    setHandleLoginModal(!handleLoginModal);
  }
  return (
    <>
      <button
        className={className.loginButton}
        onClick={() => {
          onClose();
        }}
      >
        로그인
      </button>

      <Link to="/register" className={className.registerButton} onClick={toggleDrawer}>
        회원가입
      </Link>
      {handleLoginModal && (
        <Modal onClose={onClose}>
          <button type="button" className={className.closeButton} onClick={onClose}>
            <AiOutlineClose size="24" color="#5C5656" />
          </button>
          <Login />
        </Modal>
      )}
    </>
  );
}
const className = {
  loginButton:
    'block mb-4 text-garden2 bg-navbarBG hover:bg-garden1  border-2 border-garden1 text-lg font-bold rounded-lg w-full px-5 py-2 text-center dark:border-forest3 dark:text-forest3 dark:hover:bg-forest3 dark:hover:text-forest4',
  registerButton:
    'block mb-4 text-garden2 hover:underline text-lg font-bold w-full px-5 py-2 text-center dark:text-forest3',
  closeButton: 'self-center absolute top-2 right-2 float-right p-2 rounded-xl active:bg-white active:opacity-60',
};
