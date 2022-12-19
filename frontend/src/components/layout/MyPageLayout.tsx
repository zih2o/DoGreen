import React, { ReactNode } from 'react';

interface IMyPageLayoutProps {
  children: ReactNode;
}
const MyPageLayout = ({ children }: IMyPageLayoutProps) => {
  return <div className="container w-full flex lg:mt-[113.99px] mx-auto px-5">{children}</div>;
};
export default MyPageLayout;
