import React, { useState } from 'react';
import { AiOutlineDoubleRight, AiOutlineClose } from 'react-icons/ai';
import ProfileInfo from '../components/ProfileInfo';
import MyPageTabBar from '../components/MyPageTabBar';

const MyPageTopBar = () => {
  const [tabOpen, setTabOpen] = useState(false);
  const handleToggle = () => {
    setTabOpen(!tabOpen);
  };
  return (
    <div className="fixed flex items-center px-5 md:mt-0 h-24 bg-gardenBG-light w-full flex-1 lg:hidden">
      <button type="button" className="text-slate-500 hover:text-slate-600" onClick={handleToggle}>
        <AiOutlineDoubleRight className="icon" size="24" />
      </button>
      <ol className="ml-4 flex text-md leading-6 whitespace-nowrap min-w-0">
        <li className="flex items-center">마이페이지 &nbsp;{'-'}</li>
        <li className="font-semibold text-slate-900 truncate">&nbsp;{` 세부페이지명 `} </li>
      </ol>
      <br></br>

      {tabOpen ? (
        <div className="fixed top-px mt-48 bg-stone-100 w-full max-w-xs rounded-lg shadow-lg text-base font-semibold">
          <button type="button" className="float-right p-3" onClick={handleToggle}>
            <AiOutlineClose size="24" />
          </button>
          <ProfileInfo modal />
          <MyPageTabBar modal />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default MyPageTopBar;
