import React from 'react';
import NewsSkeleton from '../components/loadings/NewsSkeleton';
import News from '../components/newspage/News';

export default function NewsPage() {
  const isLoading = true;
  function Skeleton() {
    return (
      <>
        <NewsSkeleton />
        <NewsSkeleton />
      </>
    );
  }
  return (
    <div className="w-full min-h-screen mt-32 mb-24">
      <News />
      <News />
      {isLoading && <Skeleton />}
    </div>
  );
}
