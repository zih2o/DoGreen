import React, { PropsWithChildren, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalDefaultType {
  onClose: () => void;
  handleBybutton: () => void;
  children?: React.ReactNode;
}

function Modal({ onClose, handleBybutton, children }: PropsWithChildren<ModalDefaultType>) {
  return (
    <div className="w-full h-screen flex  items-center fixed ">
      <dialog className="w-max h-max fixed flex left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] border-none  bg-transparent shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  z-[10000]">
        <button type="button" className="absolute top-0 right-0 self-center float-right p-5" onClick={handleBybutton}>
          <AiOutlineClose size="24" />
        </button>
        {children}
      </dialog>
      <div
        className="w-full h-screen fixed top-0 z-[9998] bg-black bg-opacity-25"
        onClick={(e: React.MouseEvent) => {
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
