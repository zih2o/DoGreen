import React from 'react';
import CardsList from '../components/homepage/CardsList';
import MainTopCards from '../components/structure/MainTopCards';
import { ToTopButton } from '../components/structure/ScrollToTop';
import { useDrawerStore } from '../hooks/useDrawer';

function Home() {
  const { drawerOpen } = useDrawerStore();
  console.log(drawerOpen);

  return (
    <>
      <div className="w-full min-h-screen grid grid-cols-10 grid-rows-6">
        <div className="grid mt-[106.77px] mb-[92px] col-span-full row-span-6 sm:mb-[72px]">
          <MainTopCards />
          <CardsList />
        </div>
      </div>
      {!drawerOpen && <ToTopButton />}
    </>
  );
}
export default Home;
