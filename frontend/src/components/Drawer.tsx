import React, { useState, useEffect } from 'react';
import DrawerList from './DrawerList';
import LoginForm from './hamburger/LoginForm';
import { useDrawerStore } from '../hooks/useDrawer';

import Loading from './loadings/Loading';
import { useUserInfo } from '../hooks/store';

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
      '-z-10 p-6 fixed top-[13.4%] bottom-[100px] right-[0%] w-[70%] h-[78.1%] items-center place-content-between bg-navbarBG text-right md:w-[30%]',
  };
  return (
    <>
      <div className={className.topDiv}>
        {existUser ? (
          <>
            <div className="flex flex-col mx-auto items-center">
              <div className="leading-10 text-garden2 text-3xl dark:text-gray-200">
                {userInfo ? `${userInfo.role} ${userInfo.username}님` : <Loading />}
              </div>
              <span className=" py-4 text-garden2 text-xl dark:text-gray-200">지금까지 펭귄 300마리를 구하셨어요!</span>
            </div>
            <DrawerList name={userInfo.role.toLowerCase()} handleModal={closeModal} />
          </>
        ) : (
          <LoginForm />
        )}
      </div>
      {handleModal && (
        <button
          className="fixed -z-10 top-[13.4%] left-[0%] w-[30%] h-[78.1%] bg-navBg md:w-[70%]"
          onClick={closeModal}
        />
      )}
    </>
  );
}
export default Drawer;
