import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Categorys from './wastebasket/X_Category2';
import LoginForm from './hamburger/LoginForm';
import { useHamburgerStore } from '../hooks/useHamburger';

import Loading from './loadings/Loading';

import useUserData from '../hooks/useUserData';
import { AuthStore } from '../hooks/useAuth';

function Hamburger() {
  const { hamburgerOpen, toggleHamburger } = useHamburgerStore();
  const [handleModal, setHandleModal] = useState(hamburgerOpen);
  const closeModal = () => {
    toggleHamburger();
    setHandleModal(!handleModal);
  };
  const accessToken = AuthStore((state) => state.token);
  const {
    userQuery: { data: userData },
  } = useUserData(accessToken);
  const isLogined = window.sessionStorage.getItem('token');
  const className = {
    topDiv:
      '-z-10 p-6 fixed top-[12.3%] bottom-[100px] right-[0%] w-[70%] h-full items-center place-content-between bg-navbarBG text-right border-b-2 border-garden4 md:w-[30%]',
  };
  return (
    <>
      <div className={className.topDiv}>
        {isLogined ? (
          <>
            <div className="flex flex-col mx-auto items-center">
              <div className="leading-10 text-garden2 text-3xl">
                {userData ? (`${userData.role} ${userData.username}님`) : <Loading/>}
              </div>
              <span className=" text-garden2 text-xl">지금까지 펭귄 300마리를 구하셨어요!</span>
            </div>
            <Categorys name="nav"/>
          </>
        ) : (
          <LoginForm />
        )}
      </div>
      {handleModal && (
        <button className="fixed -z-10 top-[12.3%] left-[0%] w-[30%] h-full bg-navBg md:w-[70%]" onClick={closeModal} />
      )}
    </>
  );
}
export default Hamburger;
