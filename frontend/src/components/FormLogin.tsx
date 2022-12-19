import React, { useState } from 'react';
import { Form } from './Form';
import { FormInput } from './FormInput';
import { requiredMessage, validateEmail, validatePassword } from './util/validateUtil';

export const FormLogin = () => {
  const onSubmit = async (data) => {
    try {
      console.log(JSON.stringify(data));

      alert(JSON.stringify(data));
    } catch (err: any) {
      alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
    }
  };
  const [currentPwd, setCurrentPwd] = useState<string>('');

  return (
    <div className="w-[620px] h-[550px] flex flex-col items-center justify-start border-[3px] border-garden1 rounded shadow-[0_0_30px_rgba(30, 30, 30, 0.185)] box-border bg-gardenBG">
      <p className="justify-self-start text-center my-20 pb-2 text-garden1 font-pacifico text-4xl  ">Do Green!</p>
      <Form
        onSubmit={onSubmit}
        buttonName="Login"
        buttonClass="w-full bg-white flex justify-center hover:bg-gray-100 text-2xl text-garden4 font-semibold py-3 mb-2 mt-3 border-garden1 border-[2px] rounded shadow"
      >
        <FormInput
          name="Email"
          id="email"
          placeholder="이메일"
          type="email"
          rules={{ required: requiredMessage, validate: validateEmail }}
        />
        <FormInput
          name="Password"
          id="password"
          placeholder="비밀번호 입력"
          type="password"
          onChange={(e) => setCurrentPwd(e.target.value)}
          rules={{ required: requiredMessage, validate: validatePassword }}
        />
      </Form>
      <div className="flex p-3 mr-8 self-end text-xl ">
        <p className="text-garden4">Do It Together.. </p>
        <a className="text-garden1 pl-3 font-semibold" href="/register" id="resgister">
          Create account
        </a>
      </div>
    </div>
  );
};
