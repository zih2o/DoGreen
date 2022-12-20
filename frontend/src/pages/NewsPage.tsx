import React from 'react';
import NewsSkeleton from '../components/loadings/NewsSkeleton';
import News from '../components/News';

export default function NewsPage() {
  const isLoading = true;
  return (
    <div className="w-full min-h-screen mt-32 mb-24">
      <News />
      <News />
      {isLoading && <NewsSkeleton />}
    </div>
  );
}
