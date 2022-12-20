import React, { PropsWithChildren } from 'react';
interface IModalDefaultType {
  onClose: () => void;
  children: React.ReactNode;
}

//모달 컴포넌트를 사용하기위해서는 아래의 CSS를 동일하게 적용해야함.(수정하면 안됨)
const className = {
  container: 'flex items-center fixed w-full h-screen',
  dialog:
    'flex fixed left-[50%] top-[50%] z-[10000]  w-max h-max border-none bg-transparent translate-y-[-50%] translate-x-[-50%] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]',
  background: 'fixed top-0 z-[9998] w-full h-screen bg-black bg-opacity-25',
};

function Modal({ onClose, children }: PropsWithChildren<IModalDefaultType>) {
  return (
    <div className={className.container}>
      <dialog className={className.dialog}>
        {/* children === 모달로 띄울 컴포넌트 */}
        {children}
      </dialog>
      <div
        className={className.background}
        onClick={(e: React.MouseEvent) => {
          //배경을 누르면 모달창이 꺼짐(모달창을 제어하는 버튼이 있는 페이지에서 state값을 조절함)
          e.preventDefault();
          if (onClose) {
            onClose();
          }
        }}
        aria-hidden="true"
      />
    </div>
  );
}

export default Modal;
