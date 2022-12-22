import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Categorys from './adminPage/Category';
import LoginForm from './hamburger/LoginForm';
import { useHamburgerStore } from './store/store'

function Hamburger(props) {
  const { hamburgerOpen, toggleHamburger } = useHamburgerStore();
  const [handleModal, setHandleModal] = useState(hamburgerOpen);
  const closeModal = () => {
    toggleHamburger();
    setHandleModal(!handleModal);
  };
  const isLogined = window.sessionStorage.getItem('token');
  // const initialLoginBtn = isLogined ? '로그아웃' : '로그인';
  // const [loginStatus, setLoginStatus] = useState<string>(initialLoginBtn);
  // const logined = () => {
  //   if (isLogined === null) {
  //     setLoginStatus('로그아웃');
  //     setHandleModal(!handleModal); //로그인 창 열기
  //   } else {
  //     setLoginStatus('로그인');
  //     window.sessionStorage.clear();
  //   }
  // };
  // useEffect(() => {
  //   //제일처음할것
  //   //localstor
  // })
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
                {props.rank} {props.name}님
              </div>
              <span className=" text-garden2 text-xl">지금까지 펭귄 300마리를 구하셨어요!</span>
            </div>
            <Categorys name="nav" />
          </>
        ) : (
          <LoginForm />
        )}
      </div>
      {handleModal && <button className="fixed -z-10 top-[12.3%] left-[0%] w-[30%] h-full bg-navBg md:w-[70%]" onClick={closeModal} />}
    </>
  );
}
export default Hamburger;
