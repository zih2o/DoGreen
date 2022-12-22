import React from 'react';
import { Link } from 'react-router-dom';
import { CardLayout, CategoryLayout } from '../components/layout/GlobalLayout';
import CardSkeleton from '../components/loadings/CardSkeleton';
import { CardType, TextType, BtnType, WrapperType } from '../components/common/theme';
import useCategory from '../hooks/useCategory';
import { checkName } from '../util/functionUtil';

export default function CategoriesPage() {
  const {
    catQuery: { isLoading, data: categories },
  } = useCategory();
  const skeletonCards = Array(15).fill(0);
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
                  <li className={CardType.size + CardType.flipContent} key={category._id}>
                    <div className={CardType.layout + CardType.back}>
                      <button type="button" className={BtnType.newsLetterBtn}>
                        {' '}
                        <Link to={`/categories/${category.categoryName}`}>뉴스레터 📰</Link>
                      </button>
                      <button type="button" className={BtnType.subscribeBtn}>
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
