import React from 'react';

interface IFormInput {
  type?: string;
  id: string;
  placeholder?: string;
  error?: string;
}

export const FormInput = ({ type, placeholder, id, error, ...field }: IFormInput) => {
  const className = {
    input: `w-full  px-3 py-2 bg-white rounded-md border border-gray-300 text-gray-900  placeholder:text-[13px] placeholder-gray-400 focus:z-10 focus:border-forest1 focus:outline-none focus:ring-forest3 ${
      error && 'border-forest3'
    }`,
  };
  return <input type={type} id={id} placeholder={placeholder} className={className.input} {...field} />;
};

export const ImgInput = ({ type, id, ...field }: IFormInput) => {
  const className = {
    input: 'hidden',
  };
  return <input type={type} id={id} className={className.input} {...field} />;
};
interface IInputError {
  children: React.ReactNode;
}

export const IputError = ({ children }: IInputError) => {
  return <p className="text-base mt-1 min-h-[30px] text-forest3">{children}</p>;
};

interface IInputSubmitButton {
  value: string;
}

export const InputButton = ({ value }: IInputSubmitButton) => {
  return (
    <input
      type="submit"
      value={value}
      className="flex justify-center w-full bg-white hover:bg-gray-100 text-xl text-garden4 font-semibold py-2 mb-2 mt-3 border-garden1 border-[2px] rounded shadow"
    ></input>
  );
};
