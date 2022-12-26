import React, { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { editValidation } from '../auth/yup';
import { AiOutlineClose } from 'react-icons/ai';

import { InputContainer } from '../common/InputContainer';
import { ImgContainer } from '../common/ImgContainer';
import { FormInput, IputError, InputButton, ClickButton } from '../common/FormsAboutInput';
import { MyPageContentsLayout } from '../layout/MyPageLayout';
import useUserData from '../../hooks/useUserData';
import Userwithdraw from './Userwithdraw';
import { useValUserName } from '../../hooks/useValUserData';
import createUrl from '../../hooks/imgUrlApi';
import Modal from '../common/Modal';
import EditSkeleton from '../loadings/EditSkeleton';
interface IEditIData {
  email: string;
  username: string;
  oldPassword: string;
  password: string;
  confimrPassword: string;
  imgUrl: FileList;
  bio: string;
}

const EditUserInfo = () => {
  //유저데이터부르기
  const {
    userQuery: { data: userData, isLoading: isUserDataLoading },
    userMutation: editMutation,
  } = useUserData();

  //react-hook-form yup
  const { schema } = editValidation();
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditIData>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  //초기값
  useEffect(() => {
    if (userData) {
      reset({
        username: userData.username,
        email: userData.email,
        bio: userData.bio,
      });
      setImgPreview(userData.imgUrl);
    }
  }, [userData]);

  const [image, currUsername] = useWatch({ control, name: ['imgUrl', 'username'] });
  //imgUrl
  const imgUrlMutation = createUrl();
  //이미지 변경
  const [imgPreview, setImgPreview] = useState('');
  useEffect(() => {
    if (image && image.length > 0) {
      const file = image?.[0];
      console.log('file : ', file);
      setImgPreview(URL.createObjectURL(file));
      imgUrlMutation.mutate(file);
    }
  }, [image]);

  //유저네임 실시간 밸리데이션
  const [usernameError, setUsernameError] = useState(false);
  const { data: valUsername, isLoading } = useValUserName(currUsername?.length > 2 ? currUsername : '##');
  const usernameVal = valUsername?.username;

  useEffect(() => {
    if (usernameVal && userData?.username !== currUsername) {
      setUsernameError(true);
      console.log('중복임 사용불가');
    } else {
      setUsernameError(false);
      console.log('사용가능 ');
    }
  }, [currUsername, isLoading]);

  //회원탈퇴 모달
  const [handleModal, setHandleModal] = useState<boolean>(false);
  const onClose = () => {
    setHandleModal(!handleModal);
  };

  //수정하기
  const onSubmit = async (data: IEditIData) => {
    const { username, oldPassword, password, bio } = data;
    const imgUrl = imgUrlMutation.data;
    const editData = { username, oldPassword, password, bio, imgUrl };
    editMutation.mutate(editData);
    console.log(data);
  };
  return !isUserDataLoading ? (
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
              defaultValue=""
              render={({ field: { name, value } }) => {
                return <FormInput id="email" disabled name={name} value={value || ''} />;
              }}
            />
          </InputContainer>

          <InputContainer inputProp="username" label="이름">
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ field: { name, onChange, value } }) => {
                const errorDisplay = usernameError || errors.username ? 'error' : '';
                return (
                  <FormInput
                    id="username"
                    placeholder="2자이상 20자이하로 등록해주세요."
                    error={errorDisplay}
                    name={name}
                    onChange={onChange}
                    value={value || ''}
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
              defaultValue=""
              render={({ field: { name, onChange, value } }) => {
                const errorDisplay = errors.oldPassword ? 'error' : '';

                return (
                  <FormInput
                    type="password"
                    id="oldPassword"
                    placeholder="현재 비밀번호를 입력해주세요"
                    error={errorDisplay}
                    name={name}
                    onChange={onChange}
                    value={value || ''}
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
              render={({ field: { name, onChange, value } }) => {
                const errorDisplay = errors.password ? 'error' : '';

                return (
                  <FormInput
                    type="password"
                    id="password"
                    placeholder="변경하실 비밀번호를 입력해주세요"
                    error={errorDisplay}
                    name={name}
                    onChange={onChange}
                    value={value || ''}
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
              render={({ field: { name, onChange, value } }) => {
                const errorDisplay = errors.confimrPassword ? 'error' : '';

                return (
                  <FormInput
                    type="password"
                    id="confimrPassword"
                    placeholder="비밀번호 확인"
                    error={errorDisplay}
                    name={name}
                    onChange={onChange}
                    value={value || ''}
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
              render={({ field: { name, onChange, value } }) => {
                const errorDisplay = errors.bio ? 'error' : '';
                return (
                  <FormInput
                    type="textarea"
                    id="bio"
                    placeholder="자기소개 한 줄 입력해 보세요."
                    error={errorDisplay}
                    name={name}
                    onChange={onChange}
                    value={value || ''}
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
  ) : (
    <MyPageContentsLayout>
      <EditSkeleton />
    </MyPageContentsLayout>
  );
};

const className = {
  container:
    'container flex flex-col justify-center items-center flex-1 sm:w-[600px] md:w-[700px] xl:w-[800px] mx-auto mt-5 mb-[100px] py-5 px-14 lg:px-15 border-2 border-solid border-garden1 rounded-xl',
  title: 'text-center p-10 mb-5 text-4xl font-bold text-garden1',
  form: 'flex-col w-full px-3',
  closeButton: 'self-center absolute top-0 right-0 float-right p-5',
};

export default EditUserInfo;
