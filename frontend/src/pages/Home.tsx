import React from 'react';
import TestBody from '../components/TestBody';
function Home() {
  return (
    <div className="w-full min-h-screen grid grid-cols-10 grid-rows-6">
      <div className="grid mt-32 mb-[92px] col-span-full row-span-6 sm:mb-[72px]">
        <TestBody title="Home"/>
      </div>
    </div>
  );
}
export default Home;
