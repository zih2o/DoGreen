import React from 'react';
import { Link } from 'react-router-dom';
import { CardLayout } from '../components/layout/GlobalLayout';
import CardSkeleton from '../components/loadings/CardSkeleton';
import { CardType, WrapperType } from '../components/common/theme';
import useCategory from '../hooks/useCategory';
import { checkName } from '../util/functionUtil';

export default function CategoriesPage() {
  const {
    catQuery: { isLoading, isError, data: categories },
  } = useCategory();
  const skeletonCards = Array(8).fill(0);
  return (
    <CardLayout>
      <div className={WrapperType.cardContentsWrapper}>
        <ul className={WrapperType.cardListWrapper}>
          {isLoading &&
            skeletonCards.map((e, i) => (
              <li className={CardType.size} key={i}>
                <CardSkeleton />
              </li>
            ))}
          {categories &&
            categories.map((category) => (
              <>
                <li
                  className={
                    CardType.size +
                    ' flip-content transition-transform duration-[1000ms] transform-style-3d hover:rotate-y-180 hover:transition-transform hover:duration-[1200ms]'
                  }
                  key={category._id}
                >
                  <div className={CardType.layout + CardType.back}>
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-800 rounded-lg text-xl font-bold px-5 py-2.5 mr-2 mb-2 dark:bg-green-700 dark:hover:bg-green-600 dark:focus:ring-green-600"
                    >
                      {' '}
                      <Link to={`/categories/${category.categoryName}`}>뉴스레터 </Link>
                    </button>
                    <button
                      type="button"
                      className="rotation-y-180 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-800 rounded-lg text-xl font-bold px-5 py-2.5 mr-2 mb-2 dark:bg-green-700 dark:hover:bg-green-600 dark:focus:ring-green-600"
                    >
                      구독
                    </button>
                  </div>
                  <div className={CardType.layout + CardType.front}>
                    <div className={CardType.imgWrapper}>
                      <img className={CardType.img} src={category.mascotImage} alt="default card" />
                    </div>
                    <div className={CardType.text}>
                      <h2>
                        {checkName(category.mascotName)} 전하는 오늘의 {category.categoryName}{' '}
                      </h2>
                    </div>
                  </div>
                </li>
              </>
            ))}
        </ul>
      </div>
    </CardLayout>
  );
}
