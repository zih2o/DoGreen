import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hambuger from './Hamburger';
function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHambuger = () => {
    return setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <>
      <header className="fixed top-0 inset-x-0">
        <div className='flex items-center top-0 px-6 py-9 bg-garden3 border-b-2 border-garden4'>
          <div className="grid col-span-6">
            <span className="text-5xl font-pacifico">
              <Link to="/" className="text-garden1">
                Do Green!
              </Link>
            </span>
          </div>
          
          {/** Dark mod switch button */}
          <label className="grid items-end col-start-7 relative cursor-pointer">
            <input type="checkbox" className="sr-only peer " />
            <div className="w-14 h-7  bg-garden2 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-garden2 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-garden1" />
          </label>
          {/** Hambuger Dropdown bar */}
          <nav className="flex justify-end">
            <button className="bg-garden3" onClick={toggleHambuger}>
              <svg viewBox="0 0 100 80" width="40" height="40" className="fill-garden4">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
            </button>
          </nav>
        </div>
        {hamburgerOpen ? <Hambuger name="Elice" rank="Earth Gardian" /> : null}
      </header>
    </>
  );
}

export default Header;
