import React, { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}
export const GlobalLayout = ({ children }: ILayoutProps) => {
  return <div className="w-full min-h-screen mx-auto">{children}</div>;
};

export const CardLayout = ({ children }: ILayoutProps) => {
  return (
    <div className="grid grid-cols-1 p-4 mt-12">
      <div className="flex flex-col w-full ml-0 lg:ml-16 px-0 lg:px-10 pt-10">{children}</div>
    </div>
  );
};
