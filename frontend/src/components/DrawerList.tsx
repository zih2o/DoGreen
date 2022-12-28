import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserInfo } from '../hooks/store';
import { useDrawerStore } from '../hooks/useDrawer';
import { DialogModal } from './common/DialogModal';
import Loading from './loadings/Loading';
import { alertStore } from '../store/alertStore';
interface IDrawerNav {
  name: 'user' | 'admin';
  handleModal: () => void;
}

interface IDrawerNaveList {
  name: string;
  url: string;
}

type DrawerNameType = 'user' | 'admin';
type DrawerDrawerDatasType = Record<DrawerNameType, IDrawerNaveList[]>;

export default function DrawerList({ name, handleModal }: IDrawerNav) {
  const { existUser } = useUserInfo();
  const { toggleDrawer } = useDrawerStore();
  const DrawerDrawerDatas: DrawerDrawerDatasType = {
    user: [
      { name: '카드 보러가기', url: '/categories' },
      { name: '마이페이지', url: '/mypage' },
    ],
    admin: [
      { name: '카드 보러가기', url: '/categories' },
      { name: '마이페이지', url: '/mypage' },
      { name: '관리자페이지', url: '/admin' },
    ],
  };
  const drawerDatas = DrawerDrawerDatas[name];

  const [logoutStatus, setLogoutStatus] = useState(false);
  const { confirmMsg } = alertStore();
  const logout = () => {
    setLogoutStatus(true);
    window.sessionStorage.clear();
    alertStore.setState({ confirmMsg: '로그아웃 되었습니다.' });
  };

  return (
    <>
      {existUser ? (
        <ul className={`flex flex-col ${name === 'admin' && 'pt-16'}`}>
          {name === 'user' && (
            <>
              <Link
                to="/mypage/subscribe"
                className="my-4 text-garden2 bg-garden1 hover:bg-garden2 hover:text-garden1 border-2 border-garden1 text-lg font-bold rounded-lg w-95% px-5 py-2 text-center dark:border-forest3 dark:bg-forest3 dark:text-forest4 dark:hover:border-forest4 dark:hover:bg-forest4 dark:hover:text-forest3"
                onClick={toggleDrawer}
              >
                MY 구독
              </Link>
              <Link
                to={`/categories/${''}`}
                className="my-4 text-garden2 bg-garden1 hover:bg-garden2 hover:text-garden1 border-2 border-garden1 text-lg font-bold rounded-lg w-95% px-5 py-2 text-center dark:border-forest3 dark:bg-forest3 dark:text-forest4 dark:hover:border-forest4 dark:hover:bg-forest4 dark:hover:text-forest3"
                onClick={toggleDrawer}
              >
                MY 뉴스레터
              </Link>
            </>
          )}
          {drawerDatas?.map((data: IDrawerNaveList) => {
            return (
              <Link to={data.url} key={data.name} className="hover:underline" onClick={handleModal}>
                <li className="text-l mt-5 md:text-xl font-bold text-garden2 dark:text-gray-200">{data.name}</li>
              </Link>
            );
          })}
          <div className="pt-20">
            <button className="hover:underline" onClick={logout}>
              <li className="text-l mt-5 dark:text-gray-200 md:text-xl font-bold text-garden2">로그아웃</li>
            </button>
          </div>
          <>{logoutStatus ? <DialogModal title="로그아웃" message={confirmMsg} type="alert" refresh /> : null}</>
        </ul>
      ) : (
        <Loading />
      )}
    </>
  );
}
