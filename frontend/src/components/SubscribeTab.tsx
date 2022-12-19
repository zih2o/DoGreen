import React, { useState } from 'react';

const SubscribeTab = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index: number) => {
    setActiveIndex(index);
  };
  const tabContents = [
    { title: '동물', subscribed: ['펭귄', '북극곰', '동물3', '동물4', '동물5', '동물6', '동물7', '동물8'] },
    { title: '토픽', subscribed: ['뉴스', '푸드', '라이프스타일', '후원', '토픽'] },
  ];
  const tabTitles = tabContents.map((tab, index) => (
    <li role="presentation" key={index} className={'w-1/2 flex-auto'} onClick={() => tabClickHandler(index)}>
      <a
        href="#animals"
        className={
          'text-2xl text-center px-2 py-2 shadow-lg rounded block leading-normal cursor-pointer' +
          (activeIndex === index ? ' bg-gray-600 text-white' : ' text-gray-600 bg-white')
        }
      >
        {tab.title}
      </a>
    </li>
  ));
  const tabCards = tabContents[activeIndex].subscribed.map((card, index) => (
    <div key={index}>
      <li className="w-52">
        <a className="bg-white rounded-xl shadow-md block h-full overflow-hidden " href="#penguin">
          <div className="card_content_img h-52 bg-gray-100"></div>
          <div className="card_content_text text-xl font-bold p-10 text-center">
            <h2>{card}</h2>
          </div>
        </a>
      </li>
    </div>
  ));

  return (
    <div className="MyPage_Content_Wrapper py-5 flex-1">
      <div className="grid grid-cols-1 p-4 mt-12">
        <ul className="tabs flex mb-0 list-none flex-wrap flex-row" role="tablist">
          {tabTitles}
        </ul>
        <div className="flex flex-col w-full px-10 lg:px-20 pt-10">
          <div className="flex-auto">
            <div className="text-3xl font-bold">구독중인 {tabContents[activeIndex].title}</div>
            <div className="card_wrapper mt-20 mb-20 flex">
              <ul className="flex justify-center flex-wrap gap-y-14 gap-x-6">{tabCards}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubscribeTab;
