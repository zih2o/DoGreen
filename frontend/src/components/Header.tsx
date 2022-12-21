import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SVG from './SVG';
import Hamburger from './Hamburger';

function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const toggleHamburger = () => {
    return setHamburgerOpen(!hamburgerOpen);
  };
  const toggleDarkmode = () => {
    return setDarkMode(!darkMode);
  };
  return (
    <header className="fixed top-0 inset-x-0 z-10">
      <div className="grid grid-cols-10 items-baseline col-span-full top-0 px-6 py-9 bg-garden3 border-b-2 border-garden4">
        <div className="grid col-span-8 lg:col-span-9">
          <span className="text-5xl font-pacifico">
            <Link to="/" className="text-garden1">
              Do Green!
            </Link>
          </span>
        </div>
        <div className="flex justify-between items-center col-start-9 col-span-2 lg:col-span-1">
          <label className="flex relative cursor-pointer">
            <input type="checkbox" onChange={toggleDarkmode} className="sr-only peer" />
            <div className="w-14 h-7 bg-garden2 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-garden2 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-garden1" />
          </label>
          <nav className="flex">
            <button onClick={toggleHamburger}>
              <svg className="w-10 h-10 fill-garden4" viewBox="0 0 32 32" aria-hidden="true">
                <path d="'M4 10h24c1.104 0 2-0.896 2-2s-0.896-2-2-2H4C2.896 6 2 6.896 2 8S2.896 10 4 10z M28 14H4c-1.104 0-2 0.896-2 2 s0.896 2 2 2h24c1.104 0 2-0.896 2-2S29.104 14 28 14z M28 22H4c-1.104 0-2 0.896-2 2s0.896 2 2 2h24c1.104 0 2-0.896 2-2 S29.104 22 28 22z" />
              </svg>
              <span className="sr-only">Hamburger svg</span>
              {/* <SVG name="Hamburger" width="10" height="10" viewBox="0 0 32 32" color="garden4" /> */}
            </button>
          </nav>
        </div>
        {hamburgerOpen ? <Hamburger name="Elice" rank="Earth Gardian" /> : null}
      </div>
    </header>
  );
}

export default Header;
