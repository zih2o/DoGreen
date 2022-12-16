import React, { useState } from 'react';
import MyPageTab from '../components/MyPageTab';
import MyPageMain from '../components/MyPageMain';
import { AiOutlineDoubleRight, AiOutlineClose } from 'react-icons/ai';

// import axios from 'axios';
import ProfileInfo from '../components/ProfileInfo';
import MyPageTabBar from '../components/MyPageTabBar';
export interface userData {
  id: number;
  name: string;
  rank: number;
  status: string;
  saveNumber: number;
  userAnimal: string;
}
export const InitialData: userData = {
  id: 0,
  name: '엘리스',
  rank: 60,
  status: 'Earth Gardian',
  saveNumber: 50,
  userAnimal: '아델리펭귄',
};

const MyPage = () => {
  const [tabOpen, setTabOpen] = useState(false);
  const handleToggle = () => {
    setTabOpen(!tabOpen);
  };
  return (
    <div className="mx-auto w-full min-h-screen">
      <div>
        <div className="fixed flex items-center px-5 md:mt-0 sm:mt-7 h-24 bg-slate-100/40  w-full lg:hidden">
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
              <MyPageTabBar />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <div>
        <div className="container flex lg:flex px-5 lg:w-full mx-auto">
          <div className="MyPage_Tab_Wrapper hidden xl:w-80 lg:w-60 lg:block">
            <MyPageTab />
          </div>
          <div className="MyPage_Content_Wrapper py-5 flex-1">
            <MyPageMain />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyPage;
