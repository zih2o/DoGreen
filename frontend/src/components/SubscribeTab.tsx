import React, { useState } from 'react';

const SubscribeTab = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index: number) => {
    setActiveIndex(index);
  };
  const tabContentArr = [
    {
      tabTitle: (
        <li role="presentation" key={0} className={'w-1/2 flex-auto'} onClick={() => tabClickHandler(0)}>
          <a
            href="#animals"
            className={
              'text-2xl text-center px-2 py-2 shadow-lg rounded block leading-normal cursor-pointer' +
              (activeIndex === 0 ? ' bg-gray-600 text-white' : ' text-gray-600 bg-white')
            }
          >
            동물
          </a>
        </li>
      ),
      tabContent: (
        <div>
          <div className="text-3xl font-bold ">구독중인 동물</div>
          <div className="card_wrapper mt-20 mb-20 flex block">
            <ul className="flex justify-center flex-wrap gap-y-14 gap-x-6 ">
              <li className="w-52">
                <a className="bg-white rounded-xl shadow-md block h-full overflow-hidden relative" href="#penguin">
                  <div className="card_content_img h-52 bg-gray-100"></div>
                  <div className="card_content_text text-xl font-bold p-10 text-center">
                    <h2>Penguin</h2>
                  </div>
                </a>
              </li>
              <li className="w-52">
                <a className="bg-white rounded-xl shadow-md block h-full overflow-hidden relative" href="#penguin">
                  <div className="card_content_img h-52 bg-gray-100"></div>
                  <div className="card_content_text text-xl font-bold p-10 text-center">
                    <h2>Penguin</h2>
                  </div>
                </a>
              </li>
              <li className="w-52">
                <a className="bg-white rounded-xl shadow-md block h-full overflow-hidden relative" href="#penguin">
                  <div className="card_content_img h-52 bg-gray-100"></div>
                  <div className="card_content_text text-xl font-bold p-10 text-center">
                    <h2>Penguin</h2>
                  </div>
                </a>
              </li>
              <li className="w-52">
                <a className="bg-white rounded-xl shadow-md block h-full overflow-hidden relative" href="#penguin">
                  <div className="card_content_img h-52 bg-gray-100"></div>
                  <div className="card_content_text text-xl font-bold p-10 text-center">
                    <h2>Penguin</h2>
                  </div>
                </a>
              </li>
              <li className="w-52">
                <a className="bg-white rounded-xl shadow-md block h-full overflow-hidden relative" href="#penguin">
                  <div className="card_content_img h-52 bg-gray-100"></div>
                  <div className="card_content_text text-xl font-bold p-10 text-center">
                    <h2>Penguin</h2>
                  </div>
                </a>
              </li>
              <li className="w-52">
                <a className="bg-white rounded-xl shadow-md block h-full overflow-hidden relative" href="#penguin">
                  <div className="card_content_img h-52 bg-gray-100"></div>
                  <div className="card_content_text text-xl font-bold p-10 text-center">
                    <h2>Penguin</h2>
                  </div>
                </a>
              </li>
              <li className="w-52">
                <a className="bg-white rounded-xl shadow-md block h-full overflow-hidden relative" href="#penguin">
                  <div className="card_content_img h-52 bg-gray-100"></div>
                  <div className="card_content_text text-xl font-bold p-10 text-center">
                    <h2>Penguin</h2>
                  </div>
                </a>
              </li>
              <li className="w-52">
                <a className="bg-white rounded-xl shadow-md block h-full overflow-hidden relative" href="#penguin">
                  <div className="card_content_img h-52 bg-gray-100"></div>
                  <div className="card_content_text text-xl font-bold p-10 text-center">
                    <h2>Penguin</h2>
                  </div>
                </a>
              </li>
              <li className="w-52">
                <a className="bg-white rounded-xl shadow-md block h-full overflow-hidden relative" href="#penguin">
                  <div className="card_content_img h-52 bg-gray-100"></div>
                  <div className="card_content_text text-xl font-bold p-10 text-center">
                    <h2>Penguin</h2>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      tabTitle: (
        <li
          role="presentation"
          key={1}
          className={'w-1/2 h-16 cursor-pointer flex-auto text-center'}
          onClick={() => tabClickHandler(1)}
        >
          <a
            href="#topics"
            className={
              'text-2xl text-center px-2 py-2 shadow-lg rounded block leading-normal cursor-pointer' +
              (activeIndex === 1 ? ' text-white bg-gray-600' : ' text-gray-600 bg-white')
            }
          >
            토픽
          </a>
        </li>
      ),
      tabContent: (
        <div>
          <div className="text-3xl font-bold ">구독중인 토픽</div>
          <div className="card_wrapper mt-20 mb-20 flex block">
            <ul className="flex justify-center flex-wrap gap-y-14 gap-x-6 ">
              <li className="w-52">
                <a className="bg-white rounded-xl shadow-md block h-full overflow-hidden relative" href="#penguin">
                  <div className="card_content_img h-52 bg-gray-100"></div>
                  <div className="card_content_text text-xl font-bold p-10 text-center">
                    <h2>토픽</h2>
                  </div>
                </a>
              </li>
              <li className="w-52">
                <a className="bg-white rounded-xl shadow-md block h-full overflow-hidden relative" href="#penguin">
                  <div className="card_content_img h-52 bg-gray-100"></div>
                  <div className="card_content_text text-xl font-bold p-10 text-center">
                    <h2>뉴스</h2>
                  </div>
                </a>
              </li>
              <li className="w-52">
                <a className="bg-white rounded-xl shadow-md block h-full overflow-hidden relative" href="#penguin">
                  <div className="card_content_img h-52 bg-gray-100"></div>
                  <div className="card_content_text text-xl font-bold p-10 text-center">
                    <h2>푸드</h2>
                  </div>
                </a>
              </li>
              <li className="w-52">
                <a className="bg-white rounded-xl shadow-md block h-full overflow-hidden relative" href="#penguin">
                  <div className="card_content_img h-52 bg-gray-100"></div>
                  <div className="card_content_text text-xl font-bold p-10 text-center">
                    <h2>그린</h2>
                  </div>
                </a>
              </li>
              <li className="w-52">
                <a className="bg-white rounded-xl shadow-md block h-full overflow-hidden relative" href="#penguin">
                  <div className="card_content_img h-52 bg-gray-100"></div>
                  <div className="card_content_text text-xl font-bold p-10 text-center">
                    <h2>라이프스타일</h2>
                  </div>
                </a>
              </li>
              <li className="w-52">
                <a className="bg-white rounded-xl shadow-md block h-full overflow-hidden relative" href="#penguin">
                  <div className="card_content_img h-52 bg-gray-100"></div>
                  <div className="card_content_text text-xl font-bold p-10 text-center">
                    <h2>후원</h2>
                  </div>
                </a>
              </li>
              <li className="w-52">
                <a className="bg-white rounded-xl shadow-md block h-full overflow-hidden relative" href="#penguin">
                  <div className="card_content_img h-52 bg-gray-100"></div>
                  <div className="card_content_text text-xl font-bold p-10 text-center">
                    <h2>토픽</h2>
                  </div>
                </a>
              </li>
              <li className="w-52">
                <a className="bg-white rounded-xl shadow-md block h-full overflow-hidden relative" href="#penguin">
                  <div className="card_content_img h-52 bg-gray-100"></div>
                  <div className="card_content_text text-xl font-bold p-10 text-center">
                    <h2>제품</h2>
                  </div>
                </a>
              </li>
              <li className="w-52">
                <a className="bg-white rounded-xl shadow-md block h-full overflow-hidden relative" href="#penguin">
                  <div className="card_content_img h-52 bg-gray-100"></div>
                  <div className="card_content_text text-xl font-bold p-10 text-center">
                    <h2>펭귄</h2>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="MyPage_Content_Wrapper py-5 flex-1">
      <div className="grid grid-cols-1 p-4 mt-2">
        <ul className="tabs flex mb-0 list-none flex-wrap flex-row" role="tablist">
          {tabContentArr.map((section) => {
            return section.tabTitle;
          })}
        </ul>
        <div className="relative flex flex-col w-full px-20 pt-10 ">
          <div className="flex-auto">{tabContentArr[activeIndex].tabContent}</div>
        </div>
      </div>
    </div>
  );
};
export default SubscribeTab;
