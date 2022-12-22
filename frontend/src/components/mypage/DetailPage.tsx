import React from 'react';
import MyPageMain from './MyPageMain';
import { FormEditUserInfo } from './EditUserInfo';
import SubscribeTab from './SubscribeTab';
import ChallengeInfo from './ChallengeInfo';

export const MyHome = () => {
  return <MyPageMain />;
};
export const MyInfoEditTab = () => {
  return <FormEditUserInfo />;
};
export const MySubscribe = () => {
  return <SubscribeTab />;
};
export const MyChallenge = () => {
  return <ChallengeInfo />;
};
