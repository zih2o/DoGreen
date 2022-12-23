import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AiOutlineDoubleRight, AiOutlineClose } from 'react-icons/ai';
import { ProfileInfo } from './ProfileInfo';
import MyPageTabBar from './MyPageTabBar';
import { MyPageBarLayout } from '../layout/MyPageLayout';
import { MyPageNavModalLayout, IconButton, NavRoute } from './MyPageNav';

const MyPageTopBar = () => {
  const [tabOpen, setTabOpen] = useState(false);
  const { pathname } = useLocation();
  const handleToggle = () => {
    setTabOpen(!tabOpen);
  };
  return (
    <MyPageBarLayout>
      <IconButton onClick={handleToggle}>
        <AiOutlineDoubleRight className="icon" size="24" />
      </IconButton>
      <NavRoute pathname={pathname} />
      {tabOpen ? (
        <MyPageNavModalLayout>
          <IconButton onClick={handleToggle}>
            <AiOutlineClose size="24" />
          </IconButton>
          <ProfileInfo modal />
          <MyPageTabBar />
        </MyPageNavModalLayout>
      ) : (
        ''
      )}
    </MyPageBarLayout>
  );
};
export default MyPageTopBar;
