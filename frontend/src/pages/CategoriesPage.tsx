import React from 'react';
import Card from '../components/Card';
import CardSkeleton from '../components/loadings/CardSkeleton';

export default function CategoriesPage() {
  const isLoading = true;
  function Skeleton() {
    return (
      <>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </>
    );
  }
  return (
    <div className="grid grid-cols-2 mt-32 mb-32 md:grid-cols-3 lg:grid-cols-4">
      <Card />
      <Card />
      <Card />
      <Card />
      {isLoading && <Skeleton />}
    </div>
  );
}
