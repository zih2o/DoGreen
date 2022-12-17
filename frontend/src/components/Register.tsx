import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

interface IFormInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
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
    <div className="w-[520px] h-[660px] flex flex-col items-center justify-start border-[3px] border-garden1 rounded shadow-[0_0_30px_rgba(30, 30, 30, 0.185)] box-border bg-gardenBG">
      <p className="justify-self-start text-center my-10 text-garden1 font-pacifico text-3xl  ">Do green!</p>
      <p className="justify-self-start text-left mb-10 text-garden1 text-xl">Register</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex-col w-full px-10">
        <div className="flex items-center justify-between space-y-2">
          <label htmlFor="username" className="text-xl w-[120px]">
            UserName
          </label>
          <input
            className={`w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:z-10 focus:border-forest1 focus:outline-none focus:ring-forest3 text-xs ${
              errors?.username && 'border-forest3'
            }`}
            id="username"
            type="text"
            placeholder="Nickname"
            autoComplete="off"
            {...register('username', {
              required: true,
              minLength: 2,
              maxLength: 20,
            })}
          />
        </div>
        <p className="text-base pl-[115px] mt-1 min-h-[35px] text-forest3">
          {errors?.username?.type === 'required'
            ? '필수요소입니다! 추가 부탁드립니다.'
            : errors?.username?.type === ('maxLength' && 'minLength')
            ? '이름은 2자이상 20자이하로 등록해주세요.'
            : ''}
        </p>
        <div className="flex items-center justify-between">
          <label htmlFor="email" className="text-xl  w-[120px]">
            Email
          </label>
          <input
            className={`w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:z-10 focus:border-forest1 focus:outline-none focus:ring-forest3 text-xs ${
              errors?.username && 'border-forest3'
            }`}
            id="email"
            type="email"
            placeholder="dogreen@green.com"
            {...register('email', {
              required: true,
              pattern: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+$/,
            })}
          />
        </div>
        <p className="text-base pl-[115px] mt-1 min-h-[35px] text-forest3">
          {errors?.email?.type === 'required'
            ? '깜빡하셨습니다!'
            : errors?.email?.type === 'pattern'
            ? '올바른 이메일 형식이 아닙니다.'
            : ''}
        </p>
        <div className="flex items-center justify-between">
          <label htmlFor="pwd" className="text-xl  w-[120px]">
            Password
          </label>
          <input
            className={`w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:z-10 focus:border-forest1 focus:outline-none focus:ring-forest3 text-xs ${
              errors?.username && 'border-forest3'
            }`}
            id="pwd"
            type="password"
            placeholder="Password"
            autoComplete="off"
            {...register('password', {
              required: true,
              minLength: 8,
              pattern: /(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
            })}
          />
        </div>
        <p className="text-base pl-[115px] mt-1 min-h-[35px] text-forest3">
          {errors?.password?.type === 'required'
            ? '깜빡하셨습니다!'
            : errors?.password?.type === 'minLength'
            ? '최소 8자 이상 등록해주세요.'
            : errors?.password?.type === 'pattern'
            ? '특수문자와 숫자를 최소 1개 넣어주세요.'
            : ''}
        </p>
        <div className="flex items-center justify-between">
          <label htmlFor="pwd" className="text-xl w-[120px]">
            Comfirm
            <br />
            Password
          </label>
          <input
            className={`w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:z-10 focus:border-forest1 focus:outline-none focus:ring-forest3 text-xs ${
              errors?.username && 'border-forest3'
            }`}
            id="confrimPwd"
            type="password"
            placeholder="Confirm your Password"
            autoComplete="off"
            {...register('confirmPassword', {
              required: true,
              validate: (value) => value === password.current,
            })}
          />
        </div>
        <p className="text-base pl-[115px] mt-1 min-h-[35px] text-forest3">
          {errors?.password?.type === 'required'
            ? '깜빡하셨습니다!'
            : errors?.confirmPassword?.type === 'validate'
            ? '비밀번호를 확인 해주세요.'
            : ''}
        </p>
        <div className="flex justify-center align-center">
          <button
            type="submit"
            className=" w-[350px] mt-10  py-3 px-4  bg-white relative flex w-full justify-center hover:bg-gray-100 text-garden4 font-semibold  text-xl border-garden1 border-[2px] rounded shadow"
          >
            Corfirm Registration
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
