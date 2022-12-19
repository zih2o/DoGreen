import React, { ReactNode } from 'react';

interface IGlobalLayoutProps {
  children: ReactNode;
}
const GlobalLayout = ({ children }: IGlobalLayoutProps) => {
  return <div className="w-full min-h-screen mx-auto">{children}</div>;
};
export default GlobalLayout;
