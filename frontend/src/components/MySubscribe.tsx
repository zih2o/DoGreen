import React from 'react';
import MyPageTab from './MyPageTab';
import SubscribeTab from './SubscribeTab';
const MySubscribe = () => {
  return (
    <div>
      <div className="w-full min-h-screen">
        <div className="bg-rose-100 py-24">
          <h2 className="text-3xl font-bold underline">마이페이지</h2>
        </div>
        <div className="flex min-h-screen w-full">
          <div className="MyPage_Tab_Wrapper w-1/4 bg-gray-200">
            <MyPageTab />
          </div>
          <div className="MyPage_Content_Wrapper w-3/4 bg-slate-100">{<SubscribeTab />}</div>
        </div>
      </div>
    </div>
  );
};
export default MySubscribe;
