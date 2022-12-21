import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { CardType, TextType, WrapperType } from '../common/theme';
import { CardLayout } from '../layout/GlobalLayout';
import { MyPageContentsLayout } from '../layout/MyPageLayout';
import { AuthStore } from '../../stores/UserStore';

const serverURL = 'http://localhost:3000';

interface IUserSubscriptionData {
  id: string;
  categoryName: string;
  mascotName: string;
  mascotImage: string;
}
const getUserSubscription = async (accessToken: string | null) => {
  const response = await axios.get(`${serverURL}/subscribe`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

const SubscribeTab = () => {
  const navigate = useNavigate();
  const [userCardInfo, setUserCardInfo] = useState<IUserSubscriptionData | null>(null);
  const accessToken = AuthStore((state) => state.token);

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    }
    const data = getUserSubscription(accessToken);
    data.then((res) => {
      setUserCardInfo(res);
    });
  }, []);
  console.log(userCardInfo);
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
