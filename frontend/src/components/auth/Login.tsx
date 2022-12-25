import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { loginValidation } from './yup';

import { InputContainer } from '../InputContainer';
import { FormInput, IputError, InputButton } from '../FormsAboutInput';
import { useLogin, IAuthInput } from '../../hooks/authApi';

export const Login = () => {
  const { schema } = loginValidation();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IAuthInput>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });
  const loginMutation = useLogin();
  console.log(loginMutation);
  const onSubmit = async (data: IAuthInput) => {
    loginMutation.mutate(data);
  };

  return (
    <div className={className.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={className.form}>
        <p className={className.title}>Do it together!</p>
        <InputContainer inputProp="email" label="이메일">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => {
              const errorDisplay = errors.email ? 'error' : '';
              return <FormInput id="email" placeholder="당신의 이메일" error={errorDisplay} {...field} />;
            }}
          />
          <IputError>{errors.email && errors.email.message}</IputError>
        </InputContainer>

        <InputContainer inputProp="password" label="비밀번호">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => {
              const errorDisplay = errors.password ? 'error' : '';
              return (
                <FormInput
                  type="password"
                  id="password"
                  placeholder="당신의 비밀번호"
                  error={errorDisplay}
                  {...field}
                />
              );
            }}
          />
          <IputError>{errors.password && errors.password.message}</IputError>
        </InputContainer>
        <InputButton value="로그인" />
      </form>
      <div className={className.accountContainer}>
        <p className={className.accountText}>Do It Together.. </p>
        <a className={className.accountLink} href="/register" id="resgister">
          Create account
        </a>
      </div>
    </div>
  );
};

const className = {
  container:
    'flex flex-col items-center justify-start w-[460px] h-[400px] px-8 border-[3px] border-garden1 box-border rounded bg-gardenBG shadow-[0_0_30px_rgba(30, 30, 30, 0.185)]',
  title: 'justify-self-start text-center my-10 pb-3 text-garden1 font-pacifico text-4xl',
  form: 'flex-col w-full px-3',
  accountContainer: 'flex p-1 mr-3 self-end text-xl ',
  accountText: 'text-garden4 text-base',
  accountLink: 'text-garden1 pl-3 accountContainer font-semibold',
};
