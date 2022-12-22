import React from 'react';
import { Link } from 'react-router-dom';
import { CardLayout, CategoryLayout } from '../components/layout/GlobalLayout';
import CardSkeleton from '../components/loadings/CardSkeleton';
import { CardType, TextType, WrapperType } from '../components/common/theme';
import useCategory from '../hooks/useCategory';
import { checkName } from '../util/functionUtil';

export default function CategoriesPage() {
  const {
    catQuery: { isLoading, data: categories },
  } = useCategory();
  const skeletonCards = Array(8).fill(0);
  return (
    <CategoryLayout>
      <CardLayout>
        <div className={TextType.titleText}>{'See all the Greens!'} &nbsp;</div>
        <div className={TextType.introduceText}>
          {'관심있는 토픽에 대한 뉴스레터를 둘러보거나 구독해보아요!'} &nbsp;
        </div>
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
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      >
                        {' '}
                        <Link to={`/categories/${category.categoryName}`}>뉴스레터 📰</Link>
                      </button>
                      <button
                        type="button"
                        className="rotation-y-180 focus:outline-none text-white bg-garden1 hover:bg-green-800 focus:ring-2 focus:ring-green-800 rounded-xl text-xl font-bold px-5 py-2.5 mr-2 mb-2 dark:bg-green-700 dark:hover:bg-green-600 dark:focus:ring-green-600"
                      >
                        구독하기 ✅
                      </button>
                    </div>
                    <div className={CardType.layout + CardType.front}>
                      <div className={CardType.imgWrapper}>
                        <img className={CardType.img} src={category.mascotImage} alt="default card" />
                      </div>
                      <div className={CardType.text}>
                        <h2>
                          <span className={TextType.mascotNameText}>{checkName(category.mascotName)}</span> 전하는{' '}
                          <br></br>
                          <span className={TextType.categoryNameText}>{category.categoryName}</span>
                        </h2>
                      </div>
                    </div>
                  </li>
                </>
              ))}
          </ul>
        </div>
      </CardLayout>
    </CategoryLayout>
  );
}
