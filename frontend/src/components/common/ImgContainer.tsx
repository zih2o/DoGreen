import React from 'react';

interface IInputContainer {
  src: string;
  label: string;
  inputProp: string;
  children: React.ReactNode;
  isRequired?: boolean;
}

export const ImgContainer = ({ src, label, inputProp, children, isRequired }: IInputContainer) => {
  return (
    <div className={className.container}>
      <label htmlFor={inputProp} className={className.label}>
        <img className={className.img} src={src} alt="프로필사진" />
        <p className={className.labelText}> {label}</p>
      </label>
      <div className={className.inputBox}>{children}</div>
    </div>
  );
};

const className = {
  container: 'flex flex-col justify-center items-center',
  label: 'flex flex-col justify-center items-center text-garden4 ',
  labelText:
    'flex flex-col items-center  mt-5 mb-10 py-1 px-3 w-[150px] rounded-full bg-garden1 font-semibold text-base text-garden2 hover:bg-[#6f8f76] dark:hover:bg-[#6edb76] hover:drop-shadow-lg active:scale-[1.02] transition ease-in delay-[10ms]',
  img: 'mb-3 w-[180px] h-[180px] bg-white rounded-full text-garden1 dark:text-[#dedad9] drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_5px_10px_rgba(100,100,100,0.8)] active:scale-[1.02] transition ease-in delay-[10ms] cursor-pointer',
  inputBox: 'flex flex-col justify-center items-center',
};
