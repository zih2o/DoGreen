import React from 'react';
import CategoryList from '../components/home/CategoryList';
import TestBody from '../components/TestBody';
function Home() {
  return (
    <div className="w-full min-h-screen grid grid-cols-10 grid-rows-6">
      <div className="container mx-auto grid mt-[106.77px] mb-[92px] col-span-full row-span-6 sm:mb-[72px]">
        {/* <TestBody title="Home" /> */}
        <CategoryList />
      </div>
    </div>
  );
}
export default Home;
