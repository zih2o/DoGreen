import React from 'react';
import { Link } from 'react-router-dom';
import { CardLayout } from '../layout/GlobalLayout';
import { CardType, TextType, WrapperType } from '../common/theme';

const CategoryList = () => {
  const tabCategories = {
    subscribed1: [
      '뉴스',
      '푸드',
      '라이프스타일',
      '후원',
      '토픽',
      '뉴스1',
      '푸드1',
      '라이프스타일1',
      '후원1',
      '토픽1',
      '뉴스2',
      '푸드2',
    ],
    subscribed2: [
      '뉴스',
      '푸드',
      '라이프스타일',
      '후원',
      '토픽',
      '뉴스2',
      '푸드2',
      '라이프스타일2',
      '후원2',
      '토픽2',
      '뉴스3',
      '푸드3',
      '라이프스타일3',
      '후원3',
      '토픽3',
    ],
  };
  const tabCards1 = tabCategories.subscribed1.map((card, index) => (
    <>
      <li className={CardType.size} key={index}>
        <Link to="#" className={CardType.layout}>
          <div className={CardType.imgWrapper}>
            <img className={CardType.img} src="/src/assets/profile.png" alt="default card" />
          </div>
          <div className={CardType.text}>
            <h2>펭귄이 전하는 오늘의 {card} </h2>
          </div>
        </Link>
      </li>
    </>
  ));
  const tabCards2 = tabCategories.subscribed2.map((card, index) => (
    <>
      <li className={CardType.size} key={index}>
        <Link to="#" className={CardType.layout}>
          <div className={CardType.imgWrapper}>
            <img className={CardType.img} src="/src/assets/profile.png" alt="default card" />
          </div>
          <div className={CardType.text}>
            <h2>펭귄이 전하는 오늘의 {card} </h2>
          </div>
        </Link>
      </li>
    </>
  ));
  return (
    <CardLayout isHome>
      <div className="flex mt-12">
        <div className={TextType.titleText}>{'어떤 주제가 궁금한가요?'} &nbsp;</div>
        <div className={TextType.titleText + ' text-garden1'}>
          <Link to="/categories/:catId">
            {'>'} &nbsp;
            <span className="hover:underline hover:decoration-garden1 hover:decoration-4">더보기</span>{' '}
          </Link>
        </div>
      </div>
      <div className="mt-16"></div>
      <div className={WrapperType.homeCategoriesWrapper}>
        <ul id="rightMove" className={WrapperType.cardListRightWrapper}>
          {tabCards1}
        </ul>
        <ul id="leftMove" className={WrapperType.cardListLeftWrapper}>
          {tabCards2}
        </ul>
      </div>
    </CardLayout>
  );
};
export default CategoryList;
