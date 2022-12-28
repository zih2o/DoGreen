import React, { useEffect } from 'react';

import CardSkeleton from '../loadings/CardSkeleton';
import Card from './Card';

import useCategory from '../../hooks/useCategory';

export default function CategoryCards() {
  const {
    catQuery: { data: categories },
  } = useCategory();
  return (
    <div className="flex flex-wrap">
      {categories === undefined ? (
        <CardSkeleton />
      ) : (
        categories.map((category) => (
          <Card
            key={category._id}
            id={category._id}
            img={category.mascotImage}
            name={category.mascotName}
            description={category.categoryName}
            cardtype="category"
          />
        ))
      )}
    </div>
  );
}
