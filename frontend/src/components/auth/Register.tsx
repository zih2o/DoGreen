import React, { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { userValidation } from './yup';

import { InputContainer } from '../InputContainer';
import { FormInput, IputError, InputButton } from '../FormsAboutInput';
import useResiter from '../../hooks/useResiter';
import { useValUserName, useValEmail } from '../../hooks/useValUserData';

interface IRegisterInputProps {
  username: string;
  email: string;
  password: string;
  confimrPassword: string;
}

export const Register = () => {
  const { schema } = userValidation();
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<IRegisterInputProps>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  // console.log('### errors', errors);

  //데이터 전달
  const { mutation: registerMutation } = useResiter();
  const navigate = useNavigate();
  const onSubmit = async (data: IRegisterInputProps) => {
    try {
      const { username, email, password } = data;
      console.log(data);
      console.log({ username, email, password });
      registerMutation.mutate({ username, email, password });
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

  //유저네임 실시간 밸리데이션
  const currUsername = watch('username');
  const [usernameError, setUsernameError] = useState(false);
  const { valQuery: usernameValQuery } = useValUserName(currUsername?.length > 1 ? currUsername : '##');
  const usernameVal = usernameValQuery?.data?.username;
  const isUserNameLoading = usernameValQuery?.isLoading;

  useEffect(() => {
    if (usernameVal) {
      setUsernameError(true);
      console.log('중복임 사용불가');
    } else {
      setUsernameError(false);
      console.log('사용가능 ');
    }
    console.log(currUsername, usernameVal);
    console.log(usernameValQuery);
  }, [currUsername, isUserNameLoading]);

  //유저이메일 실시간 밸리데이션
  const currEmail = watch('email');
  const [emailError, setEmailError] = useState(false);
  const { valQuery: emailValQuery } = useValEmail(currEmail?.length > 2 ? currEmail : '##');
  const eamilVal = emailValQuery?.data?.email;
  const isEmailLoading = emailValQuery?.isLoading;

  useEffect(() => {
    console.log(currEmail, eamilVal);
    if (eamilVal) {
      setEmailError(true);
      console.log('중복임 사용불가');
    } else {
      setEmailError(false);
      console.log('사용가능 ');
    }
  }, [emailError, isEmailLoading]);

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
              const errorDisplay = usernameError || errors.username ? 'error' : '';
              return (
                <FormInput
                  id="username"
                  placeholder="3자이상 20자이하로 등록해주세요."
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

        <InputContainer inputProp="email" label="이메일">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => {
              const errorDisplay = emailError || errors.email ? 'error' : '';
              return <FormInput id="email" placeholder="이메일 입력해주세요." error={errorDisplay} {...field} />;
            }}
          />
          <IputError>
            {emailError ? <span>동일한 이메일이 존재합니다.</span> : errors.email && errors.email.message}
          </IputError>
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
                  placeholder="특수문자와 숫자를 최소 1개씩 포함해주세요."
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
            defaultValue=""
            render={({ field }) => {
              const errorDisplay = errors.confimrPassword ? 'error' : '';
              return (
                <FormInput
                  type="password"
                  id="confimrPassword"
                  placeholder="동일한 비밀번호를 입력해주세요."
                  error={errorDisplay}
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

const className = {
  container:
    'w-[560px] h-[600px] flex flex-col items-center justify-start px-11 border-[3px] border-garden1 box-border rounded bg-gardenBG shadow-[0_0_30px_rgba(30, 30, 30, 0.185)]',
  form: 'flex-col w-full px-3',
  title: 'justify-self-start text-center my-16 pb-2 text-garden1 font-pacifico text-4xl  ',
};
