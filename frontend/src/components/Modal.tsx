import React, { PropsWithChildren } from 'react';
// import styled from 'styled-components';

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function Modal({ onClickToggleModal, children }: PropsWithChildren<ModalDefaultType>) {
  return (
    <div className="w-full	 h-full flex items-center justify-center fixed">
      <dialog className="w-[800px] h-[400px] flex flex-col items-center border-none rounded shadow-[0_0_30px_rgba(30, 30, 30, 0.185)] box-border bg-white	z-[10000]">
        {children}
      </dialog>
      <button
        className="w-screen h-screen fixed top-0 z-[999]"
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </div>
  );
}

export default Modal;
