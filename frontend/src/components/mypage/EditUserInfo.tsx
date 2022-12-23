import React, { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { editValidation } from '../auth/yup';

import { InputContainer } from '../InputContainer';
import { ImgContainer } from '../ImgContainer';
import { FormInput, IputError, InputButton, ClickButton } from '../FormsAboutInput';
import { MyPageContentsLayout } from '../layout/MyPageLayout';
import useUserData, { IUserData } from '../../hooks/useUserData';
import uesEditUserData from '../../hooks/uesEditUserData';
import useDeleteUserData from '../../hooks/useDeleteUserData';

interface IEditInputData extends Omit<IUserData, 'imgUrl'> {
  oldPassword: string;
  password: string;
  confimrPassword: string;
  imgUrl: FileList;
}

export const FormEditUserInfo = () => {
  //유저데이터부르기
  const {
    userQuery: { data: userData },
  } = useUserData();
  console.log(useUserData());
  //react-hook-form yup
  const { schema } = editValidation();
  const {
    handleSubmit,
    control,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IEditInputData>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  //초기값
  useEffect(() => {
    if (userData) {
      setValue('email', userData.email);
      setValue('bio', userData.bio);
      setValue('username', userData.username);
      setImgPreview(userData.imgUrl);
    }
  }, [userData]);

  //이미지 변경
  const [imgPreview, setImgPreview] = useState('');
  const image = watch('imgUrl');
  useEffect(() => {
    if (image && image.length > 0) {
      const file = image?.[0];
      setImgPreview(URL.createObjectURL(file));
    }
  }, [image]);

  //수정하기
  const { mutation: editMutation } = uesEditUserData();
  const onSubmit = async (data: IEditInputData) => {
    try {
      const { username, oldPassword, password, bio } = data;
      alert('수정하시겠습니까?');
      const editData = { username, oldPassword, password, bio };
      console.log(editData);
      editMutation.mutate(editData);
      //data 값중에 oldPassword 필수 추가필요
      //비밀번호는 password 하나만
      //비밀번호 확인 내용은 넣으면 안됨

      alert('수정되었습니다.');
    } catch (error) {
      console.log(error);
      alert('애러입니다');
    }
  };

  //탈퇴하기
  const { mutation: deleteMutation } = useDeleteUserData();
  const onClickWithdraw = async () => {
    try {
      console.log('회원탈퇴');
      alert('정말로 회원탈퇴하시겠습니까?');
      // const res = await axios.patch(`${serverURL}/user/me/withdraw`);
      deleteMutation.mutate();
      alert('탈퇴되었습니다');
    } catch (error) {
      console.log(error);
    }
  };

  //실시간 밸리데이션
  // const currUsername = watch('username');
  // const [currentName, setCurrentName] = useState('');

  // useEffect(() => {
  //   async () => {
  //     const res = await axios.get(`${serverURL}/auth/exists`, { params: { username: currUsername } });
  //     console.log(res);
  //   };
  // }, [currUsername]);

  return (
    <MyPageContentsLayout>
      <div className={className.container}>
        <p className={className.title}>내 정보 수정</p>
        <form onSubmit={handleSubmit(onSubmit)} className={className.form}>
          <ImgContainer src={imgPreview} label="프로필 사진 변경" inputProp="imgUrl">
            <input type="file" id="imgUrl" className="hidden" {...register('imgUrl')} />
            <IputError>{errors.confimrPassword && errors.confimrPassword.message}</IputError>
          </ImgContainer>

          <InputContainer inputProp="email" label="이메일">
            <Controller
              name="email"
              control={control}
              render={({ field }) => {
                return <FormInput id="email" disabled {...field} />;
              }}
            />
          </InputContainer>

          <InputContainer inputProp="username" label="이름">
            <Controller
              name="username"
              control={control}
              render={({ field }) => {
                return <FormInput id="username" placeholder="3자이상 20자이하로 등록해주세요." {...field} />;
              }}
            />
            <IputError>{errors.username && errors.username.message}</IputError>
          </InputContainer>

          <InputContainer inputProp="oldPassword" label="현재 비밀번호">
            <Controller
              name="oldPassword"
              control={control}
              render={({ field }) => {
                return (
                  <FormInput type="password" id="oldPassword" placeholder="현재 비밀번호를 입력해주세요" {...field} />
                );
              }}
            />
            <IputError>{errors.oldPassword && errors.oldPassword.message}</IputError>
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
              render={({ field }) => {
                return <FormInput type="textarea" id="bio" placeholder="자기소개 한 줄 입력해 보세요." {...field} />;
              }}
            />
            <IputError>{errors.confimrPassword && errors.confimrPassword.message}</IputError>
          </InputContainer>

          <InputButton value="수정하기" />
        </form>
        <ClickButton value="탈퇴하기" onClick={onClickWithdraw} />
      </div>
    </MyPageContentsLayout>
  );
};

const className = {
  container: 'flex flex-col justify-center items-center w-full mb-[60px] w-[700px] py-5 pl-10 flex-1',
  title: 'text-center p-10 text-3xl font-bold',
  form: 'flex-col w-full px-3',
};
