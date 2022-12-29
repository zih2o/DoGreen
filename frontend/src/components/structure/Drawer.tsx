import React, { useState, useEffect } from 'react';
import DrawerList from './DrawerList';
import LoginForm from './LoginForm';
import { useDrawerStore } from '../../hooks/useDrawer';
import Loading from '../loadings/Loading';
import { useUserInfo } from '../../hooks/useUser';

function Drawer() {
  const { drawerOpen, toggleDrawer } = useDrawerStore();
  const { existUser, userInfo, getUserInfo } = useUserInfo();
  const [handleModal, setHandleModal] = useState(drawerOpen);
  const closeModal = () => {
    toggleDrawer();
    setHandleModal(!handleModal);
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  const className = {
    topDiv:
      ' p-6 top-[13.4%] bottom-[100px] right-[0%] w-[70%] h-[78.1%] items-center place-content-between bg-navbarBG text-right md:w-[30%]',
  };
  return (
    drawerOpen && (
      <div className="flex justify-end fixed w-full h-full l-0 ">
        <button className="flex w-full h-full bg-navBg" onClick={closeModal} />
        <div className="flex z-29 top-[13.4%] absolute flex-col w-[30%] h-[78.1%] bg-garden4 p-6">
          {existUser ? (
            <>
              <div className="flex flex-col mx-auto items-center ">
                <div className="leading-10 text-garden2 font-bold text-2xl sm:text-3xl dark:text-gray-200">
                  {userInfo && `${userInfo.role} ${userInfo.username}님`}
                </div>
                <span className=" py-4 text-garden2 text-center text-lg sm:text-xl dark:text-gray-200">
                  지금까지 펭귄 300마리를<br></br> 구하셨어요!
                </span>
              </div>
              <DrawerList name={userInfo.role.toLowerCase()} handleModal={closeModal} />
            </>
          ) : (
            <LoginForm />
          )}
        </div>
      </div>
    )
  );
}
export default Drawer;
