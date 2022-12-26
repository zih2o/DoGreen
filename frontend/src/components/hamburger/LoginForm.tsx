import React from 'react';
import { Link } from 'react-router-dom';
import { useDrawerStore } from '../../hooks/useDrawer';
import LoginModalPage from '../../pages/LoginModalPage';
export default function LoginForm() {
  const { drawerOpen, toggleDrawer } = useDrawerStore();

  return (
    <>
      <button
        className="block mb-4 text-garden2 bg-navbarBG hover:bg-garden1  border-2 border-garden1 text-lg font-bold rounded-lg w-full px-5 py-2 text-center dark:border-forest3 dark:text-forest3 dark:hover:bg-forest3 dark:hover:text-forest4"
        onClick={toggleDrawer}
      >
        로그인
      </button>
      <Link
        to="/register"
        className="block mb-4 text-garden2 hover:underline text-lg font-bold w-full px-5 py-2 text-center dark:text-forest3"
        onClick={toggleDrawer}
      >
        회원가입
      </Link>
    </>
  );
}
