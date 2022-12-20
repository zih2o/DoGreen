import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import useSimpleValidation from './yup';
import { InputContainer } from './InputContainer';
import { FormInput, IputError, InputButton } from './FormsAboutInput';

interface IEditInputProps {
  username: string;
  email: string;
  currentPassword: string;
  password: string;
  confimrPassword: string;
  profileImg: string;
  bio: string;
}
export const FormEditUserInfo = () => {
  const { schema } = useSimpleValidation();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IEditInputProps>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IEditInputProps) => {
    console.log(data);
    alert(JSON.stringify(data));
  };
  const className = {
    container: 'flex-col w-full py-5 pl-10 flex-1',
    title: 'text-center p-10 text-3xl font-bold',
    form: 'flex-col w-full px-3',
  };

  return (
    <div className={className.container}>
      <p className={className.title}>내 정보 수정</p>
      <form onSubmit={handleSubmit(onSubmit)} className={className.form}>
        <InputContainer inputProp="username" label="아이디">
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
              return <p>로그인한 유저 이메일 (수정불가) </p>;
            }}
          />
          <IputError>{errors.email && errors.email.message}</IputError>
        </InputContainer>

        <InputContainer inputProp="currentPassword" label="현재 비밀번호">
          <Controller
            name="currentPassword"
            control={control}
            defaultValue=""
            render={({ field }) => {
              return (
                <FormInput type="password" id="currentPassword" placeholder="현재 비밀번호를 입력해주세요" {...field} />
              );
            }}
          />
          <IputError>{errors.currentPassword && errors.currentPassword.message}</IputError>
        </InputContainer>

        <InputContainer inputProp="username" label="비밀번호 변경">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => {
              return (
                <FormInput type="password" id="password" placeholder="변경하실 비밀번호를 입력해주세요" {...field} />
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
                  placeholder="변경하실 비밀번호을 한 번 더 입력해주세요"
                  {...field}
                />
              );
            }}
          />
          <IputError>{errors.confimrPassword && errors.confimrPassword.message}</IputError>
        </InputContainer>
        <InputContainer inputProp="profileImg" label="프로필 사진 변경">
          <Controller
            name="profileImg"
            control={control}
            defaultValue=""
            render={({ field }) => {
              return <p>이미지 추가 버튼, 미리보기 추가</p>;
            }}
          />
          <IputError>{errors.confimrPassword && errors.confimrPassword.message}</IputError>
        </InputContainer>

        <InputContainer inputProp="bio" label="자기소개">
          <Controller
            name="bio"
            control={control}
            defaultValue=""
            render={({ field }) => {
              return <FormInput type="text" id="bio" placeholder="자기소개 한 줄 입력해 보세요." {...field} />;
            }}
          />
          <IputError>{errors.confimrPassword && errors.confimrPassword.message}</IputError>
        </InputContainer>

        <InputButton value="수정하기" />
      </form>
    </div>
  );
};
