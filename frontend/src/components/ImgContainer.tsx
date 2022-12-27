import React from 'react';

interface IInputContainer {
  src: string;
  label: string;
  inputProp: string;
  children: React.ReactNode;
}

const className = {
  container: 'flex justify-center items-center w-full ',
  label: 'flex flex-col items-center mb-10 p-1 bg-gardenBG',
  img: 'mb-3 w-[180px] h-[180px] rounded-full shadow-xl',
  inputBox: 'flex flex-col justify-center items-center  ',
};

export const ImgContainer = ({ src, label, inputProp, children }: IInputContainer) => {
  return (
    <div className={className.container}>
      <label htmlFor={inputProp} className={className.label}>
        <img className={className.img} src={src} alt="프로필사진" />
        {label}
      </label>
      <div className={className.inputBox}>{children}</div>
    </div>
  );
};
