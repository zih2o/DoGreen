import React from 'react';

interface IInputContainer {
  label: string;
  inputProp: string;
  children: React.ReactNode;
  isRequired?: boolean;
}

export const InputContainer = ({ label, inputProp, children, isRequired }: IInputContainer) => {
  const className = {
    container: 'flex items-start justify-between w-full space-y-2',
    label: `flex text-xl pt-4 text-garden4 font-semibold dark:text-[#dedad9] ${
      isRequired && `after:content-['*'] after:ml-0.5 after:text-red-500`
    }`,
    inputBox: 'flex flex-col w-3/4 rounded-sm ',
  };

  isRequired ? true : false;
  return (
    <div className={className.container}>
      <label htmlFor={inputProp} className={className.label}>
        {label}
      </label>
      <div className={className.inputBox}>{children}</div>
    </div>
  );
};
