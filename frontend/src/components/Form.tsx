import React from 'react';
import { useForm } from 'react-hook-form';
import { FormLabel } from './FormLabel';

interface FormProps extends Button {
  children?: React.ReactNode;
  onSubmit: (data: any) => void;
}
interface Button {
  buttonId?: string;
  buttonClass: string;
  buttonName: string;
}

export const Form = ({ children, onSubmit, buttonId, buttonClass, buttonName }: FormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  console.log(children);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-col w-full px-10">
      {Array.isArray(children)
        ? children.map((child) => {
            return (
              <FormLabel key={child.props.name}>
                {child.props.name
                  ? React.createElement(child.type, {
                      ...{
                        ...child.props,
                        register,
                        errors,
                        key: child.props.name,
                      },
                    })
                  : child}
              </FormLabel>
            );
          })
        : children}
      <button className={buttonClass} id={buttonId}>
        {buttonName}
      </button>
    </form>
  );
};
