import React, { ReactNode } from 'react';

interface IMyPageLayoutProps {
  children: ReactNode;
}
export const MyPageLayout = ({ children }: IMyPageLayoutProps) => {
  return <div className="container flex w-full lg:mt-[113.99px] mx-auto px-5">{children}</div>;
};
export const MyPageBarLayout = ({ children }: IMyPageLayoutProps) => {
  return <div className="container flex lg:hidden h-24 items-center mt-[113.99px] px-5">{children}</div>;
};
export const MyPageTabLayout = ({ children }: IMyPageLayoutProps) => {
  return (
    <div className="xl:w-80 lg:w-60 lg:block hidden ">
      <div className="lg:flex-col md:flex mt-20 rounded-lg bg-white/50 border border-gray-200 dark:bg-[#292524] dark:border-garden4 ">
        {children}
      </div>
    </div>
  );
};
export const MyPageTabLinkLayout = ({ children }: IMyPageLayoutProps) => {
  return <div className="flex flex-col font-bold text-xl">{children}</div>;
};
export const MyPageContentsLayout = ({ children }: IMyPageLayoutProps) => {
  return <div className="w-full flex-1 lg:mt-10 lg:w-80 py-5">{children}</div>;
};
export const MyPageMessageLayout = ({ children }: IMyPageLayoutProps) => {
  return (
    <div className="mb-24 px-10 lg:px-20">
      <p className="text-2xl text-center leading-10 font-bold">{children}</p>
    </div>
  );
};
