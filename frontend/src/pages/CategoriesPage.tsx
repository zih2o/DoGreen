import React from 'react';
import { Link } from 'react-router-dom';
import { CardLayout } from '../components/layout/GlobalLayout';
import CardSkeleton from '../components/loadings/CardSkeleton';
import { CardType, TextType, WrapperType } from '../components/common/theme';
import useCategory from '../hooks/useCategory';
import { divide } from 'lodash';

export default function CategoriesPage() {
  const {
    catQuery: { isLoading, isError, data: categories },
  } = useCategory();
  console.log(typeof categories);
  return (
    <CardLayout>
      {/* <div className={WrapperType.cardContentsWrapper}>
        <ul className={WrapperType.cardListWrapper}>
          {categories &&
            categories.map((category) => (
              <li className={CardType.size} key={category._id}>
                <Link to={`/categories/${category.id}`} className={CardType.layout}>
                  <div className={CardType.imgWrapper}>
                    <img className={CardType.img} src="category.macotImage" alt="default card" />
                  </div>
                  <div className={CardType.text}>
                    <h2>
                      {category.mascotName}이 전하는 오늘의 {category.categoryName}{' '}
                    </h2>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div> */}
    </CardLayout>
  );
}
