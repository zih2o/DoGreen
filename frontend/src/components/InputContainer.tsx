import React from 'react';

interface IInputContainer {
  label: string;
  inputProp: string;
  children: React.ReactNode;
}

const className = {
  container: 'flex items-start justify-between w-full space-y-2',
  label: 'flex text-xl font-semibold pt-4',
  inputBox: 'flex flex-col w-2/3',
};

export const InputContainer = ({ label, inputProp, children }: IInputContainer) => {
  return (
    <div className={className.container}>
      <label htmlFor={inputProp} className={className.label}>
        {label}
      </label>
      <div className={className.inputBox}>{children}</div>
    </div>
  );
};
