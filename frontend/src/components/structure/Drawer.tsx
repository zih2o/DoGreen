import React, { useState, useEffect, useRef } from 'react';
import DrawerList from './DrawerList';
import LoginForm from './LoginForm';
import { useDrawerStore } from '../../hooks/useDrawer';
import Loading from '../loadings/Loading';
import { useUserInfo } from '../../hooks/useUser';

function Drawer() {
  const { drawerOpen, toggleDrawer } = useDrawerStore();
  const { existUser, userInfo, getUserInfo } = useUserInfo();
  const [handleModal, setHandleModal] = useState(drawerOpen);
  const ref = useRef(null);
  const closeModal = () => {
    toggleDrawer();
    setHandleModal(!handleModal);
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  const className = {
    topDiv:
      'items-center place-content-between fixed w-[70%] h-full z-[100] p-6 top-[10%] right-[0] bg-navbarBG text-right md:w-[30%] md:top-[15%]',
    background: 'fixed z-[100] top-[10%] left-[0%] w-[30%] h-full bg-navBg md:w-[70%]  md:top-[15%]',
    navContainer: 'flex flex-col mx-auto items-center',
    greeting: 'leading-10 text-garden2 font-bold text-2xl sm:text-3xl dark:text-gray-200',
    text: ' py-4 text-garden2 text-center text-lg sm:text-xl dark:text-gray-200',
  };
  return (
    <>
      <div className={className.topDiv}>
        {handleModal && <button className={className.background} onClick={closeModal} />}
        {existUser ? (
          <>
            <div className={className.navContainer}>
              <div className={className.greeting}>
                {userInfo ? `${userInfo.role} ${userInfo.username}님` : <Loading ref={() => ref} />}
              </div>
              <span className={className.text}>
                지금까지 펭귄 300마리를<br></br> 구하셨어요!
              </span>
            </div>
            <DrawerList name={userInfo.role.toLowerCase() === 'user' ? 'user' : 'admin'} handleModal={closeModal} />
          </>
        ) : (
          <LoginForm />
        )}
      </div>
    </>
  );
}
export default Drawer;
