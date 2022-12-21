import React from 'react';
import { Link } from 'react-router-dom';
import { CardType, TextType, WrapperType } from '../common/theme';
import { CardLayout } from '../layout/GlobalLayout';
import { MyPageContentsLayout } from '../layout/MyPageLayout';

const SubscribeTab = () => {
  const tabCategories = { subscribed: ['뉴스', '푸드', '라이프스타일', '후원', '토픽'] };
  const tabCards = tabCategories.subscribed.map((card, index) => (
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
  ));

  return (
    <MyPageContentsLayout>
      <CardLayout>
        <div className={TextType.titleText}>구독중인 토픽</div>
        <div className={WrapperType.cardContentsWrapper}>
          <ul className={WrapperType.cardListWrapper}>{tabCards}</ul>
        </div>
      </CardLayout>
    </MyPageContentsLayout>
  );
};
export default SubscribeTab;
