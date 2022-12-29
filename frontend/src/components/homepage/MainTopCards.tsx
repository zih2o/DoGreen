import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'flowbite-react';
import { TextType } from '../common/theme';
function MainTopCards() {
  const exData = [
    {
      mascotName: '서펭귄',
      category: '뉴스레터',
    },
    {
      mascotName: '박펭귄',
      category: '푸드',
    },
    {
      mascotName: '손펭귄',
      category: '라이프스타일',
    },
  ];

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
      <div className="container mx-auto mt-16 sm:mt-32 mb-20">
        <div className={TextType.titleText}>{'귀여운 친구들을 만나보세요!'} &nbsp;</div>
        <div className="flex justify-evenly mt-8 sm:mt-16">
          <div
            className=" static cursor-pointer m-3 p-3 w-full h-52 sm:h-80 md:h-96 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#292524] dark:border-[#292524]
        hover:bg-blue-50
        hover:scale-[1.1]"
          >
            <div className="flex flex-col items-center">
              <img
                className="w-20 h-20 sm:w-40 sm:h-40 md:w-52 md:h-52 m-2 sm:m-6 rounded-full shadow-lg"
                src="https://w.namu.la/s/91372f442eecd338ac9133706e272f0617405e0e647c72400b2854f7ee8c0688f5611d44aca4955aec4bd2c7e1d2c5a2a3da5167f5cf32a7bc21ccc8863149cdfdc67bd6569bda06cee24ef37a471d9f63fe50702d7250649574066d3378b010"
                alt="default card"
              />
              <h5 className="my-3 text-lg sm:text-3xl font-medium text-gray-900 dark:text-white">
                {exData[0].mascotName}
              </h5>
              <span className="text-sm sm:text-xl text-gray-500 dark:text-gray-400">{exData[0].category}</span>
            </div>
          </div>{' '}
          <div
            className=" static cursor-pointer m-3 p-3 w-full h-52 sm:h-80 md:h-96 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#292524] dark:border-[#292524]
        hover:bg-blue-50
        hover:scale-[1.1]"
          >
            <div className="flex flex-col items-center">
              <img
                className="w-20 h-20 sm:w-40 sm:h-40 md:w-52 md:h-52 m-2 sm:m-6 rounded-full shadow-lg"
                src="https://w.namu.la/s/91372f442eecd338ac9133706e272f0617405e0e647c72400b2854f7ee8c0688f5611d44aca4955aec4bd2c7e1d2c5a2a3da5167f5cf32a7bc21ccc8863149cdfdc67bd6569bda06cee24ef37a471d9f63fe50702d7250649574066d3378b010"
                alt="default card"
              />
              <h5 className="my-3 text-lg sm:text-3xl font-medium text-gray-900 dark:text-white">
                {exData[1].mascotName}
              </h5>
              <span className="text-sm sm:text-xl text-gray-500 dark:text-gray-400">{exData[1].category}</span>
            </div>
          </div>{' '}
          <div
            className=" static cursor-pointer m-3 p-3 w-full h-52 sm:h-80 md:h-96 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#292524] dark:border-[#292524]
        hover:bg-blue-50
        hover:scale-[1.1]"
          >
            <div className="flex flex-col items-center">
              <img
                className="w-20 h-20 sm:w-40 sm:h-40 md:w-52 md:h-52 m-2 sm:m-6 rounded-full shadow-lg"
                src="https://w.namu.la/s/91372f442eecd338ac9133706e272f0617405e0e647c72400b2854f7ee8c0688f5611d44aca4955aec4bd2c7e1d2c5a2a3da5167f5cf32a7bc21ccc8863149cdfdc67bd6569bda06cee24ef37a471d9f63fe50702d7250649574066d3378b010"
                alt="default card"
              />
              <h5 className="my-3 text-lg sm:text-3xl font-medium text-gray-900 dark:text-white">
                {exData[2].mascotName}
              </h5>
              <span className="text-sm sm:text-xl text-gray-500 dark:text-gray-400">{exData[2].category}</span>
            </div>
          </div>{' '}
        </div>
      </div>
    </>
  );
}
export default MainTopCards;
