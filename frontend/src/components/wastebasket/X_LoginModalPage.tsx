import React, { useState } from 'react';
import Modal from '../common/Modal';
import { Login } from '../auth/Login';
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
      setHandleModal(!handleModal); //로그인 창 열기
    } else {
      alert('로그아웃하시겠습니까? : 추후 모달형태로 진행예정');
      setLoginStatus('로그인');
      window.sessionStorage.clear();
    }
  };

  //아래의 CSS는 공용 개인 CSS임!(모달창을 띄울 버튼 환경을 만든 CSS)
  const className = {
    pageContainer: 'flex flex-col items-center w-full h-screen p-[300px]',
    pageText: 'text-center',
    closeButton: 'self-center absolute top-2 right-2 float-right p-2 rounded-xl active:bg-white active:opacity-60',
    background: 'fixed top-0 z-[9998] w-full h-screen bg-black bg-opacity-25',
    modalCotrolBtn: 'w-[160px] h-[48px] bg-[#65D26D] text-white	text-sm font-normal rounded border-none cursor-pointer',
  };

  return (
    <main className={className.pageContainer}>
      <h3 className={className.pageText}>버튼이 있는 곳의 배경</h3>
      {handleModal && (
        <Modal onClose={onClose}>
          <button type="button" className={className.closeButton} onClick={onClose}>
            <AiOutlineClose size="24" color="#5C5656" />
          </button>
          <Login />
        </Modal>
      )}
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
