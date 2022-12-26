import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { withDrawValidation } from '../auth/yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { InputContainer } from '../common/InputContainer';
import { FormInput, IputError, ClickButton } from '../common/FormsAboutInput';
import useUserData from '../../hooks/useUserData';

const Userwithdraw = () => {
  interface IAuthInput {
    currentPassword: string;
  }
  const { withdrawMutaiton: widthdraw } = useUserData();
  const { schema } = withDrawValidation();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IAuthInput>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (currentPassword: IAuthInput) => {
    console.log(currentPassword);
    widthdraw.mutate(currentPassword);
  };

  return (
    <div className={className.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={className.form}>
        <p className={className.title}>정말로 떠나시나요?</p>
        <InputContainer inputProp="currentPassword" label="비밀번호">
          <Controller
            name="currentPassword"
            control={control}
            defaultValue=""
            render={({ field: { name, onChange, value } }) => {
              const errorDisplay = errors.currentPassword ? 'error' : '';
              return (
                <FormInput
                  type="password"
                  id="currentPassword"
                  placeholder="비밀번호를 입력해주세요."
                  error={errorDisplay}
                  name={name}
                  onChange={onChange}
                  value={value}
                />
              );
            }}
          />
          <IputError>{errors.currentPassword && errors.currentPassword.message}</IputError>
        </InputContainer>

        <ClickButton>탈퇴하기</ClickButton>
        <p className={className.notice}>
          탈퇴할 경우,
          <br /> 3개월 동안 동일한 계정으로 가입하실 수 없습니다.
        </p>
      </form>
    </div>
  );
};
const className = {
  container:
    'flex flex-col items-center justify-start w-[460px] h-[380px] px-8 border-[3px] border-garden1 box-border rounded-xl bg-gardenBG shadow-[0_0_30px_rgba(30, 30, 30, 0.185)]',
  title: 'justify-self-start text-center my-10 pb-3 font-bold text-garden1 font-pacifico text-4xl',
  form: 'flex-col w-full px-3',
  accountContainer: 'flex p-1 mr-3 self-end text-xl ',
  accountText: 'text-garden4 text-base',
  accountLink: 'text-garden1 pl-3 accountContainer font-semibold',
  input:
    'w-full mb-10 px-3 py-2  bg-white rounded-md border border-gray-300 text-gray-900  placeholder:text-[13px] placeholder-gray-400 focus:z-10 focus:border-forest1 focus:outline-none focus:ring-forest3',
  notice: 'my-3 text-red-500',
};

export default Userwithdraw;
