import React, { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}
interface ICardLayoutProps {
  children: ReactNode;
  isHome?: boolean;
}
export const GlobalLayout = ({ children }: ILayoutProps) => {
  return <div className="w-full min-h-screen mx-auto">{children}</div>;
};
export const HomeLayout = ({ children }: ILayoutProps) => {
  return <div className="container flex w-full lg:mt-[113.99px] mx-auto px-5">{children}</div>;
};
export const CardLayout = ({ children, isHome }: ICardLayoutProps) => {
  return (
    <div className={'grid grid-cols-1 mt-12 ' + (isHome ? 'p-0' : 'p-4')}>
      <div className={'flex flex-col w-full ' + (isHome ? 'p-0' : 'px-0 lg:px-10 pt-10')}>{children}</div>
    </div>
  );
};
