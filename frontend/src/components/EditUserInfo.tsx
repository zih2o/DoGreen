import React from 'react';
import { useForm } from 'react-hook-form';
import { MyPageContentsLayout } from './layout/MyPageLayout';
interface IFormInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const EditUserInfo = () => {
  return (
    <MyPageContentsLayout>
      <p className="text-center p-10 text-3xl font-bold">내 정보 수정</p>
      <form className="flex flex-row justify-around text-xl font-bold mt-20 ">
        <div className="w-3/5 space-y-10">
          <div className="flex mb-4 items-center justify-between ">
            <label htmlFor="email">이메일</label>
            <input
              className="w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
              id="email"
              placeholder="Email"
              disabled
            />
          </div>

          <div className="flex mb-4 items-center justify-between">
            <label htmlFor="pwd">비밀번호</label>
            <input
              className="w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
              id="pwd"
              placeholder="Password"
              autoComplete="off"
            />
          </div>

          <div className="flex mb-4 items-center justify-between">
            <label htmlFor="pwd">
              비밀번호
              <br />
              확인
            </label>
            <input
              className="w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
              id="confrimPwd"
              placeholder="Password"
              autoComplete="off"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="username">이름</label>
            <input
              className="w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
              id="username"
              placeholder="Username"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2022/01/30/17/16/snowman-6981771_960_720.jpg"
              alt="프로필 사진 변경"
            />
          </div>
          <button>프로필 사진 변경</button>
          <button type="submit" className="font-semibold pt-[300px] px-4 border rounded" id="login">
            수정 완료
          </button>
        </div>
      </form>
    </MyPageContentsLayout>
  );
};

export default EditUserInfo;
