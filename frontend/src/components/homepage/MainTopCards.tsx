import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'flowbite-react';
import { TextType } from '../common/theme';
import useCategory from '../../hooks/useCategory';

function MainTopCards() {
  const {
    catQuery: { data: categories },
  } = useCategory();

  return (
    <>
      <Carousel className="container mx-auto">
        <div id="animation-carousel" className="relative" data-carousel="slide">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-[500px] ">
            <div className=" duration-500 ease-linear" data-carousel-item>
              <img
                src="assets/do1.png"
                className="absolute block w-[90%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div id="animation-carousel" className="relative" data-carousel="slide">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96 ">
            <div className="duration-500 ease-linear" data-carousel-item>
              <img
                src="assets/do2.png"
                className="absolute block w-[90%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
        </div>
      </Carousel>
      {categories && (
        <div className="container mx-auto">
          <div className={TextType.titleText}>{'귀여운 친구들을 만나보세요!'} &nbsp;</div>
          <div className="flex justify-evenly mt-8 sm:mt-16">
            <Link to={`/categories/${categories[0]._id}`}>
              <div
                className=" static cursor-pointer m-3 p-3  h-52 sm:h-80 md:h-96 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#292524] dark:border-[#292524]
       
        hover:scale-[1.1]"
              >
                <div className="flex flex-col items-center text-center ">
                  <img
                    className="w-20 h-20 sm:w-40 sm:h-40 md:w-52 md:h-52 m-2 sm:m-6 rounded-full shadow-lg"
                    src={categories[0].mascotImage}
                    alt="default card"
                  />
                  <h5 className="my-3 text-lg sm:text-3xl text-center font-medium text-gray-900 dark:text-white">
                    {categories[0].mascotName}
                  </h5>
                  <span className="text-sm sm:text-xl text-gray-500 dark:text-gray-400">
                    {categories[0].categoryName}
                  </span>
                </div>
              </div>{' '}
            </Link>
            <Link to={`/categories/${categories[1]._id}`}>
              <div
                className=" static cursor-pointer m-3 p-3 h-52 sm:h-80 md:h-96 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#292524] dark:border-[#292524]

        hover:scale-[1.1]"
              >
                <div className="flex flex-col items-center text-center ">
                  <img
                    className="w-20 h-20 sm:w-40 sm:h-40 md:w-52 md:h-52 m-2 sm:m-6 rounded-full shadow-lg"
                    src={categories[1].mascotImage}
                    alt="default card"
                  />
                  <h5 className="my-3 text-lg sm:text-3xl text-center font-medium text-gray-900 dark:text-white">
                    {categories[1].mascotName}
                  </h5>
                  <span className="text-sm sm:text-xl text-gray-500 dark:text-gray-400">
                    {categories[1].categoryName}
                  </span>
                </div>
              </div>{' '}
            </Link>
            <Link to={`/categories/${categories[2]._id}`}>
              <div
                className=" static cursor-pointer m-3 p-3 h-52 sm:h-80 md:h-96 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#292524] dark:border-[#292524]

        hover:scale-[1.1]"
              >
                <div className="flex flex-col items-center text-center ">
                  <img
                    className="w-20 h-20 sm:w-40 sm:h-40 md:w-52 md:h-52 m-2 sm:m-6 rounded-full shadow-lg"
                    src={categories[2].mascotImage}
                    alt="default card"
                  />
                  <h5 className="my-3 text-lg sm:text-3xl text-center font-medium text-gray-900 dark:text-white">
                    {categories[2].mascotName}
                  </h5>
                  <span className="text-sm sm:text-xl text-gray-500 dark:text-gray-400">
                    {categories[2].categoryName}
                  </span>
                </div>
              </div>{' '}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
export default MainTopCards;
