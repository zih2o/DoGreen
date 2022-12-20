import React from 'react';

interface IFormInput {
  type?: string;
  id: string;
  placeholder: string;
  error?: string;
}

export const FormInput = ({ type, placeholder, id, error, ...field }: IFormInput) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={`w-full rounded-md border border-gray-300 px-3 py-2 bg-white text-gray-900 placeholder:text-[13px] placeholder-gray-300 focus:z-10 focus:border-forest1 focus:outline-none focus:ring-forest3 text-xs ${
        error && 'border-forest3'
      }`}
      {...field}
    />
  );
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
