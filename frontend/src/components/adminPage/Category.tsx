import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CategorysContext } from './Categorys';
export default function Category() {
  const { categorys } = useContext(CategorysContext);
  return (
    <>
      {categorys.map((category) => {
        return (
          <Link to={category.url} key={category.name} className="hover:underline">
            <li className="text-l mt-5 md:text-xl font-bold">{category.name}</li>
          </Link>
        );
      })}
    </>
  );
}
