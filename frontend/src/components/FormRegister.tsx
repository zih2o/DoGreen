import React, { useState } from 'react';
import { Form } from './Form';
import { FormInput } from './FormInput';
import { validateName, requiredMessage, validateEmail, validatePassword } from './util/validateUtil';

export const FormRegister = () => {
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const [currentPwd, setCurrentPwd] = useState<string>('');

  return (
    <div className="w-[640px] h-[715px] flex flex-col items-center justify-start border-[3px] border-garden1 rounded shadow-[0_0_30px_rgba(30, 30, 30, 0.185)] box-border bg-gardenBG">
      <p className="justify-self-start text-center my-20 pb-2 text-garden1 font-pacifico text-4xl  ">Do it together!</p>
      <Form
        onSubmit={onSubmit}
        buttonName="register"
        buttonClass="w-full bg-white flex justify-center hover:bg-gray-100 text-2xl text-garden4 font-semibold py-3 mb-2 mt-3 border-garden1 border-[2px] rounded shadow"
      >
        <FormInput
          name="User Name"
          id="Username"
          placeholder="3자이상 20자이하로 등록해주세요."
          type="text"
          rules={{ required: requiredMessage, validate: validateName }}
        />
        <FormInput
          name="Email"
          id="email"
          placeholder="email"
          type="email"
          rules={{ required: requiredMessage, validate: validateEmail }}
        />
        <FormInput
          name="Password"
          id="password"
          placeholder="특수문자와 숫자를 최소 1개씩 포함해주세요."
          type="password"
          onChange={(e) => setCurrentPwd(e.target.value)}
          rules={{ required: requiredMessage, validate: validatePassword }}
        />
        <FormInput
          name="Confirm Password"
          id="confrimPwd"
          placeholder="동일한 비밀번호를 입력해주세요."
          type="password"
          rules={{
            required: requiredMessage,
            validate: (value) => (value === currentPwd ? true : '비밀번호 확인 부탁드립니다.'),
          }}
        />
      </Form>
    </div>
  );
};
