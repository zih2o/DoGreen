import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GrLinkTop } from 'react-icons/gr';

export const MoveToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
export const ToTopButton = () => {
  return (
    <button
      id="to-top-button"
      onClick={MoveToTop}
      className="flex justify-center items-center fixed z-[201] right-5 border-0 w-12 h-12 bottom-[12%] sm:bottom-[8%] sm:w-14 sm:h-14 rounded-full drop-shadow-md bg-slate-50 dark:bg-slate-100 "
    >
      <GrLinkTop size="24" />
    </button>
  );
};
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
