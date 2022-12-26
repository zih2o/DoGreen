import React from 'react';

interface IInputContainer {
  src: string;
  label: string;
  inputProp: string;
  children: React.ReactNode;
}

export const ImgContainer = ({ src, label, inputProp, children }: IInputContainer) => {
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
    'flex flex-col items-center  mt-5 mb-10 py-1 px-3 w-[150px] border-2 rounded-full border-garden4 dark:border-[#65D26D] bg-garden1 font-semibold text-base text-garden2 hover:bg-[#6f8f76] dark:hover:bg-[#6edb76] hover:drop-shadow-lg hover:scale-[0.98] transition ease-in delay-[10ms]',
  img: 'mb-3 w-[180px] h-[180px] rounded-full text-garden1 dark:text-[#dedad9] drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_5px_10px_rgba(100,100,100,0.8)] hover:scale-[0.98] transition ease-in delay-[10ms]',
  inputBox: 'flex flex-col justify-center items-center',
};
