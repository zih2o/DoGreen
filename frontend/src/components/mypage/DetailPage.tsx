import React from 'react';
import MyPageMain from './MyPageMain';
import EditUserInfo from './EditUserInfo';
import SubscribeTab from './SubscribeTab';
import ChallengeInfo from './ChallengeInfo';

export const MyHome = () => {
  return <MyPageMain />;
};
export const MyInfoEditTab = () => {
  return <EditUserInfo />;
};
export const MySubscribe = () => {
  return <SubscribeTab />;
};
export const MyChallenge = () => {
  return <ChallengeInfo />;
};
