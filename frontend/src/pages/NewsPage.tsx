import React from 'react';
import News from '../components/News';
import Loading from '../components/skeletons/Loading';
export default function NewsPage() {
  const isLoading = true;
  return (
    <div className="w-full min-h-screen mt-32 mb-24">
      <News />
      <News />
      {isLoading && <Loading />}
    </div>
  );
}
