import React from 'react';

interface IInputContainer {
  src: string;
  label: string;
  inputProp: string;
  children: React.ReactNode;
  type?: string;
  id: string;
}

const className = {
  container: 'flex flex-col justify-center items-center w-full ',
  label: 'mx-3 p-1 bg-gardenBG',
  img: 'mb-3 w-[150px] h-[150px] rounded-full shadow-xl',
  inputBox: 'flex flex-col justify-center items-center  ',
};

export const ImgContainer = ({ src, label, inputProp, children, type, id, ...field }: IInputContainer) => {
  return (
    <div className={className.container}>
      <img className={className.img} src={src} alt="프로필사진" />
      <label htmlFor={inputProp} className={className.label}>
        {label}
      </label>
      <input type={type} id={id} className="hidden" {...field} />
      <div className={className.inputBox}>{children}</div>
    </div>
  );
};
