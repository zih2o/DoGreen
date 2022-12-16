import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const Login = () => {
  return (
    <dialog className="w-[450px] h-[380px] flex flex-col items-center justify-center border-[3px] border-garden1 rounded shadow-[0_0_30px_rgba(30, 30, 30, 0.185)] box-border bg-gardenBG	z-[10000]">
      <div className="flex-col w-full max-w-sm space-y-4 ">
        <p className="text-center text-garden1 font-pacifico text-3xl mt-1 mb-10 pb-3">Do Green!</p>
        <div className="flex items-center justify-between">
          <label htmlFor="email">Email</label>
          <input
            className="w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:z-10 focus:border-forest3 focus:outline-none focus:ring-forest3 text-xs"
            id="email"
            placeholder="dogreen@green.com"
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="pwd">Password</label>
          <input
            className="w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:z-10 focus:border-forest3 focus:outline-none focus:ring-forest3 text-xs"
            id="pwd"
            placeholder="Password"
            autoComplete="off"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-[350px] mt-10 bg-white relative flex w-full justify-center hover:bg-gray-100 text-garden4 font-semibold py-2 px-4 border-garden1 border-[2px] rounded shadow"
        id="login"
      >
        Login
      </button>
      <a className="mt-3 justify-self-start" href="/register" id="resgister">
        Create account
      </a>
    </dialog>
  );
};

export default Login;
