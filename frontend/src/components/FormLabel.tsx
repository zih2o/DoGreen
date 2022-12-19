import React, { useState } from 'react';

interface FormLabelProps {
  children: React.ReactNode;
}

export const FormLabel = ({ children }: FormLabelProps) => {
  return (
    <label htmlFor={children?.props.id} className="flex text-2xl justify-between">
      <p className="flex text-xl font-semibold pt-3">{children?.props.name}</p>
      {children}
    </label>
  );
};
