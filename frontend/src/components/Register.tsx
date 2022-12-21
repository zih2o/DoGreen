import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { userValidation } from './yup';
import axios from 'axios';

import { InputContainer } from './InputContainer';
import { FormInput, IputError, InputButton } from './FormsAboutInput';

interface IRegisterInputProps {
  username: string;
  email: string;
  password: string;
  confimrPassword: string;
}

const serverURL = 'http://localhost:3000';

export const Register = () => {
  const navigate = useNavigate();
  const { schema } = userValidation();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IRegisterInputProps>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  console.log('### errors', errors);

  const onSubmit = async (data: IRegisterInputProps) => {
    try {
      console.log(`입력값 : ${data}`);
      const res = await axios.post(`${serverURL}/auth/register`, data);
      console.log(res);
      alert(`정상적으로 회원가입되었습니다.
      해당 창은 모달형태로 대체될 예정입니다.`);
      navigate('/');
    } catch (error: any) {
      alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요:
      ${error.message}
      해당 창은 모달형태로 대체될 예정입니다.`);
      console.log(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요:
    ${error.message}`);
    }
  };

  const className = {
    container:
      'w-[560px] h-[600px] flex flex-col items-center justify-start px-11 border-[3px] border-garden1 box-border rounded bg-gardenBG shadow-[0_0_30px_rgba(30, 30, 30, 0.185)]',
    form: 'flex-col w-full px-3',
    title: 'justify-self-start text-center my-16 pb-2 text-garden1 font-pacifico text-4xl  ',
  };

  return (
    <div className={className.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={className.form}>
        <p className={className.title}>Do it together!</p>
        <InputContainer inputProp="username" label="이름">
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => {
              const test = errors.username ? 'error' : '';
              return <FormInput id="username" placeholder="3자이상 20자이하로 등록해주세요." error={test} {...field} />;
            }}
          />
          <IputError>{errors.username && errors.username.message}</IputError>
        </InputContainer>

        <InputContainer inputProp="username" label="이메일">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => {
              return <FormInput id="email" placeholder="이메일 입력해주세요." {...field} />;
            }}
          />
          <IputError>{errors.email && errors.email.message}</IputError>
        </InputContainer>

        <InputContainer inputProp="username" label="비밀번호">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => {
              return (
                <FormInput
                  type="password"
                  id="password"
                  placeholder="특수문자와 숫자를 최소 1개씩 포함해주세요."
                  {...field}
                />
              );
            }}
          />
          <IputError>{errors.password && errors.password.message}</IputError>
        </InputContainer>

        <InputContainer inputProp="username" label="비밀번호 확인">
          <Controller
            name="confimrPassword"
            control={control}
            defaultValue=""
            render={({ field }) => {
              return (
                <FormInput
                  type="password"
                  id="confimrPassword"
                  placeholder="동일한 비밀번호를 입력해주세요."
                  {...field}
                />
              );
            }}
          />
          <IputError>{errors.confimrPassword && errors.confimrPassword.message}</IputError>
        </InputContainer>
        <InputButton value="가입하기" />
      </form>
    </div>
  );
};
