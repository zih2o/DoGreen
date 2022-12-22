import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { CardType, TextType, WrapperType } from '../common/theme';
import { CardLayout } from '../layout/GlobalLayout';
import { MyPageContentsLayout } from '../layout/MyPageLayout';
import { AuthStore } from '../../hooks/UserStore';

const serverURL = 'http://localhost:3000';

interface IUserSubscriptionData {
  id: string;
  categoryName: string;
  mascotName: string;
  mascotImage: string;
}
const getUserSubscription = async (accessToken: string | null) => {
  const response = await axios
    .get(`${serverURL}/subscribe`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.response.data);
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
          <img className={CardType.img} src={userCardInfo?.mascotImage} alt="default card" />
        </div>
        <div className={CardType.text}>
          <h2>
            {userCardInfo?.mascotName} 전하는 오늘의 {userCardInfo?.categoryName}{' '}
          </h2>
        </div>
      </Link>
    </li>
  ));

  return (
    <MyPageContentsLayout>
      {userCardInfo && (
        <CardLayout>
          <div className={TextType.titleText}>구독중인 토픽</div>
          <div className={WrapperType.cardContentsWrapper}>
            <ul className={WrapperType.cardListWrapper}>{tabCards}</ul>
          </div>
        </CardLayout>
      )}
      <div className="flex-col mt-60 align-middle">
        <div className={TextType.titleText + ' text-center'}>구독 정보가 없습니다</div>
        <br></br>
        <div className="text-2xl text-center leading-10 font-bold text-garden1 underline">
          <Link to="/categories">구독 바로가기</Link>
        </div>
      </div>
    </MyPageContentsLayout>
  );
};
export default SubscribeTab;
