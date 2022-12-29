import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Drawer from './Drawer';

import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';
import { BsSun, BsFillMoonFill } from 'react-icons/bs';
import { useDrawerStore, useDarkModeStore } from '../../hooks/useDrawer';

function Header() {
  const { drawerOpen, toggleDrawer } = useDrawerStore();
  const { darkMode, toggleDarkMode } = useDarkModeStore();
  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      window.document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);
  return (
    <header className="fixed top-0 inset-x-0 z-10">
      <div className="grid grid-cols-5 sm:grid-cols-10 items-center col-span-full top-0 px-6 py-[39px] bg-garden3">
        <div className="grid col-span-7 md:col-span-8">
          <span className="text-3xl sm:text-5xl font-pacifico">
            <Link to="/" className="text-garden1">
              Do Green!
            </Link>
          </span>
        </div>
        <button className="col-start-8 md:col-start-9 flex justify-end" onClick={toggleDarkMode}>
          {darkMode ? <BsSun className="w-9 h-9 p-1" /> : <BsFillMoonFill className="w-9 h-9 p-1" />}
        </button>
        <button className="col-start-9 col-span-2 md:col-start10 md:col-span-1 flex justify-end" onClick={toggleDrawer}>
          <div className="flex justify-between p-3 border-solid border-2 border-garden4/90 rounded-full py-2">
            <GiHamburgerMenu className="  mr-4" />
            <FaUserCircle className=" " />
            <span className="sr-only">Drawer svg</span>
          </div>
        </button>
        {drawerOpen && <Drawer />}
      </div>
    </header>
  );
}

export default Header;
