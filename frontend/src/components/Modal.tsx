import React, { PropsWithChildren, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalDefaultType {
  onClickToggleModal: () => void;
  handleBybutton: () => void;
  children?: React.ReactNode;
}

function Modal({ onClickToggleModal, handleBybutton, children }: PropsWithChildren<ModalDefaultType>) {
  return (
    <div className="w-[500px] h-[200px] flex items-center fixed">
      <div className="relative">
        <dialog className="w-max h-max flex items-center justify-center bg-transparent z-[10000]">
          <button type="button" className="absolute top-0 right-0 self-center float-right p-5" onClick={handleBybutton}>
            <AiOutlineClose size="24" />
          </button>
          {children}
        </dialog>
      </div>
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
