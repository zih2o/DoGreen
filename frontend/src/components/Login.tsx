import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex-col w-full max-w-sm space-y-8">
      <p className="text-center">로그인</p>
      <div className="flex items-center justify-between">
        <label htmlFor="email">이메일</label>
        <input
          className="w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          id="email"
          placeholder="Email"
        />
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="pwd">비밀번호</label>
        <input
          className="w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          id="pwd"
          placeholder="Password"
          autoComplete="off"
        />
      </div>
      <button
        type="submit"
        className=" bg-white relative flex w-full justify-center  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        id="login"
      >
        로그인
      </button>
      <a className="relative flex w-full justify-center" href="/register" id="resgister">
        회원가입
      </a>
    </div>
  );
};

export default Login;
