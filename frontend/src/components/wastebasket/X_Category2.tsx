import React from 'react';
import { Link } from 'react-router-dom';

interface IName {
  name: 'admin' | 'nav';
}

interface ICategoryDatas {
  name: string;
  url: string;
}

type CategoryNameType = 'admin' | 'nav';
type CategoryDatasType = Record<CategoryNameType, ICategoryDatas[]>;

//name = "admin" || "nav"
export default function Category({ name }: IName) {
  const categoryDatas: CategoryDatasType = {
    admin: [
      { name: '동물카드 관리', url: '#' },
      { name: '뉴스레터카드 관리', url: '#' },
    ],
    nav: [
      { name: '마이페이지', url: '/mypage' },
      { name: '동물', url: '#' },
      { name: '토픽', url: '#' },
      { name: '로그아웃', url: '#' },
    ],
  };
  const datas = categoryDatas[name];
  return (
    <ul className="flex flex-col">
      {datas?.map((data: ICategoryDatas) => {
        return (
          <Link to={data.url} key={data.name} className="hover:underline">
            <li className="text-l mt-5 md:text-xl font-bold">{data.name}</li>
          </Link>
        );
      })}
    </ul>
  );
}
