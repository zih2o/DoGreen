import React from 'react';

interface IFormInput {
  type?: string;
  id: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  name: string;
  onChange?: (...event: []) => void;
  value: string;
  isRequired?: boolean;
}

export const FormInput = ({ type, placeholder, id, error, disabled, name, onChange, value }: IFormInput) => {
  const className = {
    input: `w-full px-3 py-2 bg-white dark:bg-[#292524] rounded-lg border border-gray-300 dark:border-[#4f4846] text-gray-900 dark:text-white placeholder:text-[12px] placeholder-gray-400 dark:placeholder-[#8c807d] focus:z-10 focus:border-forest1 focus:outline-none focus:ring-forest3 ${
      error && 'border-red-500 dark:border-red-500'
    } `,
    disabled: 'w-full px-3 py-2 bg-gardenBG font-semibold',
    disabledContainer: 'mt-1 min-h-[30px]',
  };
  if (disabled)
    return (
      <>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={className.disabled}
          disabled
          name={name}
          onChange={onChange}
          value={value}
        />
        <div className={className.disabledContainer}></div>
      </>
    );
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={className.input}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};

interface IInputError {
  children: React.ReactNode;
}

export const IputError = ({ children }: IInputError) => {
  return <p className="mt-1 min-h-[30px] text-base text-red-500 dark:text-red-500">{children}</p>;
};

interface IInputSubmitButton {
  value: string;
  onClick?: () => void;
}

export const InputButton = ({ value, onClick }: IInputSubmitButton) => {
  return (
    <div className="flex justify-center mt-3">
      <input
        type="submit"
        value={value}
        onClick={onClick}
        className="flex justify-center w-[50%] h-[45px] mb-2 py-2 rounded-full bg-garden1 font-semibold text-xl text-garden2 dark:text-gray-700 hover:bg-[#6f8f76] dark:hover:bg-[#6edb76] hover:drop-shadow-lg active:scale-[1.02] transition ease-in-oout delay-75 cursor-pointer"
      ></input>
    </div>
  );
};

interface IClickButton {
  onClick?: () => void;
  children: React.ReactNode;
}
export const ClickButton = ({ onClick, children }: IClickButton) => {
  return (
    <div className="flex justify-center w-full px-3 mt-3">
      <button
        onClick={onClick}
        className="flex justify-center items-center w-[50%] h-[45px] mb-2 mt-3 py-2 rounded-full bg-red-500 font-semibold text-xl text-white dark:text-white font-semiboldshadow hover:bg-[#f54c4c] hover:drop-shadow-lg active:scale-[1.02] transition ease-in-oout delay-75 cursor-pointer"
      >
        {children}
      </button>
    </div>
  );
};
