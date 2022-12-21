import React, { useState, useEffect, useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { editValidation } from '../yup';
import { InputContainer } from '../InputContainer';
import { FormInput, IputError, InputButton } from '../FormsAboutInput';
import { MyPageContentsLayout } from '../layout/MyPageLayout';

interface IEditInputProps {
  username: string;
  email: string;
  currentPassword: string;
  password: string;
  confimrPassword: string;
  profileImg: FileList;
  bio: string;
}
export const FormEditUserInfo = () => {
  const { schema } = editValidation();
  const {
    handleSubmit,
    control,
    watch,
    register,
    formState: { errors },
  } = useForm<IEditInputProps>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const [imgPreview, setImgPreview] = useState('/src/assets/penguin.jpeg');
  const image = watch('profileImg');
  useEffect(() => {
    if (image && image.length > 0) {
      console.log(image);
      const file = image?.[0];
      setImgPreview(URL.createObjectURL(file));
      console.log(imgPreview);
    }
  }, [image]);

  const onSubmit = (data: IEditInputProps) => {
    console.log(data);
    alert(JSON.stringify(data));
  };
  const className = {
    container: 'flex-col w-full mb-[60px] py-5 pl-10 flex-1',
    title: 'text-center p-10 text-3xl font-bold',
    form: 'flex-col w-full px-3',
  };

  return (
    <MyPageContentsLayout>
      <div className={className.container}>
        <p className={className.title}>내 정보 수정</p>
        <form onSubmit={handleSubmit(onSubmit)} className={className.form}>
          <InputContainer inputProp="profileImg" label="">
            <input
              id="profileImg"
              type="file"
              className="hidden"
              accept="image/gif, image/jpeg, image/png, image/jpg"
              {...register('profileImg')}
            />
            <img className={'rounded-full w-[150px] h-[150px] shadow-xl'} src={imgPreview} alt="펭귄" />
            <label
              htmlFor="profileImg"
              className="w-[120px] border-[3px] border-garden1 box-border rounded bg-gardenBG text-center"
            >
              프로필 사진 변경
            </label>
            <IputError>{errors.confimrPassword && errors.confimrPassword.message}</IputError>
          </InputContainer>

          <InputContainer inputProp="username" label="이름">
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ field }) => {
                const test = errors.username ? 'error' : '';
                return (
                  <FormInput id="username" placeholder="3자이상 20자이하로 등록해주세요." error={test} {...field} />
                );
              }}
            />
            <IputError>{errors.username && errors.username.message}</IputError>
          </InputContainer>

          <InputContainer inputProp="email" label="이메일">
            <p>디비에서 불러오는 이메일</p>
          </InputContainer>
          <InputContainer inputProp="currentPassword" label="현재 비밀번호">
            <Controller
              name="currentPassword"
              control={control}
              defaultValue=""
              render={({ field }) => {
                return (
                  <FormInput
                    type="password"
                    id="currentPassword"
                    placeholder="현재 비밀번호를 입력해주세요"
                    {...field}
                  />
                );
              }}
            />
            <IputError>{errors.currentPassword && errors.currentPassword.message}</IputError>
          </InputContainer>

          <InputContainer inputProp="password" label="비밀번호 변경">
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
          <InputContainer inputProp="confimrPassword" label="비밀번호 확인">
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
    </MyPageContentsLayout>
  );
};
