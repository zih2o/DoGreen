import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useUserInfo } from '../../hooks/useUser';
import { useDrawerStore } from '../../hooks/useDrawer';
import { DialogModal } from '../common/DialogModal';
import Loading from '../loadings/Loading';
import { useModalState } from '../../hooks/useModalState';

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
  const ref = useRef(null);

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

  const { isOpen, handleToggle, handleClose, handleOpen } = useModalState();
  useEffect(() => {
    handleClose();
  }, []);
  const [confirm, setConfirm] = useState(false);
  useEffect(() => {
    if (confirm) {
      window.sessionStorage.clear();
    }
  }, [confirm]);

  const className = {
    navButton:
      'my-4 w-95% px-5 py-2 text-center text-garden2 bg-garden1 hover:bg-garden2 hover:text-garden1 border-2 border-garden1 text-lg font-bold rounded-lg dark:border-forest3 dark:bg-forest3 dark:text-forest4 dark:hover:border-forest4 dark:hover:bg-forest4 dark:hover:text-forest3',
    navText: 'text-l mt-5 md:text-xl font-bold text-garden2 dark:text-gray-200 hover:underline hover:decoration-2',
  };

  return (
    <>
      {existUser ? (
        <ul className={`flex flex-col ${name === 'admin' && 'pt-16'}`}>
          {name === 'user' && (
            <>
              <Link to="/mypage/subscribe" className={className.navButton} onClick={toggleDrawer}>
                MY 구독
              </Link>
            </>
          )}
          {drawerDatas?.map((data: IDrawerNaveList) => {
            return (
              <Link to={data.url} key={data.name} onClick={handleModal}>
                <li className={className.navText}>{data.name}</li>
              </Link>
            );
          })}
          <div>
            <button onClick={handleOpen}>
              <li className={className.navText}>로그아웃</li>
            </button>
          </div>
          <>
            {isOpen ? (
              <DialogModal
                title="로그아웃"
                message="로그아웃 하시겠습니까?"
                type="confirm"
                setConfirm={setConfirm}
                refresh="/"
                onClose={handleToggle}
              />
            ) : null}
          </>
        </ul>
      ) : (
        <Loading ref={() => ref} />
      )}
    </>
  );
}
