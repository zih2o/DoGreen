import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

interface IFormInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  example: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  };

  const password = useRef<string>();
  password.current = watch('password');

  return (
    <dialog className="w-[480px] h-[500px]  flex flex-col items-center justify-start border-[3px] border-garden1 rounded shadow-[0_0_30px_rgba(30, 30, 30, 0.185)] box-border bg-gardenBG	z-[10000]">
      <p className="justify-self-start text-center my-10 text-garden1 font-pacifico text-3xl  ">Do green</p>
      <p className="justify-self-start text-left mb-5 text-garden1">Register</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex-col w-full max-w-sm space-y-4">
        <div className="flex items-center justify-between">
          <label htmlFor="username">UserName</label>
          <input
            className="w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:z-10 focus:border-forest3 focus:outline-none focus:ring-forest3 text-xs"
            id="username"
            placeholder="Nickname"
            autoComplete="off"
            {...register('username', {
              required: true,
              maxLength: 20,
            })}
          />
          {errors?.username?.type === 'required' && <p>필수요소입니다! 추가 부탁드립니다.</p>}
          {errors?.username?.type === 'maxLength' && <p>이름은 20자이하로 등록해주세요.</p>}
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="email">Email</label>
          <input
            className="w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:z-10 focus:border-forest3 focus:outline-none focus:ring-forest3 text-xs"
            id="email"
            placeholder="dogreen@green.com"
            {...register('email', {
              required: true,
              pattern: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+$/,
            })}
          />
          {errors?.email?.type === 'required' && <p>깜빡하셨습니다!</p>}
          {errors?.email?.type === 'pattern' && <p>올바른 이메일 형식이 아닙니다.</p>}
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="pwd">Password</label>
          <input
            className="w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:z-10 focus:border-forest3 focus:outline-none focus:ring-forest3 text-xs"
            id="pwd"
            placeholder="Password"
            autoComplete="off"
            {...register('password', {
              required: true,
              minLength: 8,
              pattern: /(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
            })}
          />
          {errors?.password?.type === 'required' && <p>깜빡하셨습니다!</p>}
          {errors?.password?.type === 'minLength' && <p>최소 8자 이상 등록해주세요.</p>}
          {errors?.password?.type === 'pattern' && <p>특수문자와 숫자를 최소 1개 넣어주세요.</p>}
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="pwd">
            Comfirm
            <br />
            Password
          </label>
          <input
            className="w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:z-10 focus:border-forest3 focus:outline-none focus:ring-forest3 text-xs"
            id="confrimPwd"
            placeholder="Confirm your Password"
            autoComplete="off"
            {...register('confirmPassword', {
              required: true,
              validate: (value) => value === password.current,
            })}
          />
          {errors?.confirmPassword?.type === 'validate' && <p>비밀번호를 확인 해주세요</p>}
        </div>

        <div className="flex justify-center align-center">
          <button
            type="submit"
            className=" w-[350px] mt-5  py-2 px-4  bg-white relative flex w-full justify-center hover:bg-gray-100 text-garden4 font-semibold border-garden1 border-[2px] rounded shadow"
            id="login"
          >
            Corfirm Registration
          </button>
        </div>
      </form>
    </dialog>
  );
};
export default Register;
