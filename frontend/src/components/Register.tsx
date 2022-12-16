import React, { useState } from 'react';

const Register = () => {
  return (
    <dialog className="w-[480px] h-[500px]  flex flex-col items-center justify-start border-[3px] border-garden1 rounded shadow-[0_0_30px_rgba(30, 30, 30, 0.185)] box-border bg-gardenBG	z-[10000]">
      <p className="justify-self-start text-center my-10 text-garden1 font-pacifico text-3xl  ">Do green</p>
      <p className="justify-self-start text-left mb-5 text-garden1">Register</p>
      <div className="flex-col w-full max-w-sm space-y-4">
        <div className="flex items-center justify-between">
          <label htmlFor="username">UserName</label>
          <input
            className="w-3/4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-300 focus:z-10 focus:border-forest3 focus:outline-none focus:ring-forest3 text-xs"
            id="username"
            placeholder="Nickname"
            autoComplete="off"
          />
        </div>

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
          />
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
      </div>
    </dialog>
  );
};
export default Register;
