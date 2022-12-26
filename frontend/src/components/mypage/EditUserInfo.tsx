import React, { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { editValidation } from '../auth/yup';
import { AiOutlineClose } from 'react-icons/ai';

import { InputContainer } from '../InputContainer';
import { ImgContainer } from '../ImgContainer';
import { FormInput, IputError, InputButton, ClickButton } from '../FormsAboutInput';
import { MyPageContentsLayout } from '../layout/MyPageLayout';
import useUserData, { IUserData } from '../../hooks/useUserData';
import uesEditUserData from '../../hooks/editUserInfoApi';
import { Userwithdraw } from './Userwithdraw';
import { useValUserName } from '../../hooks/useValUserData';
import Modal from '../common/Modal';

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
    const { username, oldPassword, password, bio } = data;
    const editData = { username, oldPassword, password, bio };
    editMutation.mutate(editData);
  };
  //유저네임 실시간 밸리데이션
  //문제점 :  로딩이 false 가 되면 정상적으로 표시해주지않음. 😰
  const currUsername = watch('username');
  const [usernameError, setUsernameError] = useState(false);
  const {
    valQuery: { data: valUsername },
  } = useValUserName(currUsername?.length > 2 ? currUsername : '##');
  const usernameVal = valUsername?.username;

  useEffect(() => {
    console.log(currUsername, usernameVal);
    if (usernameVal && userData?.username !== currUsername) {
      setUsernameError(true);
      console.log('중복임 사용불가');
    } else {
      setUsernameError(false);
      console.log('사용가능 ');
    }
  }, [currUsername]);

  //회원탈퇴 모달
  const [handleModal, setHandleModal] = useState<boolean>(false);
  const onClose = () => {
    setHandleModal(!handleModal);
  };

  return (
    <MyPageContentsLayout>
      <div className={className.container}>
        <p className={className.title}>내 정보 수정</p>
        <form onSubmit={handleSubmit(onSubmit)} className={className.form}>
          <ImgContainer src={imgPreview} label="프로필 사진 변경" inputProp="imgUrl">
            <input type="file" id="imgUrl" className="hidden" {...register('imgUrl')} />
            <IputError>{errors.imgUrl && errors.imgUrl.message}</IputError>
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
                const errorDisplay = usernameError || errors.username ? 'error' : '';
                return (
                  <FormInput
                    id="username"
                    placeholder="2자이상 20자이하로 등록해주세요."
                    error={errorDisplay}
                    {...field}
                  />
                );
              }}
            />
            <IputError>
              {usernameError ? <span>동일한 이름이 존재합니다.</span> : errors.username && errors.username.message}
            </IputError>
          </InputContainer>

          <InputContainer inputProp="oldPassword" label="현재 비밀번호">
            <Controller
              name="oldPassword"
              control={control}
              render={({ field }) => {
                const errorDisplay = errors.oldPassword ? 'error' : '';

                return (
                  <FormInput
                    type="password"
                    id="oldPassword"
                    placeholder="현재 비밀번호를 입력해주세요"
                    error={errorDisplay}
                    {...field}
                  />
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
                const errorDisplay = errors.password ? 'error' : '';

                return (
                  <FormInput
                    type="password"
                    id="password"
                    placeholder="변경하실 비밀번호를 입력해주세요"
                    error={errorDisplay}
                    {...field}
                  />
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
                const errorDisplay = errors.confimrPassword ? 'error' : '';

                return (
                  <FormInput
                    type="password"
                    id="confimrPassword"
                    placeholder="비밀번호 확인"
                    error={errorDisplay}
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
              render={({ field }) => {
                const errorDisplay = errors.bio ? 'error' : '';
                return (
                  <FormInput
                    type="textarea"
                    id="bio"
                    placeholder="자기소개 한 줄 입력해 보세요."
                    error={errorDisplay}
                    {...field}
                  />
                );
              }}
            />
            <IputError>{errors.confimrPassword && errors.confimrPassword.message}</IputError>
          </InputContainer>

          <InputButton value="수정하기" />
        </form>
        <ClickButton onClick={onClose}>탈퇴하기</ClickButton>
        {handleModal && (
          <div>
            {handleModal && (
              <Modal onClose={onClose}>
                <button type="button" className={className.closeButton} onClick={onClose}>
                  <AiOutlineClose size="24" color="#5C5656" />
                </button>
                <Userwithdraw />
              </Modal>
            )}
          </div>
        )}
      </div>
    </MyPageContentsLayout>
  );
};

const className = {
  container: 'container flex flex-col justify-center items-center mx-auto mt-5 mb-[100px] py-5 px-12 lg:px-36 flex-1',
  title: 'text-center p-10 text-3xl font-bold',
  form: 'flex-col w-full px-3',
  closeButton: 'self-center absolute top-0 right-0 float-right p-5',
};
