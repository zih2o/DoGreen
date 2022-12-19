import React from 'react';
import { Link } from 'react-router-dom';
interface ICategory {
  name: string;
  url: string;
}
export default function Category() {
  const categorys: ICategory[] = [
    { name: '동물카드 관리', url: '#' },
    { name: '뉴스레터카드 관리', url: '#' },
  ];
  return (
    <ul className="flex flex-col">
      {categorys.map((category) => (
        <Link to={category.url} key={category.name} className="hover:underline">
          <li className="text-l mt-5 md:text-xl font-bold">{category.name}</li>
        </Link>
      ))}
    </ul>
  );
}
