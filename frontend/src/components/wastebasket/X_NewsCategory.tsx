import React from 'react';
import useNews from '../../hooks/useNews';
import CategoryCards from '../adminPage/CategoryCards';
import CreatCard from './CreatCard';
import Card from '../Card';
export default function NewsCategory() {
  const {
    newsQuery: { data: news },
  } = useNews();
  return <CategoryCards name="뉴스 카테고리" />;
}
