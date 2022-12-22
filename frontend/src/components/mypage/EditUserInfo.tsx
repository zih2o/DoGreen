import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { editValidation } from '../auth/yup';
import axios from 'axios';

import { InputContainer } from '../InputContainer';
import { ImgContainer } from '../ImgContainer';
import { FormInput, IputError, InputButton } from '../FormsAboutInput';
import { MyPageContentsLayout } from '../layout/MyPageLayout';
import { AuthStore, InitialData } from '../store/UserStore';

interface IEditInputProps {
  username: string;
  email: string;
  currentPassword: string;
  password: string;
  confimrPassword: string;
  imgUrl: FileList;
  bio: string;
}

const serverURL = 'http://localhost:3000';

const getUser = async (accessToken: string | null) => {
  const response = await axios.get(`${serverURL}/user/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export const FormEditUserInfo = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(InitialData);
  const accessToken = AuthStore((state) => state.token);

  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    }
    const userInfo = getUser(accessToken);
    userInfo.then((res) => {
      setUserData(res);
    });
  }, []);
  console.log(userData);

  const { schema } = editValidation();
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<IEditInputProps>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  //userData.imgUrl
  const [imgPreview, setImgPreview] = useState(userData.imgUrl);
  const image = watch('imgUrl');
  console.log(image);
  useEffect(() => {
    if (image && image.length > 0) {
      console.log(image);
      const file = image?.[0];
      setImgPreview(URL.createObjectURL(file));
      console.log(imgPreview);
    }
  }, [image]);

  const onSubmit = async (data: IEditInputProps) => {
    console.log(data);
    alert(JSON.stringify(data));
    try {
      alert('수정하시겠습니까?');
      const res = await axios.patch(`${serverURL}/auth/login`, data);
      console.log(res);
      alert('수정되었습니다.');
    } catch (error) {
      console.log(error);
    }
  };
  const className = {
    container: 'flex-col justify-center w-full mb-[60px] w-[700px] py-5 pl-10 flex-1',
    title: 'text-center p-10 text-3xl font-bold',
    form: 'flex-col w-full px-3',
  };

  return (
    <MyPageContentsLayout>
      <div className={className.container}>
        <p className={className.title}>내 정보 수정</p>
        <form onSubmit={handleSubmit(onSubmit)} className={className.form}>
          <ImgContainer src={imgPreview} label="프로필 사진 변경" inputProp="imgUrl" type="file" id="imgUrl">
            <IputError>{errors.confimrPassword && errors.confimrPassword.message}</IputError>
          </ImgContainer>
          <InputContainer inputProp="email" label="이메일">
            <p>{userData.email}</p>
          </InputContainer>
          <InputContainer inputProp="username" label="이름">
            <Controller
              name="username"
              control={control}
              render={({ field }) => {
                const test = errors.username ? 'error' : '';
                return <FormInput id="username" placeholder={userData.username} error={test} {...field} />;
              }}
            />
            <IputError>{errors.username && errors.username.message}</IputError>
          </InputContainer>

          <InputContainer inputProp="currentPassword" label="현재 비밀번호">
            <Controller
              name="currentPassword"
              control={control}
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
              render={({ field }) => {
                return <FormInput type="password" id="confimrPassword" placeholder="비밀번호 확인" {...field} />;
              }}
            />
            <IputError>{errors.confimrPassword && errors.confimrPassword.message}</IputError>
          </InputContainer>

          <InputContainer inputProp="bio" label="자기소개">
            <Controller
              name="bio"
              control={control}
              defaultValue={userData.bio}
              render={({ field }) => {
                return <FormInput type="textarea" id="bio" placeholder="자기소개 한 줄 입력해 보세요." {...field} />;
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
