import React, { ReactNode } from 'react';

interface IMyPageNavModalLayoutProps {
  children: ReactNode;
}

interface IconButtonProps {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

interface IPathProps {
  pathname: string;
}

export const MyPageNavModalLayout = ({ children }: IMyPageNavModalLayoutProps) => {
  return (
    <div className="fixed w-full z-10 max-w-xs top-px mt-48 rounded-lg shadow-lg text-base font-semibold bg-white border border-gray-200 dark:bg-[#292524] dark:border-garden4">
      {children}
    </div>
  );
};
export const IconButton = ({ children, onClick }: IconButtonProps) => {
  return (
    <button type="button" className="float-right p-3" onClick={onClick}>
      {children}
    </button>
  );
};
export const NavRoute = ({ pathname }: IPathProps) => {
  return (
    <ol className="ml-4 flex text-md leading-6 whitespace-nowrap min-w-0">
      <li className="flex items-center">마이페이지</li>
      <li className="font-semibold">
        &nbsp;
        {pathname === '/mypage'
          ? '> 홈'
          : pathname === '/mypage/subscribe'
          ? '>  내 구독 정보'
          : pathname === '/mypage/editUser'
          ? '> 내 정보 수정'
          : ''}
      </li>
    </ol>
  );
};
