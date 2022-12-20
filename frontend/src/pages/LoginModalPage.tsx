import React, { useState } from 'react';
import Modal from '../components/Modal';
import { Login } from '../components/Login';
import { AiOutlineClose } from 'react-icons/ai';

function LoginModalPage() {
  //모달 추가시, setHandleModal, onClose 는 꼭 추가해야함 : state 값으로 Modal창을 열고 닫음
  const [handleModal, setHandleModal] = useState<boolean>(false);
  const onClose = () => {
    setHandleModal(!handleModal);
  };

  const isLogined = window.sessionStorage.getItem('token');
  const initialLoginBtn = isLogined ? '로그아웃' : '로그인';
  const [loginStatus, setLoginStatus] = useState<string>(initialLoginBtn);
  const logined = () => {
    if (isLogined === null) {
      setLoginStatus('로그아웃');
      setHandleModal(!handleModal); //로그인 창 열기
    } else {
      setLoginStatus('로그인');
      window.sessionStorage.clear();
    }
  };

  //아래의 CSS는 공용 개인 CSS임!(모달창을 띄울 버튼 환경을 만든 CSS)
  const className = {
    pageContainer: 'flex flex-col items-center w-full h-screen p-[300px]',
    pageText: 'text-center',
    closeButton: 'self-center absolute top-0 right-0 float-right p-5',
    background: 'fixed top-0 z-[9998] w-full h-screen bg-black bg-opacity-25',
    modalCotrolBtn: 'w-[160px] h-[48px] bg-[#65D26D] text-white	text-sm font-normal rounded border-none cursor-pointer',
  };

  return (
    <main className={className.pageContainer}>
      <h3 className={className.pageText}>버튼이 있는 곳의 배경</h3>
      {/*모달컴포넌트를 추가하려면 아래의 코드를 사용해야함 */}
      {handleModal && (
        <Modal onClose={onClose}>
          <button type="button" className={className.closeButton} onClick={onClose}>
            <AiOutlineClose size="24" color="#5C5656" />
          </button>
          <Login />
        </Modal>
        /* 기본 폼
      <Modal onClose={onClose} handleBybutton={onClose}>

        <모달로 띄우고싶은 컴포넌트 />
        닫기버튼 추가할 경우,
        1. 해당 위치에서, 모달을 닫고싶은 컴포넌트 및 태그를 추가 (postion : absolute 사용 권장)
        2. 속성값으로  'onClick={onClose}' 값을 줌
      
      </Modal>
      */
      )}

      {/* 모달을 제어할 버튼 */}
      <button
        className={className.modalCotrolBtn}
        onClick={() => {
          logined();
        }}
      >
        {loginStatus}
      </button>
    </main>
  );
}

export default LoginModalPage;
