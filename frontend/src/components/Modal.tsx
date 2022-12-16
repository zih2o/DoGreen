import React, { PropsWithChildren } from 'react';
interface ModalDefaultType {
  onClickToggleModal: () => void;
  children?: React.ReactNode;
}

function Modal({ onClickToggleModal, children }: PropsWithChildren<ModalDefaultType>) {
  return (
    <div className="w-[500px] h-[700px] flex items-center justify-center fixed">
      {children}
      <div
        className="w-[-webkit-fill-available] h-screen fixed top-0 z-[9998] bg-[0,0,0]/[.2]"
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
        aria-hidden="true"
      />
    </div>
  );
}

export default Modal;
