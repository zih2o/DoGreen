import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { CardLayout } from '../layout/GlobalLayout';
import { CardType, TextType, WrapperType } from '../common/theme';

const serverURL = 'http://localhost:3000';

interface ICategories {
  id: string;
  categoryName: string;
  mascotName: string;
  mascotImage: string;
  posts: Array<string>;
}

const getCategories = async () => {
  const response = await axios.get(`${serverURL}/category`);
  return response.data;
};

const CardsList = () => {
  const [categoryInfo, setCategoryInfo] = useState<ICategories[] | null>(null);

  useEffect(() => {
    const data = getCategories();
    data.then((res) => {
      setCategoryInfo(res);
    });
  }, []);

  const tabCards1 = categoryInfo?.map((card, index) => {
    return (
      <>
        <li key={index} className={CardType.size}>
          <Link to="#" className={CardType.layout}>
            <div className={CardType.imgWrapper}>
              <img className={CardType.img} src={card.mascotImage} alt="default card" />
            </div>
            <div className={CardType.text}>
              <h2>
                {card.mascotName}이 전하는 오늘의 {card.categoryName}
              </h2>
            </div>
          </Link>
        </li>
      </>
    );
  });

  return (
    <CardLayout isHome>
      <div className="container mx-auto flex mt-12">
        <div className={TextType.titleText}>{'어떤 주제가 궁금한가요?'} &nbsp;</div>
        <div className={TextType.titleText + ' text-garden1'}>
          <Link to="/categories">
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
          {tabCards1}
        </ul>
      </div>
    </CardLayout>
  );
};
export default CardsList;
