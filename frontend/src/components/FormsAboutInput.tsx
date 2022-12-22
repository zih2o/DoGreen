import React from 'react';

interface IFormInput {
  type?: string;
  id: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
}

export const FormInput = ({ type, placeholder, id, error, disabled, ...field }: IFormInput) => {
  const className = {
    input: `w-full  px-3 py-2 bg-white rounded-md border border-gray-300 text-gray-900  placeholder:text-[13px] placeholder-gray-400 focus:z-10 focus:border-forest1 focus:outline-none focus:ring-forest3 ${
      error && 'border-forest3'
    }`,
    disabled: 'w-full px-3 py-2 bg-gardenBG',
    disabledContainer: 'mt-1 min-h-[30px]',
  };
  if (disabled)
    return (
      <>
        <input type={type} id={id} placeholder={placeholder} className={className.disabled} disabled {...field} />
        <div className={className.disabledContainer}></div>
      </>
    );
  return <input type={type} id={id} placeholder={placeholder} className={className.input} {...field} />;
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

interface IClickButton {
  value: string;
  onClick: () => void;
}
export const ClickButton = ({ value, onClick }: IClickButton) => {
  return (
    <div className="w-full px-3 mt-3">
      <input
        type="submit"
        value={value}
        onClick={onClick}
        className="flex justify-center w-full bg-white hover:bg-gray-100 text-xl text-garden4 font-semibold py-2 mb-2 mt-3 border-garden1 border-[2px] rounded shadow"
      ></input>
    </div>
  );
};
