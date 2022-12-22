import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHamburgerStore } from '../../hooks/store';

export default function LoginForm() {
  const { hamburgerOpen, toggleHamburger } = useHamburgerStore();
  const [handleModal, setHandleModal] = useState<boolean>(false);
  const closeModal = () => {
    setHandleModal(!handleModal);
  };

  return (
    <>
      <button
        className="block mb-4 text-garden2 bg-garden1 hover:bg-garden2 hover:text-garden1 text-lg font-bold rounded-lg w-full px-5 py-2 text-center"
        onClick={toggleHamburger}
      >
        로그인
      </button>
      <Link
        to="/register"
        className="block mb-4 text-garden2 hover:underline text-lg font-bold w-full px-5 py-2 text-center"
        onClick={toggleHamburger}
      >
        회원가입
      </Link>
    </>
  );
}
