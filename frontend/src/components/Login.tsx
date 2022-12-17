import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

interface IFormInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  example: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    try {
      console.log(JSON.stringify(data));

      alert(JSON.stringify(data));
    } catch (err: any) {
      alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
    }
  };

  return (
    <div className="w-[450px] h-[380px] flex flex-col items-center justify-center border-[3px] border-garden1 rounded  box-border bg-gardenBG ">
      <div className="flex-col w-full max-w-sm space-y-4 ">
        <p className="text-center text-garden1 font-pacifico text-3xl mt-1 mb-10 pb-3">Do Green!</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-between mb-3 text-xl">
            <label htmlFor="email">Email</label>
            <input
              className="w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:z-10 focus:border-forest3 focus:outline-none focus:ring-forest3 text-xs"
              id="email"
              type="email"
              placeholder="dogreen@green.com"
              {...register('email', {
                required: true,
                pattern: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+$/,
              })}
            />
          </div>
          <div className="flex items-center justify-between text-xl">
            <label htmlFor="pwd">Password</label>
            <input
              className="w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:z-10 focus:border-forest3 focus:outline-none focus:ring-forest3 text-xs"
              id="pwd"
              type="password"
              placeholder="Password"
              autoComplete="off"
              {...register('password', {
                required: true,
              })}
            />
          </div>
          <button
            type="submit"
            className="w-[380px] mt-10 bg-white relative flex w-full justify-center hover:bg-gray-100 text-xl text-garden4 font-semibold py-2 border-garden1 border-[2px] rounded shadow"
            id="login"
          >
            Login
          </button>
        </form>
        <div className="flex justify-end pr-3">
          <p>Do It Together..! </p>
          <a className="text-garden4 pl-3" href="/register" id="resgister">
            Create account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
