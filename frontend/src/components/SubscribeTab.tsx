import React from 'react';
import { Link } from 'react-router-dom';
import { TextType } from './common/theme';
import { CardLayout } from './layout/GlobalLayout';
import { MyPageContentsLayout } from './layout/MyPageLayout';

const SubscribeTab = () => {
  const tabCategories = { subscribed: ['뉴스', '푸드', '라이프스타일', '후원', '토픽'] };
  const tabCards = tabCategories.subscribed.map((card, index) => (
    <li className="w-56" key={index}>
      <Link to="#" className="bg-white rounded-xl shadow-md block h-full overflow-hidden ">
        <div className="card_content_img h-52 bg-gray-100"></div>
        <div className="card_content_text text-xl font-bold p-10 text-center">
          <h2>{card}</h2>
        </div>
      </Link>
    </li>
  ));

  return (
    <MyPageContentsLayout>
      <CardLayout>
        <div className={TextType.titleText}>구독중인 토픽</div>
        <div className="card_wrapper mt-20 mb-20 mx-0 flex">
          <ul className="flex justify-start place-items-stretch  flex-wrap gap-y-14 gap-x-8">{tabCards}</ul>
        </div>
      </CardLayout>
    </MyPageContentsLayout>
  );
};
export default SubscribeTab;
