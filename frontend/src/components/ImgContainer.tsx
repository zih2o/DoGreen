import React from 'react';

interface IInputContainer {
  src: string;
  label: string;
  inputProp: string;
  children: React.ReactNode;
}

const className = {
  container: 'flex justify-center w-full ',
  label: 'flex justify-center border-garden1 box-border rounded bg-gardenBG',
  inputBox: 'flex flex-col justify-center items-center  ',
  img: 'rounded-full w-[150px] h-[150px] shadow-xl',
};

export const ImgContainer = ({ src, label, inputProp, children }: IInputContainer) => {
  return (
    <div className={className.container}>
      <img className={className.img} src={src} alt="프로필사진" />
      <label htmlFor={inputProp} className="">
        {label}
      </label>
      <div className={className.inputBox}>{children}</div>
    </div>
  );
};
