import React from 'react';

import CardSkeleton from '../loadings/CardSkeleton';
import Card from './Card';

import useNews from '../../hooks/useNews';

export default function NewsCards() {
  const {
    newsQuery: { isLoading, data: news },
  } = useNews();
  return (
    <div className="flex flex-wrap">
      {isLoading ? (
        <CardSkeleton />
      ) : (
        news.map((item) => (
          <Card id={item._id} key={item._id} img="" name={item.category} description={item.content} cardtype="post" />
        ))
      )}
    </div>
  );
}
