import { useState, useCallback } from 'react';
// import styled from "styled-components";
import Modal from '../components/Modal';
import Login from '../components/Login';
import Register from '../components/Register';

function App() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [isStatus, setIsStatus] = useState('');

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal, isStatus]);

  const handleLoginbutton = () => {
    setIsStatus('Login');
  };

  return (
    <main className="w-full h-screen flex flex-col items-center">
      <h3 className="text-center">버튼이 있는 곳에 연결한 것</h3>
      <div>
        <button onClick={handleLoginbutton}>로그인</button>
        <button onClick={() => setIsStatus('Register')}>회원가입</button>
      </div>
      {isOpenModal && (
        <Modal onClickToggleModal={onClickToggleModal}>
          {isStatus === 'Login' ? <Login /> : isStatus === 'Register' ? <Register /> : null}
        </Modal>
      )}
      <button
        className="w-[160px] h-[48px] bg-[#65D26D] text-white	text-sm font-normal rounded border-none cursor-pointer hover:translate-y-[-1px]"
        onClick={onClickToggleModal}
      >
        로그인
      </button>
      <button
        className="w-[160px] h-[48px] bg-[#65D26D] text-white	text-sm font-normal rounded border-none cursor-pointer hover:translate-y-[-1px]"
        onClick={onClickToggleModal}
      >
        회원가입
      </button>
    </main>
  );
}

export default App;
