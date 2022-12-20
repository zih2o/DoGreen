import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Categorys from './adminPage/Categorys';
import LoginForm from './hamburger/LoginForm';
function Hamburger(props) {
  const [onUser, setOnUser] = useState(false);
  return (
    <>
      <div className="p-6 fixed top-[12.3%] bottom-[100px] right-[0%] w-[70%] h-full items-center place-content-between bg-garden4 text-right border-b-2 border-garden4 md:w-[30%]">
        {onUser ? (
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
          <LoginForm/>
        )}
      </div>
      <div className="fixed top-[12.3%] left-[0%] w-[30%] h-full bg-garden4 bg-opacity-50 md:w-[70%]" />
    </>
  );
}
export default Hamburger;
