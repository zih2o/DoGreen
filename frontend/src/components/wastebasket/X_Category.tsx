import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CategorysContext } from './X_Category2';
//과거의 잔흔 사용하지않는 component
export default function Category() {
  const { categorys } = useContext(CategorysContext);
  return (
    <>
      <div>{console.log(categorys.map((i) => i.name))}</div>
      {categoryData.map((ctData) => {
        return (
          <Link to={ctData.url} key={ctData.name} className="hover:underline">
            <li className="text-l mt-5 md:text-xl font-bold">{ctData.name}</li>
          </Link>
        );
      })}
    </>
  );
}
