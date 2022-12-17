import React, { PropsWithChildren, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalDefaultType {
  onClickToggleModal: () => void;
  handleBybutton: () => void;
  children?: React.ReactNode;
}

function Modal({ onClickToggleModal, handleBybutton, children }: PropsWithChildren<ModalDefaultType>) {
  return (
    <div className="w-full h-screen flex items-center fixed relative ">
      <div className="absolute top-[30px] inset-x-1/4">
        <dialog className="w-max h-max flex items-center justify-center bg-transparent shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-[10000] ]">
          <button type="button" className="absolute top-0 right-0 self-center float-right p-5" onClick={handleBybutton}>
            <AiOutlineClose size="24" />
          </button>
          {children}
        </dialog>
      </div>
      <div
        className="w-full h-screen fixed top-0 z-[9998] bg-black bg-opacity-25"
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
