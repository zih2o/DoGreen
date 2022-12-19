import React from 'react';
import { UseFormRegister, RegisterOptions, FieldErrors, FieldValues, Path } from 'react-hook-form';

interface IInputProps<TFieldValues extends FieldValues> {
  register?: UseFormRegister<TFieldValues>;
  name: Path<TFieldValues>;
  id: string;
  type: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rules?: RegisterOptions;
  errors?: FieldErrors<TFieldValues>;
}

export const FormInput = <TFieldValues extends Record<string, unknown>>({
  register,
  name,
  rules,
  errors,
  ...rest
}: IInputProps<TFieldValues>): JSX.Element => {
  return (
    <div className="w-2/3 flex flex-col items-start justify-between space-y-2">
      <input
        {...(register && register(name, rules))}
        {...rest}
        className={`w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-base placeholder-gray-300 focus:z-10 focus:border-forest1 focus:outline-none focus:ring-forest3 text-xs ${
          errors && errors[name] && 'border-forest3'
        }`}
      />
      <p className="text-base mt-1 min-h-[35px] text-forest3">{errors[name]?.message}</p>
    </div>
  );
};
