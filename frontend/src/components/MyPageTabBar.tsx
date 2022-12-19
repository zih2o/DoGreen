import React from 'react';
import { Link } from 'react-router-dom';
import { MyPageTabLinkLayout } from './layout/MyPageLayout';
import { LinkType } from './common/theme';

const MyPageTabBar = () => {
  return (
    <MyPageTabLinkLayout>
      <Link to="/mypage" className={LinkType.mypageTab}>
        마이페이지 홈
      </Link>
      <Link to="/mypage/editUser" className={LinkType.mypageTab}>
        내 정보 수정
      </Link>
      <Link to="/mypage/subscribe" className={LinkType.mypageTab}>
        내 구독 정보
      </Link>
    </MyPageTabLinkLayout>
  );
};
export default MyPageTabBar;
