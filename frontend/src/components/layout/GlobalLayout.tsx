import React, { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}
interface ICardLayoutProps {
  children: ReactNode;
  isHome?: boolean;
  isMypage?: boolean;
}

export const GlobalLayout = ({ children }: ILayoutProps) => {
  return <div className="w-full min-h-screen mx-auto">{children}</div>;
};
export const HomeLayout = ({ children }: ILayoutProps) => {
  return <div className="container flex w-full lg:mt-[113.99px] mx-auto px-5">{children}</div>;
};
export const CategoryLayout = ({ children }: ILayoutProps) => {
  return <div className="container w-full lg:mt-[113.99px] pt-10 lg:pt-0 mb-24 mx-auto px-5">{children}</div>;
};
export const CardLayout = ({ children, isHome, isMypage }: ICardLayoutProps) => {
  return (
    <div className={'grid grid-cols-1 ' + (isHome ? 'p-0' : 'p-4')}>
      <div className={'flex flex-col w-full ' + (isHome ? 'p-0' : isMypage ? 'px-0 lg:px-10' : 'pt-20 px-0 lg:px-10')}>
        {children}
      </div>
    </div>
  );
};
